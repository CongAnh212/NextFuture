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
import "../../../assets/client/js/sweetalert.js";
import "../../../assets/client/js/app.js";
import "../../../assets/client/images/favicon.ico";
import "../../../assets/client/js/enchanter.js";
import "../../../assets/client/js/masonry.pkgd.min.js";
import "../../../assets/client/js/lottie.js";
import "../../../assets/client/vendor/vanillajs-datepicker/dist/js/datepicker.min.js"
import HeaderClient from './HeaderClient.vue';
export default {
    name: "app",
    components: {
        HeaderClient
    }
}
</script>
<style>
@import "../../../assets/client/css/libs.min.css";
@import "../../../assets/client/css/socialv.css";
@import "../../../assets/client/vendor/@fortawesome/fontawesome-free/css/all.min.css";
@import "../../../assets/client/vendor/remixicon/fonts/remixicon.css";
@import "../../../assets/client/vendor/vanillajs-datepicker/dist/css/datepicker.min.css";
@import "../../../assets/client/vendor/line-awesome/dist/line-awesome/css/line-awesome.min.css";
</style>