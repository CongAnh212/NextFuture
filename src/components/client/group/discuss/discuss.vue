<template >
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
                            <i class="far fa-user-circle " style="font-size: 30px;"></i>

                            <form class="post-text ms-3 w-100 btn-temp" data-bs-toggle="modal" data-bs-target="#post-modal"
                                action="javascript:void();" style="flex:1">
                                <input type="text" class="form-control rounded" placeholder="what are you thinking ?"
                                    style="border:none;">
                            </form>
                        </div>
                        <div class="modal fade show" id="post-modal" tabindex="-1" aria-labelledby="post-modalLabel"
                            style="display: block;" aria-hidden="true">
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
                                                <img :src="urlImg + myInfo.avatar" alt="userimg"
                                                    style="width: 100%; height: 100%; object-fit: cover;">
                                            </div>
                                            <form class="post-text ms-3 w-100" action="javascript:void(); " style="flex:1">
                                                <input v-model="post.caption" type="text" class="form-control rounded"
                                                    placeholder="Write something here..." style="border:none;">
                                            </form>
                                        </div>
                                        <input @change="getImage" id="input-b3" name="input-b3[]" type="file" class="file"
                                            multiple data-show-upload="false" data-show-caption="true"
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
                                        <div class="other-option">
                                            <div class="d-flex align-items-center justify-content-between">
                                                <div class="d-flex align-items-center">
                                                    <div style="width: 3.5rem; height: 3.5rem; overflow: hidden; margin-right: 0.3rem;"
                                                        class="flex-center circle">
                                                        <img :src="urlImg + myInfo.avatar" alt="userimg"
                                                            style="width: 100%; height: 100%; object-fit: cover; ">
                                                    </div>
                                                    <h6>Your Story</h6>
                                                </div>
                                                <div class="card-post-toolbar">
                                                    <div class="dropdown">
                                                        <span class="" data-bs-toggle="dropdown" aria-haspopup="true"
                                                            aria-expanded="false" role="button">
                                                            <span class="btn btn-primary">Privacy</span>
                                                        </span>
                                                        <div class="dropdown-menu m-0 p-0 dropdownn" style=" z-index: 99;">
                                                            <a @click="setPrivacyIndex(1)" id="privacy-1"
                                                                class="dropdown-item px-3 py-1" href="#">
                                                                <div class="d-flex align-items-top">
                                                                    <i class="ri-save-line h4"></i>
                                                                    <div class="data ms-2">
                                                                        <h6>Public</h6>
                                                                        <p class="mb-0">Anyone on or off Facebook</p>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                            <a @click="setPrivacyIndex(2)" id="privacy-2"
                                                                class="dropdown-item px-3 py-1" href="#">
                                                                <div class="d-flex align-items-top">
                                                                    <i class="ri-close-circle-line h4"></i>
                                                                    <div class="data ms-2">
                                                                        <h6>Friends</h6>
                                                                        <p class="mb-0">Your Friend on facebook</p>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                            <a @click="setPrivacyIndex(3)" id="privacy-3"
                                                                class="dropdown-item px-3 py-1" href="#">
                                                                <div class="d-flex align-items-top">
                                                                    <i class="ri-user-unfollow-line h4"></i>
                                                                    <div class="data ms-2">
                                                                        <h6>Friends except</h6>
                                                                        <p class="mb-0">Don't show to some friends</p>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                            <a @click="setPrivacyIndex(4)" id="privacy-4"
                                                                class="dropdown-item px-3 py-1" href="#">
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
                                        <button @click="posting()" class="btn btn-primary d-block w-100 mt-3">Post
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ul class="post-opt-block flex-around list-inline m-0 p-0 ">
                            <li class="mb-md-0"><a style="cursor: pointer;" class="">
                                    <img src="/src/assets/client/images/small/07.png" alt="icon" class="img-fluid">
                                    Photo/Video </a>
                            </li>
                            <li class="mb-md-0"><a style="cursor: pointer;" class="">
                                    <img src="/src/assets/client/images/small/08.png" alt="icon" class="img-fluid"> Tag
                                    Friend </a>
                            </li>
                            <li class=""><a style="cursor: pointer;" class="">
                                    <img src="/src/assets/client/images/small/09.png" alt="icon" class="img-fluid">
                                    Feeling/Activity </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class=" col-5">
                <div class="card " style="border-radius: 10px;">
                    <div class="card-body b " style="border-radius: 10px; box-shadow: 0px 0px 5px #33333324;">

                        <span style="font-weight: 600;">Introduct</span>
                        <div v-if="info.privacy == 1" class="w-100 d-flex mb-2 privacy-hover ps-2 align-items-center"
                            style="height: 65px; line-height: 18px;">
                            <div class="d-flex me-2 justify-content-center align-items-center"
                                style="width:30px;height:30px;">
                                <i class="fas fa-globe-asia text-dark" style="font-size: 20px;"></i>
                            </div>
                            <div class="d-flex justify-content-between align-items-center" style="width:calc(100% - 60px);">
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
                            <div class="d-flex justify-content-between align-items-center" style="width:calc(100% - 60px);">
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
                            <div class="d-flex justify-content-between align-items-center" style="width:calc(100% - 60px);">
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
                            <div class="d-flex justify-content-between align-items-center" style="width:calc(100% - 60px);">
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
export default {
    data() {
        return {
            myInfo: {},
            post: {
                images: []
            },
            urlImg: url,
            privacy: '1',
            privacyMapping: {
                1: '#privacy-1',
                2: '#privacy-2',
                3: '#privacy-3',
                4: '#privacy-4'
            },
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
            required: true,
        },
        viewType: {
            type: Number,
            required: true
        }
    },
    mounted() {
        this.getInfo()
        this.handleInputBootstrap()
    },
    methods: {
        posting() {
            console.log(123);
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
                        console.log('res: ', res);
                        console.log("hello canyh");
                        if (res.data.status) {
                            this.post = {
                                images: []
                            };
                            this.$refs.btnCloseModal.click();
                            $('.fileinput-remove-button').click();
                            // this.loadPost();

                        } else {
                            console.log(res.data.message);
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }


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
        getInfo() {
            axios
                .get('profile/data')
                .then((res) => {
                    this.myInfo = res.data.myInfo
                });
        }
    },
}
</script>
<style >
@import '../../home/bs-input.css';
</style>