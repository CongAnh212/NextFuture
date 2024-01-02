<template>
    <div class=" mt-3" style="width: 80%;">
        <div v-if="isView">
            <div class="card w-90 shadow-none bg-transparent bg-transparent-card border-0 p-0 mb-0 mx-auto">
                <div class="d-flex" style="gap: 14px">
                    <router-link :to="{ name: 'story' }">
                        <div class="bg-primary main-story">
                            <div class="hover-background">

                            </div>
                            <div class="img-background" style="height: 80%; width: 100%; background-color: red;">
                                <img v-if="!myInfo.avatar" class="img-fluid"
                                    src="https://i.pinimg.com/236x/93/a0/0a/93a00a3684652031a0c398c5d54d3d10.jpg" alt="">
                                <img v-else class="img-fluid" :src="urlImg + myInfo.avatar" alt="">
                            </div>
                            <div
                                style="position: absolute; bottom: 0; height: 20%; width: 100%; background-color: #fff; display: flex; justify-content: center;">
                                <div class="btn-create-story d-flex justify-content-center align-items-center"
                                    style="color: #fff;">
                                    <i class="las la-plus la-2x"></i>
                                </div>
                                <div class="mb-1" style="z-index: 1; position: absolute; bottom: 0px; color: #333;">
                                    <b class="name-in-story ">Create Story</b>
                                </div>
                            </div>
                        </div>
                    </router-link>
                    <div v-for="(v, k) in stories" class=" bg-primary main-story">
                        <router-link :to="{ name: 'detailStory', params: { idStory: v.id } }">

                            <div class="hover-background">

                            </div>
                            <div class="img-background">
                                <img :src="urlImg + v.image" alt="">
                            </div>
                            <div class="avatar">
                                <img v-if="!v.avatar" class="img-fluid"
                                    src="https://i.pinimg.com/236x/93/a0/0a/93a00a3684652031a0c398c5d54d3d10.jpg" alt="">
                                <img v-else class="img-fluid" :src="urlImg + v.avatar" alt="">
                            </div>
                            <div class="text-light mb-1" style="z-index: 1;">
                                <b class="name-in-story">{{ v.fullname }}</b>
                            </div>
                        </router-link>

                    </div>


                </div>
            </div>

            <div class="row mt-3">
                <div class="col-lg-1 row m-0 p-0"></div>
                <div class="col-lg-10 row m-0 p-0">
                    <div class="col-sm-12">
                        <div id="post-modal-data" class="card card-block card-stretch card-height">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div class="user-img">
                                        <img :src="urlImg + myInfo.avatar" alt="userimg" class="avatar-60 rounded-circle">
                                    </div>
                                    <form class="post-text ms-3 w-100 " data-bs-toggle="modal" data-bs-target="#post-modal"
                                        action="javascript:void();">
                                        <input type="text" class="form-control rounded"
                                            placeholder="Write something here..." style="border:none;">
                                    </form>
                                </div>
                                <hr>
                                <ul class=" post-opt-block d-flex list-inline m-0 p-0 flex-wrap">
                                    <li class="me-3 mb-md-0 mb-2">
                                        <a href="#" class="btn btn-soft-primary">
                                            <img src="../../../assets/client/images/small/07.png" alt="icon"
                                                class="img-fluid me-2">
                                            Photo/Video
                                        </a>
                                    </li>
                                    <li class="me-3 mb-md-0 mb-2">
                                        <a href="#" class="btn btn-soft-primary">
                                            <img src="../../../assets/client/images/small/08.png" alt="icon"
                                                class="img-fluid me-2"> Tag
                                            Friend
                                        </a>
                                    </li>
                                    <li class="me-3">
                                        <a href="#" class="btn btn-soft-primary">
                                            <img src="../../../assets/client/images/small/09.png" alt="icon"
                                                class="img-fluid me-2">
                                            Feeling/Activity
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="modal fade" id="post-modal" tabindex="-1" aria-labelledby="post-modalLabel"
                                style="display: none;" aria-hidden="true">
                                <div class="modal-dialog   modal-fullscreen-sm-down">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="post-modalLabel">Create Post</h5>
                                            <button ref="btnCloseModal" type="button" class="btn btn-secondary"
                                                data-bs-dismiss="modal"><i class="ri-close-fill"></i></button>
                                        </div>
                                        <div class="modal-body" style="overflow: auto;">
                                            <div class="d-flex align-items-center mb-3">
                                                <div class="user-img">
                                                    <img :src="urlImg + myInfo.avatar" alt="userimg"
                                                        class=" rounded-circle " style="width: 50px; height: 50px;">
                                                </div>
                                                <form class="post-text ms-3 w-100" action="javascript:void();">
                                                    <input v-model="post.caption" type="text" class="form-control rounded"
                                                        placeholder="Write something here..." style="border:none;">

                                                </form>

                                            </div>
                                            <input @change="getImage" id="input-b3" name="input-b3[]" type="file"
                                                class="file" multiple data-show-upload="false" data-show-caption="true"
                                                data-msg-placeholder="Select {files} for upload..." accept="image/*">
                                            <!-- ****************************************************************** -->
                                            <hr>
                                            <ul class="d-flex flex-wrap align-items-center list-inline m-0 p-0">
                                                <li class="col-md-6 mb-3">
                                                    <div @click='show()' style="cursor: pointer; "
                                                        class="bg-soft-primary rounded p-2 pointer me-3"><a></a><img
                                                            src="../../../assets/client/images/small/07.png" alt="icon"
                                                            class="img-fluid">
                                                        Photo/Video</div>
                                                </li>
                                                <li class="col-md-6 mb-3">
                                                    <div style="cursor: pointer; "
                                                        class="bg-soft-primary rounded p-2 pointer me-3"><a></a><img
                                                            src="../../../assets/client/images/small/08.png" alt="icon"
                                                            class="img-fluid">
                                                        Tag
                                                        Friend</div>
                                                </li>
                                                <li class="col-md-6">
                                                    <div style="cursor: pointer; "
                                                        class="bg-soft-primary rounded p-2 pointer me-3"><a></a><img
                                                            src="../../../assets/client/images/small/09.png" alt="icon"
                                                            class="img-fluid">
                                                        Feeling/Activity</div>
                                                </li>

                                            </ul>
                                            <hr>
                                            <div class="other-option">
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <div class="d-flex align-items-center">
                                                        <div class="user-img me-3">
                                                            <img :src="urlImg + myInfo.avatar" alt="userimg"
                                                                class="rounded-circle" style="width: 50px; height: 50px">
                                                        </div>
                                                        <h6>Your Story</h6>
                                                    </div>
                                                    <div class="card-post-toolbar">
                                                        <div class="dropdown">
                                                            <span @click="setDropdown()" class="dropdown-toggle"
                                                                data-bs-toggle="dropdown" aria-haspopup="true"
                                                                aria-expanded="false" role="button">
                                                                <span class="btn btn-primary">Privacy</span>
                                                            </span>
                                                            <div class="dropdown-menu m-0 p-0 dropdownn"
                                                                style="inset: auto 0px 0px auto !important;">
                                                                <a @click="setPrivacyIndex(1)" id="privacy-1"
                                                                    class="dropdown-item px-3 py-2" href="#">
                                                                    <div class="d-flex align-items-top">
                                                                        <i class="ri-save-line h4"></i>
                                                                        <div class="data ms-2">
                                                                            <h6>Public</h6>
                                                                            <p class="mb-0">Anyone on or off Facebook</p>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                                <a @click="setPrivacyIndex(2)" id="privacy-2"
                                                                    class="dropdown-item px-3 py-2" href="#">
                                                                    <div class="d-flex align-items-top">
                                                                        <i class="ri-close-circle-line h4"></i>
                                                                        <div class="data ms-2">
                                                                            <h6>Friends</h6>
                                                                            <p class="mb-0">Your Friend on facebook</p>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                                <a @click="setPrivacyIndex(3)" id="privacy-3"
                                                                    class="dropdown-item px-3 py-2" href="#">
                                                                    <div class="d-flex align-items-top">
                                                                        <i class="ri-user-unfollow-line h4"></i>
                                                                        <div class="data ms-2">
                                                                            <h6>Friends except</h6>
                                                                            <p class="mb-0">Don't show to some friends</p>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                                <a @click="setPrivacyIndex(4)" id="privacy-4"
                                                                    class="dropdown-item px-3 py-2" href="#">
                                                                    <div class="d-flex align-items-top">
                                                                        <i class="ri-notification-line h4"></i>
                                                                        <div class="data ms-2">
                                                                            <h6>Only Me</h6>
                                                                            <p class="mb-0">Only me</p>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button @click="posting()"
                                                class="btn btn-primary d-block w-100 mt-3">Post</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-1 row m-0 p-0"></div>

                <div class="col-lg-1 row m-0 p-0"></div>
                <div class="col-lg-10 row m-0 p-0">

                    <div v-for="(v, k) in list_post" class="col-sm-12">
                        <div class="card card-block card-stretch card-height">
                            <div class="card-body">
                                <div class="post-item">
                                    <div class="d-flex justify-content-between">
                                        <div class="me-3">
                                            <img class="rounded-circle" style="width: 60px; height:60px;"
                                                :src="urlImg + v.avatar" alt="">
                                        </div>
                                        <div class="w-100">
                                            <div class="d-flex justify-content-between">
                                                <div class="">
                                                    <h5 class="mb-0 d-inline-block" style="font-weight: bold;">{{ v.fullname }}
                                                    </h5>
                                                    <p class="ms-1 mb-0 d-inline-block">Changed Profile Picture</p>
                                                    <p class="mb-0">{{ hoursDifference(v.created_at) }} ago</p>
                                                </div>
                                                <div class="card-post-toolbar">
                                                    <div class="dropdown">
                                                        <span class="dropdown-toggle" data-bs-toggle="dropdown"
                                                            aria-haspopup="true" aria-expanded="false" role="button">
                                                            <i class="ri-more-fill"></i>
                                                        </span>
                                                        <div class="dropdown-menu m-0 p-0">
                                                            <a class="dropdown-item p-3" href="#">
                                                                <div class="d-flex align-items-top">
                                                                    <i class="ri-save-line h4"></i>
                                                                    <div class="data ms-2">
                                                                        <h6>Save Post</h6>
                                                                        <p class="mb-0">Add this to your saved items</p>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                            <a class="dropdown-item p-3" href="#">
                                                                <div class="d-flex align-items-top">
                                                                    <i class="ri-close-circle-line h4"></i>
                                                                    <div class="data ms-2">
                                                                        <h6>Hide Post</h6>
                                                                        <p class="mb-0">See fewer posts like this.</p>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                            <a class="dropdown-item p-3" href="#">
                                                                <div class="d-flex align-items-top">
                                                                    <i class="ri-user-unfollow-line h4"></i>
                                                                    <div class="data ms-2">
                                                                        <h6>Unfollow User</h6>
                                                                        <p class="mb-0">Stop seeing posts but stay friends.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                            <a class="dropdown-item p-3" href="#">
                                                                <div class="d-flex align-items-top">
                                                                    <i class="ri-notification-line h4"></i>
                                                                    <div class="data ms-2">
                                                                        <h6>Notifications</h6>
                                                                        <p class="mb-0">Turn on notifications for this post
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <span style="font-weight: 500;">{{ v.caption }}</span>
                                        </div>
                                    </div>
                                </div>
                                <!-- routerr -->
                                <!--bo may dang lam o day nhe-->
                                <template v-if="v.images">
                                  <view-image :images="v.images"></view-image>
                                </template>

                                <div class="comment-area mt-3">
                                    <div class="d-flex justify-content-between align-items-center flex-wrap">
                                        <div class="like-block position-relative d-flex align-items-center">
                                            <div class="d-flex align-items-center">
                                                <div class="like-data">
                                                    <div class="contain-heart  flex-center"
                                                        style="width: 30px; height: 30px;">
                                                        <span role="button">
                                                            <i class="far fa-heart heart"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="total-like-block ms-2 me-3">
                                                    <div class="dropdown">
                                                        <span class="dropdown-toggle" data-bs-toggle="dropdown"
                                                            aria-haspopup="true" aria-expanded="false" role="button">
                                                            {{ v.react }} Likes
                                                        </span>
                                                        <div class="dropdown-menu">
                                                            <a class="dropdown-item" href="#">Max Emum</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="total-comment-block">
                                                <div class="dropdown">
                                                    <span class="dropdown-toggle" data-bs-toggle="dropdown"
                                                        aria-haspopup="true" aria-expanded="false" role="button">
                                                        {{ totalComments(v.id) }} Comments

                                                    </span>
                                                    <div class="dropdown-menu">
                                                        <a class="dropdown-item" href="#">Max Emum</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="share-block d-flex align-items-center feather-icon mt-2 mt-md-0">
                                            <a href="javascript:void();" data-bs-toggle="offcanvas"
                                                data-bs-target="#share-btn" aria-controls="share-btn"><i
                                                    class="ri-share-line"></i>
                                                <span class="ms-1">99 Share</span></a>
                                        </div>
                                    </div>
                                    <hr>
                                    <ul class="post-comments list-inline p-0 m-0">
                                        <template v-for="(value, key) in list_comment">
                                            <li v-if="value.id_post == v.id" class="mb-2">
                                                <div class="d-flex">
                                                    <div class="user-img">
                                                        <img :src="urlImg + value.avatar" alt="userimg"
                                                            class="avatar-35 rounded-circle img-fluid">
                                                    </div>
                                                    <div class="comment-data-block ms-3">
                                                        <h6 style="font-weight: 550;">{{ value.fullname }}</h6>
                                                        <p v-html="value.content" class="mb-0"></p>
                                                        <div class="d-flex flex-wrap align-items-center comment-activity">
                                                            <a href="javascript:void();">like</a>
                                                            <a href="javascript:void();">reply</a>
                                                            <a href="javascript:void();">translate</a>
                                                            <span> {{ hoursDifference(value.created_at) }} </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </template>

                                    </ul>
                                    <form class="comment-text d-flex align-items-center mt-3" action="javascript:void(0);">
                                        <input v-model="comments[k]" @keyup.enter="createComment(v.id, k)"
                                            @input="handleClick(k)" class="editable-content form-control"
                                            placeholder="Enter Your Comment">
                                        <div class="comment-attagement d-flex">
                                            <!-- <span class=" bg-danger">Lê Công Anh</span> -->
                                            <a href="javascript:void();"><i class="ri-link me-3"></i></a>
                                            <a href="javascript:void();"><i class="ri-user-smile-line me-3"></i></a>
                                            <a href="javascript:void();"><i class="ri-camera-line me-3"></i></a>
                                        </div>
                                        <div class="dropdown " id="dropdownList" style="position: absolute; inset: 0px auto auto 0px;
                                            z-index: 1; margin: 0px; transform: translate(0px, 40px);">
                                            <div class="dropdown-menu" :id="'listFriend-' + k"
                                                aria-labelledby="dropdownMenuButton">
                                                <div v-for="(value, key) in list_friend" @click="tagFriend(value, k, key)"
                                                    style="cursor: pointer;"
                                                    class="dropdown-item d-flex align-items-center ps-2">
                                                    <div class="circle me-2 "
                                                        style="width: 30px; height: 30px; background: #000; overflow: hidden;">
                                                        <img :src="urlImg + value.avatar" class="img-fluid" alt="">
                                                    </div>
                                                    <span>{{ value.fullname }}</span>

                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 text-center">
                    <img src="../../../assets/client/images/page-img/page-load-loader.gif" alt="loader"
                        style="height: 100px;">
                </div>
            </div>
        </div>
        <div v-else class="flex-center">
            <img src="../../../assets/client/images/page-img/page-load-loader.gif" alt="loader" style="height: 100px;">
        </div>
    </div>
    <div class="right-sidebar-mini" style="box-shadow: 0 0 10px #3333332e;">
        <div class="right-sidebar-panel p-0">
            <div class="card shadow-none">
                <div class="card-body p-0 ">
                    <div class="media-height p-3" data-scrollbar="true" tabindex="-1"
                        style="overflow: hidden; outline: none;">
                        <div class="scroll-content">
                            <div v-for="(v, k) in list_friend" class="d-flex align-items-center mb-4">
                                <div class="iq-profile-avatar status-online">
                                    <img class="rounded-circle avatar-50" :src="urlImg + v.avatar" alt="">
                                </div>
                                <div class="ms-3">
                                    <h6 class="mb-0">{{ v.fullname }}</h6>
                                    <p class="mb-0">Just Now</p>
                                </div>
                            </div>

                        </div>
                        <div class="scrollbar-track scrollbar-track-x" style="display: none;">
                            <div class="scrollbar-thumb scrollbar-thumb-x"
                                style="width: 260px; transform: translate3d(0px, 0px, 0px);"></div>
                        </div>
                        <div class="scrollbar-track scrollbar-track-y" style="display: block;">
                            <div class="scrollbar-thumb scrollbar-thumb-y"
                                style="height: 328.611px; transform: translate3d(0px, 0px, 0px);"></div>
                        </div>
                    </div>
                    <div class="right-sidebar-toggle bg-primary text-white mt-3">
                        <i class="ri-arrow-left-line side-left-icon"></i>
                        <i class="ri-arrow-right-line side-right-icon"><span class="ms-3 d-inline-block">Close
                                Menu</span></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import coreFunction from '../../../core/coreFunction';
