<template >
    <div class="iq-sidebar sidebar-default" style="width: 20vw;">
        <div id="sidebar-scrollbar" data-scrollbar="true" tabindex="-1"
            style="overflow: hidden; outline: none;position: relative;">
            <div class="scroll-content" style="position: relative;height: 100%;">
                <nav class="iq-sidebar-menu" style="position: relative;">
                    <ul id="iq-sidebar-toggle" class="iq-menu" style="margin: 0;">
                        <div class="d-flex justify-content-between" style="margin: 0 0.9rem;">
                            <h4 style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-weight: 500;">
                                <b>Privacy</b>
                            </h4>
                            <div @click="openPrivacyModal()"
                                class="rounded-circle d-flex justify-content-center align-items-center gear"
                                style="height: 35px; width: 35px; background-color: #e4e4e4; cursor: pointer;">
                                <i class="fa-solid fa-gear" style="font-size: 20px; color: black;"></i>
                            </div>
                            <!-- Modal -->
                            <div style="z-index: 10; display: none;" class="modal fade" id="privacyModal" tabindex="-1"
                                aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content privacyModalMain">
                                        <div class="modal-header d-flex justify-content-center">
                                            <h1 class="modal-title fs-5"><b>Story privacy</b></h1>
                                        </div>
                                        <div class="modal-body">
                                            <h5><b style="font-weight: 500;">Who can see your story?</b></h5>
                                            <p>Your story will be visible on NF for 24 hours.</p>
                                            <div class=" w-100 h-100 ">
                                                <div @click="setPrivacy('rdoPublic')"
                                                    class="w-100 d-flex mb-2 privacy-hover ps-2 align-items-center"
                                                    style="height: 65px;">
                                                    <div class=" bg-light circle d-flex me-2
                                                    justify-content-center align-items-center"
                                                        style="width: 55px; height: 55px;">
                                                        <i class="fas fa-globe-asia fa-2x text-dark "></i>
                                                    </div>
                                                    <div class="d-flex justify-content-between
                                                    align-items-center" style="width: calc(100% - 60px);">
                                                        <div class="d-flex flex-column pt-3" style="user-select: none;">
                                                            <h5>
                                                                <b style="font-weight: 500;">Public</b>
                                                            </h5>
                                                            <p>anyone on NF social networks</p>
                                                        </div>
                                                        <div>
                                                            <input class="form-check-input me-2" value="1"
                                                                style="cursor: pointer;" name="privacy" type="radio"
                                                                id="rdoPublic">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div @click="setPrivacy('rdoFriend')"
                                                    class="w-100 d-flex mb-2 privacy-hover ps-2 align-items-center"
                                                    style="height: 65px;">
                                                    <div class=" bg-light circle d-flex me-2
                                                    justify-content-center align-items-center"
                                                        style="width: 55px; height: 55px;">
                                                        <i class="fas fa-users fa-2x text-dark"></i>
                                                    </div>
                                                    <div class="d-flex justify-content-between
                                                    align-items-center" style="width: calc(100% - 60px);">
                                                        <div class="d-flex flex-column pt-3" style="user-select: none;">
                                                            <h5>
                                                                <b style="font-weight: 500;">Friends</b>
                                                            </h5>
                                                            <p>only your friends on the NF social network</p>
                                                        </div>
                                                        <div>
                                                            <input class="form-check-input me-2" value="2"
                                                                style="cursor: pointer;" name="privacy" type="radio"
                                                                id="rdoFriend">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div @click="setPrivacy('rdoPrivate')"
                                                    class="w-100 d-flex mb-2 privacy-hover ps-2 align-items-center"
                                                    style="height: 65px;">
                                                    <div class=" bg-light circle d-flex me-2
                                                    justify-content-center align-items-center"
                                                        style="width: 55px; height: 55px;">
                                                        <i class="fas fa-lock fa-2x text-dark "></i>
                                                    </div>
                                                    <div class="d-flex justify-content-between
                                                    align-items-center" style="width: calc(100% - 60px);">
                                                        <div class="d-flex flex-column pt-3" style="user-select: none;">
                                                            <h5>
                                                                <b style="font-weight: 500;">Private</b>
                                                            </h5>
                                                            <p>only you see on social networks</p>
                                                        </div>
                                                        <div>
                                                            <input class="form-check-input me-2" value="4"
                                                                style="cursor: pointer;" name="privacy" type="radio"
                                                                id="rdoPrivate">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary"
                                                @click="closePrivacyModal()">Close</button>
                                            <button @click="savePrivacy()" type="button" class="btn btn-primary">Save
                                                changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <li class="d-flex align-items-center">
                            <div class="avatar-3 mx-2">
                                <img :src="urlImg + myData.avatar" alt="user">
                            </div>
                            <span><b class="text-dark">{{ myData.fullname }}</b></span>
                        </li>
                        <hr>
                    </ul>
                    <div v-if="isTextStory" class="px-3">
                        <div class="mb-3">
                            <textarea v-model="textt" class="form-control pt-3" name="" id="" rows="7"
                                placeholder="Start typing ..."></textarea>
                        </div>
                        <div class="mb-3 p-2 radius-10" style="border: 1px solid #e4e4e4;">
                            <label class="text-dark">Background</label>
                            <div class="mt-2 d-flex flex-wrap flex-limit">
                                <template v-for="(v, k) in list_background">
                                    <div :id="'bg-' + k" @click="changeBackground(k, v)" class="rounded-circle bg-check"
                                        :style="{ background: v }" style="width: 25px; height: 25px; cursor: pointer;">
                                    </div>
                                </template>
                            </div>
                        </div>
                    </div>
                </nav>
                <div class="p-5"></div>
                <div v-if="isCreate" class="nav-bottom d-flex align-items-center justify-content-center">
                    <button class="btn btn-light me-2 px-4" @click="closeModal">Cancel</button>
                    <button @click="screenCapture" class="btn btn-primary px-4">Share the story</button>
                </div>
            </div>
            <div class="scrollbar-track scrollbar-track-x" style="display: none;">
                <div class="scrollbar-thumb scrollbar-thumb-x" style="width: 250px; transform: translate3d(0px, 0px, 0px);">
                </div>
            </div>
            <div class="scrollbar-track scrollbar-track-y" style="display: none;">
                <div class="scrollbar-thumb scrollbar-thumb-y"
                    style="height: 514px; transform: translate3d(0px, 0px, 0px);">
                </div>
            </div>
        </div>
    </div>
    <div class="d-flex justify-content-center align-items-center "
        style="height: 80vh; width: 80vw; position: absolute; right: 0; top: 4.688rem;">
        <div class="d-flex" style="height: 333px; width: 470px; gap: 20px;">

            <div class="radius-10 make-color1 d-flex justify-content-center align-items-center left"
                style="height: 100%; width: 50%; position: relative; cursor: pointer; flex-direction: column;">
                <div class="hover-background"></div>
                <input @change="handleFileChange" id="input-b5" name="input-b5[]" type="file" ref="fileInput"
                    accept=".png, .jpg, .jpeg">
                <div class="d-flex justify-content-center align-items-center"
                    style="flex-direction: column; position: absolute;">
                    <div class="rounded-circle d-flex justify-content-center align-items-center hello mb-2"
                        style="height: 50px; width: 50px; background-color: #ffffff; cursor: pointer;">
                        <i class="fa-regular fa-images " style="font-size: 20px; color: rgb(0, 0, 0);"></i>
                    </div>
                    <b style="color: #ffffff; font-size: 12px;">Create Photo Stories</b>
                </div>

            </div>
            <div class="radius-10 make-color2 d-flex justify-content-center align-items-center left" @click="openModal"
                style="height: 100%; width: 50%; position: relative; cursor: pointer; flex-direction: column;">
                <div class="hover-background"></div>
                <div class="rounded-circle d-flex justify-content-center align-items-center hello mb-2"
                    style="height: 50px; width: 50px; background-color: #ffffff; cursor: pointer;">
                    <i class="fa-solid fa-font " style="font-size: 20px; color: rgb(0, 0, 0);"></i>
                </div>
                <b style="color: #ffffff; font-size: 12px;">Create Text Stories</b>
            </div>
        </div>

        <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-modal="true"
            role="dialog" style="position: absolute; display: none; height: 90vh;">
            <div class="modal-dialog modal-lg border_modal radius-10" role="document">
                <div class="modal-content" style="border: 0px solid !important;">
                    <div class="modal-body" style="padding-top: 10px;">
                        <h1 class="modal-title fs-5" id="exampleModalLabel" style="padding-bottom: 10px; color: black;">
                            Preview</h1>
                        <div class="make-modal radius-10 d-flex justify-content-center" style=" position: relative;">
                            <div class="container-content row d-flex justify-content-center" style="overflow: hidden;">
                                <div class="col-3 cover ps-3"
                                    style="background-color: rgba(36, 36, 36, 0.4);z-index: 10; width: 27.5%;"></div>
                                <div id="content" @dragover.prevent @dragover="drop" ref="captureDiv"
                                    class="d-flex justify-content-center align-items-center col-6 p-0 ">
                                    <!-- d-flex justify-content-center align-items-center-->
                                    <div class="radius-10" style="width: 100%; height: 100%; border: 1px solid #fff; z-index: 6; pointer-events: none;
                                        position: absolute;">
                                    </div>
                                    <div id="mainImage" style="overflow: visible; max-width: 10000px; position: relative;"
                                        class="draggable" draggable="true" :style="{ left: x + 'px', top: y + 'px' }"
                                        @dragstart="getCoordinates" @dragend="close()">
                                        <img id="mainImg" :src="mainImg" draggable="false"
                                            style="height: 100%; width: 100%; pointer-events: none; object-fit: cover">
                                    </div>
                                </div>
                                <div class="col-3 cover"
                                    style="background-color: rgba(36, 36, 36, 0.4);z-index: 10; width: 27.5%"></div>

                            </div>

                            <div class="range_form mt-2 " style="z-index: 5;">
                                <input v-model="abc" @input="check()" type="range" style="width: 100%;">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade " id="storyText" tabindex="-1" aria-labelledby="storyTextLabel" aria-modal="true"
            role="dialog" style="position: absolute; display: none; height: 90vh;">
            <div class="modal-dialog modal-lg border_modal radius-10" role="document">
                <div class="modal-content" style="border: 0px solid !important;">
                    <div class="modal-body" style="padding-top: 10px;">
                        <h1 class="modal-title fs-5" id="storyTextLabel" style="padding-bottom: 10px; color: black;">
                            Preview</h1>
                        <div class="make-modal radius-10 d-flex justify-content-center align-items-center"
                            style=" position: relative;">
                            <div class="container-content-right row d-flex justify-content-center align-items-center"
                                style="overflow: hidden;" ref="content-text">
                                <div class="col-3 "></div>
                                <div id="content-text" style="overflow: hidden;"
                                    class="d-flex justify-content-center align-items-center col-6 p-0 text-content"
                                    ref="contentText">
                                    <p class="px-3 text-center" style="font-family: 'Helvetica Neue', sans-serif; /* Sử dụng một font family phổ biến */
                                        font-size: 26px; /* Đặt kích thước font là 36px */
                                        font-weight: bold; /* Đặt độ đậm là đậm (bold) */
                                        color: #ffffff;
                                        word-wrap: break-word;">{{ textt }}</p>
                                </div>
                                <div class="col-3 "></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import html2canvas from "html2canvas";
