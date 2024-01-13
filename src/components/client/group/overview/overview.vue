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
                    <div class="d-flex align-items-center hover-item" style="margin-right:1em ; flex:1">
                        <div class="d-flex align-items-center p-1" style="flex:1; ">
                            <div class="flex-center circle"
                                style="height: 3rem; width: 3rem; background-color: rgb(101,205,238); margin-right: 0.5em;">
                                <img src="../../../../assets/img/post_group.png" alt="post-group">
                            </div>
                            <div class="d-flex" style="flex-direction: column;">
                                <b class="text-dark">Post are pending</b>
                                <small>0 new entries today</small>
                            </div>
                        </div>
                        <div class="p-1">
                            <b class="me-2 text-dark">10</b>
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
                                <small class="text-dark">0 new entries today</small>
                            </div>
                        </div>
                        <div class="p-1">
                            <b class="me-2 text-dark">{{ count ? count : ' ' }}</b>
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
            data_come_in: [],
            count: 0,
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
                .post('groups/data-come-in-group', { id_group: this.id_group })
                .then((res) => {
                    this.data_come_in = res.data.data
                    this.count = this.data_come_in.length
                })
        },
    },
}
</script>
<style>
@import './style.css'
</style>