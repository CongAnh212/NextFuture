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
            <a class="search-link flex-center h-100" href="#">
                <i class="ri-search-line"></i>
            </a>
            <input v-model="key_search" type="text" class="text search-input" placeholder="Search friend..."
                style="border-radius: 50px;" @input="search_name()">
        </div>
    </div>
    <hr style="margin-top: 15px; margin-bottom: 4px;">
    <div style="overflow-y:auto; max-height: calc(100vh - 12.9rem); ">
        <span class="ms-1 f-500">{{ Object.keys(all_friend).length }} friends</span>
        <div class=" me-1" v-for="(v, k) in list_search">
            <router-link :to="{ name: 'detailProfile.all_friends', params: { username: v.username } }">
                <div class="bg-hover d-flex p-2 w-100 h-100" style="overflow: hidden;">
                    <div class="flex-center">
                        <div style='width: 3rem; height: 3rem; overflow: hidden;' class="circle flex-center me-1">
                            <img :src="urlImage + v.avatar" alt="profile-img" class=" img-fluid"
                                style=" object-fit:cover;width: 100%; height: 100%;">
                        </div>
                        <div :class="{ 'd-flex flex-center': v.mutual == 0 }">
                            <b class="text-secondary">{{ v.fullname }}</b> <br>
                            <span v-if="v.mutual > 0" class="text-secondary">{{ v.mutual }} mutual friends</span>
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
            all_friend: [],
            urlImage: url,
            key_search: '',
            list_search: [],
        }
    },
    props: {
        delFriendProfile: {
            type: Object,
            required: true,
        },
    },
    watch: {
        delFriendProfile(newData, oldData) {
            const newIndex = this.all_friend.findIndex(friend => friend.id === newData.info.id);
            this.all_friend.splice(newIndex, 1)
        },
        all_friend(newData, oldData) {
            if (oldData) {
                this.key_search = ""
                this.list_search = this.all_friend
            }
        }
    },
    mounted() {
        this.getAllFriend();
        this.list_search = this.all_friend
        this.key_search = ""
    },
    methods: {
        getAllFriend() {
            axios.get('data-all-friend').then((res) => {
                if (res.data.status) {
                    this.all_friend = res.data.data;
                }
            });
        },
        search_name() {
            const lowercaseSearch = this.key_search.toLowerCase();

            this.list_search = this.all_friend.filter((value) => {
                const lowercaseFullname = value.fullname.toLowerCase();
                return lowercaseFullname.includes(lowercaseSearch);
            });
        },
    },
}
</script>
<style>
@import './style.css'
</style>