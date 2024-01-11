<template>
    <div class='container' style="min-height: calc(100vh - 4.688rem);">
        <div class="row">
            <div class="col-sm-12 ">
                <div class="flex-center my-4">
                    <div class=" p-5">
                        <div v-if="!info.avatar" style='width: 9.5rem; height: 9.5rem; overflow: hidden;'
                            class="circle flex-center ">
                            <img src="https://i.pinimg.com/236x/93/a0/0a/93a00a3684652031a0c398c5d54d3d10.jpg"
                                alt="profile-img" class="img-fluid" style=" object-fit:cover;width: 100%;">
                        </div>
                        <div v-else style='width: 9.5rem; height: 9.5rem; overflow: hidden;' class="circle flex-center ">
                            <img :src="urlImg + info.avatar" alt="profile-img" class=" img-fluid"
                                style=" object-fit:cover;width: 100%; height: 100%;">
                        </div>
                    </div>
                    <div>
                        <div class="d-flex align-items-center">
                            <div class="pe-3">
                                <h3 class="text-dark">{{ info.nickname }}</h3>
                            </div>
                            <div class="social-info">
                                <ul
                                    class="social-data-block d-flex align-items-center justify-content-between list-inline p-0 m-0">
                                    <li v-if="status == 'friend'" class='d-flex'>
                                        <div class="dropdown">
                                            <button class="btn btn-secondary" type="button" data-bs-toggle="dropdown"
                                                aria-expanded="false" style='width:130px'>
                                                <i class="fa-solid fa-user-check me-1"></i>
                                                Friend
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li>
                                                    <button class="dropdown-item" @click="unFriend()">Unfriend</button>
                                                </li>
                                                <li>
                                                    <button class="dropdown-item">Unfollow</button>
                                                </li>
                                            </ul>
                                        </div>
                                        <button class='btn btn-primary ms-2' style='width:130px'>
                                            <i class="fa-brands fa-facebook-messenger me-1"></i>
                                            Messenger
                                        </button>
                                    </li>
                                    <li v-if="status == 'follower'" class='d-flex'>
                                        <div class="dropdown">
                                            <button class="btn btn-primary" type="button" data-bs-toggle="dropdown"
                                                aria-expanded="false" style='width:130px'>
                                                <i class="fa-solid fa-user-check me-1"></i>
                                                Confirm
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li>
                                                    <button class="dropdown-item" @click='confirm()'>
                                                        Confirm request
                                                    </button>
                                                </li>
                                                <li>
                                                    <button class="dropdown-item" @click='delRequest()'>
                                                        Delete request
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                        <button class='btn btn-secondary ms-2' style='width:130px'>
                                            <i class="fa-brands fa-facebook-messenger me-1"></i>
                                            Messenger
                                        </button>
                                    </li>
                                    <li v-if="status == 'request_friend'" class='d-flex'>
                                        <button class='btn btn-primary ms-2' style='width:130px' @click='unRequest()'>
                                            <i class="fa-solid fa-user-xmark me-1"></i>
                                            Cancel
                                        </button>
                                        <button class='btn btn-secondary ms-2' style='width:130px'>
                                            <i class="fa-brands fa-facebook-messenger me-1"></i>
                                            Messenger
                                        </button>
                                    </li>
                                    <li v-if="status == 'stranger'" class='d-flex'>
                                        <button class='btn btn-primary ms-2' style='width:130px' @click="addFriend()">
                                            <i class="fa-solid fa-user-plus me-1"></i>
                                            Add friend
                                        </button>
                                        <button class='btn btn-secondary ms-2' style='width:130px'>
                                            <i class="fa-brands fa-facebook-messenger me-1"></i>
                                            Messenger
                                        </button>
                                    </li>
                                    <li v-if="status == 'self'" class='flex-center'>
                                        <router-link :to="{ name: 'editProfile' }"
                                            class="btn btn-light ms-2 f-500 text-dark btn-sm" style='width:130px'>
                                            <span class="flex-center h-100">Edit profile</span>
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="profile-info pb-2 pt-2  position-relative">
                            <div class="social-links  w-100">
                                <ul class="social-data-block d-flex  list-inline p-0 m-0 ">
                                    <li class="text-center ">
                                        <h5> <b>{{ lengthPost }}</b> posts</h5>
                                    </li>
                                    <li class="text-center ps-3">
                                        <h5 style="cursor: pointer;" data-bs-toggle="modal" data-bs-target="#modalFollower">
                                            <b>
                                                {{ followers.length }}
                                            </b> followers
                                        </h5>
                                        <ModalFollower :listFollower="followers" v-if="checkListFollwer"></ModalFollower>
                                    </li>
                                    <li class="text-center ps-3">
                                        <h5 style="cursor: pointer;" data-bs-toggle="modal" data-bs-target="#modalFriend">
                                            <b>
                                                {{ friends.length }}
                                            </b> friends
                                        </h5>
                                        <ModalFriend :listFriend="friends" v-if="checkListFriend" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h5 class="f-500 text-dark pb-2">{{ info.fullname }}</h5>
                        </div>
                        <div v-if="info.bio" class='text-dark f-500' style=" white-space: pre-line;">
                            {{ info.bio }}
                        </div>
                        <div v-else></div>
                        <div style="gap: 0.5em; width: 20rem;">
                            <div>
                                <a :href="v.link" v-for="(v, k) in link_address" class="px-2 py-1 me-1"
                                    style="border-radius: 20px;background-color: rgba(57, 53, 53, 0.084);
                                     display: inline-block;word-break: break-all; margin-top: 0.25rem; align-self: center;" target="_blank">
                                    <i :class="v.icon" class="me-1 text-dark f-500 "></i>
                                    <span class="text-dark f-500">
                                        {{ v.name }}
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <TabView class="tabview-custom">
                    <TabPanel>
                        <template #header>
                            <div class="post" @click="handleName('post')">
                                <div class="flex align-items-center gap-2 pe-3 pt-3 ps-3">
                                    <i class="fa-solid fa-table-cells text-dark me-1"></i>
                                    <span class="text-dark">POSTS</span>
                                </div>
                            </div>
                        </template>
                        <div class="m-0 okene">
                            <RouterView :info="info" name="post" @updateLengthPost="handleLengthPost"></RouterView>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <template #header>
                            <div class="photo" @click="handleName('photo')">
                                <div class="flex align-items-center gap-2 pe-3 pt-3 ps-3 ">
                                    <i class="fa-solid fa-image text-dark me-1"></i>
                                    <span class="text-dark">PHOTOS</span>
                                </div>
                            </div>
                        </template>
                        <div class="m-0 okene">
                            <RouterView name="photo"></RouterView>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <template #header>
                            <div class="aboutMe" @click="handleName('about_me')">
                                <div class="flex align-items-center gap-2 pe-3 pt-3 ps-3">
                                    <i class="fa-regular fa-address-card text-dark me-1"></i>
                                    <span class="text-dark">ABOUT</span>
                                </div>
                            </div>
                        </template>
                        <div class="m-0 okene">
                            <RouterView name="about_me"></RouterView>
                        </div>
                    </TabPanel>
                </TabView>
            </div>
        </div>
    </div>
