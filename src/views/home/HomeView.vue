<template>
    <a-layout style="height: 100vh;">
        <page-header />
        <a-layout-content>


            
            <a-carousel :style="{
              height: '341px',
            }" :default-current="2" @change="handleChange">
                <a-carousel-item v-for="(image,index) in images" :key="index">
                    <img :src="image" :style="{
                      width: '100%',
                    }" />
                </a-carousel-item>
            </a-carousel>

        </a-layout-content>
        <a-layout-footer>33</a-layout-footer>
    </a-layout>
</template>
<script>
import PageHeader from "@/components/PageHeader.vue"
export default {
    components: {
        PageHeader
    },
    setup() {
        const images = [
            'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
            'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
            'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp',
        ]
        return {
            images
        }
    },
}
</script>