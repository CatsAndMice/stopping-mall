<template>
    <page-header />
    <div style="padding:72px 47px;text-align: left;display: flex;">
        <a-image width="327" :preview="false" height="262" :src="list.imgs" />
        <div style="margin-left:96px">
            <h3>{{ list.trade_name }}</h3>
            <h3 style="font-size:14px">{{ list.brand }}</h3>
            <div><span>价格</span><span style="margin-left:34px">￥{{ list.price }}</span></div>
            <div style="margin:50px 0"><span>规格</span><span style="margin-left:34px">{{ list.norms+list.unit }}</span></div>
            <div style="margin-bottom:40px;">
                <a-input-number v-model="num" :style="{
                    width: '160px',
                }" placeholder="Please Enter" :default-value="1" min="1" mode="button" />
            </div>
            <a-button type="primary" style="width: 194px;" @click="onClick">加入购物车</a-button>
        </div>
    </div>

    <a-row>
        <a-col :span="3" style="margin-top: 50px;">
            <span style="font-size: 20px;"> 图文详情</span>
        </a-col>
    </a-row>

    <a-row style="padding-left:10%;margin-top: 20px;">
        <a-col :span="22">
            <a-image v-for="img in list.commodity_details" width="100%" :key="img" :preview="false" :src="img" />
        </a-col>
    </a-row>
    <good-footer />
</template>
<script>
import PageHeader from "@/components/PageHeader.vue"
import { useRoute, useRouter } from "vue-router"
import { onBeforeMount, ref } from '@vue/runtime-core'
import { getDetail, addCar } from "@/http/getDetail.js"
import useList from "@/views/home/js/useList.js"
import { useStorage } from '@vueuse/core'

export default {
    components: {
        PageHeader
    },
    setup() {
        const router = useRouter()
        const route = useRoute()
        const { id } = route.query
        const num = ref(1)
        const user = useStorage('user', null, undefined, {
            serializer: {
                read: (v) => v ? JSON.parse(v) : null,
                write: (v) => JSON.stringify(v)
            },
        })
        const { list, getList } = useList(async () => {
            return getDetail(id)
        })

        const onClick = async() => {
          if(!user.value||!user.value.id){
            router.push({ name: "Login" })
            return 
          }
         const isSuccess =   await addCar({
                'good_id': list.value.id,
                num: num.value,
                'user_id':user.value?user.value.id:1
            })
            isSuccess? router.push({ name: "GoodCar" }):null
        }

        onBeforeMount(getList)

        return {
            list,
            onClick,
            num
        }
    },
}
</script>
<style lang="scss" scoped>
::deep{
    .arco-input-wrapper{
        input{
            text-align: center;
        }
    }
}
</style>