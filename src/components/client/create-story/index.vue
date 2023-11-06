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
                            <div class="rounded-circle d-flex justify-content-center align-items-center gear"
                                style="height: 35px; width: 35px; background-color: #e4e4e4; cursor: pointer;">
                                <i class="fa-solid fa-gear" style="font-size: 20px; color: black;"></i>
                            </div>
                        </div>
                        <li>
                            <router-link :to="{ name: 'profile-client' }">
                                <img style="height: 55px; width: 55px;;" src="/src/assets/client/images/user/1.jpg"
                                    class="img-fluid rounded-circle me-3" alt="user">
                                <span><b class="text-dark">Lê Công Anh</b></span>
                            </router-link>
                        </li>
                        <hr>
                    </ul>
                </nav>
                <div class="p-5"></div>
                <div v-if="isCreate" class="nav-bottom d-flex align-items-center justify-content-center">
                    <button class="btn btn-light me-2 px-4" @click="closeModal">Cancel</button>
                    <button @click="captureScreen" class="btn btn-primary px-4">Share the story</button>
                </div>
            </div>
            <div class="scrollbar-track scrollbar-track-x" style="display: none;">
                <div class="scrollbar-thumb scrollbar-thumb-x" style="width: 250px; transform: translate3d(0px, 0px, 0px);">
                </div>
            </div>
            <div class="scrollbar-track scrollbar-track-y" style="display: none;">
                <div class="scrollbar-thumb scrollbar-thumb-y"
                    style="height: 514px; transform: translate3d(0px, 0px, 0px);"></div>
            </div>
        </div>
    </div>
    <div class="d-flex justify-content-center align-items-center "
        style="height: 80vh; width: 80vw; position: absolute; right: 0; top: 4.688rem;">
        <div class="d-flex" style="height: 333px; width: 470px; gap: 20px;">

            <div class="radius-10 make-color1 d-flex justify-content-center align-items-center left"
                style="height: 100%; width: 50%; position: relative; cursor: pointer; flex-direction: column;">
                <div class="hover-background"></div>


                <input @change="handleFileChange" id="input-b5" name="input-b5[]" type="file" ref="fileInput">


                <div class="d-flex justify-content-center align-items-center"
                    style="flex-direction: column; position: absolute;">
                    <div class="rounded-circle d-flex justify-content-center align-items-center hello mb-2"
                        style="height: 50px; width: 50px; background-color: #ffffff; cursor: pointer;">
                        <i class="fa-regular fa-images " style="font-size: 20px; color: rgb(0, 0, 0);"></i>
                    </div>
                    <b style="color: #ffffff; font-size: 12px;">Create Photo Stories</b>

                </div>

            </div>

            <div class="radius-10 make-color2 d-flex justify-content-center align-items-center left"
                style="height: 100%; width: 50%; position: relative; cursor: pointer; flex-direction: column;">
                <div class="hover-background"></div>
                <div class="rounded-circle d-flex justify-content-center align-items-center hello mb-2"
                    style="height: 50px; width: 50px; background-color: #ffffff; cursor: pointer;">
                    <i class="fa-solid fa-font " style="font-size: 20px; color: rgb(0, 0, 0);"></i>
                </div>
                <b style="color: #ffffff; font-size: 12px;">Create Text Stories</b>
            </div>
        </div>

        <div class="modal fade  " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-modal="true"
            role="dialog" style="position: absolute; display: none; height: 90vh;">
            <div class="modal-dialog modal-lg border_modal radius-10" role="document">
                <div class="modal-content" style="border: 0px solid !important;">
                    <div class="modal-body" style="padding-top: 10px;">
                        <h1 class="modal-title fs-5" id="exampleModalLabel" style="padding-bottom: 10px; color: black;">
                            Preview</h1>
                        <div class="make-modal radius-10 d-flex justify-content-center" style=" position: relative;">
                            <div class="container-content row" style="overflow: hidden;">
                                <div class="col-3 cover" style="background-color: rgba(36, 36, 36, 0.4);z-index: 10;"></div>
                                <div id="content" @dragover.prevent @dragover="drop" ref="captureDiv"
                                    class="d-flex justify-content-center align-items-center col-6 p-0">
                                    <div
                                        style="width: 100%; height: 100%; border: 1px solid #fff; z-index: 6; pointer-events: none;">
                                    </div>
                                    <img id="mainImage" class="draggable" :src="mainImg" draggable="true"
                                        :style="{ left: x + 'px', top: y + 'px' }" @dragstart="getCoordinates"
                                        @dragend="close()">
                                </div>
                                <div class="col-3 cover" style="background-color: rgba(36, 36, 36, 0.4);z-index: 10;"></div>

                            </div>

                            <div class="range_form mt-2 " style="z-index: 5;">
                                <input v-model="abc" @input="check()" type="range" style="width: 100%;">
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
import axios from 'axios';

export default {
    data() {
        return {
            mainImg: '',
            abc: 10,
            text: 'Văn bản 1',
            x: 0,
            y: 0,
            x_drag: 0,
            y_drag: 0,
            isDrag: false,
            origin_x: 0,
            origin_y: 0,
            isCreate: false,
            capturedImage: null,
        }
    },
    mounted() {
        $("#input-b5").fileinput({ showCaption: false, dropZoneEnabled: false });
        $('.fileinput-cancel-button').addClass('hide-important');
        $('.fileinput-remove-button').addClass('hide-important');
        $('.fileinput-upload-button').addClass('hide-important');
        $('.file-preview').css('display', 'none');
        // $('.file-input').css('display', 'none');
    },
    methods: {
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
                status: 1
            }
            try {
                axios.post('http://127.0.0.1:8000/api/story/create', payload)
                    .then((res) => {
                        if (res.data.status) {
                            console.log(res.data.message);
                            // this.$router.push('/');
                            window.location.href = '/';
                        } else {
                            console.log(res.data.message);
                        }
                    })
            } catch (error) {
                console.error('Lỗi tải ảnh:', error);
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
                    console.log(this.mainImg);
                };
                reader.readAsDataURL(fileInput.files[0]);
            }
        },
        check() {
            $('#mainImage').css('width', (this.abc * 100 / 20) + "%");
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
        }
    }
}
</script >
<style >
@import "./index.css";
</style>   