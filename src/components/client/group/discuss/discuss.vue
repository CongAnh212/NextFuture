<template >
    <div class="pt-2" style="padding: 0px 8%;">
        <div class="w-100 px-2 mx-0 pt-2 row" style="flex: 1;  position: relative;   ">
            <div class=" col-7" style="">
                <div v-if="viewType == 0 && info.privacy == -1" class="card" style="border-radius: 10px; ">
                    <div class="flex-center" style="flex-direction: column; height: 24rem;">
                        <img style="width: 15%;"
                            src="https://www.facebook.com/images/comet/empty_states_icons/permissions/permissions_gray_wash.svg"
                            alt="">
                        <h4><b>This is a private group</b></h4>
                        <p>Please join this group to watch or discuss</p>
                    </div>

                </div>
                <div v-else class="card" style="border-radius: 10px; ">
                    <div class="card-body" style=" border-radius: 10px; box-shadow: 0px 0px 5px #33333345;">
                        <div class="w-100 d-flex align-items-center mb-3" style="gap:10px;pointer-events: none;">
                            <i class="far fa-user-circle " style="font-size: 30px;"></i>
                            <input type="text" class="form-control" placeholder="what are you thinking?"
                                style="border-radius: 50px; user-select: none;">
                        </div>
                        <ul class="post-opt-block flex-around list-inline m-0 p-0 ">
                            <li class="mb-md-0"><a style="cursor: pointer;" class="">
                                    <img src="/src/assets/client/images/small/07.png" alt="icon" class="img-fluid">
                                    Photo/Video </a>
                            </li>
                            <li class="mb-md-0"><a style="cursor: pointer;" class="">
                                    <img src="/src/assets/client/images/small/08.png" alt="icon" class="img-fluid"> Tag
                                    Friend </a>
                            </li>
                            <li class=""><a style="cursor: pointer;" class="">
                                    <img src="/src/assets/client/images/small/09.png" alt="icon" class="img-fluid">
                                    Feeling/Activity </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class=" col-5">
                <div class="card " style="border-radius: 10px;">
                    <div class="card-body b " style="border-radius: 10px; box-shadow: 0px 0px 5px #33333324;">

                        <span style="font-weight: 600;">Introduct</span>
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
                        <div v-if="info.display == 2" class="w-100 d-flex mb-2 privacy-hover ps-2 align-items-center"
                            style="height: 65px;">
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
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
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
        },
        viewType: {
            type: Number,
            required: true
        }
    },
    mounted() {
        //
    },
    methods: {
        //
    },
}
</script>
<style ></style>