<template>
    <div class="w-100 d-flex " style="border-radius: 10px; padding: 0.45rem 0rem;">
        <div class="me-2" style="overflow: hidden; width: 53px; height: 53px; border-radius: 15px;"><img
                src="http://127.0.0.1:8000/img/cover/cover_image.png" alt="" style="object-fit: cover; height: 100%;"></div>
        <div class="d-flex justify-content-center" style="flex: 1 1 0%; flex-direction: column; line-height: 1.25rem;"><b
                style="font-size: 15px;">Hội Wibu Tiềm Năng</b>
            <p class="p-0 m-0">Public group - 1 tỷ thành viên</p>
        </div>
    </div>
    <div class="w-100 d-flex">
        <button class="btn btn-primary me-2" style="flex: 1">
            <i class="fas fa-plus me-1"></i>Invite
        </button>
        <button class="btn btn-light" style=""><i class="fas fa-ellipsis-h"></i></button>
    </div>
    <div class="w-100 d-flex  pt-2">
        <div class="text-center " style="flex: 1">
            <div class=" flex-center " style="width: 100%; cursor: pointer; ">
                <div class=" py-1 pe-0 bg-hover aa" @click="setList" style="width: 98%; border-radius: 7px;">browse</div>
            </div>
        </div>
        <div class="text-center " style="flex: 1">
            <div class=" flex-center border-bottomm" style="width: 100%; cursor: pointer; ">
                <div class=" py-1 pe-0 aa" @click="setList" style="width: 98%; border-radius: 7px;">Manager</div>
            </div>
        </div>
    </div>
    <hr class="mt-0 pt-0">
    <div @click="community" class="w-100  d-flex p-2 community-active" style="border-radius: 7px; cursor: pointer;">
        <i class=" del-event fas fa-home  me-2 "
            style="font-size: 20px; padding-top: 0.2rem;"></i>
        <span class="del-event">Community homepage</span>
    </div>
    <div @click="community" class="w-100  d-flex p-2 " style="border-radius: 7px; cursor: pointer;">
        <i class=" del-event fas fa-layer-group me-2 "
            style="font-size: 20px; padding-top: 0.2rem;"></i>
        <span class="del-event">Overview</span>
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
        community(event) {
            const el = event.target;
            $('.community-active').removeClass('community-active')
            el.classList.add('community-active');

        },
        setList(event) {
            const e = event.target;
            $('.border-bottomm').removeClass('border-bottomm')
            const parentElement = e.parentElement;
            parentElement.classList.add('border-bottomm');
            $('.aa:not(.bg-hover)').addClass('bg-hover');
            e.classList.remove('bg-hover');


        }
    },
}
</script>
<style>
@import './style.css';</style>