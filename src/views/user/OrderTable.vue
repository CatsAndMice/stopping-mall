<template>
    <div style="margin-left:37px;flex-grow: 1;padding-right:42px;">
        <a-table :data="list" :bordered="{wrapper: true, cell: true}" >
            <template #columns>
                <a-table-column title="订单号">
                    <template #cell="{ record }">
                        {{ record.id }}
                    </template>
                </a-table-column>
                <a-table-column title="下单时间">
                    <template #cell="{ record }">
                        {{ record.order_time }}
                    </template>
                </a-table-column>
                <a-table-column title="付款金额">
                    <template #cell="{ record }">
                        {{ record.payment_amount }}
                    </template>
                </a-table-column>
                <a-table-column title="收款人">
                    <template #cell="{ record }">
                        {{ record.user_no }}
                    </template>
                </a-table-column>
                <a-table-column title="付款状态">
                    <template #cell="{ record }">
                        {{ getStutas(record.state) }}
                    </template>
                </a-table-column>
                <a-table-column title="配送方式">
                    <template #cell="{ record }">
                        {{ record.delivery_method }}
                    </template>
                </a-table-column>
                <a-table-column title="收货地址">
                    <template #cell="{ record }">
                        {{ record.address_id }}
                    </template>
                </a-table-column>
                <a-table-column title="备注">
                    <template #cell="{ record }">
                        {{ record.remarks }}
                    </template>
                </a-table-column>
                <a-table-column title="操作">
                    <template #cell="{ record }">
                        <a-button v-show="record.state == '2'" type="primary" @click="onClick(record.id)">收货</a-button>
                    </template>
                </a-table-column>
            </template>
        </a-table>

    </div>

</template>
<script>
import { getOrderGoodList, getOrderTable,update } from "@/http/getDetail.js"
import { onBeforeMount } from 'vue'
import { useStorage } from '@vueuse/core'
import useList from "@/views/home/js/useList.js"
export default {
    setup() {
        const user = useStorage('user', null, undefined, {
            serializer: {
                read: (v) => v ? JSON.parse(v) : null,
                write: (v) => JSON.stringify(v)
            },
        })
        const { list, getList } = useList(async () => {
            return await getOrderTable(user.value.id)
        })

        const getStutas = (state) => {
            switch (state) {
                case '1':
                    return '已付款';
                case '2':
                    return '发货';
                default:
                    return '收货';
            }
        }

        const onClick = (id)=>{
            update({
                id,
                state:'3'
            },getList)
        }

        onBeforeMount(getList)
        return {
            list,
            getStutas,
            onClick
        }
    },
}
</script>