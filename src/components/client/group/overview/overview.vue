<template >
    <div class="p-3 d-flex justify-content-center w-100" style="min-height: calc(100vh - 4.688rem); ">
        <div class="card pb-2" style="height:fit-content; width: 50rem; box-shadow: 0 0 10px #00000023;">
            <div class="card-body">
                <div class="mb-2">
                    <h4>
                        <b>Need to consider</b>
                    </h4>
                    <small>
                        1 new information to consider
                    </small>
                </div>
                <div class="d-flex" style="">
                    <div class="d-flex align-items-center hover-item" style="margin-right:1em ; flex:1;cursor: pointer;"
                        @click="active('browse-posts', 'browse-posts')">
                        <div class="d-flex align-items-center p-1" style="flex:1; ">
                            <div class="flex-center circle"
                                style="height: 3rem; width: 3rem; background-color: rgb(101,205,238); margin-right: 0.5em;">
                                <img src="../../../../assets/img/post_group.png" alt="post-group">
                            </div>
                            <div class="d-flex" style="flex-direction: column;">
                                <b class="text-dark">Post are pending</b>
                                <small><b class="text-dark">{{ total_come_in_one_day_post ?? 0 }}</b> new entries today</small>
                            </div>
                        </div>
                        <div class="p-1">
                            <b class="me-2 text-dark">{{ total_come_in_post ?? 0 }}</b>
                            <i class="fa-solid fa-chevron-right text-dark"></i>
                        </div>
                    </div>
                    <div class="d-flex align-items-center hover-item " style="margin-right:1em ; flex:1;cursor: pointer;"
                        @click="active('request_group', 'member-requests')">
                        <div class="d-flex align-items-center p-1" style="flex:1; ">
                            <div class="flex-center circle"
                                style="height: 3rem; width: 3rem; background-color: rgb(69,189,98); margin-right: 0.5em;">
                                <img src="../../../../assets/img/request_member_group.png" alt="post-group">
                            </div>
                            <div class="d-flex" style="flex-direction: column;">
                                <b class="text-dark">Request membership</b>
                                <small class="text-dark">
                                    <b>{{ total_come_in_one_day ?? 0 }}</b> new entries
                                    today
                                </small>
                            </div>
                        </div>
                        <div class="p-1">
                            <b class="me-2 text-dark">{{ total_come_in ?? 0 }}</b>
                            <i class="fa-solid fa-chevron-right text-dark"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios, { url } from '../../../../core/coreRequest';

export default {
    data() {
        return {
            send: {},
            total_come_in: 0,
            total_come_in_one_day: 0,
            total_come_in_post: 0,
            total_come_in_one_day_post: 0,
        }
    },
    mounted() {
        this.id_group = this.$route.params.id_group;
        this.getDataComeIn();
    },
    methods: {
        active(a, b) {
            this.$router.push({ name: a, params: { id_group: this.id_group } })
            this.send = {
                path: b,
                status: true,
            }
            this.$emit('send_active', this.send)
            this.send.status = false
        },
        getDataComeIn() {
            axios
                .post('groups/overview/data-overview', { id_group: this.id_group })
                .then((res) => {
                    this.total_come_in = res.data.data_over_view
                    this.total_come_in_one_day = res.data.data_over_view_one_day
                    this.total_come_in_post = res.data.data_over_view_post
                    this.total_come_in_one_day_post = res.data.data_over_view_one_day_post
                })
        },
    },
}
</script>
<style>
@import './style.css'
</style>