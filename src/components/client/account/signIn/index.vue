<template>
    <div class="col-md-6 bg-white pt-5 pt-5 pb-lg-0 pb-5">
        <div class="sign-in-from">
            <h1 class="mb-0">Sign in</h1>
            <p>NextFuture helps you connect and share with the people in your life.</p>
            <form class="mt-4">
                <div class="form-group">
                    <label class="form-label" for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control mb-0" id="exampleInputEmail1" placeholder="Enter email">
                </div>
                <div class="form-group">
                    <label class="form-label" for="exampleInputPassword1">Password</label>
                    <a href="#" class="float-end">Forgot password?</a>
                    <input type="password" class="form-control mb-0" id="exampleInputPassword1" placeholder="Password">
                </div>
                <div class="d-inline-block w-100">
                    <div class="form-check d-inline-block mt-2 pt-1">
                        <input type="checkbox" class="form-check-input" id="customCheck11">
                        <label class="form-check-label" for="customCheck11">Remember Me</label>
                    </div>
                    <button type="submit" class="btn btn-primary float-end">Sign in</button>
                </div>
                <div class="sign-info">
                    <span class="dark-color d-inline-block line-height-2">Don't have an account?
                        <router-link to="/sign-up">
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
export default {

}
</script>
<style></style>