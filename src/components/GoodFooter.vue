<template>
    <a-row style="height:200px;margin-top: 48px;">
        <a-col :span="5">
            <a-list size="small" :bordered="false" :split="false">
                <template #header>
                    支付/配送
                </template>
                <a-list-item>在线支付</a-list-item>
                <a-list-item>配送时间</a-list-item>
            </a-list>
        </a-col>
        <a-col :span="5">
            <a-list size="small" :bordered="false" :split="false">
                <template #header>
                    售后服务
                </template>
                <a-list-item>退换货规定</a-list-item>
                <a-list-item>退换和退款说明</a-list-item>
            </a-list>
        </a-col>
        <a-col :span="5">
            <a-list size="small" :bordered="false" :split="false">
                <template #header>
                    关于我们
                </template>
                <a-list-item>联系我们</a-list-item>
                <a-list-item>隐私政策</a-list-item>
            </a-list>
        </a-col>
        <a-col :span="9">
            <a-list size="small" :bordered="false" :split="false">
                <template #header>
                    网上订购服务热线:021-888888
                </template>
                <template #empty>
                </template>
            </a-list>
        </a-col>
    </a-row>
</template>
<script>
export default {
    name: "GoodFooter",
    install(Vue) {
        Vue.component(this.name, this)
    }
}
</script>