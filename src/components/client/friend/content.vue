<template>
    <div @wheel="handleMouseWheel" v-if="isView" class="w-100 ps-4">
        <div class=" mt-3 mb-1 d-flex justify-content-between">
            <h3 class="">Friend request</h3>
            <router-link :to="{ name: 'requests' }">
                <button v-if="request_friend.length >= 6" type="button" class="me-3 btn seeall text-primary">
                    <b>See all</b>
                </button>
            </router-link>
        </div>
        <div class="row mx-0 ">
            <div class="d-flex" style="gap: 7px; flex-direction: row; flex-wrap: wrap;">
                <template v-if="request_friend.length >= 1" v-for="(v, k) in request_friend">
                    <div v-if="isView" class="card mb-3"
                        style="border-radius: 8px !important; width: 19%; cursor: pointer;">
                        <router-link :to="{ name: 'detailProfile.request_friend', params: { username: v.username } }"
                            class="w-100 ">
                            <div style="width: 100%; overflow: hidden;" class="flex-center responsive-image">
                                <img :src="urlImage + v.avatar" class="card-img-top" alt="#"
                                    style="object-fit: cover;width: 100%;height: 100%;">
                            </div>
                            <div class="card-body " style="padding: 0.5rem 1.25rem;">
                                <div class="w-100" style="overflow: hidden;">
                                    <b class="text-nowrap text-secondary">{{ v.fullname }}</b>
                                </div>
                                <div class="mb-1 text-secondary">
                                    <span v-if="v.mutual > 0" class="text-secondary">{{ v.mutual }} mutual friends</span>
                                    <span v-else class="text-white " style="user-select: none;">a</span>
                                </div>
                                <div class="mt-1">
                                    <button v-if="v.status_button == 0" class="btn btn-primary w-100"
                                        @click="confirm(v, k, $event)">Confirm</button>
                                    <button v-else @click="calmDown($event)" class="btn btn-light w-100  py-0"
                                        style="height: 37px;">
                                        <div class="col-sm-12 flex-center" style="flex-direction: row;">
                                            <img src="../../../assets/client/images/page-img/page-load-loader.gif"
                                                alt="loader" style="height: 37px;object-fit: cover;">
                                        </div>
                                    </button>
                                </div>
                                <div class="mt-1">
                                    <button class="btn btn-secondary w-100" @click="delRequest(v, $event)">Delete</button>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </template>
                <div v-else class="flex-center w-100">
                    <h4>
                        <b>Select the name of the person whose profile you want to preview</b>
                    </h4>
                </div>
            </div>
            <button v-if="request_friend.length > 5" class=" btn text-primary seeall " style="width: 98%;"
                @click="getLimitRF()">
                <b>
                    See more
                    <i class="fa-solid fa-caret-down"></i>
                </b>
            </button>
        </div>

        <hr class="me-3">

        <div class=" mt-3 mb-1 d-flex justify-content-between">
            <h3>
                People you may know
            </h3>
            <router-link :to="{ name: 'suggestions' }">
                <button v-if="list_friend.length >= 6" type="button" class="me-3 btn seeall text-primary">
                    <b>See all</b>
                </button>
            </router-link>
        </div>
        <div ref="myDiv" class="row mx-0">
            <div v-if="list_friend.length > 0" class="d-flex" style="gap: 7px; flex-wrap: wrap; ">
                <template v-for="(v, k) in list_friend">
                    <div v-if="isView" data-aos="slide-up" data-aos-offset="100" data-aos-easing="ease-out-back"
                        class="card mb-3"
                        style="margin-bottom: 1rem;border-radius: 8px !important; width: 19%; cursor: pointer;">
                        <router-link :to="{ name: 'detailProfile.request_friend', params: { username: v.username } }">
                            <div style="width: 100%; overflow: hidden;" class="flex-center responsive-image">
                                <img :src="urlImage + v.avatar" class="card-img-top" alt="#"
                                    style="object-fit: cover; width: 100%; height: 100%;">
                            </div>
                            <div class="card-body" style="padding: 0.5rem 1.25rem; ">
                                <div class="w-100" style="overflow: hidden;">
                                    <b class="text-nowrap text-secondary">{{ v.fullname }}</b>
                                </div>
                                <div class="mb-1 text-nowrap text-secondary">
                                    <span v-if="v.mutual > 0" class="text-secondary">{{ v.mutual }} mutual friends</span>
                                    <span v-else class="text-white " style="user-select: none;">a</span>
                                </div>
                                <template v-if="v.friendStatus == false">
                                    <div class="mt-1">
                                        <button class="btn btn-primary w-100" @click="addFriend(v, k, $event)">Add
                                            friend</button>
                                    </div>
                                    <div class="mt-1">
                                        <button class="btn btn-secondary w-100"
                                            @click="delSuggest(k, $event)">Delete</button>
                                    </div>
                                </template>
                                <template v-else>
                                    <div class="mt-1">
                                        <button class="btn"
                                            style="background-color: transparent; color: transparent;">1</button>
                                    </div>
                                    <div class="mt-1">
                                        <button class="btn btn-secondary w-100"
                                            @click="unRequest(v, k, $event)">Cancel</button>
                                    </div>
                                </template>
                            </div>
                        </router-link>
                    </div>
                    <div v-else>
                        <div class="col-sm-12 text-center">
                            <img src="../../../assets/client/images/page-img/page-load-loader.gif" alt="loader"
                                style="height: 100px;">
                        </div>
                    </div>
                </template>

            </div>
            <div v-else class="flex-center w-100">
                <h4>
                    <b>There are no suggestions</b>
                </h4>
            </div>

        </div>
    </div>
    <div v-else>
        <div class="col-sm-12 text-center">
            <img src="../../../assets/client/images/page-img/page-load-loader.gif" alt="loader" style="height: 100px;">
        </div>
    </div>
