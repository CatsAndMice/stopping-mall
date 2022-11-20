<template>
    <page-header />
    <div class="list" style="min-height:600px">
        <good-cord v-for="type in typeListRef" :src="type.img" :id="type.id" :key="type.id" :title="type.trade_name"
            :money="type.price" />
    </div>
    
    <div style="display:flex;justify-content: center;">
        <a-pagination :total="200" @change="onChange" />
    </div>

    <good-footer />
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

        const onChange = (page) => {
            params.page = page
            getList(params)
        }

        onBeforeMount(() => {
            const { query } = route
            params['trade_name'] = query.goodName
            getList(params)
        })

        return {
            typeListRef,
            onChange
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