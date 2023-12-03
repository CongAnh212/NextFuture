<template>
    <div class="wrapper">
        <HeaderClient></HeaderClient>
        <div class="">
            <div class=" iq-sidebar-fix sidebar-default ">
                <div id="sidebar-scrollbar" data-scrollbar="true" tabindex="-1" style="overflow: hidden; outline: none;">
                    <div class="scroll-content">
                        <nav class="iq-sidebar-menu">
                            <ul id="iq-sidebar-toggle" class="iq-menu">
                                <router-view>
                                </router-view>
                            </ul>
                        </nav>
                    </div>
                    <div class="scrollbar-track scrollbar-track-x" style="display: none;">
                        <div class="scrollbar-thumb scrollbar-thumb-x"
                            style="width: 250px; transform: translate3d(0px, 0px, 0px);">
                        </div>
                    </div>
                    <div class="scrollbar-track scrollbar-track-y" style="display: none;">
                        <div class="scrollbar-thumb scrollbar-thumb-y"
                            style="height: 514px; transform: translate3d(0px, 0px, 0px);"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="px-0 mx-0" style="position: absolute; right: 0; width: 79%;top: 4.25rem;">
            <router-view name="content">
            </router-view>
        </div>
    </div>
</template>
<script>
import 'bootstrap';
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
@import './style.css';
@import "../../../../assets/client/css/libs.min.css";
@import "../../../../assets/client/css/socialv.css";
@import "../../../../assets/client/vendor/@fortawesome/fontawesome-free/css/all.min.css";
@import "../../../../assets/client/vendor/remixicon/fonts/remixicon.css";
@import "../../../../assets/client/vendor/vanillajs-datepicker/dist/css/datepicker.min.css";
@import "../../../../assets/client/vendor/line-awesome/dist/line-awesome/css/line-awesome.min.css";
</style>