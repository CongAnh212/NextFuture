<template >
    <template v-for="(v, k) in listPost">
        <div class="d-flex " style="position: relative;">
            <div class=" d-flex flex-column align-items-center ">
                <div class="circle-50" style="overflow: hidden;">
                    <img src="http://localhost:8000/img/avatar_female.jpg" style="object-fit: cover; width: 100%;" alt="">
                </div>
                <div class="flex-1  radius-10 my-1" style="border-left: 3px solid #3f3f3f4e;width: 0; " />
                <div class="circle" style="width: 27px; height: 27px; overflow: hidden;">
                    <img src="http://localhost:8000/img/avatar_female.jpg" style="object-fit: contain; height: 100%;"
                        alt="">
                </div>
            </div>
            <div class=" flex-1 ps-3 " style="position: relative;">
                <div class="flex-between">
                    <span><b style="font-size: ;">{{ v.fullname }}</b></span>
                    <div class="d-flex ">
                        <small>{{ formatTime(v.created_at) }}</small>
                        <i class="fas fa-ellipsis-h mx-2 " style="align-self: center; cursor: pointer;"></i>
                    </div>
                </div>
                <span class="f-500 text-dark">{{ v.caption }}
                </span>
                <view-image v-if="v.images" :images="v.images" class="mt-1" style="position: relative; left: calc(-100px + 1.25rem);
                    width: calc(100%  + 80px);" />

                <div class="d-flex" style="gap: 1px; font-size: 1.5rem;">
                    <i v-if="!v.liked" @click="likePost(v, k)" class="far fa-heart  c-pointer bg-hover p-2 circle icon-like"
                        style="margin-left: -10px;"></i>
                    <i v-else @click="unLikePost(v, k)" class="fas fa-heart  c-pointer bg-hover p-2 circle icon-liked"
                        :id="'icon-liked-' + k" style="color: #FF3040; margin-left: -10px;"></i>
                    <i data-bs-toggle="modal" data-bs-target="#modalPost" @click="index = k"
                        class="far fa-comment c-pointer bg-hover p-2 circle"></i>
                    <i class="far fa-paper-plane c-pointer bg-hover p-2 circle"></i>
                </div>
                <ModalPost :post="listPost[index]" />

                <div class="d-dlex f-500">
                    <span class="likes">{{ v.likes }} likes</span> - <span class="comments">1k comments</span>
                </div>
            </div>
        </div>
        <hr class="my-3 ">
    </template>
</template>
<script>
import ModalPost from '../profile/modalPost.vue';
import ViewImage from './viewImage.vue';
import baseFunction from '../../../core/coreFunction';
import axios from '../../../core/coreRequest';
export default {
    components: { ViewImage, ModalPost },
    data() {
        return {
            index: 0,
        }
    },
    props: {
        listPost: {
            type: Array,
            required: true,
        }
    },
    watch: {

    },
    mounted() {
        // console.log(this.listPost);
    },
    methods: {
        formatTime(time) {
            return baseFunction.hoursDifference(time);
        },
        likePost(v, k) {
            this.listPost[k].liked = !this.listPost[k].liked
            this.listPost[k].likes++
            setTimeout(() => {
                $('#icon-liked-' + k).addClass('large')
            }, 1);
            axios
                .post('post/like', v)
        },
        unLikePost(v, k) {
            this.listPost[k].liked = !this.listPost[k].liked
            this.listPost[k].likes--
            $('.icon-liked').removeClass('large')
            axios
                .post('post/un-like', v)
        }
    },
}
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
    animation: handleHeart .3s ease;
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