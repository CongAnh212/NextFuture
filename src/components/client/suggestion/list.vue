<template >
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
    <div class="mt-2" v-for="(v, k) in list_friend">
        <router-link :to="{ name: 'friends' }">
            <div class="hello d-flex p-2 w-100 h-100" style="overflow: hidden;">
                <div class="d-flex ">
                    <img :src="urlImage + v.avatar" class="img-fluid rounded-circle me-2" alt="user"
                        style="height: 50px; width: 50px; margin-left: 2px;">
                    <div style="width: 200px;">
                        <b class="text-secondary text-nowrap">{{ v.fullname }}</b> <br>
                        <span class="text-secondary">1 mutual</span>
                        <div class="text-nowrap d-flex w-100">
                            <template v-if="v.friendStatus == false">
                                <div class="me-1">
                                    <button class="btn btn-primary" @click="addFriend(v, k, $event)" style="width: 100px">
                                        Add friend</button>
                                </div>
                                <div class="me-1">
                                    <button class="btn btn-secondary" style="width: 100px;"
                                        @click="del(k, $event)">Delete</button>
                                </div>
                            </template>
                            <template v-else>
                                <div class="me-1 w-100">
                                    <button class="btn btn-secondary w-100" @click="unRequest(v, k, $event)">
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
</template>
<script>
import axios, { url } from '../../../core/coreRequest';
export default {
    data() {
        return {
            list_friend: [],
            urlImage: url,
        }
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