</template>
<script>
import axios, { url } from '../../../core/coreRequest';
import ModalFollower from './modalFollower.vue';
import ModalFriend from './modalFriend.vue';
import ModalPost from './modalPost.vue';
import { socket } from '../../../socket.js';
import 'primevue/resources/themes/lara-light-green/theme.css'
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
export default {
    components: {
        ModalFollower,
        ModalFriend,
        ModalPost,
        TabView,
        TabPanel,
    },
    data() {
        return {
            info: {},
            urlImg: url,
            username: null,
            status: '',
            friends: [],
            followers: [],
            checkListFollwer: false,
            checkListFriend: false,
            link_address: [],
            triggerPhoto: false,
            triggerAbout: false,
            view: 'post_in_profile',
            lengthPost: null
        }
    },
    props: {
        sentFriend: {
            type: Object,
            required: true,
        },
        sentFriendSuggest: {
            type: Object,
            required: true,
        },
        delFriendSuggest: {
            type: Object,
            required: true,
        }
    },

    mounted() {
        this.username = this.$route.params.username;
        this.getInfo();
        this.getAllProfile();
        this.linkAddress();
        $('.p-tabview-nav').addClass('flex-center');
        $('.p-tabview-header-action').addClass('delete-border-bottom');
        this.handleBorderTop(); // hàm này để xử lý load lại trang nhận đúng css
        this.handleLoadPage(); // hàm này để xử lý load lại trang nhận đúng component
    },
    watch: {

        sentFriend(newData, oldData) {
            if (newData.status == true) {
                this.status = 'request_friend';
            } else {
                this.status = 'stranger';
            }
        },
        sentFriendSuggest(newData, oldData) {
            if (newData.status == true) {
                this.status = 'friend';
            }
        },
        delFriendSuggest(newData, oldData) {
            if (newData.status == true) {
                this.status = 'stranger';
            }
        },
        '$route.params.username'(username) {
            this.username = username;
            this.getInfo();
            this.getAllProfile();
            this.handleLoadPage()
        },
        followers(newData, oldData) {
            if (oldData) {
                this.checkListFollwer = true
            }
        },
        friends(newData, oldData) {
            if (oldData) {
                this.checkListFriend = true
            }
        },

    },
    methods: {
        handleLoadPage() {
            const currentRouteName = window.location.href.split("/").pop();
            if (currentRouteName === 'about-me') {
                $('.aboutMe').click();
            } else if (currentRouteName === 'photos') {
                $('.photo').click();
            } else {
                $('.post').click();
            }
        },
        handleLengthPost(value) {
            this.lengthPost = value
        },
        handleName(option) {
            // name chi có tác dụng check xem mình đang ở trang nào
            // option có tác dụng để set giao diện nào
            const name = this.$route.name.split('.').pop();
            console.log('name: ', name);
            if (option === 'post') {
                if (name === 'request_friend') {
                    this.setView('post_in_profile.request_friend')
                } else if (name === 'suggestion') {
                    this.setView('post_in_profile.suggestion')
                } else if (name === 'all_friends') {
                    this.setView('post_in_profile.all_friends')
                } else {
                    this.setView('post_in_profile')
                }
            } else if (option === 'photo') {
                if (name === 'suggestion') {
                    this.setView('photo_in_profile.suggestion')
                } else if (name === 'all_friends') {
                    this.setView('photo_in_profile.all_friends')
                } else {
                    this.setView('photo_in_profile')
                }
            } else {
                if (name === 'request_friend') {
                    this.setView('aboutme_in_profile.request_friend')
                } else if (name === 'suggestion') {
                    this.setView('aboutme_in_profile.suggestion')
                } else if (name === 'all_friends') {
                    this.setView('aboutme_in_profile.all_friends')
                } else {
                    this.setView('aboutme_in_profile')
                }
            }
        },
        setView(a) {
            this.view = a
            this.$router.push({ name: a });
        },
        handleBorderTop() {
            $('.p-highlight').removeClass('p-highlight')
            if (window.location.hash === '/photo') {
                $('[data-pc-index="1"]').addClass('p-highlight')
            } else if (window.location.hash === '/aboutme') {
                $('[data-pc-index="2"]').addClass('p-highlight')
            } else {
                $('[data-pc-index="0"]').addClass('p-highlight')
            }

            $('.okene').parent().removeClass('p-highlight')
        },
        post() {
            const urlWithoutHash = window.location.href.split("#")[0];

            // Thay đổi URL mà không thêm vào lịch sử duyệt
            window.history.replaceState({}, document.title, urlWithoutHash);
        },
        linkAddress() {
            axios
                .get(this.username + '/data-link-address')
                .then((res) => {
                    this.link_address = res.data.data
                });
        },
        getAllProfile() {
            axios
                .get(this.username + '/data-all')
                .then((res) => {
                    this.friends = res.data.friends
                    this.followers = res.data.followers
                });
        },
        getInfo() {
            axios
                .get(this.username + '/data-info')
                .then((res) => {
                    this.info = res.data.info
                    this.status = res.data.status
                });
        },
        confirm() {
            const infoFriend = {
                info: this.info,
                status: true
            }
            this.$emit("profile_suggest", infoFriend)
            axios
                .post('follower/accept-friend', this.info)
                .then((res) => {
                    if (res.data.status) {
                        this.getInfo();
                    }
                })
        },
        delRequest() {
            const infoFriend = {
                info: this.info,
                status: true
            }
            this.$emit("profile_suggest", infoFriend)
            axios
                .post('follower/delete-friend', this.info)
                .then((res) => {
                    if (res.data.status) {
                        this.getInfo();
                    }
                });

        },
        async addFriend() {
            const infoFriend = {
                info: this.info,
                status: true
            }
            const sender = await JSON.parse(localStorage.getItem('information-my-profile'))
            try {
                this.$emit("profile_request_friend", infoFriend)
                const response = await axios.post('follower/add-friend', this.info);
                if (response.data.status) {
                    this.getInfo();
                    await socket.emit('sendNotification', {
                        senderId: sender.id,
                        receiverId: this.info.id,
                        type: 'addFriend'
                    });
                }
            } catch (error) {
                console.log(error);
            }
        },
        unRequest() {
            const infoFriend = {
                info: this.info,
                status: false
            }
            this.$emit("profile_request_friend", infoFriend)
            axios
                .post('follower/cancel-friend', this.info)
                .then((res) => {
                    if (res.data.status) {
                        this.getInfo();
                    }
                })
        },
        unFriend() {
            const infoFriend = {
                info: this.info,
                status: true
            }
            this.$emit("profile_del_friend", infoFriend)
            axios
                .post('delete-friend', this.info)
                .then((res) => {
                    if (res.data.status) {
                        this.getInfo();
                    }
                })
        },
    },
}

</script>
<style >
@import './style.css';

.p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link {
    background: #ffffff;
    border-color: black;
    border-top: black;
    color: #10b981;
    border-bottom: none;
}

.p-tabview-nav {
    border-top: 0.1em solid rgba(195, 193, 193, 0.829);
    border-bottom: none;
}



.delete-border-bottom {
    border-bottom: none;
    padding: 0;
}


.p-highlight {
    margin-top: -0.1em;
    border-top: 0.115em solid black;
}
</style>
