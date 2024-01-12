<template>
    <div class="d-flex align-items-center">
        <router-link :to="{ name: 'friends' }">
            <div class="me-3 arrow d-flex justify-content-center align-items-center">
                <i class="fa-solid fa-arrow-left text-secondary" style="font-size: 17px;"></i>
            </div>
        </router-link>
        <div>
            <span>Friend</span>
            <h4>Suggest</h4>
        </div>
    </div>
    <div>
        People you may know
    </div>
    <div style="overflow-y: auto; max-height: calc(100vh - 10.5rem); ">
        <div class="mt-2 me-1" v-for="(v, k) in list_friend">
            <router-link :to="{ name: 'detailProfile.suggestion', params: { username: v.username } }">
                <div class="bg-hover d-flex p-2 w-100 h-100" style="overflow: hidden;">
                    <div class="flex-center ">
                        <div style='width: 3rem; height: 3rem; overflow: hidden;' class="circle flex-center me-1">
                            <img :src="urlImage + v.avatar" alt="profile-img"
                                style=" object-fit:cover;width: 100%; height: 100%;">
                        </div>
                        <div style="flex:1">
                            <div style="line-height: 1.25rem;">
                                <b class="text-secondary ">{{ v.fullname }}</b> <br>
                            </div>
                            <span v-if="v.mutual > 0" class="text-secondary">{{ v.mutual }} mutual friends</span>
                            <div class=" d-flex w-100 ">
                                <template v-if="v.friendStatus == false">
                                    <div class="me-1">
                                        <button class="btn btn-primary text-nowrap" @click="addFriend(v, k)" style="width: 100px">
                                            Add friend</button>
                                    </div>
                                    <div class="me-1">
                                        <button class="btn btn-secondary" style="width: 100px;"
                                            @click="del(k, $event)">Delete</button>
                                    </div>
                                </template>
                                <template v-else>
                                    <div class="me-1 w-100">
                                        <button class="btn btn-secondary w-100" @click="unRequest(v, k)">
                                            Cancel
                                        </button>
                                    </div>
                                </template>
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
            list_friend: [],
            urlImage: url,
            a: 0,
        }
    },
    props: {
        sentFriendProfile: {
            type: Object,
            required: true,
        }
    },
    watch: {
        sentFriendProfile(newData, oldData) {
            // console.log('newData: ', newData);
            // console.log('oldData: ', oldData);
            const newIndex = this.list_friend.findIndex(friend => friend.id === newData.info.id);
            // const oldIndex = this.list_friend.findIndex(friend => friend.id === oldData.info.id);
            this.list_friend[newIndex].friendStatus = newData.status
        },
    },
    mounted() {
        this.getSuggest();
    },
    methods: {
        getSuggest() {
            axios.get('dataFull').then((res) => {
                // Khởi tạo friendStatus cho mỗi người bạn là 'notAdded'
                this.list_friend = res.data.data.map((friend) => ({
                    ...friend,
                    friendStatus: false,
                }));
            });
        },
        addFriend(v, k) {
            this.list_friend[k].friendStatus = true
            const infoFriend = {
                info: this.list_friend[k],
                status: true
            }
            this.$emit("request_friend", infoFriend)
            axios
                .post('follower/add-friend', v)
                .then((res) => {
                    if (res.data.status) {
                    }
                })
        },
        unRequest(v, k) {
            this.list_friend[k].friendStatus = false
            const infoFriend = {
                info: this.list_friend[k],
                status: false
            }
            this.$emit('request_friend', infoFriend)
            axios
                .post('follower/cancel-friend', v)
                .then((res) => {
                    if (res.data.status) {
                    }
                })

        },
        del(k, event) {
            this.list_friend.splice(k, 1);
            if (event) {
                event.preventDefault();
            }
        }
    },
}
</script>
<style >
@import './style.css';
</style>