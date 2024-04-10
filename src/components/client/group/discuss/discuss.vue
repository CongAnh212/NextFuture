<template>
    <div class="pt-2" style="padding: 0px 8%;">
        <div class="w-100 px-2 mx-0 pt-2 row" style="flex: 1;  position: relative;   ">
            <div class=" col-7" style="">
                <div v-if="viewType == 0 && info.privacy == -1" class="card" style="border-radius: 10px; ">
                    <div class="flex-center" style="flex-direction: column; height: 24rem;">
                        <img style="width: 15%;"
                            src="https://www.facebook.com/images/comet/empty_states_icons/permissions/permissions_gray_wash.svg"
                            alt="">
                        <h4><b>This is a private group</b></h4>
                        <p>Please join this group to watch or discuss</p>
                    </div>

                </div>
                <div v-else class="card" style="border-radius: 10px; ">
                    <div class="card-body" style=" border-radius: 10px; box-shadow: 0px 0px 5px #33333345;">
                        <div class="w-100 d-flex align-items-center mb-4" style="gap:10px;">
                            <div class="avatar-3">
                                <img :src="urlImg + myInfo.avatar">
                            </div>
                            <form class="post-text ms-3 w-100 btn-temp" data-bs-toggle="modal"
                                data-bs-target="#post-modal" action="javascript:void();" style="flex:1">
                                <input type="text" class="form-control rounded" placeholder="What are you thinking ?"
                                    style="border:none;">
                            </form>
                        </div>
                        <div class="modal fade " id="post-modal" tabindex="-1" aria-labelledby="post-modalLabel"
                            style="display: none;" aria-hidden="true">
                            <div class="modal-dialog   modal-fullscreen-sm-down modal-dialog-centered modal-lg">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="post-modalLabel">Create Post</h5>
                                        <button ref="btnCloseModal" type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal"><i class="ri-close-fill"></i></button>
                                    </div>
                                    <div class="modal-body" style="overflow: auto;">
                                        <div class="d-flex align-items-center mb-3">
                                            <div style="width: 3.5rem; height: 3.5rem; overflow: hidden;"
                                                class="flex-center circle">
                                                <img v-if="privacy" src="../../../../assets/img/avatar-an-danh.png"
                                                    alt="userimg" style="width: 100%; height: 100%; object-fit: cover;">
                                                <img v-else :src="urlImg + myInfo.avatar" alt="userimg"
                                                    style="width: 100%; height: 100%; object-fit: cover;">
                                            </div>
                                            <form class="post-text ms-3 w-100" action="javascript:void(); "
                                                style="flex:1">
                                                <input v-model="post.caption" type="text" class="form-control rounded"
                                                    placeholder="Write something here..." style="border:none;">
                                            </form>
                                        </div>
                                        <input @change="getImage" id="input-b3" name="input-b3[]" type="file"
                                            class="file" multiple data-show-upload="false" data-show-caption="true"
                                            data-msg-placeholder="Select {files} for upload..." accept="image/*">
                                        <!-- ****************************************************************** -->
                                        <hr>
                                        <ul class="d-flex flex-wrap align-items-center list-inline m-0 p-0 ">
                                            <li class="col-md-6 my-2">
                                                <div @click='show()' style="cursor: pointer; "
                                                    class="bg-soft-primary rounded p-2 pointer me-3">
                                                    <a></a><img src="../../../../assets/client/images/small/07.png"
                                                        alt="icon" class="img-fluid">
                                                    Photo/Video
                                                </div>
                                            </li>
                                            <li class="col-md-6 my-2">
                                                <div style="cursor: pointer; "
                                                    class="bg-soft-primary rounded p-2 pointer me-3"><a></a><img
                                                        src="../../../../assets/client/images/small/08.png" alt="icon"
                                                        class="img-fluid">
                                                    Tag
                                                    Friend
                                                </div>
                                            </li>
                                        </ul>
                                        <hr>
                                        <div v-if="info.anonymity == 1" class="other-option">
                                            <div class="d-flex align-items-center justify-content-between">
                                                <div class="d-flex align-items-center">
                                                    <div style="width: 3.5rem; height: 3.5rem; overflow: hidden; margin-right: 0.3rem;"
                                                        class="flex-center circle">
                                                        <img v-if="privacy"
                                                            src="../../../../assets/img/avatar-an-danh.png"
                                                            alt="userimg"
                                                            style="width: 100%; height: 100%; object-fit: cover;">
                                                        <img v-else :src="urlImg + myInfo.avatar" alt="userimg"
                                                            style="width: 100%; height: 100%; object-fit: cover;">
                                                    </div>
                                                </div>
                                                <div class="form-check form-switch">
                                                    <label class="form-check-label f-500" for="flexSwitchCheckChecked">
                                                        Post anonymously</label>
                                                    <input class="form-check-input" type="checkbox"
                                                        id="flexSwitchCheckChecked" checked="false" v-model="privacy">
                                                </div>
                                            </div>
                                        </div>
                                        <div v-else></div>
                                        <button @click="posting()" class="btn btn-primary d-block w-100 mt-3">
                                            Post
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <ul class="post-opt-block flex-around list-inline m-0 p-0 ">
                            <li data-bs-toggle="modal" data-bs-target="#post-modal" @click="show()" class="mb-md-0"><a
                                    style="cursor: pointer;" class="">
                                    <img src="/src/assets/client/images/small/07.png" alt="icon" class="img-fluid">
                                    Photo/Video </a>
                            </li>
                            <li class="mb-md-0"><a style="cursor: pointer;" class="">
                                    <img src="/src/assets/client/images/small/08.png" alt="icon" class="img-fluid"> Tag
                                    Friend </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="">
                    <ListPostComponent :listPost="listPost" :myInfo="myInfo" v-if="listPost.length > 0" />
                </div>
            </div>

            <div class=" col-5" style="height: fit-content; position: sticky; top: 6rem;">
                <div class="card " style="border-radius: 10px;">
                    <div class="card-body b " style="border-radius: 10px; box-shadow: 0px 0px 5px #33333324;">
                        <span style="font-weight: 600;">Introduct</span>
                        <div v-if="info.privacy == 1" class="w-100 d-flex mb-2 privacy-hover ps-2 align-items-center"
                            style="height: 65px; line-height: 18px;">
                            <div class="d-flex me-2 justify-content-center align-items-center"
                                style="width:30px;height:30px;">
                                <i class="fas fa-globe-asia text-dark" style="font-size: 20px;"></i>
                            </div>
                            <div class="d-flex justify-content-between align-items-center"
                                style="width:calc(100% - 60px);">
                                <div class="d-flex flex-column pt-3 a" style="user-select:none;">
                                    <h5><b style="font-weight:500;">Public</b></h5>
                                    <p>Anyone can see everyone in the group and what they post</p>
                                </div>
                            </div>
                        </div>
                        <div v-else class="w-100 d-flex mb-2 privacy-hover ps-2 align-items-center"
                            style="height: 65px; line-height: 18px;">
                            <div class="d-flex me-2 justify-content-center align-items-center"
                                style="width:30px;height:30px;">
                                <i class="fas fa-lock text-dark" style="font-size: 20px;"></i>
                            </div>
                            <div class="d-flex justify-content-between align-items-center"
                                style="width:calc(100% - 60px);">
                                <div class="d-flex flex-column pt-3 a" style="user-select:none;">
                                    <h5><b style="font-weight:500;">Private</b></h5>
                                    <p>only members can see everyone in the group and what they post</p>
                                </div>
                            </div>
                        </div>
                        <div v-if="info.display == 2" class="w-100 d-flex mb-2 privacy-hover ps-2 align-items-center"
                            style="height: 65px;">
                            <div class="d-flex me-2 justify-content-center align-items-center"
                                style="width:30px;height:30px;">
                                <i class="fas fa-eye text-dark" style="font-size: 20px;"></i>
                            </div>
                            <div class="d-flex justify-content-between align-items-center"
                                style="width:calc(100% - 60px);">
                                <div class="d-flex flex-column pt-3 a" style="user-select:none;">
                                    <h5><b style="font-weight:500;">Visible</b></h5>
                                    <p>Anyone can see this group</p>
                                </div>
                            </div>
                        </div>
                        <div v-else class="w-100 d-flex mb-2 privacy-hover ps-2 align-items-center"
                            style="height: 65px;  line-height: 18px;">
                            <div class="d-flex me-2 justify-content-center align-items-center"
                                style="width:30px;height:30px;">
                                <i class="fas fa-eye-slash text-dark" style="font-size: 20px;"></i>
                            </div>
                            <div class="d-flex justify-content-between align-items-center"
                                style="width:calc(100% - 60px);">
                                <div class="d-flex flex-column pt-3 a" style="user-select:none;">
                                    <h5><b style="font-weight:500;">Hidden</b></h5>
                                    <p>Only group members can see this group</p>
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
import axios, { url } from '../../../../core/coreRequest';
import Swal from 'sweetalert2'
import ListPostComponent from '../home/list_post.vue'
// import emitter from '../../../../emitter.js'

