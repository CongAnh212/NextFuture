<template >
    <div class="col-md-6 bg-white pt-4">
        <div class="sign-in-from">
            <h1 class="mb-0">Sign Up</h1>
            <p>Enter your email address and password to access admin panel.</p>
            <div class="mt-2">
                <div class="form-group">
                    <input v-model="sign_up.fullname" type="email" class="form-control mb-0" placeholder="Full name">
                </div>
                <div class="form-group">
                    <input v-model="sign_up.email" type="email" class="form-control mb-0" placeholder="Email address">
                </div>

                <div class="form-group">
                    <div class="row">
                        <div class="col">
                            <input v-model="sign_up.username" type="text" class="form-control mb-0" placeholder="Username">
                        </div>
                        <div class="col">
                            <input v-model="sign_up.phone_number" type="text" class="form-control mb-0"
                                placeholder="Phone number">
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <input v-model="sign_up.password" type="password" class="form-control mb-0" placeholder="Password">
                </div>
                <div class="form-group">
                    <label>Date of birth</label>
                    <input v-model="sign_up.date_of_birth" type="date" class="form-control mb-0" placeholder="Password">
                </div>
                <div class="form-group">
                    <label>Gender</label>
                    <div class="w-100 d-flex">
                        <div class="form-control d-flex justify-content-between me-2" style="cursor: pointer"
                            @click="selectRadio('1')">
                            <label style="cursor: pointer">Male</label>
                            <input value="1" v-model="sign_up.gender" name="gender" type="radio"
                                :checked="selectedGender == 1" />
                        </div>

                        <div class="form-control d-flex justify-content-between me-2" style="cursor: pointer"
                            @click="selectRadio('0')">
                            <label style="cursor: pointer">Female</label>
                            <input value="0" v-model="sign_up.gender" name="gender" type="radio"
                                :checked="selectedGender == 0" />
                        </div>

                        <div class="form-control d-flex justify-content-between me-2" style="cursor: pointer"
                            @click="selectRadio('-1')">
                            <label style="cursor: pointer">Other</label>
                            <input value="-1" v-model="sign_up.gender" name="gender" type="radio"
                                :checked="selectedGender == -1" />
                        </div>
                    </div>
                </div>
                <div class="d-inline-block w-100 mt-2">
                    <button type="submit" class="btn btn-primary w-100" @click="signUp()">Sign Up</button>
                </div>
                <div class="sign-info text-center">
                    <span class="dark-color d-inline-block line-height-2">Already Have Account ?
                        <router-link :to="{ name: 'sign-in' }">
                            Sign In
                        </router-link>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Swal from 'sweetalert2'
import axios from 'axios';
import { createToaster } from '@meforma/vue-toaster'
const toastr = createToaster({
    position: 'bottom-left'
})
export default {
    data() {
        return {
            sign_up: {},
            selectedGender: null,
            hash_active: 0,
            count_time: 60,
            intervalId: null,
            email: '',
        }
    },
    mounted() {
        const storedData = sessionStorage.getItem("storedData");
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            this.count_time = parsedData.count_time;
            this.email = parsedData.email;
            this.startInterval();
        }
    },
    beforeDestroy() {
        this.stopInterval();
    },
    methods: {
        startInterval() {
            this.intervalId = setInterval(() => {
                this.count_time--;

                // Lưu trạng thái vào sessionStorage
                sessionStorage.setItem("storedData", JSON.stringify({ count_time: this.count_time, email: this.sign_up.email }));

                if (this.count_time === 0) {
                    axios.post('http://127.0.0.1:8000/api/delete-active', { email: this.email })
                        .then(() => {
                            this.stopInterval();
                        });
                }
            }, 1000);
        },
        stopInterval() {
            clearInterval(this.intervalId);
            // Xóa dữ liệu lưu trữ khi công việc hoàn thành
            sessionStorage.removeItem("storedData");
        },
        activeMail() {
            this.startInterval();
            const enterConfirmationCode = async () => {
                const result = await Swal.fire({
                    title: "Enter your confirmation code",
                    inputLabel: 'This code will expire after 1 minute',
                    input: "text",
                    inputPlaceholder: "Enter your code",
                    inputAttributes: {
                        maxlength: "6",
                        autocapitalize: "off",
                        autocorrect: "off",
                    },
                    showCancelButton: true,
                    confirmButtonText: "Activate",
                    cancelButtonText: "Cancel",
                    allowOutsideClick: false,
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
                    const response = await axios.post('http://127.0.0.1:8000/api/active-mail', { hash_active });
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

        signUp() {
            var payload = {
                ...this.sign_up,
                gender: this.selectedGender,
            };
            this.email = this.sign_up.email;
            axios.post('http://127.0.0.1:8000/api/sign-up', payload)
                .then((res) => {
                    if (res.data.status) {
                        Swal.fire({
                            title: 'Check mail',
                            text: 'Check your mail and enter the verification code to activate your account',
                            icon: 'info',
                            confirmButtonText: 'OK'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                this.activeMail()
                            }
                        })
                    } else {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "Account already exists",
                        });
                    }
                })
                .catch((err) => {
                    $.each(err.response.data.errors, function (k, v) {
                        toastr.error(v[0]);
                    });
                })
        },
        selectRadio(value) {
            this.selectedGender = value;
        },
    },
}
</script>
<style ></style>