<template>
    <Top></Top> 
    <Menu></Menu>
    <div class="page-wrapper">
        <div class="page-content">
            <router-view></router-view>
        </div>
    </div>
    <Bottom></Bottom>
</template>
<script>
    /* Đây là nơi import js */
    import "../../assets/rocker/js/bootstrap.bundle.min.js";
    import "../../assets/rocker/js/jquery.min.js";
    import "../../assets/rocker/plugins/simplebar/js/simplebar.min.js";
    import "../../assets/rocker/plugins/metismenu/js/metisMenu.min.js";
    import "../../assets/rocker/plugins/vectormap/jquery-jvectormap-2.0.2.min.js";
    import "../../assets/rocker/plugins/vectormap/jquery-jvectormap-world-mill-en.js";
    import "../../assets/rocker/plugins/chartjs/js/Chart.min.js";
    import "../../assets/rocker/js/index.js";
    import Top from "../Components/Top.vue";
    import Menu from "../Components/Menu.vue";
    import Bottom from "../Components/Bottom.vue";
    export default {
        name: 'app',
        components: {
           Top,
           Menu,
           Bottom,
        },
    }
</script>

<style>
    /* Đây là nơi import css */
    @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap");
    @import "../../assets/rocker/css/bootstrap.min.css";
    @import "../../assets/rocker/css/bootstrap-extended.css";
    @import "../../assets/rocker/css/app.css";
    @import "../../assets/rocker/css/icons.css";
</style>