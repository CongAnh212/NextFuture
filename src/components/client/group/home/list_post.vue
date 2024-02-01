<template>
    <template v-for="(v, k) in listPost">
        <div>
            <div class="d-flex" style="position: relative">
                <div class="d-flex flex-column align-items-center">
                    <div class="circle-50" style="overflow: hidden">
                        <img v-if="!v.privacy" :src="urlImg + v.avatar" style="object-fit: cover; width: 100%; height: 100%"
                            alt="" />
                        <img v-else src="../../../../assets/img/avatar-an-danh.png"
                            style="object-fit: cover; width: 100%; height: 100%" alt="" />
                    </div>
                    <div class="flex-1 radius-10 my-1" style="border-left: 3px solid #3f3f3f4e; width: 0" />
                    <div class="circle flex-center" style="width: 1.75rem; height: 1.75rem; overflow: hidden">
                        <img :src="urlImg + myInfo.avatar" style="object-fit: cover; height: 100%; width: 100%" alt="" />
                    </div>
                </div>
                <div class="flex-1 ps-3" style="position: relative">
                    <div class="flex-between">
                        <div class="d-flex flex-column">
                            <div class="flex-center ">
                                <router-link v-if="!v.privacy" class="text-hover text-dark" :to="{
                                    name: 'detailProfile',
                                    params: { username: v.username ? v.username : ' ' },
                                }">
                                    <b style="color: #000; font-size: 1.1rem">
                                        {{ v.fullname }}</b>
                                </router-link>
                                <div v-else class="text-hover text-dark c-pointer">
                                    <b style="color: #000; font-size: 1.1rem">Anonymous member</b>
                                </div>
                                <small class="flex-center">
                                    <i class="fa-solid fa-circle mx-1" style="font-size: 0.3em"></i>
                                    <i class="fas fa-users"></i>
                                </small>
                            </div>
                            <span v-if="v.caption" class="f-500 text-dark">{{ v.caption }}</span>
                        </div>
                        <div class="d-flex flex-column">
                            <div class="flex-center" style="height: 3rem">
                                <small v-if="v.post_approval == 1">{{ formatTime(v.time_approve) }}</small>
                                <small v-else>{{ formatTime(v.created_at) }}</small>
                                <div v-if="v.id_client == myInfo.id" class="dropdown">
                                    <i class="fas fa-ellipsis-h ms-1" data-bs-toggle="dropdown" aria-expanded="false"
                                        style="align-self: center; cursor: pointer"></i>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a class="dropdown-item d-flex align-items-center" href="#">
                                                <i class="fa-solid fa-pen me-1"></i>
                                                Edit post
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#">
                                                <i class="fa-solid fa-lock me-1"></i>
                                                Edit privacy
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#">
                                                <i class="fa-solid fa-x me-1"></i>
                                                Delete post
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <view-image v-if="v.images" :images="v.images" :k="k" class="mt-1" style="
                            position: relative;
                            left: calc(-100px + 1.25rem);
                            width: calc(100% + 80px);
                        " @openModal="getIndexOpenModal" />

                    <div class="d-flex" style="gap: 1px; font-size: 1.5rem">
                        <i v-if="!v.liked" @click="likePost(v, k)"
                            class="far fa-heart c-pointer bg-hover p-2 circle icon-like" style="margin-left: -10px"></i>
                        <i v-else @click="unLikePost(v, k)" class="fas fa-heart c-pointer bg-hover p-2 circle icon-liked"
                            :id="'icon-liked-' + k" style="color: #ff3040; margin-left: -10px"></i>
                        <i data-bs-toggle="modal" data-bs-target="#modalPost" @click="currentPost = v"
                            class="far fa-comment c-pointer bg-hover p-2 circle"></i>
                        <i class="far fa-paper-plane c-pointer bg-hover p-2 circle"></i>
                    </div>

                    <div class="d-dlex f-500">
                        <span v-if="v.likes > 0" class="likes">{{ v.likes }} likes</span>
                        <span v-if="v.likes > 0 && v.comments > 0">- </span>
                        <span data-bs-toggle="modal" data-bs-target="#modalPost" @click="currentPost = v"
                            v-if="v.comments > 0" class="comments">{{ v.comments }} comments</span>
                        <span data-bs-toggle="modal" data-bs-target="#modalPost" class="btnOpenModalComment"></span>
                    </div>
                </div>
            </div>
            <hr class="my-3" />
        </div>
    </template>
    <div v-if="currentPost !== undefined">
        <ModalPost :post="currentPost" :index="indexOpenModal" />
    </div>
</template>
<script>
import ModalPost from "./modalPost.vue";
import ViewImage from "../../home/viewImage.vue";
import baseFunction from "../../../../core/coreFunction";
import axios, { url } from "../../../../core/coreRequest";

export default {
    components: { ViewImage, ModalPost },
    data() {
        return {
            currentPost: this.listPost[0],
            urlImg: url,
            indexOpenModal: 0,
            typeClick: 0,
        };
    },
    props: {
        listPost: {
            type: Array,
            required: true,
        },
        myInfo: {
            type: Object,
        },
    },
    mounted() {
    },
    methods: {
        test() { },
        // handleUpdateTypeClick(value) {
        //     this.typeClick = 0
        // },
        getIndexOpenModal(value) {
            this.typeClick = 1;
            this.indexOpenModal = value.index;
            this.currentPost = this.listPost[value.k];
            setTimeout(() => {
                $(".btnOpenModalComment").click();
            }, 1);
            // this.typeClick = 0
        },
        formatTime(time) {
            return baseFunction.hoursDifference(time);
        },
        likePost(v, k) {
            this.listPost[k].liked = !this.listPost[k].liked;
            this.listPost[k].likes++;
            setTimeout(() => {
                $("#icon-liked-" + k).addClass("large");
            }, 1);
            axios.post("groups/post/like", v);
        },
        unLikePost(v, k) {
            this.listPost[k].liked = !this.listPost[k].liked;
            this.listPost[k].likes--;
            $(".icon-liked").removeClass("large");
            axios.post("groups/post/un-like", v);
        },
    },
};
</script>
<style scoped>
.likes:hover,
.comments:hover {
    text-decoration: underline;
    cursor: pointer;
    font-weight: 600;
}

.icon-liked {
    transition: all 0.3s ease;
    transform: scale(1);
}

.large {
    transform: scale(1);
    animation: handleHeart 0.3s ease;
}

@keyframes handleHeart {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.2);
    }

    100% {
        transform: scale(1);
    }
}
</style>
