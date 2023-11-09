<template>
    <div class="wrapper">
        <HeaderClient></HeaderClient>
        <div class="">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import $ from 'jquery';
// import "../../../assets/client/js/libs.min.js";
// import "../../../assets/client/js/charts/weather-chart.js";
// import "../../../assets/client/js/slider.js";
import 'bootstrap';

// import 'bootstrap-fileinput';
// import 'bootstrap-fileinput/css/fileinput.css';
// import "https://code.jquery.com/jquery-3.6.0.min.js";
// import "https://cdn.jsdelivr.net/gh/kartik-v/bootstrap-fileinput@5.5.0/js/plugins/buffer.min.js";
// import "https://cdn.jsdelivr.net/gh/kartik-v/bootstrap-fileinput@5.5.0/js/plugins/filetype.min.js";
// import "https://cdn.jsdelivr.net/gh/kartik-v/bootstrap-fileinput@5.5.0/js/plugins/piexif.min.js";
// import "https://cdn.jsdelivr.net/gh/kartik-v/bootstrap-fileinput@5.5.0/js/plugins/sortable.min.js";
// import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js";
// import "https://cdn.jsdelivr.net/gh/kartik-v/bootstrap-fileinput@5.5.0/js/fileinput.min.js";
// import "https://cdn.jsdelivr.net/gh/kartik-v/bootstrap-fileinput@5.5.0/js/locales/LANG.js";



import "../../../../assets/client/js/sweetalert.js";
import "../../../../assets/client/js/app.js";
import "../../../../assets/client/images/favicon.ico";
import "../../../../assets/client/js/enchanter.js";
import "../../../../assets/client/js/masonry.pkgd.min.js";
import "../../../../assets/client/js/lottie.js";
import "../../../../assets/client/vendor/vanillajs-datepicker/dist/js/datepicker.min.js"
import HeaderClient from './HeaderClient.vue';
export default {
    name: "app",
    components: {
        HeaderClient
    }
}
</script>
<style>
@import "../../../../assets/client/css/libs.min.css";
@import "../../../../assets/client/css/socialv.css";
@import "../../../../assets/client/vendor/@fortawesome/fontawesome-free/css/all.min.css";
@import "../../../../assets/client/vendor/remixicon/fonts/remixicon.css";
@import "../../../../assets/client/vendor/vanillajs-datepicker/dist/css/datepicker.min.css";
@import "../../../../assets/client/vendor/line-awesome/dist/line-awesome/css/line-awesome.min.css";
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css");
</style>