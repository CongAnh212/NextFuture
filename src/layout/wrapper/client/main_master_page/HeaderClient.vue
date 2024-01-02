<template>
    <div class="iq-top-navbar" style="position: fixed;">

        <div class="iq-navbar-custom">

            <nav class="navbar navbar-expand-lg navbar-light p-0">
                <div class="iq-navbar-logo d-flex justify-content-between">
                    <router-link :to="{ name: 'homepage' }">
                        <img src="../../../../assets/img/main-logo.png" class="img-fluid" alt="">
                        <span>NextFuture</span>
                    </router-link>
                </div>
                <div class="iq-search-bar device-search">
                    <form action="#" class="searchbox">
                        <a class="search-link" href="#"><i class="ri-search-line"></i></a>
                        <input type="text" class="text search-input" placeholder="Search here...">
                    </form>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-label="Toggle navigation">
                    <i class="ri-menu-3-line"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav  ms-auto navbar-list">
                        <li class="nav-item dropdown">
                            <a href="#" class="dropdown-toggle" id="group-drop" data-bs-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                <i class="ri-group-line"></i>
                            </a>
                            <div class="sub-drop sub-drop-large dropdown-menu" aria-labelledby="group-drop">
                                <div class="card shadow-none m-0">
                                    <div class="card-header d-flex justify-content-between bg-primary">
                                        <div class="header-title">
                                            <h5 class="mb-0 text-white">Friend Request</h5>
                                        </div>
                                        <small class="badge  bg-light text-dark ">
                                            {{ Object.keys(request_friend).length }}
                                        </small>
                                    </div>
                                    <div class="card-body p-0">
                                        <template v-for="(v, k) in request_friend">
                                            <div class="iq-friend-request">
                                                <div
                                                    class="iq-sub-card iq-sub-card-big d-flex align-items-center justify-content-between">
                                                    <div class="d-flex align-items-center">
                                                        <img class="avatar-40 rounded" :src="urlImg + v.avatar" alt="">
                                                        <div class="ms-3">
                                                            <h6 class="mb-0 ">{{ v.fullname }}</h6>
                                                            <p class="mb-0">1 mutual</p>
                                                        </div>
                                                    </div>
                                                    <div class="d-flex align-items-center">
                                                        <a href="javascript:void();" class="me-3 btn btn-primary rounded"
                                                            style="width: 60%;" @click="confirm(v)">Confirm</a>
                                                        <a href="javascript:void();" class="me-3 btn btn-secondary rounded"
                                                            style="width: 60%;">Delete</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </template>

                                        <div class="text-center">
                                            <a href="#" class=" btn text-primary">View More Request</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a href="#" class="search-toggle   dropdown-toggle" id="notification-drop"
                                data-bs-toggle="dropdown">
                                <i class="ri-notification-4-line"></i>
                            </a>
                            <div class="sub-drop dropdown-menu" aria-labelledby="notification-drop" style="width: 32rem;">
                                <div class="card shadow-none m-0">
                                    <div class="card-header d-flex justify-content-between bg-primary">
                                        <div class="header-title bg-primary">
                                            <h5 class="mb-0 text-white">All Notifications</h5>
                                        </div>
                                        <small class="badge  bg-light text-dark">{{ list_notifications.length }}</small>
                                    </div>
                                    <div v-if="isView" class="card-body p-0">
                                        <a v-for="(v, k) in list_notifications" class="iq-sub-card bg-hover">
                                            <router-link v-if="v.type == 2"
                                                :to="{ name: 'home-group', params: { id_group: v.id_group }, query: { id_notification: v.id } }">
                                                <div class="d-flex align-items-center">
                                                    <div style="overflow: hidden; width: 3rem; height: 3rem;"
                                                        class="flex-center">
                                                        <img class="avatar-40 rounded" :src="urlImg + v.cover_image"
                                                            style="object-fit: cover;">
                                                    </div>
                                                    <div class="ms-3 w-100" style="flex: 1;">
                                                        <h6 class="mb-0 f-500 text-primary">{{ v.sender }}</h6>
                                                        <div
                                                            class="d-flex text-dark justify-content-between align-items-center">
                                                            <p class="mb-0">Invited you to the <b class="text-primary"> {{
                                                                v.group_name }} </b>
                                                                group</p>
                                                        </div>
                                                    </div>
                                                    <small class="float-right font-size-12">{{ formatTime(v.created_at) }}
                                                        agos</small>
                                                </div>
                                            </router-link>
                                            <router-link v-if="v.type == 7" to="">
                                                <div class="d-flex align-items-center">
                                                    <div style="overflow: hidden; width: 3rem; height: 3rem;"
                                                        class="flex-center">
                                                        <img class="avatar-40 rounded" :src="urlImg + v.avatar"
                                                            style="object-fit: cover;">
                                                    </div>
                                                    <div class="ms-3 w-100" style="flex: 1;">
                                                        <h6 class="mb-0 f-500 text-primary">{{ v.sender }}</h6>
                                                        <div
                                                            class="d-flex text-dark justify-content-between align-items-center">
                                                            <p class="mb-0">Tagged you in a post by
                                                                <b class="text-primary"> {{ v.name_poster }} </b>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <small class="float-right font-size-12">{{ formatTime(v.created_at) }}
                                                        agos</small>
                                                </div>
                                            </router-link>
                                            <router-link v-if="v.type == 1"
                                                :to="{ name: 'detailProfile', params: { username: v.username } }">
                                                <div v-if="v.type == 1" class="d-flex align-items-center">
                                                    <div style="overflow: hidden; width: 3rem; height: 3rem;"
                                                        class="flex-center">
                                                        <img class="avatar-40 rounded" :src="urlImg + v.avatar"
                                                            style="object-fit: cover;">
                                                    </div>
                                                    <div class="ms-3 w-100" style="flex: 1;">
                                                        <h6 class="mb-0 f-500 text-primary">{{ v.sender }}</h6>
                                                        <div
                                                            class="d-flex text-dark justify-content-between align-items-center">
                                                            <p class="mb-0">sent you a friend request
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <small class="float-right font-size-12">{{ formatTime(v.created_at) }}
                                                        agos</small>
                                                </div>
                                            </router-link>
                                        </a>
                                    </div>
                                    <div v-else class="card-body p-0 flex-center">
                                        <img src="../../../../assets/client/images/page-img/page-load-loader.gif"
                                            alt="loader" style="height: 100px;">
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a href="#" class="dropdown-toggle" id="mail-drop" data-bs-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                <i class="ri-mail-line"></i>
                            </a>
                            <div class="sub-drop dropdown-menu" aria-labelledby="mail-drop">
                                <div class="card shadow-none m-0">
                                    <div class="card-header d-flex justify-content-between bg-primary">
                                        <div class="header-title bg-primary">
                                            <h5 class="mb-0 text-white">All Message</h5>
                                        </div>
                                        <small class="badge bg-light text-dark">4</small>
                                    </div>
                                    <div class="card-body p-0 ">
                                        <a href="#" class="iq-sub-card">
                                            <div class="d-flex  align-items-center">
                                                <div class="">
                                                    <img class="avatar-40 rounded"
                                                        src="../../../../assets/client/images/user/01.jpg" alt="">
                                                </div>
                                                <div class=" w-100 ms-3">
                                                    <h6 class="mb-0 ">Bni Emma Watson</h6>
                                                    <small class="float-left font-size-12">13 Jun</small>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a href="#" class="   d-flex align-items-center dropdown-toggle" id="drop-down-arrow"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img :src="urlImg + myInfo.avatar" class="img-fluid rounded-circle me-3" alt="user">
                                <div class="caption">
                                    <h6 class="mb-0 line-height">{{ myInfo.fullname }}</h6>
                                </div>
                            </a>
                            <div class="sub-drop dropdown-menu caption-menu" aria-labelledby="drop-down-arrow">
                                <div class="card shadow-none m-0">
                                    <div class="card-header  bg-primary">
                                        <div class="header-title">
                                            <h5 class="mb-0 text-white">Hello, {{ myInfo.fullname }}</h5>
                                            <span class="text-white font-size-12">Available</span>
                                        </div>
                                    </div>
                                    <div class="card-body p-0 ">
                                        <div class="iq-sub-card iq-bg-primary-hover">
                                            <router-link to="/" @click="myProfile()">
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
                                        <a href="../app/profile-edit.html" class="iq-sub-card iq-bg-warning-hover">
                                            <div class="d-flex align-items-center">
                                                <div class="rounded card-icon bg-soft-warning">
                                                    <i class="ri-profile-line"></i>
                                                </div>
                                                <div class="ms-3">
                                                    <h6 class="mb-0 ">Edit Profile</h6>
                                                    <p class="mb-0 font-size-12">Modify your personal details.</p>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="../app/account-setting.html" class="iq-sub-card iq-bg-info-hover">
                                            <div class="d-flex align-items-center">
                                                <div class="rounded card-icon bg-soft-info">
                                                    <i class="ri-account-box-line"></i>
                                                </div>
                                                <div class="ms-3">
                                                    <h6 class="mb-0 ">Account settings</h6>
                                                    <p class="mb-0 font-size-12">Manage your account parameters.</p>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="../app/privacy-setting.html" class="iq-sub-card iq-bg-danger-hover">
                                            <div class="d-flex align-items-center">
                                                <div class="rounded card-icon bg-soft-danger">
                                                    <i class="ri-lock-line"></i>
                                                </div>
                                                <div class="ms-3">
                                                    <h6 class="mb-0 ">Privacy Settings</h6>
                                                    <p class="mb-0 font-size-12">Control your privacy parameters.
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                        <div class="d-inline-block w-100 text-center p-3">
                                            <a @click="signOut()" class="btn btn-primary iq-sign-btn" role="button">Sign
                                                out<i class="ri-login-box-line ms-2"></i></a>
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
import baseFunction from '../../../../core/coreFunction';
import { state, socket } from "../../../../socket.js";

