<template>
    <div style="margin-left:37px;flex-grow: 1;">
        <div style="display:flex;align-items: center;">
            <a-image width="165" :preview="false" height="114"
                src="https://ts1.cn.mm.bing.net/th?id=OIP-C.wc_dCG_KbIKZwMdtD3gL2QHaEt&w=264&h=168&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2" />
            <h3 style="margin:0;margin-left: 62px;font-size: 28px;font-weight: 400;">{{ user ? user.no : '封楼小王子' }}</h3>
        </div>

        <a-row style="margin-top: 95px;">
            <a-col style="text-align: left;font-size: 20px;">
                我的订单
            </a-col>
        </a-row>
        <a-row style="margin-top:20px">
            <a-col :span="6" @click="onClick"
                style="cursor: pointer;display:flex;flex-direction: column;justify-content: center;align-items: center;">
                <a-image width="98" :preview="false" height="87"
                    src="https://ts1.cn.mm.bing.net/th?id=OIP-C.wc_dCG_KbIKZwMdtD3gL2QHaEt&w=264&h=168&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2" />
                <span style="margin-top:20px;font-size: 18px;">待支付</span>
                <span style="font-size: 18px;">{{ list.unpaid ? list.unpaid : 0 }}单</span>
            </a-col>
            <a-col :span="6" @click="onClick"
                style="cursor: pointer;display:flex;flex-direction: column;justify-content: center;align-items: center;">
                <a-image width="98" :preview="false" height="87"
                    src="https://ts1.cn.mm.bing.net/th?id=OIP-C.wc_dCG_KbIKZwMdtD3gL2QHaEt&w=264&h=168&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2" />
                <span style="margin-top:20px;font-size: 18px;">已支付</span>
                <span style="font-size: 18px;">{{ list.paid ? list.paid : 0 }}单</span>
            </a-col>
            <a-col :span="6" @click="onClick"
                style="cursor: pointer;display:flex;flex-direction: column;justify-content: center;align-items: center;">
                <a-image width="98" :preview="false" height="87"
                    src="https://ts1.cn.mm.bing.net/th?id=OIP-C.wc_dCG_KbIKZwMdtD3gL2QHaEt&w=264&h=168&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2" />
                <span style="margin-top:20px;font-size: 18px;">已发货</span>
                <span style="font-size: 18px;">{{ list.unshipped ? list.unshipped : 0 }}单</span>
            </a-col>
            <a-col :span="6"
                style="cursor: pointer;display:flex;flex-direction: column;justify-content: center;align-items: center;">
                <a-image width="98" :preview="false" height="87"
                    src="https://ts1.cn.mm.bing.net/th?id=OIP-C.wc_dCG_KbIKZwMdtD3gL2QHaEt&w=264&h=168&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2" />
                <span style="margin-top:20px;font-size: 18px;">已完成</span>
                <span style="font-size: 18px;">{{ list.completed ? list.completed : 0 }}单</span>
            </a-col>

        </a-row>
    </div>
</template>
<script>
import { getOrderGoodList } from "@/http/getDetail.js"
import { useStorage } from '@vueuse/core'
import useList from "@/views/home/js/useList.js"
import { useRouter } from "vue-router"
import { onBeforeMount } from '@vue/runtime-core'
export default {
    setup() {
        const router = useRouter()
        const onClick = () => {
            router.push({
                name: 'OrderTable'
            })
        }
        const user = useStorage('user', null, undefined, {
            serializer: {
                read: (v) => v ? JSON.parse(v) : null,
                write: (v) => JSON.stringify(v)
            },
        })

        const { list, getList } = useList(async () => {
            return await getOrderGoodList(user.value.id)
        })

        onBeforeMount(getList)

        return {
            onClick,
            user,
            list
        }
    },
}
</script>