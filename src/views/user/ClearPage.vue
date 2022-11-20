<template>
    <page-header />
    <div style="padding:72px 47px;">
        <a-row style="margin-bottom: 35px;">
            <a-col
                style="text-align: left;font-size: 20px;display: flex;align-items: center;justify-content: space-between;">
                <span>收货地址</span>
                <a-button size="small" @click="handleClick">
                    <template #icon>
                        <icon-plus />
                    </template>
                    添加地址
                </a-button>
            </a-col>
        </a-row>

        <a-row style="margin-bottom: 35px;margin-left: 50px;">
            <a-col style="text-align: left;font-size: 20px;font-size: 18px;">
                {{ address ? address : '暂无收货地址' }}
            </a-col>
        </a-row>

        <a-row style="margin-bottom: 35px;">
            <a-col style="text-align: left;font-size: 20px;">
                支付方式
            </a-col>
        </a-row>


        <a-row style="margin-bottom: 35px;">
            <a-col style="text-align: left;font-size: 20px;">
                <a-radio-group v-model="checkedValue" type="button" style="background-color: transparent;">
                    <a-radio value="1" style="background-color: transparent;margin-right:79px">
                        <icon-wechatpay :size="98" />
                    </a-radio>
                    <a-radio value="2" style="background-color: transparent;">
                        <icon-alipay-circle :size="98" />
                    </a-radio>
                </a-radio-group>
            </a-col>
        </a-row>


        <a-row style="margin-bottom: 35px;">
            <a-col style="text-align: left;font-size: 20px;">
                我的订单
            </a-col>
        </a-row>

        <div v-for="l in list" :key="l.id"
            style="padding-bottom:  45px;text-align: left;display: flex;justify-content: space-between;align-items: center;">
            <div style="display: flex;">
                <a-image width="327" :preview="false" height="262" :src="l.img" />
                <div style="margin-left:96px">
                    <h3>{{ l.trade_name }}</h3>
                    <h3 style="font-size:14px;">{{ l.brand }}</h3>
                    <div><span>价格</span><span style="margin-left:34px;font-size: 18px;">￥{{ l.price }}</span></div>
                    <div style="margin:50px 0 30px 0"><span>规格</span><span style="margin-left:34px;font-size: 18px;">{{
                            l.norms
                    }}套</span></div>
                    <div><span>数量</span><span style="margin-left:34px;font-size: 18px;">{{ l.num }}</span></div>
                </div>
            </div>
        </div>
    </div>
    <div
        style="height:102px;display: flex;align-items: center;justify-content: flex-end;margin:0 47px;border: 1px solid rgba(187, 187, 187, 1);">
        <div style="display:flex;flex-direction: column;text-align: left;margin-right: 156px;">
            <span>已选{{ list.length }}件商品</span>
            <span>总额￥{{ price }}</span>
        </div>
        <a-button style="height:100%;width: 242px;font-size: 20px;" @click="onPlay">立即结算</a-button>
    </div>


    <a-modal v-model:visible="visible" :on-before-ok="handleOk" ok-text="保存并使用">
        <template #title>
            添加收货地址
        </template>
        <a-form :model="form">
            <a-form-item required field="name" label="收货人">
                <a-input v-model="form.name" placeholder="请输入收货人" />
            </a-form-item>
            <a-form-item required field="address" label="详情地址">
                <a-input v-model="form.address" placeholder="请输入详情地址" />
            </a-form-item>
            <a-form-item required field="tel" label="手机号码">
                <a-input v-model="form.tel" placeholder="请输入手机号码" />
            </a-form-item>
            <a-form-item required field="email" label="邮政编码">
                <a-input v-model="form.email" placeholder="邮政编码" />
            </a-form-item>
        </a-form>
    </a-modal>



    <good-footer />
</template>
<script>
import PageHeader from "@/components/PageHeader.vue"
import { getCarList, addOrder } from "@/http/getDetail.js"
import useList from "@/views/home/js/useList.js"
import { useStorage } from '@vueuse/core'
import { onBeforeMount, ref, watch, reactive, toRaw } from '@vue/runtime-core'
import { useRouter } from "vue-router"
import { isEmpty } from "medash"
import { errorNotification } from "@/utils/notification.js"
import { successNotification } from "@/utils/notification.js"

export default {
    components: {
        PageHeader,
    },
    setup() {
        const router = useRouter()
        const price = ref(0)
        const visible = ref(false);
        const checkedValue = ref('1')
        const handleClick = () => {
            visible.value = true;
        };

        const user = useStorage('user', null, undefined, {
            serializer: {
                read: (v) => v ? JSON.parse(v) : null,
                write: (v) => JSON.stringify(v)
            },
        })


        const info = useStorage('info', '', undefined, {
            serializer: {
                read: (v) => v ? JSON.parse(v) : null,
                write: (v) => JSON.stringify(v)
            },
        })


        const obj = useStorage('obj', null, undefined, {
            serializer: {
                read: (v) => v ? JSON.parse(v) : null,
                write: (v) => JSON.stringify(v)
            },
        })

        const address = ref(info.value)
        const good_id = ref(0)
        const { list, getList } = useList(async () => {
            return getCarList({ 'user_id': user.value.id })
        })

        const form = reactive({
            name: '',
            address: '',
            tel: '',
            email: ''
        })

        const handleOk = () => {
            const data = toRaw(form)
            if (isEmpty(data.name)) {
                errorNotification({ content: '请输入收货人' })
                return false
            }
            if (isEmpty(data.address)) {
                errorNotification({ content: '请输入收货地址' })
                return false
            }
            if (isEmpty(data.tel)) {
                errorNotification({ content: '请输入电话号码' })
                return false
            }

            if (isEmpty(data.email)) {
                errorNotification({ content: '请输入邮政编号' })
                return false
            }
            obj.value = data
            address.value = `${data.name} | ${data.address} | ${data.tel} | ${data.email}`
            info.value = `${data.name} | ${data.address} | ${data.tel} | ${data.email}`
            data.name = ''
            data.address = ''
            data.tel = ''
            data.email = ''
            return true
        }

        const onPlay = () => {
            if (!obj.value) {
                errorNotification({ content: '请添加邮政编码' })
                return
            }
            addOrder({
                payment_amount: price.value,
                user_id: user.value.id,
                address_id: info.value,
                pay_status: checkedValue.value === '1' ? '微信' : '支付宝',
                delivery_method: '快递',
                remarks: "无",
                goods_id:good_id.value
            }, () => {
                successNotification({ title: '订单成功' })
                router.push({
                    name:'OrderTable'
                })
            })
        }

        watch(list, (value) => {
            let totalPrice = 0
            let ids = []
            value.forEach(v => {
                const { price = 0, num = 0, good_id } = v
                totalPrice += price * num
                ids.push(good_id)
            })
            price.value = totalPrice
            good_id.value = ids.join(',')
        })

        onBeforeMount(getList)

        return {
            list,
            price,
            onPlay,
            visible,
            handleClick,
            form,
            handleOk,
            info,
            checkedValue,
            address
        }
    },
}
</script>