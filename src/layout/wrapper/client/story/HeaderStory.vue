<template>
    <div class="iq-top-navbar">
        <div class="iq-navbar-custom">
            <nav class="navbar navbar-expand-lg navbar-light p-0">

                <div class="iq-navbar-logo d-flex justify-content-between">
                    <router-link :to="{ name: 'homepage' }">
                        <div class="rounded-circle d-flex justify-content-center align-items-center close me-2"
                            style="height: 45px; width: 45px; background-color: #9c9c9c; cursor: pointer;">
                            <i class="fa-solid fa-xmark " style="font-size: 25px; color: rgb(255, 255, 255);"></i>
                        </div>
                    </router-link>
                    <router-link :to="{ name: 'homepage' }">
                        <img src="../../../../assets/img/logo-main.png" class="img-fluid" alt="">
                    </router-link>
                </div>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-label="Toggle navigation">
                    <i class="ri-menu-3-line"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav  ms-auto navbar-list">
                        <li class="nav-item dropdown">
                            <a href="#" class="d-flex align-items-center dropdown-toggle" id="drop-down-arrow"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <div class="flex-center"
                                    style="border-radius: 100%; width: 3rem; height: 3rem; overflow: hidden;">
                                    <img :src="urlImg + myData.avatar" style="object-fit: cover; width: 100%; height: 100%;">
                                </div>
                                <div class="caption ms-2">
                                    <h6 class="mb-0 line-height">{{ myData.fullname }}</h6>
                                </div>
                            </a>
                            <div class="sub-drop dropdown-menu caption-menu" aria-labelledby="drop-down-arrow">
                                <div class="card shadow-none m-0">
                                    <div class="card-header bg-primary">
                                        <div class="header-title">
                                            <h5 class="mb-0 text-white">Hello {{ myData.fullname }}</h5>
                                            <span class="text-white font-size-12">Available</span>
                                        </div>
                                    </div>
                                    <div class="card-body p-0 ">
                                        <div class="iq-sub-card iq-bg-primary-hover">
                                            <router-link
                                                :to="{ name: 'detailProfile', params: { username: myData.username ? myData.username : ' ' } }">
                                                <div class="d-flex align-items-center">
                                                    <div class="rounded card-icon bg-soft-primary">
                                                        <i class="ri-file-user-line"></i>
                                                    </div>
                                                    <div class="ms-3">
                                                        <h6 class="mb-0 ">My Profile</h6>
                                                        <p class="mb-0 font-size-12">View personal profile details.</p>
                                                    </div>
                                                </div>
                                            </router-link>
                                        </div>
                                        <router-link :to="{ name: 'editProfile' }"
                                            class="iq-sub-card iq-bg-warning-hover">
                                            <div class="d-flex align-items-center">
                                                <div class="rounded card-icon bg-soft-warning">
                                                    <i class="ri-profile-line"></i>
                                                </div>
                                                <div class="ms-3">
                                                    <h6 class="mb-0 ">Edit Profile</h6>
                                                    <p class="mb-0 font-size-12">Modify your personal details.</p>
                                                </div>
                                            </div>
                                        </router-link>
                                        <div class="d-inline-block w-100 text-center p-3">
                                            <router-link to="">
                                                <a @click="signOut()" class="btn btn-primary iq-sign-btn"
                                                    role="button">Sign
                                                    out<i class="ri-login-box-line ms-2"></i></a>
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</template>
<script>
import axios, { url } from '../../../../core/coreRequest';
export default {
    data() {
        return {
            myData: {},
            urlImg: url
        }
    },
    mounted() {
        this.getInfo();
    },
    methods: {
        getInfo() {
            axios
                .get('profile/data')
                .then((res) => {
                    this.myData = res.data.myInfo;
                    console.log(this.myData);
                });
        },
        signOut() {
            axios
                .get('sign-out')
                .then((res) => {
                    localStorage.removeItem('token');
                    this.$router.push({ name: "sign-in" });
                })
                .catch((error) => {
                    console.error('Đăng xuất không thành công:', error);
                });
        }
    },
}

</script>

<style>
.close:hover {
    background-color: rgba(0, 0, 0, 0.45) !important;

}
</style>