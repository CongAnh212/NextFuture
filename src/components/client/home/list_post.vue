<template >
    <div class="col-lg-12 row m-0 p-0 mb-3">
        <template v-for="(v, k ) in listPost">
            <div v-if="v.images == null" class=" d-flex p-0" style=" flex-direction: column;">
                <div class="flex-center mb-1 bg-pink" style="flex-direction: row;">
                    <div class="circle-50 me-2" style="overflow: hidden;">
                        <img src="http://localhost:8000/img/avatar_female.jpg" style="object-fit: cover; width: 100%;"
                            alt="">
                    </div>
                    <div class=" " style="flex: 1">
                        <b>Phan Công Tánh</b>
                        <br>
                        <span>{{ v.caption }}</span>
                    </div>
                    <div class="d-flex ">
                        <small>1 hours</small>
                        <i class="fas fa-ellipsis-h mx-2 " style="align-self: center; cursor: pointer;"></i>
                    </div>
                </div>
                <div class="" style="flex: 1; position: relative;">
                    <div class="  radius-5"
                        style="margin-left: 1.45rem;height: 100%; border-left: 3px solid #3f3f3f4e; position: absolute;" />
                    <div>ádf</div>
                </div>
                <div class="d-flex mt-1">
                    <div class="flex-center " style="width: 50px;">
                        <div class="circle" style="width: 27px; height: 27px; overflow: hidden;">
                            <img src="http://localhost:8000/img/avatar_female.jpg"
                                style="object-fit: contain; height: 100%;" alt="">
                        </div>
                    </div>
                    <div>
                        1234 Comments - 1234 Likes
                    </div>
                </div>
    <hr>

            </div>

        </template>

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
        listPost: {
            type: Array,
            required: true,
        }
    },
    mounted() {
        console.log('listPost: ', this.listPost);

    },
    methods: {
        //
    },
}
</script>
<style ></style>