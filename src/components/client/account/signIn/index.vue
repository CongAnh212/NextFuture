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
                    <a href="#" class="float-end">Forgot password?</a>
                    <input v-model="sign_in.password" type="password" class="form-control mb-0" id="exampleInputPassword1"
                        placeholder="Password">
                </div>
                <div class="d-inline-block w-100">
                    <div class="form-check d-inline-block mt-2 pt-1">
                        <input v-model="sign_in.remember" type="checkbox" class="form-check-input" id="customCheck11">
                        <label class="form-check-label" for="customCheck11">Remember Me</label>
                    </div>
                    <button type="button" class="btn btn-primary float-end" @click="signIn()">Sign in</button>
                </div>
                <div class="sign-info">
                    <span class="dark-color d-inline-block line-height-2">Don't have an account?
                        <router-link :to="{ name: 'sign-up' }">
                            Sign up
                        </router-link>
                    </span>
                    <ul class="iq-social-media">
                        <li><a href="#"><i class="ri-facebook-box-line"></i></a></li>
                        <li><a href="#"><i class="ri-twitter-line"></i></a></li>
                        <li><a href="#"><i class="ri-instagram-line"></i></a></li>
                    </ul>
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
        }
    },
    mounted() {
    },
    methods: {
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
                            icon: "error",
                            title: "Oops...",
                            text: res.data.message,
                            showConfirmButton: false
                        });
                        setTimeout(() => {
                            Swal.close();
                        }, 1500);
                    }
                })
        },

    },

}
</script>
<style></style>