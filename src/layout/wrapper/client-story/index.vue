<template>
    <HeaderStoryVue></HeaderStoryVue>
    <router-view></router-view>
</template>
<script>
import HeaderStoryVue from './HeaderStory.vue';
export default {
    name: 'app',
    components: {
        HeaderStoryVue
    }
}
</script>
<style>
    
</style>