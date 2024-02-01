<template >
   <div class="w-100 flex-center " style="height: 100%;">
      <div class="flex-center " style="height: 100%; width: 42%; position: relative; ">
         <div v-if="stories" class="flex-center" style="height: 92%; width: 80%; position: absolute; background-color: beige;
            top: 2%; border-radius: 15px; overflow: hidden;">
            <img :src="urlImg + stories[story == null ? 0 : story].dataStory[indexStory].image"
               style="width: 101%;object-fit: cover; border-radius: 15px; position: absolute;" alt="">
            <div style="position: absolute; z-index: 1111; top: 0; gap: 0.3rem;" class=" w-100 d-flex mt-2 px-2">
               <div v-for="(v, k) in stories[story == null ? 0 : story].dataStory" :id="'timeline-' + k"
                  class="w-100 radius-7 timeline" style="height: 4px; background-color: #ffffff88; flex: 1;"></div>
            </div>
            <div style="position: absolute; z-index: 1111; top: 1rem; gap: 0.3rem;"
               class="w-100 align-items-center d-flex mt-2 px-2 ">
               <div class="avatar-3" style="width: 2.5rem; height: 2.5rem;">
                  <img :src="urlImg + stories[story == null ? 0 : story].dataStory[0].avatar">
               </div>
               <div class="d-flex align-items-center text-white flex-1">
                  <span class="d-flex flex-row">
                     <b>
                        {{ stories[story == null ? 0 : story].dataStory[0].fullname }}
                     </b>
                     <small class="flex-center">
                        <i class="fas fa-circle mx-1" style="font-size: .3rem; align-self: center;"></i>
                        {{ hoursDifference(stories[story == null ? 0 : story].dataStory[indexStory].created_at)
                        }}
                     </small>
                  </span>
               </div>
               <div class="text-white">
                  <i class="fas fa-play"></i>
               </div>
            </div>
         </div>
         <div class="flex-center text-white" style="position: absolute; bottom: 10px; width: 79%;">
            <input class="form-control input-custom me-2" placeholder="Reply ..." />
            <i class="far fa-heart fa-2x c-pointer"></i>
         </div>
         <div @click="changeStory(-1)" class="bg-light bg-hover c-pointer circle-45 flex-center"
            style="position: absolute; left: 0;">
            <i class="fas fa-arrow-left"></i>
         </div>
         <div @click="changeStory(1)" class="bg-light  bg-hover c-pointer circle-45 flex-center"
            style="position: absolute; right: 0;">
            <i class="fas fa-arrow-right"></i>
         </div>
      </div>
   </div>
</template>
<script>
import axios, { url } from '../../../core/coreRequest';
import baseFunction from '../../../core/coreFunction';
export default {
   props: {
      stories: Array,
      curentStory: Number
   },
   data() {
      return {
         idStory: 0,
         data: {},
         urlImg: url,
         interval: null,
         indexStory: 0,
         timeline: 0,
         widthTimeline: 0,
         story: 0,
      }
   },
   watch: {
      curentStory: {
         handler(newV) {
            this.story = newV
            this.restartTimeline();
         },
      }
   },
   mounted() {
      setTimeout(() => {

         this.startTimeLine(0);
      }, 1000);
   },
   methods: {
      restartTimeline() {
         this.indexStory = 0;
         this.widthTimeline = 0
         $('.timeline-after').remove();
         clearInterval(this.interval);
         this.startTimeLine(0);
      },
      async changeStory(value) {
         this.indexStory += value
         if (this.indexStory > this.stories[this.story].dataStory.length - 1) {
            this.story++
            this.indexStory = 0
         }
         if (this.indexStory < 0) {
            this.story--
            this.indexStory = this.stories[this.story].dataStory.length - 1
         }
         $('.timeline-after').remove();
         clearInterval(this.interval);

         setTimeout(() => {
            for (let index = 0; index < this.indexStory; index++) {
               const timelineElement = document.getElementById('timeline-' + index);
               const afterElement = document.createElement('div');
               afterElement.classList.add('timeline-after'); // Thêm class để có thể tùy chỉnh CSS
               afterElement.style.backgroundColor = '#fff';
               afterElement.style.borderRadius = '50px';
               afterElement.style.height = '4px';
               afterElement.style.display = 'block';
               afterElement.style.width = '100%';
               timelineElement.appendChild(afterElement);
            }
            this.startTimeLine(this.indexStory);
         }, 1);
      },
      hoursDifference(a) {
         return baseFunction.hoursDifference(a);
      },
      startTimeLine(story) {
         this.widthTimeline = 0
         if (story > this.stories[this.story].dataStory.length - 1) {
            this.indexStory = 0
            this.story++
            $('.timeline-after').remove();
         } else {
            this.indexStory = story
         }
         const timelineElement = document.getElementById('timeline-' + this.indexStory);

         if (!timelineElement) {
            console.error('Timeline eleádeasdment not found');
            return;
         }

         const afterElement = document.createElement('div');
         afterElement.classList.add('timeline-after'); // Thêm class để có thể tùy chỉnh CSS
         afterElement.style.backgroundColor = '#fff';
         afterElement.style.borderRadius = '50px';
         afterElement.style.height = '4px';
         afterElement.style.display = 'block';


         this.interval = setInterval(() => {
            this.widthTimeline += 5; // Tăng width lên 5%
            afterElement.style.width = `${this.widthTimeline}%`;

            if (this.widthTimeline >= 100) {
               clearInterval(this.interval); // Dừng setInterval khi width đạt 60%
               this.widthTimeline = 0
               this.startTimeLine(this.indexStory + 1)
            }

            // Thêm phần tử mới vào phần tử gốc
            timelineElement.appendChild(afterElement);
         }, 500);
      }

   }
}
</script>
<style >
@import './style.scss'
</style>