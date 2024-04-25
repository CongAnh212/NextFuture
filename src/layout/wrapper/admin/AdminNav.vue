<template>
    <div class="nav align-items-center d-flex justify-content-between p-3 shadow-sm position-fixed"
        style="height: 100px; width: 100vw">
        <router-link :to="{ name: 'homepage' }" class="d-flex align-items-center" style="height: 45%">
            <img src="../../../assets/img/logo-main.png" alt="logo" style="height: 100%; color: rgb(119, 125, 116)" />
            <div class="fs-3 m-2 fw-bold text-black">NextFuture</div>
        </router-link>
        <div class="d-flex justify-content-center align-items-center">
            <div class="fs-5 m-2">Admin</div>
            <button class="btn btn-primary">Logout</button>
        </div>
        <div class="d-grid position-fixed" style="height: 100vh; top: 110px; left: 0">
            <router-view name="content"></router-view>
        </div>
    </div>
</template>
