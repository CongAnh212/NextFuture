<template>
    <input id="input-b5" name="input-b5[]" type="file" ref="fileInput">
    <input id="input-b3" name="input-b3[]" type="file" class="file" multiple data-show-upload="false"
        data-show-caption="true" data-msg-placeholder="Select {files} for upload...">
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
        $("#input-b3").fileinput();

        // with plugin options
        $("#input-b3").fileinput({ 'showUpload': false, 'previewFileType': 'any' });
        // setTimeout(() => {
        //     $('.file-input').addClass("file-input-new");

        // }, 5000);
        // $('.fileinput-cancel-button').addClass('hide-important');
        // $('.fileinput-remove-button').addClass('hide-important');
        // $('.fileinput-upload-button').addClass('hide-important');
        // $('.file-preview').css('display', 'none');
        // $('.file-input').css('display', 'none');
    },
    methods: {

    },
};
</script>

<style></style>
