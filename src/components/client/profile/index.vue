<template>
    <div class='container '>
        <div class="row ">
            <div class="col-sm-12 ">
                <div class="flex-center">
                    <div class=" p-5">
                        <div v-if="!info.avatar">
                            <img src="https://i.pinimg.com/236x/93/a0/0a/93a00a3684652031a0c398c5d54d3d10.jpg"
                                alt="profile-img" class="avatar-130 img-fluid">
                        </div>
                        <div v-else style='width: 150px; height: 150px; overflow: hidden;' class="circle ">
                            <img :src="urlImg + info.avatar" alt="profile-img" class=" img-fluid"
                                style=" object-fit:cover;width: 100%;">
                        </div>
                    </div>
                    <div>
                        <div class="d-flex ">
                            <div class="pe-3">
                                <h3 class="">{{ info.nickname }}</h3>
                            </div>
                            <div class="social-info flex-center">
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
                                        <router-link :to="{ name: 'editProfile' }" class="btn btn-light ms-2 f-500 text-dark"
                                            style='width:130px'>
                                            <span class="flex-center h-100">Edit profile</span>
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="profile-info py-3  position-relative  ">
                            <div class="social-links  w-100">
                                <ul class="social-data-block d-flex  list-inline p-0 m-0 ">
                                    <li class="text-center ">
                                        <h5> <b>690</b> posts</h5>
                                    </li>
                                    <li class="text-center ps-3">
                                        <h5 style="cursor: pointer;" data-bs-toggle="modal" data-bs-target="#modalFollower">
                                            <b>
                                                {{ followers.length }}
                                            </b> followers
                                        </h5>
                                        <ModalFollower :listFollower="followers" v-if="checkListFollwer" />
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
                            <h5 class="f-500">{{ info.fullname }}</h5>
                        </div>
                        <div class="pt-1 d-flex " style="gap: 0.5em; flex-wrap: wrap; width: 22vw;">
                            <div class="text-primary">
                                <span class="px-2 py-1"
                                    style="border-radius: 20px; background-color: rgba(57, 53, 53, 0.084);">
                                    <i class=" fa-brands fa-facebook"></i>
                                    <a href="https://www.facebook.com/phtsnh26/" class="text-primary">
                                        phtsnh26</a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex-center">
                    <hr style="width: 99%;" class="mb-0 p-0">
                </div>
                <div>
                    <ul class="flex-center" style="gap: 1rem; list-style: none; margin-top: -1px;">
                        <li class="text-dark f-500  px-2 pt-2"
                            style="font-size: 15px; cursor: pointer; border-top: 1px solid #000000;">
                            <i class="fa-regular fa-image"></i>
                            PHOTOS
                        </li>
                        <li class="text-dark f-500  px-2 pt-2" style="font-size: 15px; cursor: pointer; ">
                            <i class="fa-solid fa-table-cells"></i>
                            POSTS
                        </li>
                        <li class="text-dark f-500 px-2 pt-2" style="font-size: 15px; cursor: pointer;">
                            <i class="fa-solid fa-lock"></i>
                            PRIVATE
                        </li>
                        <li class="text-dark f-500 px-2 pt-2" style="font-size: 15px; cursor: pointer;">
                            <i class="fa-regular fa-address-card"></i>
                            ABOUT
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-sm-12 pb-4">
                <div class="tab-content">
                    <div class="tab-pane fade show active" id="timeline" role="tabpanel">
                        <div class="d-flex" style="width:100%; flex-wrap: wrap;">
                            <div style="width: 33%; overflow: hidden; aspect-ratio: 1/1; padding: 2px; cursor: pointer; position: relative; "
                                data-bs-toggle="modal" data-bs-target="#modalDetail" class="flex-center rovo">
                                <div class="img-hover">
                                </div>
                                <span class="text-white"
                                    style="z-index: 1; position: absolute;top:3px;right: 12px; font-size: 23px;">
                                    <i class="fa-solid fa-clone" style="text-shadow: 0 0 10px #000000;"></i>
                                </span>
                                <img style="object-fit: cover; width: 100%;height: 100%;"
                                    src="https://media-cdn-v2.laodong.vn/storage/newsportal/2023/10/26/1259495/Doona-Suzy.jpg">
                            </div>

                        </div>
                    </div>
                    <div class="modal fade" id="modalDetail" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog modal-xxl  modal-dialog-centered ">
                            <div class="modal-content" style="position: relative;">
                                <div style="position: absolute; top:-25px; right: -10%;" class="text-white">
                                    <div type="button" data-bs-dismiss="modal" aria-label="Close"
                                        style="margin-right: -50px; cursor: pointer;">
                                        <i class="fa-solid fa-xmark text-white" style="font-size: 25px;"></i>
                                    </div>
                                </div>
                                <div class="d-flex bg-white" style="height: 90vh;width: 100%; ">
                                    <div style="height: 100%; overflow: hidden;aspect-ratio: 1/1; position: relative; ">
                                        <img style="object-fit: cover; width: 100%;height: 100%;"
                                            src="https://media-cdn-v2.laodong.vn/storage/newsportal/2023/10/26/1259495/Doona-Suzy.jpg"
                                            alt="">
                                        <span class="text-center" style="position: absolute; top: 50%;
                                             transform: translateY(-50%); left:1em;  border-radius: 100%; width: 1.5rem;cursor: pointer;
                                             height: 1.5rem; background-color: #D4D6CB;">
                                            <i class="fa-solid fa-chevron-left text-dark"></i>
                                        </span>
                                        <span class="text-center" style="position: absolute; top: 50%;cursor: pointer;
                                             transform: translateY(-50%); right:1em;  border-radius: 100%; width: 1.5rem;
                                             height: 1.5rem; background-color: #D4D6CB;">
                                            <i class="fa-solid fa-chevron-right text-dark"></i>
                                        </span>
                                        <span class="text-center"
                                            style="position: absolute; bottom: 0.5rem; left: 50%; transform: translateX(-50%);  cursor: auto;">
                                            <i class="fa-solid fa-circle text-white me-1" style="font-size: 0.4rem;"></i>
                                        </span>
                                    </div>
                                    <div style="flex:1;">
                                        <div class=" d-flex py-2 px-2 w-100">
                                            <div class="d-flex align-items-center" style="flex:1">
                                                <img :src="urlImg + info.avatar" class="img-fluid rounded-circle me-2"
                                                    alt="user" style="height: 35px; width: 35px;margin-left: 0px;">
                                                <span class="text-dark f-500" style="font-weight: 600; font-size: 17px;">
                                                    {{ info.nickname }}
                                                </span>
                                            </div>
                                            <div>
                                                <i class="fa-solid fa-ellipsis text-dark" style="cursor: pointer;"></i>
                                            </div>
                                        </div>
                                        <div class="px-2 text-dark f-500">
                                            Ngầu điên liền ?
                                        </div>
                                        <div class="px-2 pt-3 pb-2">
                                            <div class="flex-between">
                                                <div style="font-size: 15px; font-weight: 400;">
                                                    Like by
                                                    <b style="cursor: pointer;">tomngu</b>
                                                    and
                                                    <b style="cursor: pointer;">others</b>
                                                </div>
                                                <div>
                                                    <span style="font-size: 15px;  font-weight: 500;"
                                                        class="me-1">200</span>
                                                    <i class="fa-regular fa-comment" style="font-size: 15px; "></i>
                                                </div>
                                            </div>
                                        </div>
                                        <hr class="m-0">
                                        <div class="px-4 py-1">
                                            <div class="d-flex" style="gap:20%">
                                                <div>
                                                    <i class="fa-regular fa-heart"
                                                        style="font-size: 18px; cursor: pointer;"></i>
                                                    <span style="font-size: 18px; cursor: pointer; font-weight: 500;"
                                                        class="ms-2">Likes</span>
                                                </div>
                                                <div>
                                                    <i class="fa-regular fa-comment"
                                                        style="font-size: 18px; cursor: pointer;"></i>
                                                    <span style="font-size: 18px; cursor: pointer; font-weight: 500;"
                                                        class="ms-2">Comments</span>
                                                </div>
                                                <div>
                                                    <i class="fa-regular fa-paper-plane"
                                                        style="font-size: 18px; cursor: pointer;"></i>
                                                    <span style="font-size: 18px; cursor: pointer; font-weight: 500;"
                                                        class="ms-2">Share</span>
                                                </div>
                                            </div>
                                        </div>
                                        <hr class="m-0">
                                        <div class=" d-flex py-3 px-2 w-100">
                                            <div class="d-flex" style="flex:1">
                                                <div style="height: 35px; width: 35px;margin-left: 0px; overflow: hidden;"
                                                    class="circle me-2">
                                                    <img src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2023/12/25/photo-4-1703515345299422557611.jpg"
                                                        class="img-fluid me-2" alt="user"
                                                        style="object-fit: cover; width: 100%;">
                                                </div>
                                                <div class="text-dark f-500" style="flex:1;margin-top: -7px;">
                                                    <span style="font-weight: 600; font-size: 17px;">phtsnh26</span>
                                                    <br>
                                                    <div class="d-flex" style="line-height: 15px; padding-left: 15px;">
                                                        <span style="flex:1">đẹp trai vl</span>
                                                        <i class="fa-regular fa-heart" style="cursor: pointer;"></i>
                                                    </div>
                                                    <div class="d-flex pt-1" style="gap: 5%;">
                                                        <small class="text-secondary">1d</small>
                                                        <small class="text-secondary"
                                                            style="font-weight: bold; cursor: pointer;">1 likes</small>
                                                        <small class="text-secondary"
                                                            style="font-weight: bold; cursor: pointer;">Reply</small>
                                                    </div>
                                                    <div class="d-flex align-items-center" style="gap: 5%;cursor: pointer;">
                                                        <div style="border: 1px solid #797979; width: 2rem; height: 0;">
                                                        </div>
                                                        <small class="text-secondary " style=" font-weight: bold;">
                                                            View replies (8)
                                                        </small>
                                                    </div>
                                                    <div class="pt-3" style="flex:1">
                                                        <div class="d-flex mb-2">
                                                            <div style="height: 35px; width: 35px;margin-left: 0px; overflow: hidden;"
                                                                class="circle me-2">
                                                                <img src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2023/12/25/photo-4-1703515345299422557611.jpg"
                                                                    class="img-fluid me-2" alt="user"
                                                                    style="object-fit: cover; width: 100%;">
                                                            </div>
                                                            <div class="text-dark f-500" style="flex:1;margin-top: -7px;">
                                                                <span
                                                                    style="font-weight: 600; font-size: 17px;">phtsnh26</span>
                                                                <br>
                                                                <div class="d-flex align-items-center"
                                                                    style="line-height: 15px; padding-left: 15px;">
                                                                    <span style="flex:1">đẹp trai vl</span>
                                                                    <i class="fa-regular fa-heart"
                                                                        style="cursor: pointer;"></i>
                                                                </div>
                                                                <div class="d-flex pt-1" style="gap: 5%;">
                                                                    <small class="text-secondary">1d</small>
                                                                    <small class="text-secondary"
                                                                        style="font-weight: bold; cursor: pointer;">1
                                                                        likes
                                                                    </small>
                                                                    <small class="text-secondary"
                                                                        style="font-weight: bold; cursor: pointer;">Reply</small>
                                                                </div>

                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios, { url } from '../../../core/coreRequest'
import ModalFollower from './modalFollower.vue';
import ModalFriend from './modalFriend.vue';

export default {
    components: {
        ModalFollower,
        ModalFriend,
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
    },
    watch: {
        sentFriend(newData, oldData) {
            // console.log('newData: ', newData);
            // console.log('oldData: ', oldData);
            if (newData.status == true) {
                this.status = 'request_friend';
            } else {
                this.status = 'stranger';
            }
        },
        sentFriendSuggest(newData, oldData) {
            // console.log('newData: ', newData);
            // console.log('oldData: ', oldData);
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

            // console.log(this.username); 
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
        }
    },
    methods: {
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
                    // console.log(this.status)
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
                    } else {

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
            console.log('add friend');
            try {
                this.$emit("profile_request_friend", infoFriend)
                const response = await axios.post('follower/add-friend', this.info);
                if (response.data.status) {
                    this.getInfo();
                    // await io.emit('addFriend', {
                    //     id: this.info.id,
                    //     username: this.info.username,
                    //     type: 'addFriend'
                    // });
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
<style>
@import './style.css'
</style>