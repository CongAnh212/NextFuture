<template>
    <div class="w-100  main-group" style="">
        <div class="w-100 h-100" style="">
            <div class="w-100 bg-primary flex-center"
                style="overflow: hidden; border-radius: 0px 0px 10px 10px; height: 30em;">
                <img src="http://127.0.0.1:8000/img/cover/cover_image.png" class="w-100 image-cover"
                    style="object-fit: cover; width: 100%;">
            </div>
            <div class="w-100 px-2 pt-3 c">
                <h3><b style="color: rgb(156, 156, 156);">Group name</b></h3>
                <p><span style="color: black">Group privacy</span><span style="color: black; font-weight: 500;"> - 1 member
                    </span></p>
                <hr class="w-100 bg-dark pb-0 mb-0">
                <div class="text-dark flex-between" style="display:flex;gap:20px; margin-top: 5px;">
                    <div class="d-flex"> <!-- Left navbar -->
                        <div class="flex-center border-bottomm ct" style="width: 100%; cursor: pointer;">
                            <div @click="setView" class="py-1 p-2 px-3 bb f-500" style="border-radius: 7px; ">
                                <span class="del-event">Discuss</span>
                            </div>
                        </div>
                        <div class="flex-center ct" style="width: 100%; cursor: pointer;">
                            <div @click="setView" class="py-1 p-2 px-3  bg-hover bb f-500" style="border-radius: 7px;">
                                <span class="del-event">Member</span>
                            </div>
                        </div>
                        <div class="flex-center ct" style="width: 100%; cursor: pointer;">
                            <div @click="setView" class="py-1 p-2 px-3  bg-hover bb f-500" style="border-radius: 7px;">
                                <span class="del-event">Event</span>
                            </div>
                        </div>
                        <div class="flex-center ct" style="width: 100%; cursor: pointer;">
                            <div @click="setView" class="py-1 p-2 px-3  bg-hover bb f-500" style="border-radius: 7px;">
                                <span class="del-event">Photos</span>
                            </div>
                        </div>
                    </div>
                    <div class="btn-light px-2 " style="border-radius: 5px; cursor: pointer;">
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="pt-2" style="padding: 0px 8%;">
        <div class="w-100 px-2 mx-0 pt-2 row" style="flex: 1;  position: relative;   ">
            <div class="left col-7" style="">
                <div class="card" style="border-radius: 10px; ">
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
            <div class="right col-5">
                <div class="card" style="border-radius: 10px;">
                    <div class="card-body b" style="border-radius: 10px; box-shadow: 0px 0px 5px #33333324;">
                        <span style="font-weight: 600;">Introduct</span>
                        <div class="w-100 d-flex mb-2 privacy-hover ps-2 align-items-center"
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
                        <div v-if="false" class="w-100 d-flex mb-2 privacy-hover ps-2 align-items-center"
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
                        <div class="w-100 d-flex mb-2 privacy-hover ps-2 align-items-center" style="height: 65px;">
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
                        <div v-if="false" class="w-100 d-flex mb-2 privacy-hover ps-2 align-items-center"
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
    mounted() {
        //
    },
    methods: {
        setView(event) {
            const el = event.target;
            $('.ct').removeClass('border-bottomm');
            const parent = el.parentElement;
            parent.classList.add('border-bottomm')
            $('.bb:not(.bg-hover)').addClass('bg-hover');
            el.classList.remove('bg-hover');
        }
    },
}
</script>
<style>
@import './style.css';
</style>