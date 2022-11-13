<template>
    <page-header />

    <div class="list">
        <good-cord v-for="type in typeListRef" :src="type.img" :key="type.id" :title="type.trade_name"
            :money="type.price" />
        <good-cord
            src="https://ts1.cn.mm.bing.net/th?id=OIP-C.wc_dCG_KbIKZwMdtD3gL2QHaEt&w=264&h=168&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2"
            title="商品" :money="200" />
        <good-cord
            src="https://ts1.cn.mm.bing.net/th?id=OIP-C.wc_dCG_KbIKZwMdtD3gL2QHaEt&w=264&h=168&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2"
            title="商品" :money="200" />
        <good-cord
            src="https://ts1.cn.mm.bing.net/th?id=OIP-C.wc_dCG_KbIKZwMdtD3gL2QHaEt&w=264&h=168&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2"
            title="商品" :money="200" />
        <good-cord
            src="https://ts1.cn.mm.bing.net/th?id=OIP-C.wc_dCG_KbIKZwMdtD3gL2QHaEt&w=264&h=168&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2"
            title="商品" :money="200" />
        <good-cord
            src="https://ts1.cn.mm.bing.net/th?id=OIP-C.wc_dCG_KbIKZwMdtD3gL2QHaEt&w=264&h=168&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2"
            title="商品" :money="200" />
        <good-cord
            src="https://ts1.cn.mm.bing.net/th?id=OIP-C.wc_dCG_KbIKZwMdtD3gL2QHaEt&w=264&h=168&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2"
            title="商品" :money="200" />
    </div>
</template>
<script>
import { getListByName } from "@/http/type"
import useList from "@/views/home/js/useList.js"
import { useRoute } from "vue-router"
import { onBeforeMount } from '@vue/runtime-core'
import GoodCord from "@/components/GoodCord.vue"
import PageHeader from "@/components/PageHeader.vue"

export default {
    components: {
        PageHeader,
        GoodCord
    },
    setup() {
        const route = useRoute()
        const params = {
            page: 1,
            limit: 100
        }
        const { list: typeListRef, getList } = useList(async (params) => {
            return await getListByName(params)
        })

        onBeforeMount(() => {
            const { query } = route
            params['trade_name'] = query.goodName
            getList(params)
        })

        return {
            typeListRef
        }

    },
}
</script>
<style lang="scss" scoped>
.list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    padding: 0 27px;
    padding-top: 47px;
}
</style>