import axios, { url } from '../../../core/coreRequest'
import ViewImage from "./viewImage.vue";

export default {
  components: {ViewImage},
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
    watch: {
        myInfo: {

            handler(newValue, oldValue) {
                // Xử lý khi giá trị của data thay đổi
                if (oldValue) {
                    this.isView = true;
                }
                setTimeout(() => {
                    $("#input-b3").fileinput();
                    $("#input-b3").fileinput({ 'showUpload': false, 'previewFileType': 'any' });
                    $('.file-input').addClass('hide-important');
                    $('.close').addClass('btn btn-secondary');
                    $('.fileinput-remove').on('click', () => {
                        $('.file-input').addClass('hide-important');
                        this.post.images = [];
                    });
                }, 100);


            },
            deep: true, // Sử dụng deep watch để theo dõi các thay đổi sâu
            immediate: true, // Kích hoạt handler ngay từ khi component được khởi tạo
        },
    },
    created() {
        console.log(window.localStorage.getItem('token')); //check token
        this.getInfo();
        this.dataStory();
        this.setPrivacy();
        this.loadPost();
        this.getFriend();
        this.loadComment();
    },
    mounted() {
        setTimeout(() => {
            $("#input-b3").fileinput();
            $("#input-b3").fileinput({ 'showUpload': false, 'previewFileType': 'any' });
            $('.file-input').addClass('hide-important');
            $('.close').addClass('btn btn-secondary');
            $('.fileinput-remove').on('click', () => {
                $('.file-input').addClass('hide-important');
                this.post.images = [];
            });
        }, 100);
    },
    methods: {
        tagFriend(v, k, key) {
            this.comments[k] += v.fullname;
            // this.comments[k].lenght;
            this.index_friend_tags.push(key);
            $('#listFriend-' + k).removeClass('show');
            if (this.id_tags.length > 0) {
                this.id_tags += ',';
            }
            this.id_tags += v.id;
            console.log(this.id_tags);
        },
        handleClick(k) {
            const currentComment = this.comments[k];
            const lastChar = currentComment.slice(-1);
            let showDropdown = false;
            if (lastChar === "@") {
                showDropdown = true;
            }
            if (lastChar === " " || currentComment.trim() === "" || currentComment.length === 0) {
                showDropdown = false;
            }
            if (showDropdown) {
                $('#listFriend-' + k).addClass('show');
            }
            if (currentComment.length === 0) {
                $('#listFriend-' + k).removeClass('show');
            }
            if (lastChar === " " && !showDropdown) {
                $('#listFriend-' + k).removeClass('show');
            }
        },
        totalComments(a) {
            return this.list_comment.filter(value => value.id_post == a).length;
        },
        getFriend() {
            axios
                .get('data-all-friend')
                .then((res) => {
                    this.list_friend = res.data.data;
                });
        },
        hoursDifference(a) {
            return coreFunction.hoursDifference(a);
        },
        setPrivacy() {
            $('.active-privacy').removeClass('active-privacy');
            if (this.privacyMapping[this.privacy]) {
                $(this.privacyMapping[this.privacy]).addClass('active-privacy');
            }
        },
        setPrivacyIndex(i) {
            this.privacy = i;
            this.setPrivacy();
        },
        toggleShow(a) {
            const $element = $("#" + a);
            // alert($element)
            if ($element.hasClass('show')) {
                $element.removeClass('show');
                $element.css('display', 'none');
            } else {
                $element.css('display', 'block');
                $element.addClass('show');

            }
        },
        getInfo() {
            axios
                .get('profile/data')
                .then((res) => {
                    this.myInfo = res.data.myInfo;
                });
        },
        dataStory() {
            axios
                .get('story/data?3=1')
                .then((res) => {
                    this.stories = res.data.dataStory.data;
                });
        },
        show() {
            if ($('.file-input').hasClass('hide-important')) {
                $('.file-input').removeClass('hide-important');
            } else {
                $('.file-input').addClass('hide-important');
            }
        },
        getImage(event) {
            const files = event.target.files;
            for (let i = 0; i < files.length; i++) {
                this.post.images.push(files[i]);
            }
        },
        posting() {
            const formData = new FormData();
            this.post.images.forEach((file, index) => {
                formData.append('images[]', file);
            });
            Object.entries(this.post).forEach(([key, value]) => {
                formData.append(key, value);
            });
            formData.append('privacy', this.privacy)
            axios
                .post('post/create', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                })
                .then((res) => {
                    if (res.data.status) {
                        this.post = {
                            images: []
                        };
                        this.$refs.btnCloseModal.click();
                        $('.fileinput-remove-button').click();
                        this.loadPost();

                    } else {
                        console.log(res.data.message);
                    }

                })
                .catch((err) => {
                    console.log(err);
                });
        },
        setDropdown() {
            $('.dropdownn').css('inset', 'auto 0px 0px auto');
            $('.dropdownn').css('transform', 'translate(0px, -29px)');
        },
        loadPost() {
            axios
                .get('post/data')
                .then((res) => {
                    if (res.data.status) {
                        this.list_post = res.data.dataPost;
                    } else {
                        console.log(res.data.message);

                    }
                });
        },
        loadComment() {
            axios
                .get('comment/data')
                .then((res) => {
                    this.list_comment = res.data.dataComment;
                });
        },
        createComment(id, k) {
            if (!event.shiftKey && this.comments[k] != null) {
                var comment = this.comments[k];
                this.index_friend_tags.forEach(i => {
                    comment = comment.replace('@' + this.list_friend[i].fullname,
                        "<a href='/" + this.list_friend[i].username + "' class='custom-span'>" + this.list_friend[i].fullname + "</a>");
                    // console.log(this.list_friend[i].fullname);
                });
                var payload = {
                    'content': comment,
                    'id_post': id,
                    'id_tag': this.id_tags
                }
                axios
                    .post('comment/create', payload)
                    .then((res) => {
                        if (res.data.status) {
                            this.comments = [];
                            this.loadComment();
                        } else {
                            console.log(res.data.message);
                        }
                    })
                    .catch((res) => {
                        $.each(res.response.data.errors, function (k, v) {
                            toastr.error(v[0], 'error');
                        });
                    });
            }

        },

    },
}
</script>
<style>
@import './style.css';
@import './bs-input.css';
</style>
