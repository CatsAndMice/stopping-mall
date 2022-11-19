<template>
    <div style="margin-left:37px;flex-grow: 1;padding-right:42px;">
        <a-table :data="data">
            <template #columns>
                <a-table-column title="订单号">
                    <template #cell="{ record }">
                        {{ record.name }}
                    </template>
                </a-table-column>
                <a-table-column title="下单时间">
                    <template #cell="{ record }">
                        {{ record.name }}
                    </template>
                </a-table-column>
                <a-table-column title="付款金额">
                    <template #cell="{ record }">
                        {{ record.name }}
                    </template>
                </a-table-column>
                <a-table-column title="收款人">
                    <template #cell="{ record }">
                        {{ record.name }}
                    </template>
                </a-table-column>
                <a-table-column title="付款状态">
                    <template #cell="{ record }">
                        {{ record.name }}
                    </template>
                </a-table-column>
                <a-table-column title="配送方式">
                    <template #cell="{ record }">
                        {{ record.name }}
                    </template>
                </a-table-column>
                <a-table-column title="收货地址">
                    <template #cell="{ record }">
                        {{ record.name }}
                    </template>
                </a-table-column>
                <a-table-column title="备注">
                    <template #cell="{ record }">
                        {{ record.name }}
                    </template>
                </a-table-column>

            </template>
        </a-table>

    </div>

</template>
<script>
export default {
    setup() {
        const data = [{
            name: '你好',
            age: 20
        }]

        return {
            data
        }
    },
}
</script>