import axios, { url } from '../../../core/coreRequest';
import Swal from 'sweetalert2'
export default {
    data() {
        return {
            urlImg: url,
            mainImg: '',
            abc: 10,
            x: 0,
            y: 0,
            x_drag: 0,
            y_drag: 0,
            isDrag: false,
            origin_x: 0,
            origin_y: 0,
            isCreate: false,
            capturedImage: null,
            list_background: [
                "rgb(100, 107, 245)",
                "rgb(92, 181, 233)",
                "rgb(203, 233, 92)",
                "rgb(248, 124, 57)",
                "linear-gradient(180deg, rgb(0,0,0), red, blue)",
                "linear-gradient(130deg, rgb(0,0,0), red, blue)",
                "linear-gradient(180deg, rgb(121, 121, 121), rgb(243, 113, 113), rgb(80, 80, 248))",
                "linear-gradient(131deg, rgba(41, 187, 124, 0.8), rgba(255, 0, 0, 0) 70.71%), linear-gradient(210deg, rgba(165, 243, 168, 0.8), rgba(255, 0, 0, 0) 70.71%), linear-gradient(336deg, rgba(34, 227, 12, 0.8), rgba(0, 0, 255, 0) 70.71%)",
                "linear-gradient(131deg, rgba(255, 255, 255, 0.8), rgba(255, 0, 0, 0) 70.71%),linear-gradient(210deg, rgba(0, 0, 0, 0.8), rgba(255, 0, 0, 0) 70.71%),linear-gradient(336deg, rgba(190, 76, 76, 0.8), rgba(0, 0, 255, 0) 70.71%)",
                "linear-gradient(131deg, rgba(245, 12, 241, 0.8), rgba(255, 0, 0, 0) 70.71%),linear-gradient(210deg, rgba(252, 186, 3, 0.8), rgba(255, 0, 0, 0) 70.71%),linear-gradient(336deg, rgba(0, 217, 255, 0.8), rgba(0, 0, 255, 0) 70.71%)",
                "linear-gradient(131deg, rgba(245, 12, 167, 0.8), rgba(255, 0, 0, 0) 70.71%),linear-gradient(210deg, rgba(3, 252, 86, 0.8), rgba(255, 0, 0, 0) 70.71%),linear-gradient(336deg, rgba(44, 85, 92, 0.8), rgba(0, 0, 255, 0) 70.71%)",
                "linear-gradient(200deg, rgba(105, 18, 246, 0.8), rgba(255, 0, 0, 0) 70.71%),linear-gradient(280deg, rgba(225, 162, 162, 0.8), rgba(255, 0, 0, 0) 70.71%),linear-gradient(0deg, rgba(227, 144, 144, 0.8), rgba(0, 0, 255, 0) 70.71%)",
                "linear-gradient(30deg, rgba(105, 18, 246, 0.5),rgba(174, 228, 127, 0.5),rgba(230, 204, 230, 0.5), rgba(255, 0, 0, 0)),linear-gradient(300deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5), rgba(255, 0, 255, 0.5), rgba(0, 51, 255, 0.793))",
                "linear-gradient(30deg, rgb(255, 0, 0), rgb(174, 228, 127),rgb(230, 204, 230), rgb(255, 0, 0))",
                "linear-gradient(240deg, rgb(255, 0, 0), rgb(246, 255, 0),rgb(60, 255, 0), rgb(0, 247, 255), rgb(0, 72, 255), rgb(123, 0, 255), rgb(123, 0, 255), rgb(255, 0, 221), rgb(255, 0, 0))"
            ],
            textt: "",
            isTextStory: false,
            myData: {},
            namePrivacy: '',
            privacy: 1,
        }
    },
    mounted() {
        $("#input-b5").fileinput({ showCaption: false, dropZoneEnabled: false });
        $('.fileinput-cancel-button').addClass('hide-important');
        $('.fileinput-remove-button').addClass('hide-important');
        $('.fileinput-upload-button').addClass('hide-important');
        $('.file-preview').css('display', 'none');
        $('#bg-0').addClass('bg-active');
        // $('.file-input').css('display', 'none');
        axios
            .get('profile/data')
            .then((res) => {
                this.myData = res.data.myInfo;
            });
        $('#rdoPublic').prop('checked', true);

    },
    methods: {
        savePrivacy() {
            this.openPrivacyModal();
            if (this.namePrivacy == 'rdoPublic') {
                this.privacy = 1;
            } else if (this.namePrivacy == 'rdoFriend') {
                this.privacy = 2;
            } else {
                this.privacy = 4;
            }
        },
        closePrivacyModal() {
            this.openPrivacyModal();
        },
        setPrivacy(a) {
            $('#' + a).prop('checked', true);
            this.namePrivacy = a;
            // if (a == 'rdoPublic') {
            //     this.privacy = 1;
            // } else if (a == 'rdoFriend') {
            //     this.privacy = 2;
            // } else {
            //     this.privacy = 4;
            // }
        },
        openModal() {
            $('#storyText').addClass("show");
            this.isCreate = true;
            $('#storyText').css("display", 'block');
            this.isTextStory = true;
        },
        screenCapture() {
            if (!this.isTextStory) {
                this.captureScreen();
            } else {
                this.captureScreenText();
            }
        },
        async captureScreen() {
            const divToCapture = this.$refs.captureDiv;
            html2canvas(divToCapture).then((canvas) => {
                this.capturedImage = canvas.toDataURL('image/png');
                this.uploadFile();
            });
        },
        async uploadFile() {
            var payload = {
                image: this.capturedImage,
                privacy: this.privacy
            }
            try {
                axios.post('story/create', payload)
                    .then((res) => {
                        if (res.data.status) {
                            console.log(res.data.message);
                            this.$router.push({ name: 'homepage' });
                            // window.location.href = '/';
                        } else {
                            console.log(res.data.message);
                        }
                    })
            } catch (error) {
                console.error('Lỗi tải ảnh:', error);
            }
        },
        async captureScreenText() {
            if (this.textt) {
                const divToCapture = this.$refs.contentText;
                html2canvas(divToCapture).then((canvas) => {
                    this.capturedImage = canvas.toDataURL('image/png');
                    this.uploadFile();
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Error...",
                    text: 'Please enter the status line you want to share',
                    showConfirmButton: false
                });
                setTimeout(() => {
                    Swal.close();
                }, 1500);
            }

        },
        handleFileChange(event) {
            $('#exampleModal').addClass("show");
            this.isCreate = true;
            $('#exampleModal').css("display", 'block');
            $('.fileinput-cancel-button').css('display', 'none');
            this.selectedFile = this.$refs.fileInput.files[0];
            const fileInput = this.$refs.fileInput;
            if (fileInput.files && fileInput.files[0]) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.mainImg = e.target.result;
                };
                reader.readAsDataURL(fileInput.files[0]);
            }
        },
        check() {
            $('#mainImage').css('width', (this.abc * 100 / 20) + "%");
            // $('#mainImage').css('height', (this.abc * 100 / 20) + "%");
            // $('#mainImage').css('width', "200%");
            console.log($('#mainImage').width());
        },
        getCoordinates(event) {
            $('#content').css('overflow', 'visible');

            if (!this.isDrag) {
                this.isDrag = true;
                this.origin_x = event.target.getBoundingClientRect().left;
                this.origin_y = event.target.getBoundingClientRect().top;
            }
            const element = event.currentTarget; // Phần tử mục tiêu của sự kiện click
            const rect = element.getBoundingClientRect(); // Lấy tọa độ của phần tử
            this.x_drag = event.clientX - rect.left; // Tọa độ x của sự kiện click đối với phần tử
            this.y_drag = event.clientY - rect.top; // Tọa độ y của sự kiện click đối với phần tử
        },
        drop(event) {
            event.preventDefault();
            const data = event.dataTransfer.getData('text');
            this.text = data;
            this.x = event.clientX - this.origin_x - this.x_drag;
            this.y = event.clientY - this.origin_y - this.y_drag;
            alert
            // console.log(`vị trí của x là ${event.target.getBoundingClientRect().left} của y là ${event.target.getBoundingClientRect().top}`);
        },
        close() {
            $('#content').css('overflow', 'hidden');
        },
        closeModal() {
            $('#exampleModal').removeClass("show");
            $('#exampleModal').css("display", 'none');
            this.isCreate = false;
            $('#storyText').removeClass("show");
            $('#storyText').css("display", 'none');
            this.isTextStory = false;
        },
        changeBackground(index, v) {
            $('.bg-check.bg-active').removeClass('bg-active');
            $('#bg-' + index).addClass('bg-active');
            $('#content-text').css('background', v);

        },
        openPrivacyModal() {
            if (!$('#privacyModal').hasClass("show")) {
                $('#privacyModal').addClass('show');
                $('#privacyModal').css('display', 'block');
            } else {
                $('#privacyModal').removeClass('show');
                $('#privacyModal').css('display', 'none');
            }
            if (this.privacy == 1) {
                $('#rdoPublic').prop('checked', true);
            } else if (this.privacy == 2) {
                $('#rdoFriend').prop('checked', true);
            } else {
                $('#rdoPrivate').prop('checked', true);
            }
        },

    }
}
</script >
<style >
@import "./index.css";
</style>   