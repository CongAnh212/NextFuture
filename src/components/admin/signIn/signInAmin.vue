<template>
    <div class="col-md-6 bg-white pt-5 pb-lg-0 pb-5">
        <div class="sign-in-from">
            <h1 class="mb-0">Sign in</h1>
            <p>Sign in to access NextFuture's admin page</p>
            <div class="mt-4">
                <div class="form-group">
                    <label class="form-label" for="exampleInputEmail1">Username</label>
                    <input v-model="username" type="text" class="form-control mb-0" id="exampleInputEmail1"
                        placeholder="Enter username">
                </div>
                <div class="form-group">
                    <label class="form-label" for="exampleInputPassword1">Password</label>
                    <!-- <a href="#" class="float-end">Forgot password?</a> -->
                    <div class=" position-relative">
                        <input @keyup.enter="signIn()" v-model="password" type="password" class="form-control mb-0"
                            ref="password" id="exampleInputPassword1" placeholder="Password">
                        <i class="fas  position-absolute c-pointer"
                            style="right: .65rem; top: 50%; transform: translateY(-50%); font-size: 1rem;"></i>
                    </div>
                </div>
                <div class="d-inline-block w-100">
                    <button class="btn btn-primary w-100" @click="signIn()">
                        Sign In
                    </button>
                </div>
                <div class="sign-info text-center">
                    <span class="dark-color d-inline-block line-height-2">
                        Want to switch to the user's website?
                        <a href="/sign-in"> Click to here </a>
                    </span>
                    <!-- <ul class="iq-social-media">
                        <li><a href="#"><i class="ri-facebook-box-line"></i></a></li>
                        <li><a href="#"><i class="ri-twitter-line"></i></a></li>
                        <li><a href="#"><i class="ri-instagram-line"></i></a></li>
                    </ul> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Swal from 'sweetalert2';
import axios from '../../../core/coreRequest'
export default {
    data() {
        return {
            username: '',
            password: '',
        }
    },
    created() {
    },
    methods: {
        signIn() {
            let payload = {
                username: this.username,
                password: this.password,
            }
            if (!this.username || !this.password) {
                Swal.fire({
                    icon: "error",
                    title: "Error...",
                    showConfirmButton: false,
                    text: 'You have not entered enough information',
                })
            } else {
                axios
                    .post('admin/sign-in', payload)
                    .then((res) => {
                        if (res.data.status == 0) {
                            Swal.fire({
                                icon: "error",
                                title: "Error...",
                                text: res.data.message,
                                showConfirmButton: false
                            })
                        } else if (res.data.status == 1) {
                            localStorage.setItem('token', res.data.token);
                            this.$router.push({ name: "admin" });

                        }
                    })
            }
        }
    },
}
</script>
<style></style>