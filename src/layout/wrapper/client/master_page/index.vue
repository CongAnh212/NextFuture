<template>
    <div class="wrapper">
        <HeaderClient :myInfo="myInfo"></HeaderClient>
        <div class="" style="margin-top:4.688rem; min-height: calc(100vh - 4.688rem);">
            <router-view :myInfo="myInfo" @updateProfile="handleUpdateProfile"></router-view>
        </div>
    </div>
</template>
<script>
import $ from 'jquery';
// import "../../../assets/client/js/libs.min.js";
// import "../../../assets/client/js/charts/weather-chart.js";
// import "../../../assets/client/js/slider.js";
import 'bootstrap';

import "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js";
// import 'bootstrap-fileinput';
import "https://cdn.jsdelivr.net/gh/kartik-v/bootstrap-fileinput@5.5.0/js/plugins/buffer.min.js";
import "https://cdn.jsdelivr.net/gh/kartik-v/bootstrap-fileinput@5.5.0/js/plugins/filetype.min.js";
import "https://cdn.jsdelivr.net/gh/kartik-v/bootstrap-fileinput@5.5.0/js/plugins/piexif.min.js";
import "https://cdn.jsdelivr.net/gh/kartik-v/bootstrap-fileinput@5.5.0/js/plugins/sortable.min.js";
// import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"; //đcmm
import "https://cdn.jsdelivr.net/gh/kartik-v/bootstrap-fileinput@5.5.0/js/fileinput.min.js";
import "https://cdn.jsdelivr.net/gh/kartik-v/bootstrap-fileinput@5.5.0/js/locales/LANG.js";

import "../../../../assets/client/js/sweetalert.js";
import "../../../../assets/client/js/app.js";
import "../../../../assets/client/images/favicon.ico";
import "../../../../assets/client/js/enchanter.js";
import "../../../../assets/client/js/masonry.pkgd.min.js";
import "../../../../assets/client/js/lottie.js";
import "../../../../assets/client/vendor/vanillajs-datepicker/dist/js/datepicker.min.js";

import HeaderClient from '../main_master_page/HeaderClient.vue';
import axios from '../../../../core/coreRequest'
export default {
    name: "app",
    components: {
        HeaderClient
    },
    data() {
        return {
            myInfo: null,

        }
    },
    mounted() {
        this.getMyInfo()
    },
    methods: {
        getMyInfo() {
            axios
                .get('profile/data')
                .then((res) => {
                    this.myInfo = res.data.myInfo;
                });
        },
        handleUpdateProfile(value) {
            var temp = '';
            temp = Object.assign({}, value)
            this.myInfo = temp
        },
    },
}
</script>
<style>
/* @import 'bootstrap-fileinput/css/fileinput.css'; */
@import 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css';
@import 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.min.css';
@import 'https://cdn.jsdelivr.net/gh/kartik-v/bootstrap-fileinput@5.5.0/css/fileinput.min.css';

@import "../../../../assets/client/css/libs.min.css";
@import "../../../../assets/client/css/socialv.css";
@import "../../../../assets/client/vendor/@fortawesome/fontawesome-free/css/all.min.css";
@import "../../../../assets/client/vendor/remixicon/fonts/remixicon.css";
@import "../../../../assets/client/vendor/vanillajs-datepicker/dist/css/datepicker.min.css";
@import "../../../../assets/client/vendor/line-awesome/dist/line-awesome/css/line-awesome.min.css";
@import "../../../../assets/client/css/libs.min.css";
@import "../../../../assets/client/css/socialv.css";
@import "../../../../assets/client/vendor/@fortawesome/fontawesome-free/css/all.min.css";
@import "../../../../assets/client/vendor/remixicon/fonts/remixicon.css";
@import "../../../../assets/client/vendor/vanillajs-datepicker/dist/css/datepicker.min.css";
@import "../../../../assets/client/vendor/line-awesome/dist/line-awesome/css/line-awesome.min.css";
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css");
</style>
