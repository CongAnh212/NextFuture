<template>
    <div class="d-flex align-items-center">
        <router-link :to="{ name: 'friends' }">
            <div class="me-3 arrow d-flex justify-content-center align-items-center">
                <i class="fa-solid fa-arrow-left text-secondary" style="font-size: 17px;"></i>
            </div>
        </router-link>
        <div>
            <span>Friend</span>
            <h4>Friend request</h4>
        </div>
    </div>
    <hr style="margin-top: 4px; margin-bottom: 4px;">
    <div style="overflow-y: auto; max-height: calc(100vh - 9.3rem); ">
        <div class="ms-1 f-500">{{ Object.keys(request_friend).length }} friend requests</div>
        <div class="mt-2 me-1" v-for="(v, k) in request_friend">
            <router-link :to="{ name: 'detailProfile.request_friend', params: { username: v.username } }">
                <div class="d-flex align-items-center ">
                    <div class="bg-hover d-flex align-items-center p-2 w-100 h-100" style="overflow: hidden;">
                        <div style='width: 3rem; height: 3rem; overflow: hidden;' class="circle flex-center me-1">
                            <img :src="urlImage + v.avatar" alt="profile-img" class=" img-fluid"
                                style=" object-fit:cover;width: 100%; height: 100%;">
                        </div>
                        <div style="flex:1">
                            <div style="line-height: 1.25rem">
                                <b class="text-secondary">{{ v.fullname }}</b> <br>
                            </div>
                            <span v-if="v.mutual > 0" class="text-secondary">{{ v.mutual }} mutual friends</span>
                            <div class="">
                                <button class="btn btn-primary me-1" style="width: 6.1rem;" @click="confirm(v, k)">
                                    Confirm
                                </button>
                                <button class="btn btn-secondary" style="width: 6.1rem;" @click="delRequest(v, k)">
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
import axios, { url } from '../../../core/coreRequest';
export default {
    data() {
        return {
            request_friend: [],
            urlImage: url,
        }
    },
    props: {
        sentFriendProfileSuggest: {
            type: Object,
            required: true,
        }
    },
    watch: {
        sentFriendProfileSuggest(newData, oldData) {
            // console.log('newData: ', newData);
            // console.log('oldData: ', oldData);
            const newIndex = this.request_friend.findIndex(friend => friend.id === newData.info.id);
            this.request_friend.splice(newIndex, 1);
        },
    },
    mounted() {
        this.getRequestFriend();
    },
    methods: {
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
        confirm(v, k) {
            this.request_friend[k].friendStatus = true
            const infoFriend = {
                info: this.request_friend[k],
                status: true
            }
            this.$emit("suggest", infoFriend)
            axios
                .post('follower/accept-friend', v)
                .then((res) => {
                    if (res.data.status) {
                        this.getRequestFriend();
                    } else {

                    }
                })
            // if (event) {
            //     event.preventDefault();
            // }
        },
        delRequest(v, k) {
            this.request_friend[k].friendStatus = true
            const infoFriend = {
                info: this.request_friend[k],
                status: true
            }
            this.$emit("del_suggest", infoFriend)
            axios
                .post('follower/delete-friend', v)
                .then((res) => {
                    if (res.data.status) {
                        this.getRequestFriend();
                    } else {

                    }
                });
            // if (event) {
            //     event.preventDefault();
            // }
        },
    },
}
</script>
<style >
@import './style.css'
</style>