export default {
    data() {
        return {
            myInfo: {},
            urlImg: url,
            request_friend: [],
            list_notifications: [],
            isView: false,
        }
    },
    props: {
        notify: {
            type: Object,
            required: true,
        }
    },

    watch: {
        list_notifications: {
            handler(newValue, oldValue) {
                if (oldValue) {
                    this.isView = true;
                }
            },
            deep: true,
            immediate: true
        },
        notify(newValue, oldValue) {
            console.log('oldValue: ', oldValue);
            console.log('newValue: ', newValue);
            this.getNotification();
        }
    },
    mounted() {
        console.log('HeaderClient.vue: mounted')
        state.connected = true
        this.getInfo();
        this.getRequestFriend();
        this.getNotification();
    },
    methods: {
        formatTime(a) {
            return baseFunction.hoursDifference(a);
        },
        getNotification() {
            axios
                .get('notification/data')
                .then((res) => {
                    this.list_notifications = res.data.data;
                })
        },
        signOut() {
            axios
                .get('sign-out')
                .then((res) => {
                    localStorage.removeItem('token');
                    this.$router.push({ name: "sign-in" });
                })
                .catch((error) => {
                    console.error('Logout failed:', error);
                });
        },
        async getInfo() {
            try {
                const response = await axios.get('profile/data')
                this.myInfo = response.data.myInfo;

                if (Object.keys(this.myInfo).length > 0) {
                    await this.connectToSocket(this.myInfo.id, this.myInfo.username);
                }
            } catch (error) {
                console.error('Lỗi lấy thông tin người dùng:', error);
            }
        },
        myProfile() {
            this.$router.push({ name: 'detailProfile', params: { username: this.myInfo.username } });
        },
        getRequestFriend() {
            axios
                .get('follower/request-friend')
                .then((res) => {
                    if (res.data.status == 1) {
                        this.request_friend = res.data.data;
                    } else {

                    }
                });
        },
        confirm(v) {
            axios
                .post('follower/accept-friend', v)
                .then((res) => {
                    if (res.data.status) {
                        this.getRequestFriend();
                    } else {

                    }
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function (k, v) {
                        toastr.error(v[0], 'Error');
                    });
                });
        },
        connectToSocket(user_id, username) {
            socket.emit("userConnection", { user_id: user_id, username: username });
        }
    }
}
</script>
<style></style>