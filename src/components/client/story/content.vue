<template >
   <div class="w-100 d-flex justify-content-center align-items-center" style="height: 100%;">
      <div class=" d-flex justify-content-center align-items-center"
         style="height: 100%; width: 42%; position: relative; ">
         <div class=" d-flex justify-content-center align-items-center" style="height: 93%; width: 80%; position: absolute; background-color: beige;
            top: 2%; border-radius: 10px; overflow: hidden;">
            <img :src="urlImg + data.image" style="width: 100%;object-fit: cover; border-radius: 15px;" alt="">
         </div>
      </div>
   </div>
</template>
<script>
import axios, { url } from '../../../core/coreRequest';
export default {
   props: ['defaultProp'],
   data() {
      return {
         idStory: 0,
         data: {},
         urlImg: url,
      }
   },
   watch: {
      '$route.params.idStory'(idStory) {
         this.idStory = idStory;
         this.loadData();
      }
   },
   mounted() {
      this.idStory = this.$route.params.idStory;
      this.loadData();
   },
   methods: {
      loadData() {
         axios
            .get('story/' + this.idStory)
            .then((res) => {
               this.data = res.data.data;
               // console.log(this.data);
            });
      }
   },
}
</script>
<style ></style>