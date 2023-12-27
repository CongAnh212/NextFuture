<template>
    <div class="flex-center mt-3" style="flex-direction: column;">
        <div class="card" style="border-radius: 10px; width: 50%;">
            <div class="card-body b text-dark" style="border-radius: 10px; box-shadow: rgba(51, 51, 51, 0.14) 0px 0px 5px;">
                <span style="font-weight:600; font-size:20px;">Introducing this group</span>
                <hr class="m-2">
               <div v-if="info.privacy == 1" class="w-100 d-flex mb-2 privacy-hover ps-2 align-items-center"
                                style="height: 65px; line-height: 18px;">
                                <div class="d-flex me-2 justify-content-center align-items-center"
                                    style="width:30px;height:30px;">
                                    <i class="fas fa-globe-asia text-dark" style="font-size: 20px;"></i>
                                </div>
                                <div class="d-flex justify-content-between align-items-center" style="width:calc(100% - 60px);">
                                    <div class="d-flex flex-column pt-3 a" style="user-select:none;">
                                        <h5><b style="font-weight:500;">Public</b></h5>
                                        <p>Anyone can see everyone in the group and what they post</p>
                                    </div>
                                </div>
                            </div>
                            <div v-else class="w-100 d-flex mb-2 privacy-hover ps-2 align-items-center"
                                style="height: 65px; line-height: 18px;">
                                <div class="d-flex me-2 justify-content-center align-items-center"
                                    style="width:30px;height:30px;">
                                    <i class="fas fa-lock text-dark" style="font-size: 20px;"></i>
                                </div>
                                <div class="d-flex justify-content-between align-items-center" style="width:calc(100% - 60px);">
                                    <div class="d-flex flex-column pt-3 a" style="user-select:none;">
                                        <h5><b style="font-weight:500;">Private</b></h5>
                                        <p>only members can see everyone in the group and what they post</p>
                                    </div>
                                </div>
                            </div>
                            <div v-if="info.display == 2" class="w-100 d-flex mb-2 privacy-hover ps-2 align-items-center" style="height: 65px;">
                                <div class="d-flex me-2 justify-content-center align-items-center"
                                    style="width:30px;height:30px;">
                                    <i class="fas fa-eye text-dark" style="font-size: 20px;"></i>
                                </div>
                                <div class="d-flex justify-content-between align-items-center" style="width:calc(100% - 60px);">
                                    <div class="d-flex flex-column pt-3 a" style="user-select:none;">
                                        <h5><b style="font-weight:500;">Visible</b></h5>
                                        <p>Anyone can see this group</p>
                                    </div>
                                </div>
                            </div>
                            <div v-else class="w-100 d-flex mb-2 privacy-hover ps-2 align-items-center"
                                style="height: 65px;  line-height: 18px;">
                                <div class="d-flex me-2 justify-content-center align-items-center"
                                    style="width:30px;height:30px;">
                                    <i class="fas fa-eye-slash text-dark" style="font-size: 20px;"></i>
                                </div>
                                <div class="d-flex justify-content-between align-items-center" style="width:calc(100% - 60px);">
                                    <div class="d-flex flex-column pt-3 a" style="user-select:none;">
                                        <h5><b style="font-weight:500;">Hidden</b></h5>
                                        <p>Only group members can see this group</p>
                                    </div>
                                </div>
                            </div>
                <div class="w-100 d-flex mb-2 privacy-hover ps-2 align-items-center" style="height:65px;">
                    <div class="d-flex me-2 justify-content-center align-items-center" style="width:30px;height:30px;"><i
                            class="fas fa-clock text-dark" style="font-size:20px;"></i></div>
                    <div class="d-flex justify-content-between align-items-center" style="width:calc(100% - 60px);">
                        <div class="d-flex flex-column pt-3 a" style="user-select:none;">
                            <h5><b style="font-weight:500;">History</b></h5>
                            <p>was established on {{ formattedDate(info.created_at) }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="card" style="border-radius: 10px; width: 50%;">
            <div class="card-body b text-dark" style="border-radius: 10px; box-shadow: rgba(51, 51, 51, 0.14) 0px 0px 5px;">
                <span style="font-weight:600; font-size:20px;">Action</span>
                <hr class="m-2">
                <div class="w-100 d-flex mb-2 privacy-hover ps-2 align-items-center" style="height:65px;line-height:18px;">
                    <div class="d-flex me-2 justify-content-center align-items-center" style="width:30px;height:30px;"><i
                            class="fas fa-newspaper text-dark" style="font-size:20px;"></i></div>
                    <div class="d-flex justify-content-between align-items-center" style="width:calc(100% - 60px);">
                        <div class="d-flex flex-column pt-3 a" style="user-select:none;">
                            <h5><b style="font-weight:500;">Today there are 99 new posts</b></h5>
                            <p>1293 posts last month</p>
                        </div>
                    </div>
                </div>
                <div class="w-100 d-flex mb-2 privacy-hover ps-2 align-items-center" style="height:65px;">
                    <div class="d-flex me-2 justify-content-center align-items-center" style="width:30px;height:30px;"><i
                            class="fas fa-users text-dark" style="font-size:20px;"></i></div>
                    <div class="d-flex justify-content-between align-items-center" style="width:calc(100% - 60px);">
                        <div class="d-flex flex-column pt-3 a" style="user-select:none;">
                            <h5><b style="font-weight:500;">There are a total of {{ info.member }} members</b></h5>
                            <p>There were no new members in the past week</p>
                        </div>
                    </div>
                </div>
                <div class="w-100 d-flex mb-2 privacy-hover ps-2 align-items-center" style="height:65px;">
                    <div class="d-flex me-2 justify-content-center align-items-center" style="width:30px;height:30px;"><i
                            class="fas fa-clock text-dark" style="font-size:20px;"></i></div>
                    <div class="d-flex justify-content-between align-items-center" style="width:calc(100% - 60px);">
                        <div class="d-flex flex-column  a" style="user-select:none;">
                            <h5><b style="font-weight:500;">creation date {{ formatDate(info.created_at) }} ago</b></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import moment from 'moment';
import baseFunction from '../../../../core/coreFunction';
export default {
    data() {
        return {
            //
        }
    },
    props: {
        info: {
            type: Object,
            required: true,
        }
    },
    mounted() {
    },
    methods: {
        formattedDate(a) {
            // Sử dụng moment để định dạng ngày tháng
            return moment(a).format('DD-MM-YYYY');
        },
        formatDate(a) {
            return baseFunction.hoursDifference(a);
        }
    },
}
</script>
<style></style>