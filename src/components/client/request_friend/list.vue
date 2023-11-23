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
    <div>{{ Object.keys(request_friend).length }} friend requests</div>
    <div class="mt-2" v-for="(v, k) in request_friend">
        <router-link :to="{ name: 'detailProfile.request_friend', params: { username: v.username } }">
            <div class="d-flex align-items-center ">
                <div class="hello d-flex p-2  w-100 h-100" style="overflow: hidden;">
                    <img :src="urlImage + v.avatar" class="img-fluid rounded-circle me-2" alt="user"
                        style="height: 50px; width: 50px; margin-left: 2px;">
                    <div>
                        <b class="text-secondary text-nowrap">{{ v.fullname }}</b> <br>
                        <span class="text-secondary">1 mutual</span>
                        <div class="text-nowrap">
                            <button class="btn btn-primary me-1" style="width: 100px;" @click="confirm(v, $event)">
                                Confirm
                            </button>
                            <button class="btn btn-secondary" style="width: 100px;" @click="delRequest(v, $event)">
                                Delete
                            </button>
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
            request_friend: [],
            urlImage: url,
        }
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
    },
}
</script>
<style >
@import './style.css'
</style>