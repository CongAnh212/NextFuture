<template>
   <div @wheel="handleMouseWheel" style=" height: 100vh;">
      <div style="height: 50vh;"></div>
      <div class="scroll bg-pink" ref="myDiv" :style="{ 'height' : oke + 'px' }"></div>
   </div>
</template>
 
<script>
export default {
   data() {
      return {
         bottomPosition: 0,
         oke : 1000,
      };
   },
   methods: {
      handleMouseWheel(event) {
         const myDiv = this.$refs.myDiv;
         const mh = window.innerHeight;
         // Lấy tọa độ bottom của div
         const rect = myDiv.getBoundingClientRect();
         this.bottomPosition = rect.bottom - mh;

         // Thực hiện các hành động khác dựa trên tọa độ bottom mới và sự kiện lăn chuột
         // console.log('Mouse wheel event:', event.deltaY, 'Bottom position:', this.bottomPosition);
         if(this.bottomPosition <10){
            this.oke += 1000;
            console.log("đã thêm 10 đứa");
         }
      },
   },
};
</script>
 
<style></style>
 