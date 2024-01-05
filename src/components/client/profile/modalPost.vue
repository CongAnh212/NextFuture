<template >
    <div class="modal fade" id="modalPost" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xxl  modal-dialog-centered ">
            <div class="modal-content" style="position: relative;">
                <div style="position: absolute; top:-25px; right: -10%;" class="text-white">
                    <div type="button" data-bs-dismiss="modal" aria-label="Close"
                        style="margin-right: -50px; cursor: pointer;">
                        <i class="fa-solid fa-xmark text-white" style="font-size: 25px;"></i>
                    </div>
                </div>
                <div class="d-flex bg-white" style="height: 90vh;width: 100%; ">
                    <div style="height: 100%; overflow: hidden;aspect-ratio: 1/1; cursor: pointer; position: relative; ">
                        <img style="object-fit: cover; width: 100%;height: 100%;"
                            src="https://media-cdn-v2.laodong.vn/storage/newsportal/2023/10/26/1259495/Doona-Suzy.jpg"
                            alt="">
                    </div>
                    <div style="flex:1;">
                        <div class=" d-flex py-2 px-2 w-100">
                            <div class="d-flex align-items-center" style="flex:1">
                                <img src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2023/12/25/photo-4-1703515345299422557611.jpg"
                                    class="img-fluid rounded-circle me-2" alt="user"
                                    style="height: 35px; width: 35px;margin-left: 0px;">
                                <span class="text-dark f-500" style="font-weight: 600; font-size: 17px;">
                                    {{ post.fullname }}
                                </span>
                            </div>
                            <div>
                                <i class="fa-solid fa-ellipsis text-dark" style="cursor: pointer;"></i>
                            </div>
                        </div>
                        <div class="px-2 text-dark f-500" style="font-size: 15px; font-weight: 400;">
                            {{ post.caption }}
                        </div>
                        <div class="px-2 pt-3 pb-2">
                            <div class="flex-between">
                                <div v-if="post.likes > 2" style="font-size: 15px; font-weight: 400;">
                                    {{ post.likes }} likes including 
                                    <b style="cursor: pointer;">tomngu</b>
                                    and
                                    <b style="cursor: pointer;">others</b>
                                </div>
                                <div v-else style="font-size: 15px; font-weight: 400;">
                                    {{ post.likes }} likes 
                                </div>
                                <div>
                                    <span style="font-size: 15px;  font-weight: 500;" class="me-1">200</span>
                                    <i class="fa-regular fa-comment" style="font-size: 15px; "></i>
                                </div>
                            </div>
                        </div>
                        <hr class="m-0">
                        <div class="px-4 py-1">
                            <div class="d-flex" >
                                <div style="flex:1"  class=" bg-hover text-center c-pointer" @click="post.liked ? unLikePost() : likePost()"> 
                                    <i v-if="!post.liked" class="far fa-heart  c-pointer   icon-like"
                                         style="margin-left: -10px; font-size: 18px;"></i>
                                    <i v-else class="fas fa-heart  c-pointer   icon-liked" 
                                        style="color: #FF3040; margin-left: -10px; font-size: 18px;"></i>
                                    <span style="font-size: 18px; cursor: pointer; font-weight: 500; "
                                        class="ms-2 del-event">Likes</span>
                                </div>
                                <div style="flex:1" class="text-center c-pointer bg-hover">
                                    <i class="fa-regular fa-comment" style="font-size: 18px; cursor: pointer;"></i>
                                    <span style="font-size: 18px; cursor: pointer; font-weight: 500;"
                                        class="ms-2 del-event">Comments</span>
                                </div>
                                <div style="flex:1" class="text-center c-pointer bg-hover">
                                    <i class="fa-regular fa-paper-plane" style="font-size: 18px; cursor: pointer;"></i>
                                    <span style="font-size: 18px; cursor: pointer; font-weight: 500;"
                                        class="ms-2 del-event" >Share</span>
                                </div>
                            </div>
                        </div>
                        <hr class="m-0">
                        <div class=" d-flex py-3 px-2 w-100">
                            <div class="d-flex" style="flex:1">
                                <div style="height: 35px; width: 35px;margin-left: 0px; overflow: hidden;"
                                    class="circle me-2">
                                    <img src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2023/12/25/photo-4-1703515345299422557611.jpg"
                                        class="img-fluid me-2" alt="user" style="object-fit: cover; width: 100%;">
                                </div>
                                <div class="text-dark f-500" style="flex:1;margin-top: -7px;">
                                    <span style="font-weight: 600; font-size: 17px;">phtsnh26</span>
                                    <br>
                                    <div class="d-flex" style="line-height: 15px; padding-left: 15px;">
                                        <span style="flex:1">đẹp trai vl</span>
                                        <i class="fa-regular fa-heart" style="cursor: pointer;"></i>
                                    </div>
                                    <div class="d-flex pt-1" style="gap: 5%;">
                                        <small class="text-secondary">1d</small>
                                        <small class="text-secondary" style="font-weight: bold; cursor: pointer;">1
                                            likes</small>
                                        <small class="text-secondary"
                                            style="font-weight: bold; cursor: pointer;">Reply</small>
                                    </div>
                                    <div class="d-flex align-items-center" style="gap: 5%;cursor: pointer;">
                                        <div style="border: 1px solid #797979; width: 2rem; height: 0;">
                                        </div>
                                        <small class="text-secondary " style=" font-weight: bold;">
                                            View replies (8)
                                        </small>
                                    </div>
                                    <div class="pt-3" style="flex:1">
                                        <div class="d-flex mb-2">
                                            <div style="height: 35px; width: 35px;margin-left: 0px; overflow: hidden;"
                                                class="circle me-2">
                                                <img src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2023/12/25/photo-4-1703515345299422557611.jpg"
                                                    class="img-fluid me-2" alt="user"
                                                    style="object-fit: cover; width: 100%;">
                                            </div>
                                            <div class="text-dark f-500" style="flex:1;margin-top: -7px;">
                                                <span style="font-weight: 600; font-size: 17px;">phtsnh26</span>
                                                <br>
                                                <div class="d-flex align-items-center"
                                                    style="line-height: 15px; padding-left: 15px;">
                                                    <span style="flex:1">đẹp trai vl</span>
                                                    <i class="fa-regular fa-heart" style="cursor: pointer;"></i>
                                                </div>
                                                <div class="d-flex pt-1" style="gap: 5%;">
                                                    <small class="text-secondary">1d</small>
                                                    <small class="text-secondary"
                                                        style="font-weight: bold; cursor: pointer;">1
                                                        likes
                                                    </small>
                                                    <small class="text-secondary"
                                                        style="font-weight: bold; cursor: pointer;">Reply</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        post: {
            type: Object,
        }
    },
    watch: {
        post(newValue, oldValue) {

        }
    },
    data() {
        return {
            //
        }
    },
    mounted() {
    },
    methods: {
        likePost() {
            this.post.liked = !this.post.liked
            this.post.likes++
            setTimeout(() => {
                $('icon-liked').addClass('large')
            }, 1);
            axios
                .post('post/like', this.post)
        },
        unLikePost() {
            this.post.liked = !this.post.liked
            this.post.likes--
            $('.icon-liked').removeClass('large')
            axios
                .post('post/un-like', this.post)
        }
    },
}
</script>
<style>
.modal-xxl {
    max-width: 80%;
}
</style>