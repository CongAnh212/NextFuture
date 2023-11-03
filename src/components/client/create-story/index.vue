<template >
    <div class="iq-sidebar sidebar-default" style="width: 20vw;">
        <div id="sidebar-scrollbar" data-scrollbar="true" tabindex="-1" style="overflow: hidden; outline: none;">
            <div class="scroll-content">
                <nav class="iq-sidebar-menu">
                    <ul id="iq-sidebar-toggle" class="iq-menu" style="margin: 0;">
                        <div class="d-flex justify-content-between" style="margin: 0 0.9rem;">
                            <h4 style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-weight: 500;">
                                <b>Quyền Riêng Tư</b>
                            </h4>
                            <div class="rounded-circle d-flex justify-content-center align-items-center gear"
                                style="height: 35px; width: 35px; background-color: #e4e4e4; cursor: pointer;">
                                <i class="fa-solid fa-gear" style="font-size: 20px; color: black;"></i>
                            </div>
                        </div>
                        <li>
                            <router-link :to="{ name: 'profile-client' }">
                                <img style="height: 55px; width: 55px;;" src="/src/assets/client/images/user/1.jpg"
                                    class="img-fluid rounded-circle me-3" alt="user">
                                <span><b class="text-dark">Lê Công Anh</b></span>
                            </router-link>
                        </li>
                        <hr>
                    </ul>
                </nav>
                <div class="p-5"></div>
            </div>
            <div class="scrollbar-track scrollbar-track-x" style="display: none;">
                <div class="scrollbar-thumb scrollbar-thumb-x" style="width: 250px; transform: translate3d(0px, 0px, 0px);">
                </div>
            </div>
            <div class="scrollbar-track scrollbar-track-y" style="display: none;">
                <div class="scrollbar-thumb scrollbar-thumb-y"
                    style="height: 514px; transform: translate3d(0px, 0px, 0px);"></div>
            </div>
        </div>
    </div>
    <div class="d-flex justify-content-center align-items-center "
        style="height: 80vh; width: 80vw; position: absolute; right: 0; top: 4.688rem;">
        <div class="d-flex" style="height: 333px; width: 470px; gap: 20px;">

            <div class="radius-10 make-color1 d-flex justify-content-center align-items-center left"
                style="height: 100%; width: 50%; position: relative; cursor: pointer; flex-direction: column;">
                <div class="hover-background"></div>
                <div class="rounded-circle d-flex justify-content-center align-items-center hello mb-2"
                    style="height: 50px; width: 50px; background-color: #ffffff; cursor: pointer;">
                    <i class="fa-regular fa-images " style="font-size: 20px; color: rgb(0, 0, 0);"></i>
                </div>
                <b style="color: #ffffff; font-size: 12px;">Create Photo Stories</b>
            </div>

            <div class="radius-10 make-color2 d-flex justify-content-center align-items-center left"
                style="height: 100%; width: 50%; position: relative; cursor: pointer; flex-direction: column;">
                <div class="hover-background"></div>
                <div class="rounded-circle d-flex justify-content-center align-items-center hello mb-2"
                    style="height: 50px; width: 50px; background-color: #ffffff; cursor: pointer;">
                    <i class="fa-solid fa-font " style="font-size: 20px; color: rgb(0, 0, 0);"></i>
                </div>
                <b style="color: #ffffff; font-size: 12px;">Create Text Stories</b>
            </div>
        </div>

    </div>
</template>
<script>
export default {

}
</script>
<style >
.gear:hover {
    background-color: rgba(0, 0, 0, 0.15) !important;
}

.radius-10 {
    border-radius: 12px;
}

.hello {
    box-shadow: 0 5px 9px rgba(0, 0, 0, 0.2);
}

.make-color1 {
    background: linear-gradient(217deg, rgba(89, 0, 255, 0.8), rgba(255, 0, 0, 0) 70.71%),
        linear-gradient(336deg, rgba(255, 0, 212, 0.8), rgba(0, 0, 255, 0) 70.71%);
}

.make-color2 {
    background: linear-gradient(131deg, rgba(221, 255, 2, 0.8), rgba(255, 0, 0, 0) 70.71%),
        linear-gradient(210deg, rgba(2, 255, 129, 0.8), rgba(255, 0, 0, 0) 70.71%),
        linear-gradient(336deg, rgba(255, 0, 0, 0.8), rgba(0, 0, 255, 0) 70.71%);
}

.left:hover .hover-background {
    background-color: rgba(0, 0, 0, 0.07);
}

.hover-background {
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.0);
    z-index: 1;
    border-radius: 12px;
}
</style>   