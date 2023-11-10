<template>
    <div class="iq-sidebar  sidebar-default ">
        <div id="sidebar-scrollbar" data-scrollbar="true" tabindex="-1" style="overflow: hidden; outline: none;">
            <div class="scroll-content">
                <nav class="iq-sidebar-menu">
                    <ul id="iq-sidebar-toggle" class="iq-menu">
                        <li>
                            <router-link :to="{ name: 'profile-client' }">
                                <i class="fa-solid fa-user " style="font-size: 17px;"></i>
                                <span>Friends</span>
                            </router-link>

                        </li>
                        <li>
                            <a href="../app/group.html" class=" ">
                                <i class="fa-brands fa-facebook-messenger" style="font-size: 17px;"></i>
                                <span>Message</span>
                            </a>
                        </li>
                        <li>
                            <a href="../app/group.html" class=" ">
                                <i class="fa-solid fa-users" style="font-size: 17px;"></i>
                                <span>Group</span>
                            </a>
                        </li>
                        <li class=" ">
                            <a href="../app/todo.html" class=" ">
                                <i class="fa-solid fa-flag" style="font-size: 17px;"></i>
                                <span>Page</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div class="d-flex justify-content-center w-100" style="height: 15px;">
                    <hr style="width: 90%;">
                </div>
                <nav class="iq-sidebar-menu">

                    <ul id="iq-sidebar-toggle" class="iq-menu">
                        <li>
                            <h5 class="mt-3">
                                Shortcuts
                            </h5>
                        </li>
                        <li class="text-nowrap">
                            <router-link :to="{ name: 'profile-client' }">
                                <div class="" style="overflow: hidden; width: 35px;
                                border-radius: 6px;
                                height: 35px; background-color: #333;">
                                    <img class="" style="width: 100%; height: 100%; object-fit: cover;"
                                        src="https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/324272242_883346303089934_3006772613680125568_n.jpg?stp=dst-jpg_s2048x2048&_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=piCjt0Y_erkAX93eBOC&_nc_ht=scontent.fdad3-1.fna&oh=00_AfANcfcJLAM_8J7eg9Coy1B43Wh3Ne3q85MWoz8F1M7ROw&oe=6551688B"
                                        alt="">
                                </div>
                                <span class="ms-1">Bộ Tộc MixiGaming</span>
                            </router-link>
                        </li>
                    </ul>
                </nav>
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
</template>
<script>
export default {

}
</script>
<style></style>