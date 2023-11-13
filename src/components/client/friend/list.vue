<template >
    <li class="mt-2">
        <h3>Friends</h3>
    </li>
    <li>
        <router-link :to="{ name: 'friends' }">
            <i class="fa-solid fa-user-group" style="font-size: 17px;"></i>
            <span>Home</span>
        </router-link>

    </li>
    <li>
        <a href="../app/group.html" class=" ">
            <i class="fa-solid fa-user-check" style="font-size: 17px;"></i>
            <span>Friend request</span>
        </a>
    </li>
    <li>
        <a href="../app/group.html" class=" ">
            <i class="fa-solid fa-user-plus" style="font-size: 17px;"></i>
            <span>Suggest</span>
        </a>
    </li>
    <li class=" ">
        <a href="../app/todo.html" class=" ">
            <i class="fa-solid fa-users-gear" style="font-size: 17px;"></i>
            <span>All Friends</span>
        </a>
    </li>
</template>
<script>
export default {

}
</script>
<style ></style>