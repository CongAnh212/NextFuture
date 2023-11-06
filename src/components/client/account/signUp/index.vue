<template >
    <div class="col-md-6 bg-white pt-5 pt-5 pb-lg-0 pb-5">
        <div class="sign-in-from">
            <h1 class="mb-0">Sign Up</h1>
            <p>Enter your email address and password to access admin panel.</p>
            <div class="mt-4">
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
                            @click="selectRadio('2')">
                            <label style="cursor: pointer">Female</label>
                            <input value="2" v-model="sign_up.gender" name="gender" type="radio"
                                :checked="selectedGender == 2" />
                        </div>

                        <div class="form-control d-flex justify-content-between me-2" style="cursor: pointer"
                            @click="selectRadio('3')">
                            <label style="cursor: pointer">Other</label>
                            <input value="3" v-model="sign_up.gender" name="gender" type="radio"
                                :checked="selectedGender == 3" />
                        </div>
                    </div>
                </div>
                <div class="d-inline-block w-100 mt-3">
                    <button type="submit" class="btn btn-primary w-100" @click="signUp()">Sign Up</button>
                </div>
                <div class="sign-info">
                    <span class="dark-color d-inline-block line-height-2">Already Have Account ?
                        <router-link to="/">
                            Sign In
                        </router-link>
                    </span>
                    <ul class="iq-social-media">
                        <li><a href="#"><i class="ri-facebook-box-line"></i></a></li>
                        <li><a href="#"><i class="ri-twitter-line"></i></a></li>
                        <li><a href="#"><i class="ri-instagram-line"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            sign_up: {},
            selectedGender: null,
        }
    },
    methods: {
        signUp() {
            var payload = {
                ...this.sign_up, gender: this.selectedGender
            }
            axios
                .post('http://127.0.0.1:8000/api/sign-up', payload)
                .then((res) => {
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function (k, v) {
                        toastr.error(v[0], 'Error');
                    });
                });
        },
        selectRadio(value) {
            this.selectedGender = value;
            console.log(value);
        },
    },
}
</script>
<style >
@import './style.css';
</style>