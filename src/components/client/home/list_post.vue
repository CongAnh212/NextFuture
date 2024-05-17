<template>
    <template v-for="(v, k) in listPost">
        <div v-if="v.privacy !== 0">
            <div class="d-flex" style="position: relative">
                <div class="d-flex flex-column align-items-center">
                    <div class="circle-50" style="overflow: hidden">
                        <img :src="urlImg + v.avatar" style="object-fit: cover; width: 100%; height: 100%" alt="" />
                    </div>
                    <div class="flex-1 radius-10 my-1" style="border-left: 3px solid #3f3f3f4e; width: 0" />
                    <div class="circle flex-center" style="width: 1.75rem; height: 1.75rem; overflow: hidden">
                        <img :src="urlImg + myInfo.avatar" style="object-fit: cover; height: 100%; width: 100%"
                            alt="" />
                    </div>
                </div>
                <div class="flex-1 ps-3" style="position: relative">
                    <div class="flex-between">
                        <div class="d-flex flex-column">
                            <div class="d-flex align-items-center">
                                <router-link class="text-hover text-dark"
                                    :to="{ name: 'detailProfile', params: { username: v.username ? v.username : ' ' } }">
                                    <b style="color: #000; font-size: 1.1rem">{{ v.fullname }}</b>
                                </router-link>
                                <small class="flex-center">
                                    <i class="fa-solid fa-circle mx-1" style="font-size: 0.3em"></i>
                                    <div>
                                        <i v-if="v.privacy == 1" class="fas fa-globe-asia"></i>
                                        <i v-else-if="v.privacy == 2" class="fa-solid fa-user-group"></i>
                                        <i v-else-if="v.privacy == 3" class="fa-solid fa-user-xmark"></i>
                                        <i v-else class="fas fa-lock"></i>
                                    </div>
                                </small>
                            </div>
                            <span v-if="v.caption" class="f-500 text-dark" style=" white-space: pre-line;">
                                {{ v.caption }}
                            </span>
                        </div>
                        <div class="d-flex flex-column">
                            <div class="flex-center" style="height: 3rem">
                                <small>{{ formatTime(v.created_at) }}</small>
                                <div v-if="v.id_client == myInfo.id" class="dropdown">
                                    <i class="fas fa-ellipsis-h ms-1" data-bs-toggle="dropdown" aria-expanded="false"
                                        style="align-self: center; cursor: pointer"></i>
                                    <ul class="dropdown-menu" style="user-select: none;">
                                        <li data-bs-toggle="modal" data-bs-target="#editPostModal"
                                            @click="edit.post = Object.assign({}, v), edit.index = k">
                                            <a class="dropdown-item d-flex align-items-center">
                                                <i class="fa-solid fa-pen me-1"></i>
                                                Edit post
                                            </a>                             
                                        </li>
                                        <li data-bs-toggle="modal" data-bs-target="#editPrivacyModal"
                                            @click="handleClickPrivacy(v, k)">
                                            <a class="dropdown-item">
                                                <i class="fa-solid fa-lock me-1"></i>
                                                Edit privacy
                                            </a>
                                        </li>
                                        <li data-bs-toggle="modal" data-bs-target="#deletePostModal"
                                            @click="del.post = v, del.index = k">
                                            <div class="dropdown-item">
                                                <i class="fa-solid fa-x me-1"></i>
                                                Delete post
                                            </div>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Modal -->
                    <div class="modal fade " style="" id="editPrivacyModal" tabindex="-1"
                        aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Update privacy</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="w-100 d-flex mb-2 privacy-hover ps-2 align-items-center bg-hover"
                                        style="height: 65px;" @click="setPrivacy('rdoPublic')">
                                        <div class="bg-light circle d-flex me-2 justify-content-center align-items-center"
                                            style="width:55px;height:55px;"><i
                                                class="fas fa-globe-asia fa-2x text-dark"></i></div>
                                        <div class="d-flex justify-content-between align-items-center"
                                            style="width:calc(100% - 60px);">
                                            <div class="d-flex flex-column pt-3" style="user-select:none;">
                                                <h5><b style="font-weight:500;">Public</b></h5>
                                                <p>anyone on NF social networks</p>
                                            </div>
                                            <div><input v-model="edit_privacy" class="form-check-input me-2" value="1"
                                                    style="cursor:pointer;" name="privacy" type="radio" id="rdoPublic">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-100 d-flex mb-2 privacy-hover ps-2 align-items-center bg-hover"
                                        style="height: 65px;" @click="setPrivacy('rdoFriend')">
                                        <div class="bg-light circle d-flex me-2 justify-content-center align-items-center"
                                            style="width:55px;height:55px;"><i class="fas fa-users fa-2x text-dark"></i>
                                        </div>
                                        <div class="d-flex justify-content-between align-items-center"
                                            style="width:calc(100% - 60px);">
                                            <div class="d-flex flex-column pt-3" style="user-select:none;">
                                                <h5><b style="font-weight:500;">Friends</b></h5>
                                                <p>only your friends on the NF social network</p>
                                            </div>
                                            <div>
                                                <input v-model="edit_privacy" class="form-check-input me-2" value="2"
                                                    style="cursor:pointer;" name="privacy" type="radio" id="rdoFriend">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-100 d-flex mb-2 privacy-hover ps-2 align-items-center bg-hover"
                                        style="height: 65px;" @click="setPrivacy('rdoOnlyMe')">
                                        <div class="bg-light circle d-flex me-2 justify-content-center align-items-center"
                                            style="width:55px;height:55px;"><i class="fas fa-lock fa-2x text-dark"></i>
                                        </div>
                                        <div class="d-flex justify-content-between align-items-center"
                                            style="width:calc(100% - 60px);">
                                            <div class="d-flex flex-column pt-3" style="user-select:none;">
                                                <h5><b style="font-weight:500;">Only me</b></h5>
                                                <p>only you see on social networks</p>
                                            </div>
                                            <div>
                                                <input v-model="edit_privacy" class="form-check-input me-2" value="4"
                                                    style="cursor:pointer;" name="privacy" type="radio" id="rdoOnlyMe">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary " id="btnCloseModalPrivacy"
                                        data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary" id="updatePrivacy" disabled
                                        @click="updatePrivacy">Update</button>
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
                        <i v-else @click="unLikePost(v, k)"
                            class="fas fa-heart c-pointer bg-hover p-2 circle icon-liked" :id="'icon-liked-' + k"
                            style="color: #ff3040; margin-left: -10px"></i>
                        <i data-bs-toggle="modal" data-bs-target="#modalPost" @click="currentPost = v"
                            class="far fa-comment c-pointer bg-hover p-2 circle"></i>
                        <i class="far fa-paper-plane c-pointer bg-hover p-2 circle"></i>
                    </div>

                    <div class="d-dlex f-500">
                        <span v-if="v.likes > 0" class="likes">{{ v.likes }} likes</span>
                        <span v-if="v.likes > 0 && v.comments > 0"> - </span>
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
    <div class="modal fade" id="editPostModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header d-flex">
                    <div class=" flex-1 text-center">
                        <h1 class="modal-title " id="exampleModalLabel" style="font-size: 1.5rem;">Edit Post</h1>
                    </div>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body" v-if="edit.post">
                    <div class="d-flex mb-2">
                        <div class="avatar-3 me-2">
                            <img :src="urlImg + myInfo.avatar" alt="">
                        </div>
                        <div class="d-flex flex-column flex-1 text-dark">
                            <b>{{ myInfo.fullname }}</b>
                            <div class="dropdown">
                                <div class="bg-light px-2 c-pointer radius-5 d-flex align-items-center"
                                    data-bs-toggle="dropdown" aria-expanded="false"
                                    style="width: fit-content; padding: 0.01rem 1rem; user-select: none;">
                                    <div v-if="edit.post.privacy == 1">
                                        <i class="fas fa-globe-asia "></i>
                                        <span class="mx-2 f-500">Public</span>
                                    </div>
                                    <div v-else-if="edit.post.privacy == 2">
                                        <i class="fas fa-user-friends "></i>
                                        <span class="mx-2 f-500">Friends</span>
                                    </div>
                                    <div v-else-if="edit.post.privacy == 4">
                                        <i class="fas fa-lock "></i>
                                        <span class="mx-2 f-500">private</span>
                                    </div>
                                    <i class="fas fa-caret-down"></i>
                                </div>
                                <ul class="dropdown-menu text-dark c-pointer">
                                    <li @click="editPrivacy(1)">
                                        <span class="dropdown-item">
                                            <i class="fas fa-globe-asia me-2 " style="width: 1.1rem;" />
                                            <b>Public</b>
                                        </span>
                                    </li>
                                    <li @click="editPrivacy(2)">
                                        <span class="dropdown-item">
                                            <i class="fas fa-user-friends me-2 " style="width: 1.1rem;" />
                                            <b>Friends</b>
                                        </span>
                                    </li>
                                    <li @click="editPrivacy(4)">
                                        <span class="dropdown-item">
                                            <i class="fas fa-lock me-2 " style="width: 1.1rem;" />
                                            <b>private</b>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <textarea @input="disableBtnUpdate" v-model="edit.post.caption" class="form-control"
                        :style="{ maxHeight: '400px', overflowY: 'auto' }" rows="10" required="required">
                </textarea>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary btn-update-post" data-bs-dismiss="modal" disabled
                        @click="updatePost">Update</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="deletePostModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header d-flex">
                    <div class=" flex-1 text-center">
                        <h1 class="modal-title " id="exampleModalLabel" style="font-size: 1.5rem;">Delete Post</h1>
                    </div>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body f-500 text-dark" style="font-size: 1.3rem;">
                    Are you sure you want to delete this post?
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-danger" style="background-color: #ff3040;"
                        @click="deletePost(del.post, del.index)" data-bs-dismiss="modal">Delete</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ModalPost from "../profile/modalPost.vue";
