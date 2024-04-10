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
    <div class="w-100 mt-3" style="overflow: auto;">
        <div @click="setActive('group')" id="discover"
            class="w-100 d-flex  bg-hover ps-2 align-items-center active-group mb-1"
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
        <div @click="setActive('your_group')" id="your_group" class="w-100 d-flex bg-hover ps-2 align-items-center"
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
            <button @click="viewCreate()" class="btn btn-primary w-100">
                <i class="fas fa-plus me-1"></i>
                Create your group
            </button>
            <hr>
        </div>
        <div class="w-100" v-if="list_manager.length > 0">
            <h5 style="font-weight: 500;">Groups you manage</h5>
            <div @click="detail(v.id)" v-for="(v, k) in list_manager" class="w-100 d-flex bg-hover"
                style="border-radius: 10px; padding: 0.45rem 0.5rem; cursor: pointer;">
                <div class="me-2 flex-center" style="overflow: hidden; width: 53px; height: 53px; border-radius: 15px;">
                    <img :src="urlImg + v.cover_image" style="object-fit: cover; height: 100%;" alt="">
                </div>
                <div style="flex: 1; flex-direction: column; line-height: 1.25rem;"
                    class=" d-flex justify-content-center">
                    <b style="font-size: 15px;">{{ v.group_name }}</b>
                    <p class="p-0 m-0">{{ v.member }} members</p>
                </div>
            </div>

        </div>
        <div class="w-100" v-if="list_join.length > 0">
            <h5 style="font-weight: 500;">Group you have joined</h5>
            <div @click="detail(v.id)" v-for="(v, k) in list_join" class="w-100 d-flex bg-hover"
                style="border-radius: 10px; padding: 0.45rem 0.5rem; cursor: pointer;">
                <div class="me-2 flex-center" style="overflow: hidden; width: 53px; height: 53px; border-radius: 15px;">
                    <img :src="urlImg + v.cover_image" style="object-fit: cover; height: 100%;" alt="">
                </div>
                <div style="flex: 1; flex-direction: column; line-height: 1.25rem;"
                    class=" d-flex justify-content-center">
                    <b style="font-size: 15px;">{{ v.group_name }}</b>
                    <p class="p-0 m-0">{{ v.member }} members</p>
                </div>
            </div>

        </div>


    </div>
</template>
<script>
import axios, { url } from '../../../core/coreRequest';
export default {
    data() {
        return {
            list_manager: [],
            urlImg: url,
            list_join: [],

        }
    },
    created() {
        this.getManager();
        this.getJoin();
    },
    methods: {
        detail(z) {
            this.$router.push({ name: 'home-group', params: { id_group: z } })
        },
        setActive(a) {
            $('.active-group').removeClass('active-group');
            $('#' + a).addClass('active-group');
            this.$router.push({ name: a });
        },
        viewCreate() {
            this.$router.push({ name: 'create-group' });
        },
        getManager() {
            axios
                .get('groups/data-your-group')
                .then((res) => {
                    this.list_manager = res.data.data;
                });
        },
        getJoin() {
            axios
                .get('groups/data-group-participated')
                .then((res) => {
                    this.list_join = res.data.data;
                });
        }

    },
}
</script>
<style>
@import './style.css';
</style>