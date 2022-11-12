<template>
    <a-layout style="height: 100vh;">
        <page-header />
        <a-layout-content>
            <a-row :gutter="8" style="margin-top:40px;display: flex;align-items: center;">
                <a-col :span="3">
                    <div style="height: 32px;line-height: 32px;">xxx电子商务</div>
                </a-col>
                <a-col :span="16" style="display:flex;align-items: center;">
                    <a-input placeholder=""
                        style="flex-grow:1;margin-right: 8px;height: 39px;background-color: transparent;border: 1px solid rgba(187, 187, 187, 1);"
                        allow-clear />
                    <a-button>搜索</a-button>
                </a-col>
            </a-row>
            <a-row style="margin:30px 0;">
                <a-col :span="3">
                    商品类目
                </a-col>
            </a-row>

            <a-row style="margin-top:20px;">
                <a-col :span="3">
                    <a-list :bordered="false" :split="false">
                        <a-list-item v-for="type in typeListRef" :key="type.id">{{
                                type.name
                        }}</a-list-item>
                    </a-list>
                </a-col>
                <a-col :span="16" style="margin-top: -10px;">
                    <div>
                        <a-carousel :style="{
                            height: '341px',
                            width: '100%'
                        }" :default-current="2">
                            <a-carousel-item v-for="(image, index) in images" :key="index">
                                <img :src="image" :style="{
                                    width: '100%',
                                }" />
                            </a-carousel-item>
                        </a-carousel>
                    </div>
                    <div style="display:flex;justify-content: space-between;margin-top:36px">
                        <a-list style="width:288px" v-for="(loss, index) in lossList" :key="index" :bordered="false"
                            :split="false">
                            <a-list-item style="padding:0">
                                <a-image width="100%" height="183" :src="loss" />
                            </a-list-item>
                        </a-list>
                    </div>
                </a-col>
            </a-row>

            <a-row style="margin:30px 0;">
                <a-col :span="3">
                    商品类目
                </a-col>
            </a-row>




        </a-layout-content>
        <a-layout-footer>33</a-layout-footer>
    </a-layout>
</template>
<script>
import PageHeader from "@/components/PageHeader.vue"
import { onBeforeMount } from 'vue'
import useBanner from "./js/useBanner.js"
import useList from "./js/useList.js"
import { typeList } from "@/http/typeList.js"

export default {
    components: {
        PageHeader
    },
    setup() {
        const { list, getBannerList } = useBanner()
        const { list: lossList, getBannerList: lossBannerList } = useBanner(3)
        const { list: typeListRef, getList } = useList(async () => {
            return await typeList()
        })
        onBeforeMount(() => {
            getBannerList()
            getList()
            lossBannerList()
        })
        return {
            images: list,
            typeListRef,
            lossList
        }
    },
}
</script>