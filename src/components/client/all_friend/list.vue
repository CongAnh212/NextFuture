<template>
    <div class="d-flex align-items-center">
        <router-link :to="{ name: 'friends' }">
            <div class="me-3 arrow d-flex justify-content-center align-items-center">
                <i class="fa-solid fa-arrow-left text-secondary" style="font-size: 17px;"></i>
            </div>
        </router-link>
        <div>
            <span>Friend</span>
            <h4>All friends</h4>
        </div>
    </div>
    <div class="iq-search-bar device-search w-100 mt-1 mb-1">
        <div action="#" class="searchbox w-100">
            <a class="search-link" href="#">
                <i class="ri-search-line"></i>
            </a>
            <input type="text" class="text search-input" placeholder="Search friend..." style="border-radius: 50px;">
        </div>
    </div>
    <hr style="margin-top: 15px; margin-bottom: 4px;">
    <span>{{ Object.keys(all_friend).length }} friends</span>
    <div class="mt-2" v-for="(v, k) in all_friend">
        <router-link :to="{ name: 'detailProfile.all_friends', params: { username: v.username } }">
            <div class="hello d-flex p-2 w-100 h-100" style="overflow: hidden;">
                <div class="d-flex  ">
                    <img :src="urlImage + v.avatar" class="img-fluid rounded-circle me-2" alt="user"
                        style="height: 50px; width: 50px; margin-left: 2px;">
                    <div>
                        <b class="text-secondary text-nowrap">{{ v.fullname }}</b> <br>
                        <span class="text-secondary">1 mutual</span>
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
            all_friend: [],
            urlImage: url,
        }
    },
    mounted() {
        this.getAllFriend();
    },
    methods: {
        getAllFriend() {
            axios.get('data-all-friend').then((res) => {
                if (res.data.status) {
                    this.all_friend = res.data.data;
                } else {

                }
            });
        },
    },
}
</script>
<style>
@import './style.css'
</style>