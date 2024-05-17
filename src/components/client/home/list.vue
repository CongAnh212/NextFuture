<template>
    <div v-if="myInfo">
        <li>
            <router-link :to="{ name: 'detailProfile', params: { username: myInfo.username ? myInfo.username : ' ' } }"
                class="px-0 mt-3 user-hover p-1">
                <div class="p-1 flex-center">
                    <div style="width: 2.75rem; height: 2.75rem; overflow: hidden;" class="circle flex-center me-3">
                        <img :src="urlImg + myInfo.avatar" alt="user"
                            style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                    <div class="flex-center">
                        <span class="text-dark" style="font-weight: 600; font-size: 1.5em;">
                            {{ myInfo.fullname }}
                        </span>
                    </div>
                </div>
            </router-link>
        </li>
        <li>
            <router-link :to="{ name: 'friends' }">
                <i class="fa-solid fa-user-group me-4" style="font-size: 17px;"></i>
                <span style="font-size: 18px;">Friends</span>
            </router-link>
        </li>
        <li>
            <router-link :to="{ name: 'message' }">
                <i class="fa-brands fa-facebook-messenger me-4" style="font-size: 17px;"></i>
                <span style="font-size: 18px;">Message</span>
            </router-link>
        </li>
        <li>
            <router-link :to="{ name: 'group' }">
                <i class="fa-solid fa-users me-4" style="font-size: 17px;"></i>
                <span style="font-size: 18px;">Group</span>
            </router-link>
        </li>
        <hr>
        <h4 v-if="list_group.length > 0" style="margin: 0px;">
            <b>
                Your shortcut
            </b>
        </h4>
        <li v-for="(v, k) in list_group">
            <router-link :to="{ name: 'home-group', params: { id_group: v.id == null ? ' ' : v.id } }"
                class="px-0 d-flex m-0 p-2 bg-hover px-1">
                <div style="width: 3rem; height: 3rem; overflow: hidden;" class="radius-10 me-3">
                    <img :src="urlImg + v.cover_image" class="img-fluid"
                        style=" object-fit: cover; height: 100%; width: 100%;">
                </div>
                <div style="flex:1;max-width: 80%;">
                    <span style="font-weight: 600; font-size: 15px; color: rgb(119,125,116);">
                        {{ v.group_name }}
                    </span>
                </div>
            </router-link>
        </li>
        <div v-if="list_group.length > 0">
            <li v-if="showBtn">
                <a class="btn text-dark w-100 bg-hover p-1" style="font-size: 17px; padding-left: 0px;"
                    @click="seeMore()">
                    <i v-if="limit_group >= 10" class="fa-solid fa-circle-chevron-up" style="font-size: 35px;"></i>
                    <i v-else class="fa-solid fa-circle-chevron-down" style="font-size: 35px;"></i>
                    <span class="ms-3" style="font-weight: 600;">{{ limit_group >= 10 ? 'Hide less' : 'See more'
                        }}</span>
                </a>
            </li>
        </div>
        <div v-else></div>
    </div>
</template>
<script>
import axios, { url } from "../../../core/coreRequest.js";
export default {
    data() {
        return {
            stories: [],
            urlImg: url,
            post: {
                images: []
            },
            privacy: '1',
            privacyMapping: {
                1: '#privacy-1',
                2: '#privacy-2',
                3: '#privacy-3',
                4: '#privacy-4'
            },
            list_post: [],
            list_friend: [],
            list_comment: [],
            comments: [],
            index_friend_tags: [],
            id_tags: '',
            check: {
                images: "post/1700648799_3-29.jpg,post/1700648799_login.jpg",
            },
            list_group: [],
            limit_group: 5,
            total_group: [],
            showBtn: false,
        };
    },
    props: {
        myInfo: {
            type: Object,
            required: true
        }
    },
    watch: {
        total_group(newValue, oldValue) {
            if (oldValue) {
                if (newValue.length > 5) this.showBtn = true;

            }
        }
    },
    mounted() {
        this.getAllGroup();
    },
    methods: {
        getAllGroup() {
            axios
                .get('groups/data-all-group-participated')
                .then((res) => {
                    this.total_group = res.data.data
                    this.list_group = res.data.data.slice(0, this.limit_group);
                })
        },
        seeMore() {
            if (this.limit_group >= 10) {
                this.limit_group -= 5;
            }
            else
                this.limit_group += 5;
            this.list_group = this.total_group.slice(0, this.limit_group);
        }
    },
}
</script>
<style>
@import './style.css'
</style>