<template >
    <li class="mt-2">
        <h3>Friends</h3>
    </li>
    <li class="bg-hover active" >
        <router-link :to="{ name: 'friends' }">
            <i class="fa-solid fa-user-group" style="font-size: 17px;"></i>
            <span>Home</span>
        </router-link>

    </li>
    <li class="bg-hover">
        <router-link :to="{ name: 'requests' }">
            <i class=" fa-solid fa-user-check" style="font-size: 17px;"></i>
            <span>Friend request</span>
        </router-link>

    </li>
    <li class="bg-hover">
        <router-link :to="{ name: 'suggestions' }">
            <i class="fa-solid fa-user-plus" style="font-size: 17px;"></i>
            <span>Suggest</span>
        </router-link>
    </li>
    <li class="bg-hover">
        <router-link :to="{ name: 'list' }">
            <i class="fa-solid fa-users-gear" style="font-size: 17px;"></i>
            <span>All friends</span>
        </router-link>
    </li>
</template>
<script>
export default {

}
</script>
<style ></style>