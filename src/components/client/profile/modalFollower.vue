<template>
    <div class="modal fade" id="modalFollower" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered ">
            <div class="modal-content">
                <div class="modal-body " style="max-height: 70vh;">
                    <div class="d-flex align-items-center">
                        <div style="flex:1">
                            <h1 class="modal-title fs-5 f-500" id="exampleModalLabel">Followers</h1>
                        </div>
                        <i data-bs-dismiss="modal" aria-label="Close" class="fa-solid fa-xmark text-dark me-1"
                            style="font-size: 25px; cursor: pointer;"></i>
                    </div>
                    <div class="text-white">
                        <div type="button" data-bs-dismiss="modal" aria-label="Close">
                        </div>
                    </div>
                    <hr class="m-0 w-100">
                    <div>
                        <div class="iq-search-bar device-search w-100 mt-1 mb-1 ">
                            <div action="#" class="searchbox w-100">
                                <a class="search-link flex-center h-100" href="#">
                                    <i class="ri-search-line">
                                    </i>
                                </a>
                                <input type="text" class="text search-input" placeholder="Search friend..."
                                    style="border-radius:50px;">
                            </div>
                        </div>
                        <div class="mt-3 ms-3 me-3" style="overflow-y: auto; height: 20rem ;">
                            <div class="d-flex align-items-center" v-for="(v, k) in listFollower">
                                <div class="d-flex " style="flex:1">
                                    <div style="height: 45px; width: 45px;margin-left: 0px; overflow: hidden;"
                                        class="circle me-2 mb-2">
                                        <img :src="urlImg + v.avatar" class="img-fluid me-2" alt="user"
                                            style="object-fit: cover; width: 100%;">
                                    </div>
                                    <div style="line-height: 20px;">
                                        <div class="text-start">
                                            <router-link :to="{ name: 'detailProfile', params: { username: v.username } }"
                                                class="text-dark f-500">
                                                <span data-bs-dismiss="modal" aria-label="Close" class="oke">{{ v.nickname }}</span>
                                            </router-link>
                                        </div>
                                        <div>{{ v.fullname }}</div>
                                    </div>
                                </div>
                                <button class="btn btn-light btn-sm me-1" style="height:2rem;width: 2rem;">
                                    <i class="fa-solid fa-ellipsis"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios, { url } from '../../../core/coreRequest'
export default {
    data() {
        return {
            urlImg: url,
        }
    },
    props: {
        listFollower: {
            type: Array,
            required: true
        }
    },
    mounted() {
        console.log("this.listFollower: ", this.listFollower);
    },
    methods: {
        //
    },
}
</script>
<style ></style>