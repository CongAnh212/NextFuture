<template>
    <div class="nav align-items-center d-flex justify-content-between p-3 shadow-sm position-fixed"
        style="height: 100px; width: 100vw">
        <router-link :to="{ name: 'homepage' }" class="d-flex align-items-center" style="height: 45%">
            <img src="../../../assets/img/main-logo.png" alt="logo" style="height: 100%; color: rgb(119, 125, 116)" />
            <div class="fs-3 m-2 fw-bold text-black">NextFuture</div>
        </router-link>
        <div class="d-flex justify-content-center align-items-center">
            <div style="line-height: 1.25rem;" class="me-1">
                <b class='text-dark fs-5'>{{ infoAdmin.fullname }}</b>
                <br>
                <b class="text-primary">{{ infoAdmin.office }}</b>
            </div>
            <div style="cursor: pointer;" class="btn-logout text-center py-1 text-nowrap " @click="logOut()">
                <b>Log out</b>
            </div>
            <div data-v-0f591c39="" style="padding: 0px 7px; " @click="showButton()">
                <div data-v-0f591c39="" class="d-flex align-items-center justify-content-center"
                    style="background-color: rgba(212, 208, 208, 0.5); border-radius: 50%; height: 50px; width: 50px; cursor: pointer;">
                    <i data-v-0f591c39="" class="fa-regular fa-user fs-4"></i>
                </div>
            </div>
        </div>
        <div class="d-grid position-fixed" style="height: 100vh; top: 70px; left: 0;">
            <router-view name="content"></router-view>
        </div>
    </div>
</template>
<script>
import axios from '../../../core/coreRequest'
export default {
    data() {
        return {
            infoAdmin: {},
            shownut: true
        }
    },
    created() {
        this.getInfoAdmin();
    },
    methods: {
        getInfoAdmin() {
            axios
                .get('admin/info')
                .then((res) => {
                    this.infoAdmin = res.data.infoAdmin
                });
        },
        showButton() {
            this.shownut = !this.shownut
            $('.btn-logout').toggleClass('show-btn')
            if (!this.shownut) {
                $('.btn-logout').removeClass('decreaseWidthAnimation')
            } else {
                $('.btn-logout').addClass('decreaseWidthAnimation')
            }
        },
        logOut() {
            axios
                .post('admin/logOut')
                .then((res) => {
                    localStorage.removeItem('token');
                    this.$router.push({ name: 'admin-login' })
                })
        }
    },
}
</script>
<style>
:root {
    --btn-primary: rgb(97, 188, 254)
}

.btn-logout {
    border-radius: 5px;
    height: auto;
    width: 0px;
    background-color: var(--btn-primary);
    color: white;
    overflow: hidden;
}

.btn-logout:hover {
    background-color: grey;
}

.show-btn {
    width: 0;
    overflow: hidden;
    animation: increaseWidth .5s forwards;
}

@keyframes increaseWidth {
    from {
        width: 0;
    }

    to {
        width: 100px;
    }
}

@keyframes decreaseWidth {
    from {
        width: 100px;
    }

    to {
        width: 0;
    }
}

.decreaseWidthAnimation {
    animation: decreaseWidth .5s forwards;
}
</style>