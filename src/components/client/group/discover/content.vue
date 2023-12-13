<template>
    <div class="w-100 ps-4">
        <div class=" mt-3 mb-1 d-flex justify-content-between">
            <h3 class="">Popular group Chưa Hoàn Thiện</h3>
        </div>
        <div class="row mx-0 ">
            <div class="d-flex" style="gap: 7px; flex-direction: row; flex-wrap: wrap; position: relative;">
                <div class="flex-center"
                    style="position: absolute; z-index: 1; right: 1rem; top:50%; transform: translateY(-60%);">
                    <button class="btn bg-white circle" style="width: 3.5em;height: 3.5em;box-shadow: 0 0 10px #33333357; ">
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
                <div class="flex-center"
                    style="position: absolute; z-index: 1; left: -1rem; top:50%; transform: translateY(-60%);">
                    <button class="btn bg-white circle" style="width: 3.5em;height: 3.5em;box-shadow: 0 0 10px #33333357; ">
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                </div>
                <div class="card mb-3" style="border-radius: 8px !important; width: 32%; cursor: pointer;">
                    <div style="width: 100%; height: 65%; overflow: hidden;">
                        <img src="https://cdnmedia.webthethao.vn/thumb/720-405/uploads/2020-11-07/mini-world-royale-1.jpg"
                            class="card-img-top" alt="#" style="object-fit: cover; height: 100%;">
                        <div class="button-container circle bg-hover">
                            <div class="icon-button  flex-center">
                                <i class="fa-solid fa-x "></i>
                            </div>
                        </div>
                    </div>
                    <div class="card-body " style="padding: 0.5rem 1.25rem;">
                        <div class="w-100" style="overflow: hidden;">
                            <b class="text-nowrap text-dark">Miniword Royale</b>
                        </div>
                        <div class="mb-1 text-secondary">
                            <span>114,2k member</span>
                        </div>
                    </div>
                    <div class="card-footer w-100">
                        <button class="btn btn-secondary w-100">Join group</button>
                    </div>
                </div>
                <div class="card mb-3" style="border-radius: 8px !important; width: 32%; cursor: pointer;">
                    <div style="width: 100%; height: 65%; overflow: hidden;">
                        <img src="https://nextjs.org/static/blog/next-13-4/twitter-card.png" class="card-img-top" alt="#"
                            style="object-fit: cover; height: 100%;">
                        <div class="button-container circle bg-hover">
                            <div class="icon-button  flex-center">
                                <i class="fa-solid fa-x "></i>
                            </div>
                        </div>
                    </div>
                    <div class="card-body " style="padding: 0.5rem 1.25rem;">
                        <div class="w-100" style="overflow: hidden;">
                            <b class="text-nowrap text-dark">Dev NextJs</b>
                        </div>
                        <div class="mb-1 text-secondary">
                            <span>4,2k member</span>
                        </div>
                    </div>
                    <div class="card-footer">
                        <button class="btn btn-secondary w-100">Join group</button>
                    </div>

                </div>
                <div class="card mb-3" style="border-radius: 8px !important; width: 32%; cursor: pointer;">
                    <div style="width: 100%; height: 65%; overflow: hidden;">
                        <div class="d-flex">
                            <img src="https://cdn.tgdd.vn/Files/2019/04/29/1163886/avengersendgame_800x450.jpg"
                                class="card-img-top" alt="#" style="object-fit: cover; height: 100%;">
                        </div>
                        <div class="button-container circle bg-hover">
                            <div class="icon-button  flex-center">
                                <i class="fa-solid fa-x "></i>
                            </div>
                        </div>
                    </div>
                    <div class="card-body " style="padding: 0.5rem 1.25rem;">
                        <div class="w-100" style="overflow: hidden;">
                            <b class="text-nowrap text-dark">Marvel</b>
                        </div>
                        <div class="mb-1 text-secondary">
                            <span>13k member</span>
                        </div>
                    </div>


                    <div class="card-footer">
                        <button class="btn btn-secondary w-100">Join group</button>
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
                        <div style="width: 100%; height: 65%; overflow: hidden;">
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
                                <span>4,2k member</span>
                            </div>
                        </div>
                        <div class="card-footer">
                            <button v-if="v.status_button == 0" @click="joinGroup(v, k, $event)"
                                class="btn btn-light w-100 f-500">Join group</button>
                            <button v-else-if="v.status_button == 1" class="btn  btn-light w-100 f-500 py-0 my-0" disabled>
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
        }
    },
    mounted() {
        this.getAllGroup();
    },
    methods: {
        getAllGroup() {
            axios
                .get('groups/data-discover')
                .then((res) => {
                    this.all_group =
                        this.all_group = res.data.data.map((item) => ({
                            ...item,
                            status_button: 0
                        }))
                });
        },
        joinGroup(v, k, event) {
            event.stopPropagation();
            this.all_group[k].status_button = 1
            axios
                .post('groups/come-in-group', v)
                .then((res) => {
                    // this.$toasted.show('Thông báo của bạn đã được hiển thị!');
                    this.all_group[k].status_button = 2

                    baseFunction.displaySuccess(res)
                })
                .catch((res) => {
                    console.log('res: ', res);
                });
        },
        viewHome(v) {
            this.$router.push({ name: 'home-group', params: { id_group: v.id } });
        }
    },
}
</script>
<style>
@import './style.css'
</style>