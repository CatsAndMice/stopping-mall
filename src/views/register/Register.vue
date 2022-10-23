<template>
    <page-header :is-show-extra="false" />
    <div class="register-view">
        <div class="register-contain">
            <a-form :model="form" style="width: 300px;" @submit="handleSubmit">
                <a-form-item field="name" label="Username">
                    <template #label>
                        <icon-user />
                    </template>
                    <a-input v-model="form.name" placeholder="请输入账号名" style="width: 200px;" />
                </a-form-item>
                <a-form-item field="password" label="Post">
                    <template #label>
                        <icon-lock />
                    </template>
                    <a-input v-model="form.password" placeholder="请输入密码" style="width: 200px;" />
                </a-form-item>
                <a-form-item>
                    <a-button html-type="submit" type="primary" long style="width: 200px;">登陆</a-button>
                </a-form-item>
                <a-form-item field="isRead">
                    <a-checkbox v-model="form.isRead">
                        阅读并同意xx隐私协议
                    </a-checkbox>
                </a-form-item>
            </a-form>
        </div>
    </div>
</template>
<script>
import PageHeader from "@/components/PageHeader.vue"
import { reactive } from "vue"
import checkLoginInfo from "@/views/login/js/checkLoginInfo.js"
import { successNotification } from "@/utils/notification.js"

export default {
    components: {
        PageHeader
    },
    setup() {
        const form = reactive({
            name: '',
            password: '',
            isRead: false,
        })
        const handleSubmit = (data) => {
            console.log(data)
            if (checkLoginInfo(data.values, '注册失败')) {
                successNotification({ content: '注册成功' })
            }
        }

        return {
            form,
            handleSubmit
        }
    },
}
</script>
<style lang="scss" scoped>
.register-view {
    height: calc(100vh - 59px);
    background-size: cover;
    background-image: url(https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp);
    position: relative;

    .register-contain {
        position: absolute;
        border-radius: 4px;
        right: 58px;
        top: 236px;
        ;
        width: 477px;
        height: 391px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(255, 255, 255, 1);
        text-align: center;
        border: 1px solid rgba(187, 187, 187, 1);
    }
}
</style>