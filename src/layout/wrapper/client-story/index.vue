<template>
    <HeaderStoryVue></HeaderStoryVue>
    <div>
        <router-view></router-view>
    </div>
</template>
<script>
// import "https://code.jquery.com/jquery-3.6.0.min.js";
import "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js";
import 'bootstrap-fileinput';
import 'bootstrap-fileinput/css/fileinput.css';
import "https://cdn.jsdelivr.net/gh/kartik-v/bootstrap-fileinput@5.5.0/js/plugins/buffer.min.js";
import "https://cdn.jsdelivr.net/gh/kartik-v/bootstrap-fileinput@5.5.0/js/plugins/filetype.min.js";
import "https://cdn.jsdelivr.net/gh/kartik-v/bootstrap-fileinput@5.5.0/js/plugins/piexif.min.js";
import "https://cdn.jsdelivr.net/gh/kartik-v/bootstrap-fileinput@5.5.0/js/plugins/sortable.min.js";
// import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"; đcmm
import "https://cdn.jsdelivr.net/gh/kartik-v/bootstrap-fileinput@5.5.0/js/fileinput.min.js";
import "https://cdn.jsdelivr.net/gh/kartik-v/bootstrap-fileinput@5.5.0/js/locales/LANG.js";
import HeaderStoryVue from './HeaderStory.vue';
export default {
    name: 'app',
    components: {
        HeaderStoryVue
    }
}
</script>
<style></style>