<template>
    <HeaderStoryVue></HeaderStoryVue>
    <div>
        <router-view></router-view>
    </div>
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
<style></style>