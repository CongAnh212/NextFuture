<template>
    <div class=" mt-3 mb-1 d-flex justify-content-between">
        <h3 class="">Friend request</h3>
        <button type="button" class="me-3 btn seeall text-primary"><b>See all</b></button>
    </div>
    <div class="row mx-0 ">
        <div class="d-flex" style="gap: 7px; flex-wrap: wrap;">
            <template v-for="(v, k) in list_friend">
                <div class="card mb-3" style="border-radius: 8px !important; width: 19%;">
                    <div style="width: 100%; height: 236px; overflow: hidden;">
                        <img :src="urlImage + v.avatar" class="card-img-top" alt="#" style="object-fit: cover;">
                    </div>
                    <div class="card-body" style="padding: 0.5rem 1.25rem">
                        <b>{{ v.fullname }}</b>
                        <div class="mb-1">
                            <span>1 mutual</span>
                        </div>
                        <div class="mt-1">
                            <button class="btn btn-primary w-100">Accept</button>
                        </div>
                        <div class="mt-1">
                            <button class="btn btn-secondary w-100">Delete</button>
                        </div>
                    </div>
                </div>
            </template>
        </div>
        <button class=" btn text-primary seeall " style="width: 98%;">
            <b>
                See more
                <i class="fa-solid fa-caret-down"></i>
            </b>
        </button>
    </div>

    <hr class="me-3">

    <div class=" mt-3 mb-1 d-flex justify-content-between">
        <h3>
            People you may know
        </h3>
        <button type="button" class="me-3 btn seeall text-primary"><b>See all</b></button>
    </div>
    <div class="row mx-0 ">
        <div class="d-flex" style="gap: 7px; flex-wrap: wrap;">
            <div class="card mb-3" style="border-radius: 8px !important; width: 19%;">
                <div style="width: 100%; height: 236px; overflow: hidden;">
                    <img src="https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/302423403_608870667293564_7904892244959408177_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Yn5IEYPr6UUAX8-hA4v&_nc_ht=scontent.fdad3-6.fna&oh=00_AfCq3Z8BkaGRw4uB999iH-kFDnjxxGdM0rvtaNLw-59Lyg&oe=65525FA6"
                        class="card-img-top" alt="#" style="object-fit: cover;">
                </div>
                <div class="card-body" style="padding: 0.5rem 1.25rem">
                    <b>Phan Tánh</b>
                    <div class="mb-1">
                        <span>1 mutual</span>
                    </div>
                    <div class="mt-1">
                        <button class="btn btn-primary w-100">Add friends</button>
                    </div>
                    <div class="mt-1">
                        <button class="btn btn-secondary w-100">Delete</button>
                    </div>
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
            list_friend: [],
            urlImage: url,
        }
    },
    mounted() {
        this.getFull();
    },
    methods: {
        getFull() {
            axios
                .get('dataFull')
                .then((res) => {
                    this.list_friend = res.data.data;
                });
        }
    },
}
</script>
<style>
@import './style.css'
</style>