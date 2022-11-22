<template>
    <page-header />
    <div style="padding:72px 47px;">
        <div v-for="l in list" :key="l.id"
            style="padding-bottom:  45px;text-align: left;display: flex;justify-content: space-between;align-items: center;">
            <div style="display: flex;">
                <a-image width="327" :preview="false" height="262" :src="l.img" />
                <div style="margin-left:96px">
                    <h3>{{ l.trade_name }}</h3>
                    <h3 style="font-size:14px;">{{ l.brand }}</h3>
                    <div><span>价格</span><span style="margin-left:34px;font-size: 18px;">￥{{ l.price }}</span></div>
                    <div style="margin:50px 0 30px 0"><span>规格</span><span style="margin-left:34px;font-size: 18px;">{{
                            l.norms+l.unit
                    }}</span></div>
                    <div><span>数量</span><span style="margin-left:34px;font-size: 18px;">{{ l.num }}</span></div>
                </div>
            </div>
            <a-button @click="onDelete(l.id)" size="large" style="border-radius: 4px;">删除</a-button>
        </div>
    </div>
    <div
        style="height:102px;display: flex;align-items: center;justify-content: flex-end;margin:0 47px;border: 1px solid rgba(187, 187, 187, 1);">
        <div style="display:flex;flex-direction: column;text-align: left;margin-right: 156px;">
            <span>已选{{ list.length }}件商品</span>
            <span>总额￥{{ price }}</span>
        </div>
        <a-button style="height:100%;width: 242px;font-size: 20px;" @click="toClearPage">去结算</a-button>
    </div>

    <good-footer />
</template>
<script>
import PageHeader from "@/components/PageHeader.vue"
import { getCarList, deleteGood } from "@/http/getDetail.js"
import useList from "@/views/home/js/useList.js"
import { useStorage } from '@vueuse/core'
import { onBeforeMount, ref, watch } from '@vue/runtime-core'
import { useRouter } from "vue-router"
export default {
    components: {
        PageHeader,
    },
    setup() {
        const router = useRouter()
        const price = ref(0)
        const user = useStorage('user', null, undefined, {
            serializer: {
                read: (v) => v ? JSON.parse(v) : null,
                write: (v) => JSON.stringify(v)
            },
        })
        const { list, getList } = useList(async () => {
            return getCarList({ 'user_id': user.value.id })
        })

        const onDelete = (id) => {
            deleteGood(id, getList)
        }

        const toClearPage = () => {
            router.push({
                name:"ClearPage"
            })
        }

        watch(list, (value) => {
            let totalPrice = 0
            value.forEach(v => {
                const { price = 0, num = 0 } = v
                totalPrice += price * num
            })
            price.value = totalPrice
        })

        onBeforeMount(getList)

        return {
            list,
            onDelete,
            price,
            toClearPage
        }
    },
}
</script>