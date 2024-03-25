<template>
    <div v-if="isView == 1" class="col-sm-12 pb-4">
        <div class="tab-content">
            <div class="tab-pane fade show active" id="timeline" role="tabpanel">
                <div class="d-flex" style="width:100%; flex-wrap: wrap;">
                    <div v-for="(v, k) in listPhotos" @click="currentPost = v"
                        style="width: 33%; overflow: hidden; aspect-ratio: 1/1; padding: 2px; cursor: pointer; position: relative; "
                        data-bs-toggle="modal" data-bs-target="#modalPost" class="flex-center rovo">
                        <div class="img-hover">
                        </div>
                        <span class="text-white"
                            style="z-index: 1; position: absolute;top:3px;right: 12px; font-size: 23px;">
                            <i class="fa-solid fa-clone" style="text-shadow: 0 0 10px #000000;"></i>
                        </span>
                        <img style="object-fit: cover; width: 100%;height: 100%;" :src="urlImg + v.photos[0]">
                    </div>
                </div>
            </div>
            <!-- modalPost -->

        </div>
    </div>
    <div v-else-if="isView == 0" class="flex-center">
        <img src="../../../../assets/client/images/page-img/page-load-loader.gif" alt="loader" style="height: 100px;">
    </div>
    <div v-else class="flex-center flex-column">
        <div class="avatar-4 my-3" style="border: 0.18rem solid #000;">
            <img style="object-fit: cover; width: 100%;height: 100%; padding: 0.7rem"
                src="../../../../assets/img/camera.png">
        </div>
        <h2 class="text-dark"><b>No Photos Yet</b></h2>
    </div>

    <ModalPost v-if="currentPost" :post="currentPost" :index="0" />
</template>
<script>
import ModalPost from '../modalpost.vue'
import axios, { url } from '../../../../core/coreRequest'
export default {
    components: { ModalPost },
    data() {
        return {
            listPhotos: null,
            urlImg: url,
            isView: 0,
            currentPost: null,
        }
    },
    watch: {
        '$route.params.username'() {
            this.loadListPhotos()
        },
        listPhotos(newData, old) {
            if (newData.length == 0) {
                this.isView = -1
            } else this.isView = 1
        }
    },
    mounted() {
        this.loadListPhotos()
    },
    methods: {
        loadListPhotos() {
            axios
                .get(this.$route.params.username + '/data-photos')
                .then((res) => {
                    this.listPhotos = res.data.dataPhotos.map((element) => ({
                        ...element,
                        photos: this.convertStringImageToArray(element.images)
                    }));
                    this.currentPost = this.listPhotos[0]
                });
        },
        convertStringImageToArray(images) {
            if (images) {
                return JSON.parse(images)
            }
        },
    },
}
</script>
<style></style>