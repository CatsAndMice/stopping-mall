<template>
    <div style="margin-left:37px;flex-grow: 1;">
        <div style="display:flex;align-items: center;">
            <a-image width="165" :preview="false" height="114"
                src="https://ts1.cn.mm.bing.net/th?id=OIP-C.wc_dCG_KbIKZwMdtD3gL2QHaEt&w=264&h=168&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2" />
            <h3 style="margin:0;margin-left: 62px;font-size: 28px;font-weight: 400;">封楼小王子</h3>
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
                <span style="font-size: 18px;">0单</span>
            </a-col>
            <a-col :span="6"
                style="cursor: pointer;display:flex;flex-direction: column;justify-content: center;align-items: center;">
                <a-image width="98" :preview="false" height="87"
                    src="https://ts1.cn.mm.bing.net/th?id=OIP-C.wc_dCG_KbIKZwMdtD3gL2QHaEt&w=264&h=168&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2" />
                <span style="margin-top:20px;font-size: 18px;">待支付</span>
                <span style="font-size: 18px;">0单</span>
            </a-col>
            <a-col :span="6"
                style="cursor: pointer;display:flex;flex-direction: column;justify-content: center;align-items: center;">
                <a-image width="98" :preview="false" height="87"
                    src="https://ts1.cn.mm.bing.net/th?id=OIP-C.wc_dCG_KbIKZwMdtD3gL2QHaEt&w=264&h=168&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2" />
                <span style="margin-top:20px;font-size: 18px;">待支付</span>
                <span style="font-size: 18px;">0单</span>
            </a-col>
            <a-col :span="6"
                style="cursor: pointer;display:flex;flex-direction: column;justify-content: center;align-items: center;">
                <a-image width="98" :preview="false" height="87"
                    src="https://ts1.cn.mm.bing.net/th?id=OIP-C.wc_dCG_KbIKZwMdtD3gL2QHaEt&w=264&h=168&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2" />
                <span style="margin-top:20px;font-size: 18px;">待支付</span>
                <span style="font-size: 18px;">0单</span>
            </a-col>
        </a-row>
    </div>
</template>
<script>
import { useRouter } from "vue-router"
export default {
    setup() {
        const router = useRouter()
        const onClick = () => {
            router.push({
                name: 'OrderTable'
            })
        }

        return {
            onClick
        }
    },
}
</script>