<template>
    <div class="bg-white modal-component pb-3" ref="modalComponent">
        <div class=" d-flex py-3 px-3" style="gap: 15px;">
            <div class="circle" style="overflow: hidden; width: 100px; height: 100px;">
                <img style="object-fit: cover; width: 100%;"
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2023/11/25/photo-1-1700885873921100043579.jpg">
            </div>
            <div style="flex:1">
                <div style="font-size: 18px; line-height: 23px;">
                    <b class="text-dark">Hoàng Nguyễn Ngọc Duy Linh</b>
                </div>
                <div class="text-dark py-2">
                    <i class="fa-solid fa-user-group me-2 text-secondary" style="font-size: 15px;"></i>
                    <span style="font-size: 15px;"> 23 mutual friends include <b>Lê Công Anh</b>
                        và <b>Phan Công Tánh</b>
                    </span>
                </div>
                <div class="text-dark">
                    <i class="fa-solid fa-house-chimney me-2 text-secondary" style="font-size: 15px;"></i>
                    <span style="font-size: 15px;">Live in <b>Ho Chi Minh</b></span>
                </div>
            </div>
        </div>
        <div class="flex-center " style="gap: 7px;">
            <button class="btn btn-light f-500" style="width: 140px;">Friend</button>
            <button class="btn btn-primary f-500" style="width: 140px;"> Message</button>
            <button class="btn btn-light f-500" style="width: 35px;">
                <i class="fa-solid fa-ellipsis"></i>
            </button>
        </div>
    </div>
</template>
<script>
export default {
  
}
</script>
<style></style>