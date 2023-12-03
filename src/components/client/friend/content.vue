<template>
    <div class="w-100 ps-4">
        <div class=" mt-3 mb-1 d-flex justify-content-between">
            <h3 class="">Friend request</h3>
            <router-link :to="{ name: 'requests' }">
                <button type="button" class="me-3 btn seeall text-primary">
                    <b>See all</b>
                </button>
            </router-link>
        </div>
        <div class="row mx-0 ">
            <div class="d-flex" style="gap: 7px; flex-direction: row; flex-wrap: wrap;">
                <template v-for="(v, k) in request_friend">
                    <div class="card mb-3" style="border-radius: 8px !important; width: 19%; cursor: pointer;">
                        <router-link :to="{ name: 'detailProfile.request_friend', params: { username: v.username } }"
                            class="w-100 ">
                            <div style="width: 100%; height: 236px; overflow: hidden;">
                                <img :src="urlImage + v.avatar" class="card-img-top" alt="#" style="object-fit: cover;">
                            </div>
                            <div class="card-body " style="padding: 0.5rem 1.25rem;">
                                <div class="w-100" style="overflow: hidden;">
                                    <b class="text-nowrap text-secondary">{{ v.fullname }}</b>
                                </div>
                                <div class="mb-1 text-secondary">
                                    <span>1 mutual</span>
                                </div>
                                <div class="mt-1">
                                    <button class="btn btn-primary w-100" @click="confirm(v, $event)">Confirm</button>
                                </div>
                                <div class="mt-1">
                                    <button class="btn btn-secondary w-100" @click="delRequest(v, $event)">Delete</button>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </template>
            </div>
            <button class=" btn text-primary seeall " style="width: 98%;" @click="getLimitRF()">
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
                <button type="button" class="me-3 btn seeall text-primary">
                    <b>See all</b>
                </button>
            </router-link>
        </div>
        <div class="row mx-0 ">
            <div class="d-flex" style="gap: 7px; flex-wrap: wrap;">
                <template v-for="(v, k) in list_friend">
                    <div class="card mb-3" style="border-radius: 8px !important; width: 19%; cursor: pointer;">
                        <router-link :to="{ name: 'detailProfile.request_friend', params: { username: v.username } }">
                            <div style="width: 100%; height: 236px; overflow: hidden;">
                                <img :src="urlImage + v.avatar" class="card-img-top" alt="#" style="object-fit: cover;">
                            </div>
                            <div class="card-body" style="padding: 0.5rem 1.25rem; ">
                                <div class="w-100" style="overflow: hidden;">
                                    <b class="text-nowrap text-secondary">{{ v.fullname }}</b>
                                </div>
                                <div class="mb-1 text-nowrap text-secondary">
                                    <span>1 mutual</span>
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
                </template>
            </div>
        </div>
    </div>
</template>
<script>
import axios, { url } from '../../../core/coreRequest';
export default {
    data() {
        return {
            list_friend: [],
            request_friend: [],
            urlImage: url,
            limit: 10,
        }
    },
    mounted() {
        this.getFull();
        this.getRequestFriend();
    },
    methods: {
        getFull() {
            axios.get('dataFull').then((res) => {
                // Khởi tạo friendStatus cho mỗi người bạn là 'notAdded'
                this.list_friend = res.data.data.map((friend) => ({
                    ...friend,
                    friendStatus: false,
                }));
            });
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
        getLimitRF() {
            axios
                .post('follower/request-friend-limit', { limit: this.limit })
                .then((res) => {
                    this.limit += 2;
                    this.request_friend = res.data.data;
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
        confirm(v, event) {
            axios
                .post('follower/accept-friend', v)
                .then((res) => {
                    if (res.data.status) {
                        this.getRequestFriend();
                    } else {

                    }
                })
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
                    } else {

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
<style>@import './style.css'</style>