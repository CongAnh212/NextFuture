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
                    <button type="button" class="btn btn-primary float-end" @click="login()">Sign in</button>
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

        }
    },
    mounted() {
    },
    methods: {
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
                            }).then(() => {

                                this.$router.push({ name: 'sign-in' });
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
            axios
                .post('sign-in', this.sign_in)
                .then((res) => {
                    if (res.data.status) {
                        var token = res.data.token;
                        // Lưu token vào localStorage
                        localStorage.setItem('token', token);
                        this.$router.push({ name: "homepage" });
                        // window.location.href = "/newfeeds";
                    } else {
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