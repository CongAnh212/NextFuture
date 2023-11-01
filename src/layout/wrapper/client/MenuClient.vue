<template>
    <div class="iq-sidebar  sidebar-default ">
        <div id="sidebar-scrollbar">
            <nav class="iq-sidebar-menu">
                <ul id="iq-sidebar-toggle" class="iq-menu">
                    <li class="active">
                        <a href="../dashboard/index.html" class=" ">
                            <i class="las la-newspaper"></i><span>Newsfeed</span>
                        </a>
                    </li>
                    <li class=" ">
                        <a @click="toggleShow('mailbox', 'arrow-right-1')" data-bs-toggle="collapse" class="collapsed"
                            aria-expanded="false">
                            <i class="ri-mail-line"></i><span>Email</span>
                            <i class="ri-arrow-right-s-line iq-arrow-right " id="arrow-right-1"></i>
                        </a>
                        <ul id="mailbox" class="iq-submenu collapse " data-bs-parent="#iq-sidebar-toggle">
                            <li class="">
                                <a href="../app/email.html"><i class="  ri-inbox-line"></i>Inbox</a>
                            </li>
                            <li class="">
                                <a href="../app/email-compose.html"><i class="ri-edit-line"></i>Email Compose</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <div class="p-5"></div>
        </div>
    </div>
</template>
<script>
import $ from 'jquery';
export default {
    data() {
        return {
            
        };
    },
    methods: {
        toggleShow(a, icon) {
            const $element = $("#" + a);
            const $icon = $("#" + icon);
            if ($element.hasClass('show')) {
                $element.removeClass('show');
                $icon.css('transform', 'rotate(0deg)');
            } else {
                $element.addClass('show');
                $icon.css('transform', 'rotate(90deg)');
            }
        }
    },
}
</script>
<style>

</style>