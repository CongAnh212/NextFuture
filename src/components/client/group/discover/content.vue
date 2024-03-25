<template>
    <div class="w-100 ps-4">
        <div class=" mt-3 mb-1 d-flex justify-content-between">
            <h3 class="">Popular groups</h3>
        </div>
        <div class="row mx-0 ">
            <div class="d-flex" style="gap: 7px; flex-direction: row; flex-wrap: wrap; position: relative;">
                <div v-if="showBtnPreNext" class="flex-center"
                    style="position: absolute; z-index: 1; right: 1.7rem; top:50%; transform: translateY(-60%);">
                    <button @click="next" class="btn bg-white circle"
                        style="width: 3.5em;height: 3.5em;box-shadow: 0 0 10px #33333357; ">
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
                <div v-if="showBtnPreNext" class="flex-center"
                    style="position: absolute; z-index: 1; left: -1rem; top:50%; transform: translateY(-60%);">
                    <button @click="prev" class="btn bg-white circle"
                        style="width: 3.5em;height: 3.5em;box-shadow: 0 0 10px #33333357; ">
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                </div>
                <div v-for="(v, k) in list_popular_group" class="card mb-3" @click="viewHome(v)"
                    style="border-radius: 8px !important; width: 32%; cursor: pointer;">
                    <div style="width: 100%;  overflow: hidden; height: 16rem;">
                        <img :src="urlImg + v.cover_image" class="card-img-top" alt="#"
                            style="object-fit: cover; height: 100%;">
                        <div class="button-container circle bg-hover">
                            <div class="icon-button  flex-center">
                                <i class="fa-solid fa-x "></i>
                            </div>
                        </div>
                    </div>
                    <div class="card-body " style="padding: 0.5rem 1.25rem;">
                        <div class="w-100" style="overflow: hidden;">
                            <b class="text-nowrap text-dark">{{ v.group_name }}</b>
                        </div>
                        <div class="mb-1 text-secondary">
                            <span>{{ v.member }} member</span>
                        </div>
                    </div>
                    <div class="card-footer">
                        <button v-if="v.status_button == 0" @click="joinGroup(v, k, $event, 'popular')"
                            class="btn btn-light w-100 f-500">Join group</button>
                        <button v-else-if="v.status_button == 1" class="btn  btn-light w-100 f-500 py-0 my-0" disabled>
                            <img src="../../../../assets/client/images/page-img/page-load-loader.gif" alt="loader"
                                style="height: 37px;">Join group</button>
                        <button v-else class="btn btn-primary w-100 f-500">Access the group</button>
                    </div>
                </div>


            </div>
        </div>
        <hr class="me-3">
        <div class=" mt-3 mb-1 d-flex justify-content-between">
            <h3 class="">Suggest</h3>
        </div>
        <div class="row mx-0">
            <div class="d-flex" style="gap: 7px; flex-direction: row; flex-wrap: wrap;">
                <template v-for="(v, k) in all_group">
                    <div @click="viewHome(v)" class="card mb-3"
                        style="border-radius: 8px !important; width: 32%; cursor: pointer;">
                        <div style="width: 100%;  overflow: hidden; height: 16rem;">
                            <img :src="urlImg + v.cover_image" class="card-img-top" alt="#"
                                style="object-fit: cover; height: 100%; ">
                            <div class="button-container circle bg-hover">
                                <div class="icon-button  flex-center">
                                    <i class="fa-solid fa-x "></i>
                                </div>
                            </div>
                        </div>
                        <div class="card-body " style="padding: 0.5rem 1.25rem;">
                            <div class="w-100" style="overflow: hidden;">
                                <b class="text-nowrap text-dark">{{ v.group_name }}</b>
                            </div>
                            <div class="mb-1 text-secondary">
                                <span>{{ v.member }} member</span>
                            </div>
                        </div>
                        <div class="card-footer">
                            <button v-if="v.status_button == 0" @click="joinGroup(v, k, $event, 'suggest')"
                                class="btn btn-light w-100 f-500">Join group</button>
                            <button v-else-if="v.status_button == 1" class="btn  btn-light w-100 f-500 py-0 my-0"
                                disabled>
                                <img src="../../../../assets/client/images/page-img/page-load-loader.gif" alt="loader"
                                    style="height: 37px;">Join group</button>
                            <button v-else class="btn btn-primary w-100 f-500">Access the group</button>
                        </div>
                    </div>
                </template>
            </div>
        </div>

    </div>
</template>
<script>
import axios, { url } from "../../../../core/coreRequest";
import baseFunction from "../../../../core/coreFunction";

export default {
    data() {
        return {
            all_group: [],
            urlImg: url,
            list_popular_group_temp: [],
            list_popular_group_temp2: [],
            list_popular_group: [],
            index: 2,
            showBtnPreNext: false,
        }
    },
    mounted() {
        this.getAllGroup();
        this.getPopularGroup();
    },
    watch: {
        list_popular_group_temp(newValue, orlValue) {
            if (orlValue) {
                if (newValue.length > 4) this.showBtnPreNext = true;
            }
        }
    },
    methods: {
        getPopularGroup() {
            axios
                .get('groups/data-popular-group')
                .then((res) => {
                    this.list_popular_group_temp = res.data.dataPopular;
                    this.list_popular_group_temp = this.list_popular_group_temp.map((item) => ({
                        ...item,
                        status_button: 0
                    }))
                    this.list_popular_group_temp2 = this.list_popular_group_temp.slice(4, 6);
                    this.list_popular_group_temp2.push(
                        ...this.list_popular_group_temp,
                    );
                    this.list_popular_group_temp2.push(...this.list_popular_group_temp.slice(0, 2))
                    this.list_popular_group = this.list_popular_group_temp.slice(0, 3);
                });
        },
        getAllGroup() {
            axios
                .get('groups/data-discover')
                .then((res) => {
                    this.all_group = res.data.data.map((item) => ({
                        ...item,
                        status_button: 0
                    }))
                });
        },
        joinGroup(v, k, event, obj) {
            event.stopPropagation();
            if (obj == 'suggest') {
                this.all_group[k].status_button = 1

            } else {
                this.list_popular_group[k].status_button = 1
            }
            axios
                .post('groups/come-in-group', v)
                .then((res) => {
                    if (obj == 'suggest') {
                        this.all_group[k].status_button = 2

                    } else {
                        this.list_popular_group[k].status_button = 2
                    }

                    baseFunction.displaySuccess(res)
                })
                .catch((res) => {
                    console.log('res: ', res);
                });
        },
        viewHome(v) {
            this.$router.push({ name: 'home-group', params: { id_group: v.id } });
        },
        prev() {
            if (this.index == 0) {
                this.index = 5
            } else {
                this.index--;
            }//4 5 0 1 2 3 4 5 0 1 
            this.list_popular_group = this.list_popular_group_temp2.slice(this.index, this.index + 3);
        },
        next() {
            if (this.index == 7) {
                this.index = 2
            } else {
                this.index++;
            }//4 5 0 1 2 3 4 5 0 1 
            this.list_popular_group = this.list_popular_group_temp2.slice(this.index, this.index + 3);

        }
    },
}
</script>
<style>
@import './style.css'
</style>