<template>
    <page-header />
    <div style="padding:72px 47px;">
        <div
            style="padding-bottom:  45px;text-align: left;display: flex;justify-content: space-between;align-items: center;">
            <div style="display: flex;">
                <a-image width="327" :preview="false" height="262"
                    src="https://ts1.cn.mm.bing.net/th?id=OIP-C.wc_dCG_KbIKZwMdtD3gL2QHaEt&w=264&h=168&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2" />
                <div style="margin-left:96px">
                    <h3>可丝缎预想</h3>
                    <h3 style="font-size:14px;">MAC POWDER KISS LIPSTICK</h3>
                    <div><span>价格</span><span style="margin-left:34px;font-size: 18px;">￥239</span></div>
                    <div style="margin:50px 0 30px 0"><span>规格</span><span
                            style="margin-left:34px;font-size: 18px;">1套</span></div>
                    <div><span>数量</span><span style="margin-left:34px;font-size: 18px;">1</span></div>
                </div>
            </div>
            <a-button @click="onClick" size="large" style="border-radius: 4px;">删除</a-button>
        </div>
        <div
            style="padding-bottom:  45px;text-align: left;display: flex;justify-content: space-between;align-items: center;">
            <div style="display: flex;">
                <a-image width="327" :preview="false" height="262"
                    src="https://ts1.cn.mm.bing.net/th?id=OIP-C.wc_dCG_KbIKZwMdtD3gL2QHaEt&w=264&h=168&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2" />
                <div style="margin-left:96px">
                    <h3>可丝缎预想</h3>
                    <h3 style="font-size:14px;">MAC POWDER KISS LIPSTICK</h3>
                    <div><span>价格</span><span style="margin-left:34px;font-size: 18px;">￥239</span></div>
                    <div style="margin:50px 0 30px 0"><span>规格</span><span
                            style="margin-left:34px;font-size: 18px;">1套</span></div>
                    <div><span>数量</span><span style="margin-left:34px;font-size: 18px;">1</span></div>
                </div>
            </div>
            <a-button @click="onClick" size="large" style="border-radius: 4px;">删除</a-button>
        </div>
    </div>

</template>
<script>
import PageHeader from "@/components/PageHeader.vue"
export default {
    components: {
        PageHeader,
    },
    setup() {

    },
}
</script>