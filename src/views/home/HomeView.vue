<template>
    <a-layout style="height: 100vh;">
        <page-header />
        <a-layout-content>
            <a-row :gutter="8" style="margin-top:40px;">
                <a-col :span="4">
                    <div style="height: 32px;line-height: 32px;">xxx电子商务</div>
                </a-col>
                <a-col :span="18" style="display:flex;">
                    <a-input placeholder="" style="flex-grow:1;margin-right: 8px;" allow-clear />
                    <a-button>搜索</a-button>
                </a-col>
            </a-row>
            <a-row style="margin-top:20px;">
                <a-col :span="5">
                    商品类目
                </a-col>
            </a-row>

            <a-row style="margin-top:20px;">
                <a-col :span="4">
                    商品类目
                </a-col>
                <a-col :span="16" :offset="2" style="display:flex;margin-top: -10px;">
                    <a-carousel :style="{
                        height: '341px',
                        width: '100%'
                    }" :default-current="2" >
                        <a-carousel-item v-for="(image, index) in images" :key="index">
                            <img :src="image" :style="{
                                width: '100%',
                            }" />
                        </a-carousel-item>
                    </a-carousel>
                </a-col>
            </a-row>
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