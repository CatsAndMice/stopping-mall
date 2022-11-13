<template>
    <a-layout style="height: 100vh;">
        <page-header />
        <a-layout-content>
            <a-row :gutter="8" style="margin-top:40px;display: flex;align-items: center;">
                <a-col :span="3">
                    <div style="height: 32px;line-height: 32px;">xxx电子商务</div>
                </a-col>
                <a-col :span="16" style="display:flex;align-items: center;">
                    <a-input placeholder="" v-model="goodName"
                        style="flex-grow:1;margin-right: 8px;height: 39px;background-color: transparent;border: 1px solid rgba(187, 187, 187, 1);"
                        allow-clear />
                    <a-button @click="onSearch">搜索</a-button>
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
                        <template #empty>
                        </template>
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
                            <template #empty>
                            </template>
                        </a-list>
                    </div>
                </a-col>
            </a-row>
            <a-row style="margin-top: 58px;">
                <a-col :span="3">
                    护肤品类
                </a-col>
            </a-row>
            <a-row>
                <a-col :span="22" style="padding-left:4%;margin-top: 50px;">
                    <div style="display:flex;flex-wrap: wrap;">
                        <a-image v-for="type in typeList1" :key="type.id" style="margin-right:43px;" width="288"
                            height="183"
                            src="https://ts1.cn.mm.bing.net/th?id=OIP-C.wc_dCG_KbIKZwMdtD3gL2QHaEt&w=264&h=168&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2" />
                    </div>
                </a-col>
            </a-row>


            <a-row style="margin-top: 58px;">
                <a-col :span="3">
                    彩妆品类
                </a-col>
            </a-row>
            <a-row>
                <a-col :span="22" style="padding-left:4%;margin-top: 50px;">
                    <div style="display:flex;flex-wrap: wrap;">
                        <a-image v-for="type in typeList2" :key="type.id" style="margin-right:43px;" width="288"
                            height="183"
                            src="https://ts1.cn.mm.bing.net/th?id=OIP-C.wc_dCG_KbIKZwMdtD3gL2QHaEt&w=264&h=168&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2" />
                    </div>
                </a-col>
            </a-row>

            <a-row style="margin-top: 58px;">
                <a-col :span="3">
                    香水品类
                </a-col>
            </a-row>
            <a-row>
                <a-col :span="22" style="padding-left:4%;margin-top: 50px;">
                    <div style="display:flex;flex-wrap: wrap;">
                        <a-image v-for="type in typeList3" :key="type.id" style="margin-right:43px;" width="288"
                            height="183"
                            src="https://ts1.cn.mm.bing.net/th?id=OIP-C.wc_dCG_KbIKZwMdtD3gL2QHaEt&w=264&h=168&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2" />
                    </div>
                </a-col>
            </a-row>
        </a-layout-content>


        <a-layout-footer>

        </a-layout-footer>
    </a-layout>
</template>
<script>
import PageHeader from "@/components/PageHeader.vue"
import { onBeforeMount, shallowRef, unref } from 'vue'
import useBanner from "./js/useBanner.js"
import useList from "./js/useList.js"
import { typeList } from "@/http/typeList.js"
import { typeListImages } from "@/http/type"
import { useRouter } from "vue-router"
import { errorNotification } from "@/utils/notification.js"

export default {
    components: {
        PageHeader
    },
    setup() {
        const router = useRouter()
        const goodName = shallowRef('')
        const { list, getBannerList } = useBanner()

        const { list: lossList, getBannerList: lossBannerList } = useBanner(3)

        const { list: typeListRef, getList } = useList(async () => {
            return await typeList()
        })
        const { list: typeList1, getList: getList1 } = useList(async () => {
            return await typeListImages('护肤品类')
        })

        const { list: typeList2, getList: getList2 } = useList(async () => {
            return await typeListImages('彩妆品类')
        })

        const { list: typeList3, getList: getList3 } = useList(async () => {
            return await typeListImages('香水品类')
        })

        const { list: typeList4, getList: getList4 } = useList(async () => {
            return await typeListImages('男士')
        })

        const onSearch = () => {
            const name =  unref(goodName)
            if(!name){
                errorNotification({content:'请输入商品名称'})
                return 
            }
            router.push({
                name: "GoodsList", query: {
                    goodName: name
                }
            })
        }

        onBeforeMount(() => {
            getBannerList()
            getList()
            lossBannerList()
            getList1()
            getList2()
            getList3()
            getList4()
        })

        return {
            images: list,
            typeListRef,
            lossList,
            typeList1,
            typeList2,
            typeList3,
            typeList4,
            goodName,
            onSearch
        }
    },
}
</script>