</template>
<script>
import axios, { url } from '../../../core/coreRequest';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default {
    data() {
        return {
            list_friend: [],
            request_friend: [],
            urlImage: url,
            limit: 10,
            isView: false,
            status_button: 0,
            bottomPosition: 0,
            busy: false,
            limitStrange: 10,
            allStrange: [],
        }
    },
    mounted() {
        AOS.init();
        this.getFull();
        this.getRequestFriend();
    },
    watch: {
        request_friend: {
            handler(newValue, oldValue) {
                if (oldValue) {
                    this.isView = true
                }
            },
            deep: true,
            immediate: true,
        },

    },
    methods: {
        handleMouseWheel(event) {
            const myDiv = this.$refs.myDiv;
            const mh = window.innerHeight;
            // Lấy tọa độ bottom của div
            const rect = myDiv.getBoundingClientRect();
            this.bottomPosition = rect.bottom - mh;

            // console.log('Mouse wheel event:', event.deltaY, 'Bottom position:', this.bottomPosition);
            if (this.bottomPosition < 10 && !this.busy) {
                this.list_friend = this.list_friend.concat(this.allStrange.splice(0, this.limitStrange));
                AOS.init();
            }
        },
        getFull() {
            axios.get('dataFull').then((res) => {
                const newData = res.data.data.map((friend) => ({
                    ...friend,
                    friendStatus: false,
                }));

                this.allStrange = this.allStrange.concat(newData);
                this.list_friend = this.allStrange.splice(0, this.limitStrange);
            });
        },
        getRequestFriend() {
            axios
                .get('follower/request-friend')
                .then((res) => {
                    if (res.data.status == 1) {
                        this.request_friend = res.data.data;
                        this.request_friend = this.request_friend.map((friend) => ({
                            ...friend,
                            status_button: 0,
                        }))
                        // this.request_friend[k].status_button = 0
                    }
                });
        },
        getLimitRF() {
            axios
                .post('follower/request-friend-limit', { limit: this.limit })
                .then((res) => {
                    this.limit += 10;
                    this.request_friend = res.data.data.map((friend) => ({
                        ...friend,
                        status_button: 0,
                    }))

                });
        },
        addFriend(v, k, event) {
            this.list_friend[k].friendStatus = true
            axios
                .post('follower/add-friend', v)
                .then((res) => {
                    if (res.data.status) {
                    }
                })
            if (event) {
                event.preventDefault();
            }
        },
        unRequest(v, k, event) {

            this.list_friend[k].friendStatus = false
            axios
                .post('follower/cancel-friend', v)
                .then((res) => {
                    if (res.data.status) {
                    }
                })
            if (event) {
                event.preventDefault();
            }
        },
        confirm(v, k, event) {
            if (event) {
                event.preventDefault();
            }
            this.request_friend[k].status_button = 1
            axios
                .post('follower/accept-friend', v)
                .then((res) => {

                    if (res.data.status) {
                        this.getRequestFriend();
                    }
                })
        },
        calmDown(event) {
            if (event) {
                event.preventDefault();
            }
        },
        delRequest(v, event) {
            axios
                .post('follower/delete-friend', v)
                .then((res) => {
                    if (res.data.status) {
                        this.getRequestFriend();
                    }
                });
            if (event) {
                event.preventDefault();
            }
        },
        delSuggest(k, event) {
            this.list_friend.splice(k, 1);
            if (event) {
                event.preventDefault();
            }
        },

    },

}
</script>
<style >
@import './style.css'
</style>