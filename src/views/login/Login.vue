<template>
    <page-header :is-show-extra="false" />
    <div class="login-view">
        <div class="login-contain">
            <a-form :model="form" style="width: 300px;"  @submit="handleSubmit">
                <a-form-item field="name" label="Username">
                    <template #label>
                        <icon-user />
                    </template>
                    <a-input v-model="form.name" placeholder="请输入账号名" style="width: 200px;"/>
                </a-form-item>
                <a-form-item field="post" label="Post">
                    <template #label>标签</template>
                    <a-input v-model="form.post" placeholder="请输入密码" style="width: 200px;"/>
                </a-form-item>
                <a-form-item>
                    <a-button html-type="submit" type="primary" long  style="width: 270px;">登陆</a-button>
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
        }

        return {
            form,
            handleSubmit
        }
    },
}
</script>
<style lang="scss" scoped>
.login-view {
    height: calc(100vh - 59px);
    background-size: cover;
    background-image: url(https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp);
position: relative;
    .login-contain {
        position: absolute;
        border-radius: 4px;
        right: 58px;
        top: 236px;;
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