import ViewImage from "./viewImage.vue";
import baseFunction from "../../../core/coreFunction";
import axios, { url } from "../../../core/coreRequest";

export default {
    components: { ViewImage, ModalPost },
    data() {
        return {
            currentPost: this.listPost[0],
            urlImg: url,
            indexOpenModal: 0,
            typeClick: 0,
            del: {},
            edit: {},
            edit_privacy: null,
            index: null,
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
    watch: {
        edit_privacy(a) {
            $('#updatePrivacy').prop('disabled', a == this.listPost[this.index].privacy);
        }
    },
    mounted() {
    },
    methods: {
        updatePrivacy() {
            axios
                .post('post/update-privacy', { privacy: this.edit_privacy, id: this.listPost[this.index].id })
                .then((res) => {
                    if (res.data.status == 1) {
                        this.listPost[this.index].privacy = this.edit_privacy
                        $('#btnCloseModalPrivacy').click();
                    }
                })
        },
        updatePost() {
            axios
                .post('post/update', this.edit.post)
                .then((res) => {
                    if (res.data.status) {
                        this.listPost[this.edit.index].privacy = res.data.post.privacy
                        this.listPost[this.edit.index].caption = res.data.post.caption
                    }
                })
        },
        deletePost(v, k) {
            axios
                .post('post/delete', v)
                .then((res) => {
                    if (res.data.status) {

                        this.listPost.splice(k, 1)
                    }
                    baseFunction.displaySuccess(res)
                })
        },
        setPrivacy(privacy) {
            $('#' + privacy).click();
            setTimeout(() => {
                $('#' + privacy).click();
                console.log('l123l123l12');
            }, 1);
        },
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
            axios.post("post/like", v);
        },
        unLikePost(v, k) {
            this.listPost[k].liked = !this.listPost[k].liked;
            this.listPost[k].likes--;
            $(".icon-liked").removeClass("large");
            axios.post("post/un-like", v);
        },
        editPrivacy(a) {
            this.edit.post.privacy = a
            this.disableBtnUpdate()
        },
        disableBtnUpdate() {
            if (this.edit.post.privacy !== this.listPost[this.edit.index].privacy ||
                ((this.edit.post.caption || '').trim() !== (this.listPost[this.edit.index].caption || '').trim())) {
                $('.btn-update-post').prop('disabled', false);
            } else {
                $('.btn-update-post').prop('disabled', true);
            }

        },
        handleClickPrivacy(v, k) {
            this.index = k;
            this.edit_privacy = v.privacy
            if (v.privacy == 1) {
                this.setPrivacy('rdoPublic')
            } else if (v.privacy == 2) {
                this.setPrivacy('rdoFriend')
            } else {
                this.setPrivacy('rdoOnlyMe')
            }
        }
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
