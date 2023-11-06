<template>
    <input @change="handleFileChange" id="input-b5" name="input-b5[]" type="file" ref="fileInput">
    <button @click="uploadFile" class="btn btn-primary">Add</button>
    <div ref="captureDiv">
        ádasd
        <hr>
        <b>Lê CÔng Anh</b>
        <br>
        <img :src="myImage" alt="" />
    </div>
    <button @click="captureScreen">Capture Screen</button>
</template>

<script>
import axios from 'axios';
import html2canvas from "html2canvas";

export default {
    data() {
        return {
            selectedFile: '',
            myImage: '',
            capturedImage: null,
        };
    },
    mounted() {
        $("#input-b5").fileinput({ showCaption: false, dropZoneEnabled: false });
        // setTimeout(() => {
        //     $('.file-input').addClass("file-input-new");

        // }, 5000);
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
                console.log(this.capturedImage);
            });
        },
        handleFileChange(event) {
            $('.fileinput-cancel-button').css('display', 'none');
            this.selectedFile = this.$refs.fileInput.files[0];
            const fileInput = this.$refs.fileInput;
            if (fileInput.files && fileInput.files[0]) {
                const reader = new FileReader();

                reader.onload = (e) => {
                    this.myImage = e.target.result;
                    // console.log(this.myImage);

                    // Bây giờ bạn có imageUrl chứa liên kết hình ảnh từ dữ liệu tệp đã đọc.
                    // Bạn có thể hiển thị nó hoặc thực hiện các xử lý hình ảnh khác theo nhu cầu.
                };

                reader.readAsDataURL(fileInput.files[0]);
            }
            setTimeout(() => {
                $('.fileinput-cancel-button').addClass('hide-important');

            }, 1000);


        },
        async uploadFile() {
            try {
                const response = await axios.post('http://127.0.0.1:8000/api/upload-image', {
                    image: this.capturedImage, // Đoạn data:image/png;base64
                });
                console.log(response.data.message);
            } catch (error) {
                console.error('Lỗi tải ảnh:', error);
            }
        },

    },
};
</script>

<style>
.large-div {
    position: relative;
    width: 300px;
    height: 300px;
    background-color: #f0f0f0;
    z-index: 1;
}

.medium-div {
    position: relative;
    width: 200px;
    height: 200px;
    background-color: #00f;
    z-index: 2;
}

.small-div {
    position: absolute;
    width: 100px;
    height: 100px;
    background-color: #ff0;
    z-index: 1;
    top: 50%;
    /* Nửa phía trên của div nhỏ nằm ở giữa div vừa */
    left: 50%;
    /* Nửa phía trái của div nhỏ nằm ở giữa div vừa */
    transform: translate(-50%, -50%);
    /* Dịch chuyển để canh giữa div nhỏ */
}

#container {
    width: 300px;
    height: 300px;
    border: 1px solid #ccc;
    position: relative;
}

.draggable {
    width: 100px;
    height: 30px;
    background-color: #3498db;
    color: #fff;
    text-align: center;
    line-height: 30px;
    cursor: move;
    position: absolute;
}

.hide-important {
    display: none !important;
}

.container {
    width: 300px;
    height: 200px;
    background-color: #f0f0f0;
    position: relative;
}

.div {
    width: 200px;
    height: 100px;
    background-color: #00f;
    z-index: 1;
    position: relative;
    color: white;
}

.container::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #ff0;
    /* Màu cho vùng xung quanh div */
    z-index: -1;
}

.container::after {
    content: "";
    position: absolute;
    top: 10px;
    left: 10px;
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    background-color: #f00;
    /* Màu cho vùng ngoài cùng xung quanh div */
    z-index: -2;
}
</style>
