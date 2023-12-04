<template >
    <div class="w-100 ps-4">
        <div class=" mt-3 mb-1 d-flex justify-content-between">
            <b class="text-dark">All the groups you have joined (3)</b>
        </div>
        <div class="row mx-0">
            <div class="d-flex" style="gap: 7px; flex-direction: row; flex-wrap: wrap; position: relative;">
                <template v-for="(v, k) in group_participated">
                    <div class="card mb-3" style="border-radius: 8px !important; width: 32%; cursor: pointer;">
                        <div class="card-body">
                            <div class="d-flex">
                                <div class="me-2 flex-center"
                                    style="overflow: hidden; width: 73px; height: 73px; border-radius: 10px;">
                                    <img :src="urlImg + v.cover_image" style="object-fit: cover; height: 100%;" alt="">
                                </div>
                                <div class=" flex-column d-flex justify-content-center">
                                    <b class="text-dark ">{{ v.group_name }}</b>
                                    <p class="p-0 m-0">Members: 141,2k</p>
                                </div>
                            </div>
                            <div class="mt-2 d-flex">
                                <button class="btn btn-primary me-1" style="flex: 1;">See group</button>
                                <button class="btn btn-light">
                                    <i class="fa-solid fa-ellipsis-vertical"></i>
                                </button>

                            </div>
                        </div>
                    </div>
                </template>

            </div>
        </div>
    </div>
</template>
<script>
import axios, { url } from "../../../../core/coreRequest";
export default {
    data() {
        return {
            group_participated: [],
            urlImg: url,
        }
    },
    mounted() {
        this.getGroupParticipate();
    },
    methods: {
        getGroupParticipate() {
            axios
                .get('groups/data-group-participated')
                .then((res) => {
                    this.group_participated = res.data.data
                });
        }
    },
}
</script>
<style ></style>