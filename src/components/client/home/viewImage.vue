<template>
    <Carousel :items-to-show="2.3" v-bind="settings" :wrap-around="false">
        <Slide
            v-for="(image, index) in arrayImages"
            :key="index"
            class="aaasass"
            @click="openModal(index)"
            :class="{ singleImg: arrayImages.length < 3 }">
            <div class="carousel__item" @mouseup="fixTranslate">
                <img :src="urlImg + image" />
            </div>
        </Slide>
        <template #addons v-if="arrayImages.length >= 3">
            <Navigation />
        </template>
    </Carousel>
</template>

<script>
import { url } from "../../../core/coreRequest";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
export default {
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    props: {
        images: String,
        k: Number,
    },
    watch: {
        images(newValue, olrValue) {
            this.convertStringImageToArray(newValue);
        },
    },
    data() {
        return {
            arrayImages: [],
            urlImg: url,
            img: [],
            i: 0,
            settings: {
                // itemsToShow: 1.9,
                snapAlign: "center",
            },
        };
    },
    created() {
        this.convertStringImageToArray(this.images);
    },
    mounted() {
        setTimeout(() => {
            $(".carousel__track").css("transform", "translateX(70px)");
        }, 1);
        this.singleImage();
    },
    methods: {
        openModal(i) {
            var object = {
                index: i,
                k: this.k,
            };
            this.$emit("openModal", object);
        },
        singleImage() {
            $(".fixDrag").removeClass("fixDrag");
            var myElement = $(".singleImg");
            var parent = myElement.parent();
            parent.addClass("fixDrag");
        },
        convertStringImageToArray(images) {
            if (images) {
                return (this.arrayImages = JSON.parse(images));
            }
            return (this.arrayImages = []);
        },
        fixTranslate(event) {
            var $carouselTrack = $(event.target).closest(".carousel__track");
            if ($carouselTrack.length > 0) {
                var transformValue = $carouselTrack.css("transform");
                var matrix = transformValue.replace(/[^0-9\-.,]/g, "").split(",");
                var translateXValue = parseInt(matrix[12] || matrix[4]);
                if (translateXValue == 0) {
                    $carouselTrack.css("transform", "translateX(70px)");
                }
            }
        },
    },
};
</script>

<style>
.fixDrag {
    transform: translateX(70px) !important;
}

.carousel__next {
    right: -4rem;
    background-color: #d4d6cb;
    border-radius: 100%;
    color: #000000;
}

.carousel__prev {
    left: -4rem;
    background-color: #d4d6cb;
    border-radius: 100%;
    color: #000000;
}

.carousel__item {
    height: 100%;
    width: 100%;
    color: #333;
    border-radius: 10px;
    /* display: flex;
  justify-content: center;
  align-items: center; */
    outline: 1px solid #7d7d7d63;
}

.carousel__item img {
    width: 100%;
    /* height: auto; */
    border-radius: 10px;
    object-fit: cover;
    height: 100%;
    cursor: pointer;
}

.carousel__item:hover {
    transform: scale(0.99);
}

.carousel__slide {
    padding: 5px;
    /* height: 45vh; */
}
</style>
