<template>
    <h3 class="text-dark" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"><b>Search Results</b></h3>
    <hr>
    <h5 class="text-dark f-500">Filter</h5>
    <div @click="activeSearch($event, 'all')" class="d-flex align-items-center c-pointer bg-hover p-2 search-active"
        style="font-size: 1.3rem;">
        <div class="avatar-3 bg-light me-2 flex-center " style="width: 2.3rem;height: 2.3rem; font-size: 1.2rem;">
            <i class="fas fa-border-all"></i>
        </div>
        <div class="flex-1 text-dark">
            <b> All</b>
        </div>
    </div>
    <div @click="activeSearch($event, 'everyone')" class="d-flex align-items-center c-pointer bg-hover p-2 everyone-see-more"
        style="font-size: 1.3rem;">
        <div class="avatar-3 me-2 flex-center " style="width: 2.3rem;height: 2.3rem; font-size: 1.2rem;">
            <i class="fas fa-user-friends"></i>
        </div>
        <div class="flex-1 text-dark">
            <b> Everyone</b>
        </div>
    </div>
    <div @click="activeSearch($event, 'group')" class="d-flex align-items-center c-pointer bg-hover p-2 group-see-more"
        style="font-size: 1.3rem;">
        <div class="avatar-3  me-2 flex-center " style="width: 2.3rem;height: 2.3rem; font-size: 1.2rem;">
            <i class="fas fa-users"></i>
        </div>
        <div class="flex-1 text-dark">
            <b> Group</b>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        seeMoreSearch: String
    },
    watch: {
        seeMoreSearch(newV, oldV) {
            if (newV === 'client') {
                $('.everyone-see-more').click()
            } else {
                $('.group-see-more').click()
            }
            
        }
    },
    data() {
        return {
            //
        }
    },
    mounted() {
        //
    },
    methods: {
        activeSearch(event, type) {
            $('.search-active').removeClass('search-active');
            var current = event.currentTarget;
            current.classList.add('search-active');
            this.$emit('sendActiceFromSearch', type)
        },
        
    },
}
</script>
<style>
.search-active .avatar-3 {
    background-color: var(--bs-primary) !important;
    color: #fff;
}

.search-active {
    background-color: #93939312;
    border-radius: 7px;
}

.avatar-3 {
    background-color: var(--bs-light);
}</style>