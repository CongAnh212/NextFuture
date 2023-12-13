<template>
    <li>
        <a href="/profile-client" class="px-0 mt-3">
            <img :src="urlImg + myInfo.avatar" class="img-fluid rounded-circle me-3 " alt="user"
                style="height: 35px; width: 35px;margin-left: 5px;">
            <div>
                <span class="text-dark" style="font-weight: 600; font-size: 19px;">{{
                    myInfo.fullname
                }}</span>
            </div>
        </a>
    </li>
    <li>
        <router-link :to="{ name: 'friends' }">
            <i class="fa-solid fa-user me-4"  style="font-size: 23px;"></i>
            <span style="font-size: 18px;">Friends</span>
        </router-link>
    </li>
    <li>
        <a href="../app/group.html" class=" ">
            <i class="fa-brands fa-facebook-messenger me-4" style="font-size: 23px;"></i>
            <span style="font-size: 18px;">Message</span>
        </a>
    </li>
    <li>
        <router-link :to="{ name: 'group' }">
            <i class="fa-solid fa-users me-4" style="font-size: 23px;"></i>
            <span style="font-size: 18px;">Group</span>
        </router-link>
    </li>
    <li class=" ">
        <a href="../app/todo.html" class=" ">
            <i class="fa-solid fa-flag me-4" style="font-size: 23px;"></i>
            <span style="font-size: 18px;">Page</span>
        </a>
    </li>
</template>
<script>
import axios, { url } from "../../../core/coreRequest";
export default {
    data() {
        return {
            myInfo: {},
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
            isView: false,
        };
    },
    mounted() {
        this.getInfo();
    },
    methods: {
        getInfo() {
            axios
                .get('profile/data')
                .then((res) => {
                    this.myInfo = res.data.myInfo;
                });
        },
    },
}
</script>
<style></style>