export default {
    components: {
        ListPostComponent
    },
    data() {
        return {
            post: {
                images: [],
            },
            urlImg: url,
            privacy: false,
            listPost: [],
        }
    },
    watch: {
        myInfo: {
            handler(newValue, oldValue) {
                this.handleInputBootstrap()
            },
            deep: true, // Sử dụng deep watch để theo dõi các thay đổi sâu
            immediate: true, // Kích hoạt handler ngay từ khi component được khởi tạo
        },
    },
    props: {
        info: {
            type: Object,
        },
        viewType: {
            type: Number,
        },
        myInfo: {
            type: Object,
        }
    },
    mounted() {
        this.handleInputBootstrap()
        this.getPostGroup()
    },
    methods: {
        posting() {
            var check = false
            if (this.post.images.length == 0 && !this.post.caption) {
                check = true
            }
            const formData = new FormData();
            this.post.images.forEach((file, index) => {
                formData.append('images[]', file);
            });
            Object.entries(this.post).forEach(([key, value]) => {
                formData.append(key, value);
            });
            formData.append('privacy', this.privacy)
            formData.append('id_group', this.$route.params.id_group)
            if (check) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Please enter at least 1 information to post",
                    showConfirmButton: false
                });
                setTimeout(() => {
                    Swal.close();
                }, 1500);
            } else {
                axios
                    .post('groups/post/create', formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                    })
                    .then((res) => {
                        if (res.data.status) {
                            this.$emit('countPostApproval', res.data.post);
                            this.post = {
                                images: []
                            };
                            this.$refs.btnCloseModal.click();
                            $('.fileinput-remove-button').click();
                            var post = res.data.post
                            post['fullname'] = this.myInfo.fullname
                            post['username'] = this.myInfo.username
                            post['avatar'] = this.myInfo.avatar
                            if (this.info.post_approval == 0) {
                                this.listPost.unshift(post);
                            } else {
                                // emitter.$emit('addPost', post)
                                this.emitter.emit('addPost', post)
                            }
                        } else {
                            console.log(res.data.message);
                        }
                    });
            }
        },
        getImage(event) {
            const files = event.target.files;
            for (let i = 0; i < files.length; i++) {
                this.post.images.push(files[i]);
            }
        },
        show() {
            if ($('.file-input').hasClass('hide-important')) {
                $('.file-input').removeClass('hide-important');
            } else {
                $('.file-input').addClass('hide-important');
            }
        },
        handleInputBootstrap() {
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
        getPostGroup() {
            axios
                .post('groups/post/data', { id: this.$route.params.id_group })
                .then((res) => {
                    this.listPost = res.data.listPost
                })
        },
    },
}
</script>
<style>
@import '../../home/bs-input.css';
</style>