<template >
    <div class="w-100 ps-4">
        <div class=" mt-3 mb-1 d-flex justify-content-between">
            <b class="text-dark">All the groups you have joined ({{ this.group_participated.length }})</b>
        </div>
        <div class="row mx-0">
            <div class="d-flex" style="gap: 7px; flex-direction: row; flex-wrap: wrap; position: relative;">
                <template v-for="(v, k) in group_participated">
                    <router-link :to="{ name: 'home-group', params: { id_group: v.id } }" class="card mb-3"
                        style="border-radius: 8px !important; width: 32%; cursor: pointer;">
                        <div class="card-body">
                            <div class="d-flex">
                                <div class="me-2 flex-center"
                                    style="overflow: hidden; width: 73px; height: 73px; border-radius: 10px;">
                                    <img :src="urlImg + v.cover_image" style="object-fit: cover; height: 100%;" alt="">
                                </div>
                                <div class=" flex-column d-flex justify-content-center">
                                    <b class="text-dark ">{{ v.group_name }}</b>
                                    <p class="p-0 m-0 text-dark">Members: {{ v.member }}</p>
                                </div>
                            </div>
                            <div class="mt-2 d-flex">
                                <button class="btn btn-primary me-1" style="flex: 1;">See group</button>

                                <div class="dropdown" @click="cancelEvent($event)">
                                    <button class="btn btn-light " type="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <i class="fas fa-ellipsis-h"></i>
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li @click="copyPath(v)">
                                            <a class="dropdown-item">
                                                <i class="fas me-2 fa-copy"></i> Copy path</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item"><i class="fas me-2 fa-share"></i> Share</a>
                                        </li>
                                        <li @click="leaveGroup(v)">
                                            <a class="dropdown-item"><i class="fas me-2 fa-sign-out-alt"></i> Leave the
                                                group</a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </router-link>
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
                .get('groups/data-all-group-participated')
                .then((res) => {
                    this.group_participated = res.data.data
                });
        },
        viewHome(v) {
            this.$router.push({ name: 'home-group', params: { id_group: v.id } });
        },
        cancelEvent(event) {
            // event.
            event.preventDefault();

        },
        copyPath(v) {
             const inputElement = document.createElement('input');
            inputElement.value = 'http://localhost:5173/group/' + v.id;
            document.body.appendChild(inputElement);
            inputElement.select();
            document.execCommand('copy');
            document.body.removeChild(inputElement);
            var res = {
                data: {
                    status: 1,
                    message: "Copy path successfully!"
                }
            }
            baseFunction.displaySuccess(res);
        },
        leaveGroup(v) {
            axios
                .post('groups/leave-group', v)
                .then((res) => {
                    baseFunction.displaySuccess(res)
                    this.getGroupParticipate();
                })
             
        },
    },
}
</script>
<style ></style>