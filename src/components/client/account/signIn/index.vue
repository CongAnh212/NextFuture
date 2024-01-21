<template>
    <div class="col-md-6 bg-white pt-5 pt-5 pb-lg-0 pb-5">
        <div class="sign-in-from">
            <h1 class="mb-0">Sign in</h1>
            <p>NextFuture helps you connect and share with the people in your life.</p>
            <form class="mt-4">
                <div class="form-group">
                    <label class="form-label" for="exampleInputEmail1">Email address</label>
                    <input v-model="sign_in.username" type="text" class="form-control mb-0" id="exampleInputEmail1"
                        placeholder="Enter email">
                </div>
                <div class="form-group">
                    <label class="form-label" for="exampleInputPassword1">Password</label>
                    <!-- <a href="#" class="float-end">Forgot password?</a> -->
                    <input v-model="sign_in.password" type="password" class="form-control mb-0" id="exampleInputPassword1"
                        placeholder="Password" @keyup.enter="login()">
                </div>
                <div class="d-inline-block w-100">
                    <div class="form-check d-inline-block mt-2 pt-1">
                        <input v-model="sign_in.remember" type="checkbox" class="form-check-input" id="customCheck11">
                        <label class="form-check-label" for="customCheck11">Remember Me</label>
                    </div>
                    <button v-if="!loading" type="submit" class="btn btn-primary w-100" @click="signIn()">Sign Up</button>
                    <button v-else class="btn btn-secondary w-100 " disabled>
                        <img src="../../../../assets/client/images/page-img/loading.gif" alt="loader" style="height: 20px;">
                        Sign Up
                    </button>
                </div>
                <div class="sign-info text-center">
                    <span class="dark-color d-inline-block line-height-2">Don't have an account?
                        <router-link :to="{ name: 'sign-up' }">
                            Sign up
                        </router-link>
                    </span>
                    <!-- <ul class="iq-social-media">
                        <li><a href="#"><i class="ri-facebook-box-line"></i></a></li>
                        <li><a href="#"><i class="ri-twitter-line"></i></a></li>
                        <li><a href="#"><i class="ri-instagram-line"></i></a></li>
                    </ul> -->
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import axios from '../../../../core/coreRequest';
import Swal from 'sweetalert2'
export default {
    data() {
        return {
            sign_in: {},
            hash_active: 0,
            count_time: 60,
            intervalId: null,
            email: '',
            check: false,
            loading: 0,
        }
    },
    mounted() {
        const storedData = sessionStorage.getItem("storedData");
        if (storedData !== null) {
            const parsedData = JSON.parse(storedData);
            this.count_time = parsedData.count_time;
            if (parsedData.count_time < 0) {
                this.count_time = 60;
            }
            this.email = this.sign_in.username;
            this.startInterval();
        } else {
            console.log('Fail');
        }
    },
    beforeDestroy() {
        this.stopInterval();
    },
    methods: {
        startInterval() {
            this.intervalId = setInterval(() => {
                this.count_time--;
                sessionStorage.setItem("storedData", JSON.stringify({ count_time: this.count_time, email: this.sign_in.username }));
                if (this.count_time == 0) {
                    axios.post('delete-active', { email: this.email })
                        .then(() => {
                            this.stopInterval();
                        });
                }
            }, 1000);
        },
        stopInterval() {
            clearInterval(this.intervalId);
            sessionStorage.removeItem("storedData");
            this.check = true
            $('.resent-mail').css({
                'cursor': 'pointer',
                'color': 'rgb(35, 108, 176)',
            });
        },
        resentHashActiveMail() {
            if (this.check) {
                $('.border-top-loading-resent').css({
                    'width': 100 + '%',
                    'transition': 'width 5s ease-out',
                });
                setTimeout(() => {
                    $('.border-top-loading-resent').css({
                        'width': 0,
                        'transition': 'none',
                    });
                }, 5000)
                this.check = true
                $('.resent-mail').css({
                    'cursor': 'not-allowed',
                    'color': 'grey',
                });
                axios
                    .post('resent-mail', { email: this.email })
                    .then(() => {
                        this.count_time = 60;
                        this.startInterval();
                    })
            }
            this.check = false
        },
        activeMail() {
            const enterConfirmationCode = async () => {
                const result = await Swal.fire({
                    title: "Enter your confirmation code",
                    inputLabel: `Please check your email and enter the code below. This code will expire in 1 minute`,
                    input: "text",
                    inputPlaceholder: "Enter your code",
                    inputAttributes: {
                        maxlength: "6",
                        autocapitalize: "off",
                        autocorrect: "off",
                    },
                    html: `
                        <div class='resent-mail'>Resent mail</div>
                        <div class="border-top-loading-resent"></div>
                    `,
                    showCancelButton: true,
                    confirmButtonText: "Activate",
                    cancelButtonText: "Cancel",
                    allowOutsideClick: false,
                    didOpen: () => {
                        this.count_time = 60
                        this.startInterval()
                        const resentMailLabel = document.querySelector('.swal2-popup .resent-mail');
                        if (resentMailLabel) {
                            resentMailLabel.addEventListener('click', this.resentHashActiveMail);
                        }
                    },
                    preConfirm: (hash_active) => {
                        if (!hash_active) {
                            Swal.showValidationMessage("Please enter the confirmation code");
                            const mess = document.querySelector('.swal2-validation-message');
                            if (mess) {
                                mess.style.margin = '0 -1.28rem';
                            }
                        }
                        return hash_active;
                    },
                });
                return result;
            };
            const activateAccount = async (hash_active) => {
                try {
                    const response = await axios.post('active-mail', { hash_active });
                    return response.data;
                } catch (error) {
                    return { status: 0, message: "Something went wrong while activating your account" };
                }
            };

            const processActivation = async () => {
                let isActivationSuccessful = false;

                while (!isActivationSuccessful) {
                    const result = await enterConfirmationCode();

                    if (result.isConfirmed) {
                        const response = await activateAccount(result.value);
                        if (response.status === 1) {
                            isActivationSuccessful = true;
                            Swal.fire({
                                icon: "success",
                                title: "Account activated",
                                text: response.message,
                                allowOutsideClick: false,
                            });
                        } else {
                            const alertResult = await Swal.fire({
                                icon: "error",
                                text: response.message,
                                showCancelButton: true,
                                confirmButtonText: "Retry",
                                cancelButtonText: "Cancel",
                                allowOutsideClick: false,
                            });

                            if (!alertResult.isConfirmed) {
                                break;
                            }
                        }
                    } else {
                        break;
                    }
                }
            };
            processActivation();
        },
        signIn() {
            this.loading = 1
            axios
                .post('sign-in', this.sign_in)
                .then((res) => {
                    this.loading = 0
                    if (res.data.status == 1) {
                        var token = res.data.token;
                        // Lưu token vào localStorage
                        localStorage.setItem('token', token);
                        this.$router.push({ name: "homepage" });
                        // window.location.href = "/newfeeds";
                    } else if (res.data.status == -1) {
                        this.email = res.data.email
                        Swal.fire({
                            icon: "info",
                            title: "Check mail",
                            text: res.data.message,
                            confirmButtonText: 'OK',
                            allowOutsideClick: false,
                        }).then((result) => {
                            if (result.isConfirmed) {
                                this.activeMail()
                            }
                        })
                    } else if (res.data.status = -2) {
                        Swal.fire({
                            icon: "error",
                            title: "Erorr...",
                            text: res.data.message,
                            showConfirmButton: false
                        })
                        setTimeout(() => {
                            Swal.close();
                        }, 2000)
                    } else {
                        Swal.fire({
                            icon: "error",
                            title: "Erorr...",
                            text: "Account information is incorrect",
                            showConfirmButton: false
                        });
                        setTimeout(() => {
                            Swal.close();
                        }, 2000);
                    }
                })
        },
        login() {
            if (!this.sign_in.password || !this.sign_in.username) {
                Swal.fire({
                    icon: "error",
                    title: "Erorr...",
                    text: "Please enter complete information",
                    showConfirmButton: false
                });
                setTimeout(() => {
                    Swal.close();
                }, 2000);
            } else {
                this.signIn()
            }
        }
    },
}
</script>
<style>
@import '../signUp/style.css'
</style>