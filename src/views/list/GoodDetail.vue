<template>
    <page-header />
    <div style="padding:72px 47px;text-align: left;display: flex;">
        <a-image width="327" :preview="false" height="262"
            src="https://ts1.cn.mm.bing.net/th?id=OIP-C.wc_dCG_KbIKZwMdtD3gL2QHaEt&w=264&h=168&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2" />
        <div style="margin-left:96px">
            <h3>可丝缎预想</h3>
            <div><span>价格</span><span style="margin-left:34px">￥239</span></div>
            <div style="margin:50px 0"><span>规格</span><span style="margin-left:34px">1套</span></div>
            <div style="margin-bottom:40px;">
                <a-input-number :style="{
                    width: '160px'
                }" placeholder="Please Enter" :default-value="500" mode="button" />
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
            <a-image width="100%" height="219px" :preview="false"
                src="https://ts1.cn.mm.bing.net/th?id=OIP-C.wc_dCG_KbIKZwMdtD3gL2QHaEt&w=264&h=168&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2" />
        </a-col>
    </a-row>
    <a-row style="padding-left:10%;">
        <a-col :span="22">
            <a-image width="100%" height="219px" :preview="false"
                src="https://ts1.cn.mm.bing.net/th?id=OIP-C.wc_dCG_KbIKZwMdtD3gL2QHaEt&w=264&h=168&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2" />
        </a-col>
    </a-row>
    <a-row style="padding-left:10%;">
        <a-col :span="22">
            <a-image width="100%" height="219px" :preview="false"
                src="https://ts1.cn.mm.bing.net/th?id=OIP-C.wc_dCG_KbIKZwMdtD3gL2QHaEt&w=264&h=168&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2" />
        </a-col>
    </a-row>


</template>
<script>
import PageHeader from "@/components/PageHeader.vue"
import { useRoute ,useRouter} from "vue-router"
export default {
    components: {
        PageHeader
    },
    setup() {
        const router =  useRouter()
        const route = useRoute()
        const { id } = route.query
        const  onClick = ()=>{
            router.push({name:"GoodCar"})
        }

        return {
            onClick
        }
    },
}
</script>