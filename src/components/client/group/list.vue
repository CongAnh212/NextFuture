<template>
    <div class=" w-100 mt-2 mb-2" style="height: 4vh;">
        <h4><b>Group</b></h4>
    </div>
    <div class="w-100 ">
        <div class="iq-search-bar device-search w-100 mt-1 mb-1" style="padding: 0px !important;">
            <div action="#" class="searchbox w-100 ">
                <a class="search-link my-auto h-100 flex-center" href="#">
                    <i class="ri-search-line my-auto"></i>
                </a>
                <input type="text" class="text search-input " placeholder="Search group..." style="border-radius:50px;">
            </div>
        </div>
    </div>
    <div class="w-100 mt-3">
        <div @click="setActive('discover')" id="discover" class="w-100 d-flex  group-hover ps-2 align-items-center active-group mb-1"
            style="height: 45px; cursor: pointer;">
            <div class="bg-light circle me-2 flex-center" style="width:35px;height:35px;">
                <i class="fas fa-compass text-dark" style="font-size: 1.25rem;"></i>
            </div>
            <div class="flex-center">
                <div class="d-flex flex-column" style="user-select:none;">
                    <h5><b style="font-weight:500;">Discover</b></h5>
                </div>
            </div>
        </div>
        <div @click="setActive('your_group')" id="your_group" class="w-100 d-flex group-hover ps-2 align-items-center"
            style="height: 45px; cursor: pointer;">
            <div class="bg-light circle me-2 flex-center" style="width:35px;height:35px;">
                <i class="fas fa-users text-dark" style="font-size: 1.25rem;"></i>
            </div>
            <div class="flex-center">
                <div class="d-flex flex-column" style="user-select:none;">
                    <h5><b style="font-weight:500;">Your Groups</b></h5>
                </div>
            </div>
        </div>
        <div class="w-100 mt-2">
            <button class="btn btn-primary w-100">
                <i class="fas fa-plus me-1"></i>
                Create your group
            </button>
        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            //
        }
    },
    mounted() {
        //
    },
    methods: {
        setActive(a) {
            $('.active-group').removeClass('active-group');
            $('#' + a).addClass('active-group');
        }
    },
}
</script>
<style>
@import './style.css';
</style>