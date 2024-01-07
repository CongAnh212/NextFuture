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
                    <div class="d-flex flex-column" style="flex:1; position: relative;">
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
                                    <span style="font-size: 15px;  font-weight: 500;" class="me-1">{{ list_comment
                                        .length }}</span>
                                    <i class="fa-regular fa-comment" style="font-size: 15px; "></i>
                                </div>
                            </div>
                        </div>
                        <hr class="m-0">
                        <div class="px-4 py-1">
                            <div class="d-flex">
                                <div style="flex:1" class=" bg-hover text-center c-pointer"
                                    @click="post.liked ? unLikePost() : likePost()">
                                    <i v-if="!post.liked" class="far fa-heart  c-pointer   icon-like"
                                        style="margin-left: -10px; font-size: 18px;"></i>
                                    <i v-else class="fas fa-heart  c-pointer   icon-liked"
                                        style="color: #FF3040; margin-left: -10px; font-size: 18px;"></i>
                                    <span style="font-size: 18px; cursor: pointer; font-weight: 500; "
                                        class="ms-2 del-event">Likes</span>
                                </div>
                                <div style="flex:1" class="text-center c-pointer bg-hover" @click="focusComment">
                                    <i class="fa-regular fa-comment" style="font-size: 18px; cursor: pointer;"></i>
                                    <span style="font-size: 18px; cursor: pointer; font-weight: 500;"
                                        class="ms-2 del-event">Comments</span>
                                </div>
                                <div style="flex:1" class="text-center c-pointer bg-hover">
                                    <i class="fa-regular fa-paper-plane" style="font-size: 18px; cursor: pointer;"></i>
                                    <span style="font-size: 18px; cursor: pointer; font-weight: 500;"
                                        class="ms-2 del-event">Share</span>
                                </div>
                            </div>
                        </div>
                        <hr class="m-0">
                        <div style="flex: 1; overflow: auto;" class=" mb-4">
                            <template v-if="showComment" v-for="(v, k) in list_comment">
                                <div v-if="!v.id_replier" class=" d-flex py-2 px-2 w-100">
                                    <div class="d-flex" style="flex:1">
                                        <div style="height: 35px; width: 35px;margin-left: 0px; overflow: hidden;"
                                            class="circle me-2">
                                            <img :src="urlImg + v.avatar" class="img-fluid me-2" alt="user"
                                                style="object-fit: cover; width: 100%;">
                                        </div>
                                        <div class="text-dark f-500" style="flex:1;margin-top: -7px;">
                                            <span style="font-weight: 600; font-size: 17px;">{{ v.fullname }}</span>
                                            <br>
                                            <div class="d-flex" style="line-height: 15px;">
                                                <span style="flex:1" v-html="v.content"></span>
                                                <span v-if="v.likes" class="" style="margin-top: 1px;">{{ v.likes }}</span>

                                                <i v-if="!v.liked" class="fa-regular c-pointer fa-heart ms-2"
                                                    @click="likeComment(v, k, '')" style="font-size: 17px;"></i>
                                                <i v-else @click="unLikeComment(v, k, '')"
                                                    class="fas fa-heart c-pointer bg-hover ms-2"
                                                    style="color: #FF3040; font-size: 17px;"></i>
                                            </div>
                                            <div class="d-flex pt-1" style="gap: 5%;">
                                                <small class="text-secondary">{{ hoursDifference(v.created_at) }}</small>
                                                <small v-if="v.likes" class="text-secondary"
                                                    style="font-weight: bold; cursor: pointer;">
                                                    {{ v.likes }} likes</small>
                                                <small class="text-secondary" @click="replyComment(v)"
                                                    style="font-weight: bold; cursor: pointer;">Reply</small>
                                            </div>
                                            <template v-if="!v.id_replier">
                                                <div class="d-flex align-items-center" style="gap: 5%;cursor: pointer;">
                                                    <div style="border: 1px solid #797979; width: 2rem; height: 0;">
                                                    </div>
                                                    <small class="text-secondary " style=" font-weight: bold;">
                                                        View replies (8)
                                                    </small>
                                                </div>
                                            </template>
                                            <template v-for="(value, key) in list_comment_reply">
                                                <div v-if="value.id_replier == v.id" class="pt-3" style="flex:1">
                                                    <div class="d-flex mb-2">
                                                        <div style="height: 35px; width: 35px;margin-left: 0px; overflow: hidden;"
                                                            class="circle me-2">
                                                            <img :src="urlImg + value.avatar" class="img-fluid me-2"
                                                                alt="user" style="object-fit: cover; width: 100%;">
                                                        </div>
                                                        <div class="text-dark f-500" style="flex:1;margin-top: -7px;">
                                                            <span style="font-weight: 600; font-size: 17px;">{{
                                                                value.fullname }}</span>
                                                            <br>
                                                            <div class="d-flex align-items-center"
                                                                style="line-height: 15px; padding-left: 15px;">
                                                                <span style="flex:1" v-html="value.content"></span>
                                                                <span v-if="value.likes" style="margin-top: 1px;">{{
                                                                    value.likes }}</span>
                                                                <i v-if="!value.liked"
                                                                    class="fa-regular c-pointer fa-heart ms-2"
                                                                    @click="likeComment(value, key, 'rep')"
                                                                    style="font-size: 17px;"></i>
                                                                <i v-else @click="unLikeComment(value, key, 'rep')"
                                                                    class="fas fa-heart c-pointer bg-hover ms-2"
                                                                    style="color: #FF3040; font-size: 17px;"></i>
                                                            </div>
                                                            <div class="d-flex pt-1" style="gap: 5%;">
                                                                <small class="text-secondary">{{
                                                                    hoursDifference(value.created_at) }}</small>
                                                                <small v-if="value.likes" class="text-secondary"
                                                                    style="font-weight: bold; cursor: pointer;">{{
                                                                        value.likes }}
                                                                    likes
                                                                </small>
                                                                <small class="text-secondary"
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

                        <!-- comment navbar -->
                        <div class=" w-100" style="position: absolute; bottom: 0;">

                            <input ref="myComment" type="areatext" class="editable-content form-control pe-5 py-2"
                                placeholder="Enter Your Comment" v-model="comments" @input="handleClick()"
                                @keyup.enter="createComment(post.id)" style="font-weight: 600;">
                            <span @click="enterComment(post.id)" class="text-light post c-pointer"
                                style="position: absolute; top: 8px; right: 10px; font-weight: 600; user-select: none;">Post</span>
                            <div class="dropdown " id="dropdownList">
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
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios, { url } from '../../../core/coreRequest';
import baseFunction from '../../../core/coreFunction';
export default {
    props: {
        post: {
            type: Object,
        }
    },
    watch: {
        post: {
            handler(newValue, oldValue) {
                // console.log('watch modal run');
                if (oldValue) {
                    this.showComment = false;
                    this.loadComment()
                }
            },
            // deep: true, // Thêm dòng này
        },
    },
    data() {
        return {
            urlImg: url,
            comments: [],
            index_friend_tags: [],
            list_friend: [],
            id_tags: '',
            list_comment: [],
            list_comment_reply: [],
            showComment: false,
            isReply: false,
            replier: {}
        }
    },
    mounted() {
        this.getFriend();
        this.loadComment()
        console.log("️⚡→(modalPost.vue:230) ~ this.post", this.post);
    },
    methods: {
        replyComment(v) {
            this.isReply = true;
            this.replier = {
                id: v.id,
                fullname: v.fullname,
            }

            this.comments = '@' + v.fullname + ' '
            this.focusComment()
            this.tagFriend(object, indexFriend)
            // this.focusComment()
        },
        likeComment(v, k, rep) {
            if (rep == 'rep') {
                this.list_comment_reply[k].likes++
                this.list_comment_reply[k].liked = true
            } else {
                this.list_comment[k].likes++
                this.list_comment[k].liked = true
            }
            axios.post('comment/like', v)
        },
        unLikeComment(v, k, rep) {
            if (rep == 'rep') {
                this.list_comment_reply[k].likes--
                this.list_comment_reply[k].liked = false
            } else {
                this.list_comment[k].likes--
                this.list_comment[k].liked = false
            }

            axios.post('comment/un-like', v)
        },
        hoursDifference(time) {
            return baseFunction.hoursDifference(time)
        },
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
        },
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
                    // console.log(this.list_friend[i].fullname);
                });
                var payload = {
                    'content': comment,
                    'id_post': id,
                    'id_tag': this.id_tags,
                    'id_replier': this.isReply ? this.replier.id : null
                }
                axios
                    .post('comment/create', payload)
                    .then((res) => {
                        this.comments = [];
                        this.loadComment();
                    })
            }

        },
        loadComment() {
            axios
                .post('comment/data', this.post)
                .then((res) => {
                    this.list_comment = res.data.dataComment;
                    this.list_comment_reply = this.list_comment.filter(comment => comment.id_replier !== null);

                    this.showComment = true;
                });
        },
        getFriend() {
            axios
                .get('data-all-friend')
                .then((res) => {
                    this.list_friend = res.data.data;
                });
        },
        tagFriend(v, k) {
            this.comments += v.fullname + ' ';
            this.index_friend_tags.push(k);
            $('#listFriend').removeClass('show');
            if (this.id_tags.length > 0) {
                this.id_tags += ',';
            }
            this.id_tags += v.id;
            this.focusComment()
        },
        handleClick() {
            const currentComment = this.comments;
            if (this.comments) {
                $('.post').addClass('text-primary')
                $('.post').removeClass('text-light')
            } else {
                $('.post').removeClass('text-primary')
                $('.post').addClass('text-light')

            }
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
        enterComment(a) {
            if ($('.post').hasClass('text-primary')) {
                this.createComment(a)
            }
        },
        focusComment() {
            this.$refs.myComment.focus();
        }
    },
}
</script>
<style>
.modal-xxl {
    max-width: 80%;
}
</style>
