<template >
    <div class="abc sidebar-default" style="width: 20vw; top: 0; overflow: hidden;">
        <div id="sidebar-scrollbar " data-scrollbar="true" tabindex="-1"
            style="overflow: hidden; outline: none; position: relative;">
            <div class="scroll-content" style="position: relative; height: 100%;">
                <nav class="iq-sidebar-menu " style="position: relative; ">
                    <div class="iq-navbar-logo d-flex mx-3 mt-3">
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
                    <hr style="margin: 0.5rem 0;">
                    <router-view @sendStories="handleStory" @viewStory="viewStory"></router-view>
                    <!-- **************************************************default -->
                </nav>
                <div class="p-5"></div>
            </div>
        </div>
    </div>

    <div class="bg-dark" style="height: 100vh; width: 80vw; position: absolute; right: 0px;">
        <router-view name="content" :stories="stories"
            :curentStory="curentStory"></router-view><!-- ************************************************ content  -->
        <div class="iq-top-navbar delete-bg mt-3" style="position: absolute;width: 20%;">
            <div class="iq-navbar-custom">
                <nav class="navbar navbar-expand-lg navbar-light p-0">
                    <div class="collapse navbar-collapse mt-4" id="navbarSupportedContent"
                        style="position: absolute; right: 0;">
                        <ul class="navbar-nav ms-auto navbar-list">
                            <li class="nav-item dropdown"><a href="#" class="search-toggle dropdown-toggle"
                                    id="notification-drop" data-bs-toggle="dropdown"><i
                                        class="ri-notification-4-line"></i></a>
                                <div class="sub-drop dropdown-menu" aria-labelledby="notification-drop">
                                    <div class="card shadow-none m-0">
                                        <div class="card-header d-flex justify-content-between bg-primary">
                                            <div class="header-title bg-primary">
                                                <h5 class="mb-0 text-white">All Notifications</h5>
                                            </div><small class="badge bg-light text-dark">4</small>
                                        </div>
                                        <div class="card-body p-0"><a href="#" class="iq-sub-card">
                                                <div class="d-flex align-items-center">
                                                    <div class=""><img class="avatar-40 rounded"
                                                            src="/src/assets/client/images/user/01.jpg" alt=""></div>
                                                    <div class="ms-3 w-100">
                                                        <h6 class="mb-0">Emma Watson Bni</h6>
                                                        <div class="d-flex justify-content-between align-items-center">
                                                            <p class="mb-0">95 MB</p><small
                                                                class="float-right font-size-12">Just Now</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a><a href="#" class="iq-sub-card">
                                                <div class="d-flex align-items-center">
                                                    <div class=""><img class="avatar-40 rounded"
                                                            src="/src/assets/client/images/user/02.jpg" alt=""></div>
                                                    <div class="ms-3 w-100">
                                                        <h6 class="mb-0">New customer is join</h6>
                                                        <div class="d-flex justify-content-between align-items-center">
                                                            <p class="mb-0">Cyst Bni</p><small
                                                                class="float-right font-size-12">5 days ago</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a><a href="#" class="iq-sub-card">
                                                <div class="d-flex align-items-center">
                                                    <div class=""><img class="avatar-40 rounded"
                                                            src="/src/assets/client/images/user/03.jpg" alt=""></div>
                                                    <div class="ms-3 w-100">
                                                        <h6 class="mb-0">Two customer is left</h6>
                                                        <div class="d-flex justify-content-between align-items-center">
                                                            <p class="mb-0">Cyst Bni</p><small
                                                                class="float-right font-size-12">2 days ago</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a><a href="#" class="iq-sub-card">
                                                <div class="d-flex align-items-center">
                                                    <div class=""><img class="avatar-40 rounded"
                                                            src="/src/assets/client/images/user/04.jpg" alt=""></div>
                                                    <div class="w-100 ms-3">
                                                        <h6 class="mb-0">New Mail from Fenny</h6>
                                                        <div class="d-flex justify-content-between align-items-center">
                                                            <p class="mb-0">Cyst Bni</p><small
                                                                class="float-right font-size-12">3 days ago</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a></div>
                                    </div>
                                </div>
                            </li>
                            <li class="nav-item dropdown"><a href="#" class="d-flex align-items-center dropdown-toggle"
                                    id="drop-down-arrow" data-bs-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false"><img :src="urlImg + myData.avatar"
                                        class="img-fluid rounded-circle me-3" alt="user">

                                </a>
                                <div class="sub-drop dropdown-menu caption-menu" aria-labelledby="drop-down-arrow">
                                    <div class="card shadow-none m-0">
                                        <div class="card-header bg-primary">
                                            <div class="header-title">
                                                <h5 class="mb-0 text-white">Hello {{ myData.fullname }}</h5><span
                                                    class="text-white font-size-12">Available</span>
                                            </div>
                                        </div>
                                        <div class="card-body p-0">
                                            <div class="iq-sub-card iq-bg-primary-hover">
                                                <router-link
                                                    :to="{ name: 'detailProfile', params: { username: myData.username ? myData.username : ' ' } }">
                                                    <div class="d-flex align-items-center">
                                                        <div class="rounded card-icon bg-soft-primary"><i
                                                                class="ri-file-user-line"></i></div>
                                                        <div class="ms-3">
                                                            <h6 class="mb-0">My Profile</h6>
                                                            <p class="mb-0 font-size-12">View personal profile details.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </router-link>
                                            </div>
                                            <a href="../app/profile-edit.html" class="iq-sub-card iq-bg-warning-hover">
                                                <div class="d-flex align-items-center">
                                                    <div class="rounded card-icon bg-soft-warning"><i
                                                            class="ri-profile-line"></i></div>
                                                    <div class="ms-3">
                                                        <h6 class="mb-0">Edit Profile</h6>
                                                        <p class="mb-0 font-size-12">Modify your personal details.</p>
                                                    </div>
                                                </div>
                                            </a><a href="../app/account-setting.html"
                                                class="iq-sub-card iq-bg-info-hover">
                                                <div class="d-flex align-items-center">
                                                    <div class="rounded card-icon bg-soft-info"><i
                                                            class="ri-account-box-line"></i></div>
                                                    <div class="ms-3">
                                                        <h6 class="mb-0">Account settings</h6>
                                                        <p class="mb-0 font-size-12">Manage your account parameters.</p>
                                                    </div>
                                                </div>
                                            </a><a href="../app/privacy-setting.html"
                                                class="iq-sub-card iq-bg-danger-hover">
                                                <div class="d-flex align-items-center">
                                                    <div class="rounded card-icon bg-soft-danger"><i
                                                            class="ri-lock-line"></i></div>
                                                    <div class="ms-3">
                                                        <h6 class="mb-0">Privacy Settings</h6>
                                                        <p class="mb-0 font-size-12">Control your privacy parameters.
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                            <div class="d-inline-block w-100 text-center p-3"><a
                                                    class="btn btn-primary iq-sign-btn" href="../dashboard/sign-in.html"
                                                    role="button">Sign out<i class="ri-login-box-line ms-2"></i></a>
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
    </div>
</template>
<script>
import axios, { url } from '../../../../core/coreRequest';
export default {
    name: 'app',
    data() {
        return {
            myData: {},
            urlImg: url,
            stories: null,
            curentStory: 0
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
                });
        },
        handleStory(value) {
            this.stories = value
        },
        viewStory(value) {
            this.curentStory = value

        }
    },
}
</script>
<style >
.delete-bg {
    background-color: transparent !important;
    box-shadow: none;
}

.abc {
    -webkit-box-shadow: 0 0 1.25rem 0 rgba(0, 0, 0, .1);
    box-shadow: 0 0 1.25rem 0 rgba(0, 0, 0, .1);
    position: fixed;
    z-index: 1000;
    top: 4.688rem;
    width: 250px;
    height: 100%;
    background: #fff;
    -webkit-transition: all .3s ease-in-out;
    -o-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
}
</style>