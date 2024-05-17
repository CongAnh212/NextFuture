<template>
    <div v-if="post" class="d-flex justify-content-center">
        <div style="width: 40%;" class="bg-white p-2 mt-3 radius-7 bg-outstanding">
            <div>
                <div class="d-flex" style="position: relative">
                    <div class="d-flex flex-column align-items-center">
                        <div class="circle-50" style="overflow: hidden">
                            <img :src="urlImg + post.avatar" style="object-fit: cover; width: 100%; height: 100%"
                                alt="" />
                        </div>
                        <div class="flex-1 radius-10 my-1" style="border-left: 3px solid #3f3f3f4e; width: 0" />
                        <div class="circle flex-center" style="width: 1.75rem; height: 1.75rem; overflow: hidden">
                            <img :src="urlImg + post.avatar" style="object-fit: cover; height: 100%; width: 100%"
                                alt="" />
                        </div>
                    </div>
                    <div class="flex-1 ps-3" style="position: relative">
                        <div class="flex-between">
                            <div class="d-flex flex-column">
                                <div class="d-flex align-items-center">
                                    <router-link class="text-hover text-dark"
                                        :to="{ name: 'detailProfile', params: { username: post.username } }">
                                        <b style="color: #000; font-size: 1.1rem">{{ post.fullname }}</b>
                                    </router-link>
                                    <small class="flex-center">
                                        <i class="fa-solid fa-circle mx-1" style="font-size: 0.3em"></i>
                                        <div>
                                            <i v-if="post.privacy == 1" class="fas fa-globe-asia"></i>
                                            <i v-else-if="post.privacy == 2" class="fa-solid fa-user-group"></i>
                                            <i v-else-if="post.privacy == 3" class="fa-solid fa-user-xmark"></i>
                                            <i v-else class="fas fa-lock"></i>
                                        </div>
                                    </small>
                                </div>
                                <span class="f-500 text-dark" style=" white-space: pre-line;">
                                    {{ post.caption }}
                                </span>
                            </div>
                            <div class="d-flex flex-column">
                                <div class="flex-center" style="height: 3rem">
                                    <small>{{ formatTime(post.created_at) }}</small>
                                    <div v-if="true" class="dropdown">
                                        <i class="fas fa-ellipsis-h ms-1" data-bs-toggle="dropdown"
                                            aria-expanded="false" style="align-self: center; cursor: pointer"></i>
                                        <ul class="dropdown-menu" style="user-select: none;">
                                            <li data-bs-toggle="modal" data-bs-target="#editPostModal">
                                                <a class="dropdown-item d-flex align-items-center">
                                                    <i class="fa-solid fa-pen me-1"></i>
                                                    Edit post
                                                </a>
                                            </li>
                                            <li data-bs-toggle="modal" data-bs-target="#editPrivacyModal">
                                                <a class="dropdown-item">
                                                    <i class="fa-solid fa-lock me-1"></i>
                                                    Edit privacy
                                                </a>
                                            </li>
                                            <li data-bs-toggle="modal" data-bs-target="#deletePostModal">
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
                                            style="height: 65px;">
                                            <div class="bg-light circle d-flex me-2 justify-content-center align-items-center"
                                                style="width:55px;height:55px;"><i
                                                    class="fas fa-globe-asia fa-2x text-dark"></i></div>
                                            <div class="d-flex justify-content-between align-items-center"
                                                style="width:calc(100% - 60px);">
                                                <div class="d-flex flex-column pt-3" style="user-select:none;">
                                                    <h5><b style="font-weight:500;">Public</b></h5>
                                                    <p>anyone on NF social networks</p>
                                                </div>
                                                <div><input class="form-check-input me-2" value="1"
                                                        style="cursor:pointer;" name="privacy" type="radio"
                                                        id="rdoPublic">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="w-100 d-flex mb-2 privacy-hover ps-2 align-items-center bg-hover"
                                            style="height: 65px;">
                                            <div class="bg-light circle d-flex me-2 justify-content-center align-items-center"
                                                style="width:55px;height:55px;"><i
                                                    class="fas fa-users fa-2x text-dark"></i>
                                            </div>
                                            <div class="d-flex justify-content-between align-items-center"
                                                style="width:calc(100% - 60px);">
                                                <div class="d-flex flex-column pt-3" style="user-select:none;">
                                                    <h5><b style="font-weight:500;">Friends</b></h5>
                                                    <p>only your friends on the NF social network</p>
                                                </div>
                                                <div>
                                                    <input class="form-check-input me-2" value="2"
                                                        style="cursor:pointer;" name="privacy" type="radio"
                                                        id="rdoFriend">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="w-100 d-flex mb-2 privacy-hover ps-2 align-items-center bg-hover"
                                            style="height: 65px;">
                                            <div class="bg-light circle d-flex me-2 justify-content-center align-items-center"
                                                style="width:55px;height:55px;"><i
                                                    class="fas fa-lock fa-2x text-dark"></i>
                                            </div>
                                            <div class="d-flex justify-content-between align-items-center"
                                                style="width:calc(100% - 60px);">
                                                <div class="d-flex flex-column pt-3" style="user-select:none;">
                                                    <h5><b style="font-weight:500;">Only me</b></h5>
                                                    <p>only you see on social networks</p>
                                                </div>
                                                <div>
                                                    <input class="form-check-input me-2" value="4"
                                                        style="cursor:pointer;" name="privacy" type="radio"
                                                        id="rdoOnlyMe">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary " id="btnCloseModalPrivacy"
                                            data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary" @click="updatePost"
                                            id="updatePrivacy" disabled>Update</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal fade" id="editPostModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header d-flex">
                                        <div class=" flex-1 text-center">
                                            <h1 class="modal-title " id="exampleModalLabel" style="font-size: 1.5rem;">
                                                Edit Post</h1>
                                        </div>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="d-flex mb-2">
                                            <div class="avatar-3 me-2">
                                                <img :src="urlImg + post.avatar" alt="">
                                            </div>
                                            <div class="d-flex flex-column flex-1 text-dark">
                                                <b>{{ post.fullname }}</b>
                                                <div class="dropdown">
                                                    <div class="bg-light px-2 c-pointer radius-5 d-flex align-items-center"
                                                        data-bs-toggle="dropdown" aria-expanded="false"
                                                        style="width: fit-content; padding: 0.01rem 1rem; user-select: none;">
                                                        <div v-if="edit.privacy == 1">
                                                            <i class="fas fa-globe-asia "></i>
                                                            <span class="mx-2 f-500">Public</span>
                                                        </div>
                                                        <div v-else-if="edit.privacy == 2">
                                                            <i class="fas fa-user-friends "></i>
                                                            <span class="mx-2 f-500">Friends</span>
                                                        </div>
                                                        <div v-else-if="edit.privacy == 4">
                                                            <i class="fas fa-lock "></i>
                                                            <span class="mx-2 f-500">private</span>
                                                        </div>
                                                        <i class="fas fa-caret-down"></i>
                                                    </div>
                                                    <ul class="dropdown-menu text-dark c-pointer">
                                                        <li @click="editPrivacy(1)">
                                                            <span class="dropdown-item">
                                                                <i class="fas fa-globe-asia me-2 "
                                                                    style="width: 1.1rem;" />
                                                                <b>Public</b>
                                                            </span>
                                                        </li>
                                                        <li @click="editPrivacy(2)">
                                                            <span class="dropdown-item">
                                                                <i class="fas fa-user-friends me-2 "
                                                                    style="width: 1.1rem;" />
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
                                        <textarea @input="disableBtnUpdate" v-model="edit.caption" class="form-control"
                                            :style="{ maxHeight: '400px', overflowY: 'auto' }" rows="10"
                                            required="required">
                                        </textarea>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary btn-update-post"
                                            data-bs-dismiss="modal" disabled @click="updatePost">Update</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal fade" id="deletePostModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header d-flex">
                                        <div class=" flex-1 text-center">
                                            <h1 class="modal-title " id="exampleModalLabel" style="font-size: 1.5rem;">
                                                Delete Post</h1>
                                        </div>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body f-500 text-dark" style="font-size: 1.3rem;">
                                        Are you sure you want to delete this post?
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-danger" style="background-color: #ff3040;"
                                            @click="deletePost(post)" data-bs-dismiss="modal">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <view-image v-if="post.images" :images="post.images" :k="0" class="mt-1" style="position: relative;
                            left: calc(-100px + 1.25rem);
                            width: calc(100% + 80px);" />

                        <div class="d-flex" style="gap: 1px; font-size: 1.5rem">
                            <i v-if="!post.hasLiked" @click="likePost()"
                                class="far fa-heart c-pointer bg-hover p-2 circle icon-like"
                                style="margin-left: -10px"></i>
                            <i v-else @click="unLikePost()"
                                class="fas fa-heart c-pointer bg-hover p-2 circle icon-liked"
                                style="color: #ff3040; margin-left: -10px"></i>
                            <i data-bs-toggle="modal" data-bs-target="#modalPost"
                                class="far fa-comment c-pointer bg-hover p-2 circle"></i>
                            <i class="far fa-paper-plane c-pointer bg-hover p-2 circle"></i>
                        </div>

                        <div class="d-dlex f-500">
                            <span v-if="true" class="likes">{{ likes }} likes</span>
                            <span v-if="true"> - </span>
                            <span data-bs-toggle="modal" data-bs-target="#modalPost" v-if="true" class="comments">
                                {{ post.comments.length }}
                                comments</span>
                            <span data-bs-toggle="modal" data-bs-target="#modalPost" class="btnOpenModalComment"></span>
                        </div>
                    </div>
                </div>
                <hr class="my-3" />
                <div class="d-flex align-items-center mb-2">
                    <div class="avatar-3 me-2" style="width: 2rem; height: 2rem;">
                        <img :src="urlImg + myInfo.avatar" alt="">
                    </div>
                    <input ref="myComment" type="areatext" class="editable-content form-control "
                        placeholder="Enter Your Comment" v-model="comments" @input="handleClick()"
                        @keyup.enter="createComment(post.id)" style="font-weight: 600;">
                    <div class="dropdown" id="dropdownList" style="position: absolute; ">
                        <div class="dropdown-menu" id="listFriend" style="position: absolute; inset:  auto auto  0px 0px  ;
                                            z-index: 1; margin: 0px; transform: translate(0px, -40px);"
                            aria-labelledby="dropdownMenuButton">
                            <div v-for="(value, key) in list_friend" @click="tagFriend(value, key)"
                                style="cursor: pointer;" class="dropdown-item d-flex align-items-center ps-2">
                                <div class="circle me-2 "
                                    style="width: 30px; height: 30px; background: #000; overflow: hidden;">
                                    <img :src="urlImg + value.avatar" class="img-fluid" alt="">
                                </div>
                                <span>{{ value.fullname }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="flex: 1; overflow: auto;" class=" mb-4">
                    <template v-for="(v, k) in post.comments">
                        <div v-if="!v.id_replier" class=" d-flex py-2 px-2 w-100">
                            <div class="d-flex" style="flex:1">
                                <div style="height: 35px; width: 35px;margin-left: 0px; overflow: hidden;"
                                    class="circle me-2">
                                    <div class="circle me-2" style="width: 2rem; height: 2rem; overflow: hidden;">
                                        <img :src="urlImg + v.avatar" class="" alt="user"
                                            style="margin-left: 0px; object-fit: cover; width: 100%; height: 100%;">
                                    </div>
                                </div>
                                <div class="text-dark f-500" style="flex:1;margin-top: -7px;">
                                    <router-link class="text-dark text-hover"
                                        :to="{ name: 'detailProfile', params: { username: v.username } }">
                                        <span style="font-weight: 600; font-size: 17px;">{{ v.fullname }}</span>
                                    </router-link>
                                    <br>
                                    <div class="d-flex" style="line-height: 15px;">
                                        <span style="flex:1" v-html="v.content"></span>
                                        <span v-if="v.likes" class="" style="margin-top: 1px;">{{ v.likes }}</span>

                                        <i v-if="!v.liked" class="fa-regular c-pointer fa-heart ms-2"
                                            @click="likeComment(0, k, v, '')" style="font-size: 17px;"></i>
                                        <i v-else @click="unLikeComment(0, k, v, '')"
                                            class="fas fa-heart c-pointer bg-hover ms-2"
                                            style="color: #FF3040; font-size: 17px;"></i>
                                    </div>
                                    <div class="d-flex pt-1" style="gap: 5%;">
                                        <small class="text-secondary">{{ formatTime(v.created_at) }}</small>
                                        <small v-if="v.likes" class="text-secondary"
                                            style="font-weight: bold; cursor: pointer;">
                                            {{ v.likes }} likes</small>
                                        <small class="text-secondary" @click="replyComment(v)"
                                            style="font-weight: bold; cursor: pointer;">Reply</small>
                                    </div>
                                    <!-- <template v-if="v.replies.length > 0">
                                        <div class="d-flex align-items-center" style="gap: 5%;cursor: pointer;">
                                            <div style="border: 1px solid #797979; width: 2rem; height: 0;">
                                            </div>
                                            <small class="text-secondary " style=" font-weight: bold;"
                                                @click="v.limit > 0 ? moreReply(v, k) : viewReplies(v, k)">
                                                View replies ({{ v.replies.length }})
                                            </small>
                                        </div>
                                    </template> -->
                                    <template v-if="v.replies.length > 0" v-for="(value, key) in v.replies">
                                        <div class="pt-3" style="flex:1">
                                            <div class="d-flex mb-2">
                                                <div style="height: 2rem; width: 2rem;margin-left: 0px; overflow: hidden;"
                                                    class="circle me-2">
                                                    <img :src="urlImg + value.avatar" class="img-fluid me-2" alt="user"
                                                        style="object-fit: cover; width: 100%; height: 100%;">
                                                </div>
                                                <div class="text-dark f-500" style="flex:1;margin-top: -7px;">
                                                    <span style="font-weight: 600; font-size: 17px;">
                                                        {{ value.fullname }}</span>
                                                    <br>
                                                    <div class="d-flex align-items-center" style="line-height: 15px;">
                                                        <span style="flex:1" v-html="value.content"></span>
                                                        <span v-if="value.likes" style="margin-top: 1px;">
                                                            {{ value.likes }}</span>
                                                        <i v-if="!value.liked"
                                                            class="fa-regular c-pointer fa-heart ms-2"
                                                            @click="likeComment(k, key, value, 'rep')"
                                                            style="font-size: 17px;"></i>
                                                        <i v-else @click="unLikeComment(k, key, value, 'rep')"
                                                            class="fas fa-heart c-pointer bg-hover ms-2"
                                                            style="color: #FF3040; font-size: 17px;"></i>
                                                    </div>
                                                    <div class="d-flex pt-1" style="gap: 5%;">
                                                        <small class="text-secondary">
                                                            {{ formatTime(value.created_at) }}
                                                        </small>
                                                        <small v-if="value.likes" class="text-secondary"
                                                            style="font-weight: bold; cursor: pointer;">
                                                            {{ value.likes }} likes
                                                        </small>
                                                        <small class="text-secondary" @click="replyComment(value)"
                                                            style="font-weight: bold; cursor: pointer;">Reply</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </template>
                                </div>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ViewImage from "../home/viewImage.vue";
import axios, { url } from "../../../core/coreRequest";
import baseFunction from "../../../core/coreFunction";
export default {
    components: { ViewImage },
    props: {
        myInfo: {
            type: Object,
        },
    },
    data() {
        return {
            post: null,
            urlImg: url,
            likes: null,
            edit: null,
            del: null,
            comments: null,
            list_friend: null,
            index_friend_tags: [],
            id_tags: '',
            isReply: false,
            replier: {},
        }
    },
    created() {
        this.getDetailPost()
        this.getFriend()
    },
    methods: {
        createComment(id, username = '') {
            if (!event.shiftKey && this.comments != null) {
                var comment = this.comments;

                if (this.isReply) {
                    comment = comment.replace('@' + this.replier.fullname,
                        "<a href='/"
                        + this.replier.username + "' class='custom-span'>" + this.replier.fullname + "</a>");
                }
                this.index_friend_tags.forEach(i => {
                    comment = comment.replace('@' + this.list_friend[i].fullname,
                        "<a href='/" + this.list_friend[i].username + "' class='custom-span'>" + this.list_friend[i].fullname + "</a>");
                });
                var payload = {
                    'content': comment,
                    'id_post': id,
                    'id_tag': this.id_tags,
                    'id_replier': this.isReply ? this.replier.id : null
                }
                console.log('payload: ', payload);
                axios
                    .post('comment/create', payload)
                    .then((res) => {
                        this.comments = [];
                        this.isReply = false;
                        var comment = res.data.comment
                        comment['liked'] = false
                        comment['likes'] = 0
                        comment['limit'] = 0
                        console.log('comment: ', comment);
                        this.post.comments.unshift(comment);
                        // if (comment.id_replier) {
                        //     this.loadComment()
                        // }
                    })
            }

        },
        replyComment(v) {
            this.isReply = true;
            this.replier = {
                id: v.id_replier ? v.id_replier : v.id,
                fullname: v.fullname,
                username: v.username
            }

            this.comments = '@' + v.fullname + ' '
            this.focusComment()
        },
        handleClick() {
            const currentComment = this.comments;
            const lastChar = currentComment.slice(-1);
            let showDropdown = false;
            if (lastChar === "@") {
                showDropdown = true;
            }
            if (lastChar === " " || currentComment.trim() === "" || currentComment.length === 0) {
                showDropdown = false;
            }
            if (!this.comments) {
                this.isReply = false
            }
            if (showDropdown) {
                $('#listFriend').addClass('show');
            }
            if (currentComment.length === 0) {
                $('#listFriend').removeClass('show');
            }
            if (lastChar === " " && !showDropdown) {
                $('#listFriend').removeClass('show');
            }
        },
        getDetailPost() {
            axios
                .get('post/' + this.$route.params.id_post)
                .then((res) => {
                    this.post = res.data.detailPost
                    this.edit = Object.assign({}, this.post)
                    this.likes = this.post.likes.length
                });
        },
        formatTime(a) {
            return baseFunction.hoursDifference(a)
        },
        getFriend() {
            axios
                .get('data-all-friend')
                .then((res) => {
                    this.list_friend = res.data.data;
                });
        },
        tagFriend(v, k) {
            console.log('k: ', k);
            console.log('v: ', v);
            this.comments += v.fullname + ' ';
            this.index_friend_tags.push(k);
            $('#listFriend').removeClass('show');
            if (this.id_tags.length > 0) {
                this.id_tags += ',';
            }
            this.id_tags += v.id;
            this.focusComment()
        },
        focusComment() {
            this.$refs.myComment.focus();
        },
        likePost() {
            this.post.hasLiked = !this.post.hasLiked;
            this.likes++;
            setTimeout(() => {
                $(".icon-liked").addClass("large");
            }, 1);
            axios.post("post/like", this.post);
        },
        unLikePost() {
            this.post.hasLiked = !this.post.hasLiked;
            this.likes--;
            $(".icon-liked").removeClass("large");
            axios.post("post/un-like", this.post);
        },
        editPrivacy(a) {
            this.edit.privacy = a
            this.disableBtnUpdate()
        },
        disableBtnUpdate() {
            if (this.edit.privacy !== this.post.privacy ||
                ((this.edit.caption || '').trim() !== (this.post.caption || '').trim())) {
                $('.btn-update-post').prop('disabled', false);
            } else {
                $('.btn-update-post').prop('disabled', true);
            }

        },
        updatePost() {
            axios
                .post('post/update', this.edit)
                .then((res) => {
                    if (res.data.status) {
                        this.post.privacy = res.data.post.privacy
                        this.post.caption = res.data.post.caption
                    }
                })
        },
        deletePost(v) {
            axios
                .post('post/delete', v)
                .then((res) => {
                    this.$router.push({ name: 'homepage' })
                    baseFunction.displaySuccess(res)
                })
        },
        likeComment(indexorigin, k, v, rep) {
            if (rep == 'rep') {
                console.log('this.post.comments[indexorigin][k]: ', this.post.comments[indexorigin][k]);
                this.post.comments[indexorigin].replies[k].likes++
                this.post.comments[indexorigin].replies[k].liked = true
            } else {
                this.post.comments[k].likes++
                this.post.comments[k].liked = true
            }
            axios.post('comment/like', v)
        },
        unLikeComment(indexorigin, k, v, rep) {
            if (rep == 'rep') {
                this.post.comments[indexorigin].replies[k].likes--
                this.post.comments[indexorigin].replies[k].liked = false
            } else {
                this.post.comments[k].likes--
                this.post.comments[k].liked = false
            }
            axios.post('comment/un-like', v)
        },
    },
}
</script>
<style scoped>
.bg-outstanding {
    box-shadow: 0 0 10px #3333332f;
}

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