<template>
    <a-layout>
        <page-header />
        <div style="padding-left:46px;margin-top:75px;display: flex;align-items: flex-start;">
            <div style="text-align: left;">
                <h3 style="margin: 0; height: 48px;color: rgba(16, 16, 16, 1);font-size: 20px;text-align: left;">我的个人信息
                </h3>
                <a-menu :style="{ width: '200px', height: '100%' }" :default-open-keys="['0']"
                    :default-selected-keys="['0_0_0']">
                    <a-menu-item key="0_0_0" data-obj="1">
                        <template #icon>
                            <icon-home />
                        </template>
                        交易管理
                    </a-menu-item>
                    <a-sub-menu key="0">
                        <template #icon>
                            <icon-email />
                        </template>
                        <template #title>账号管理</template>
                        <a-menu-item key="0_0" @click="toServe">隐私服务</a-menu-item>
                    </a-sub-menu>
                    <a-sub-menu key="1">
                        <template #icon>
                            <icon-user />
                        </template>
                        <template #title>联系我们</template>
                        <a-menu-item key="1_0" @click="toAlert">联系我们</a-menu-item>
                    </a-sub-menu>

                    <a-menu-item key="0_0_0_0" @click="onClick">
                        <template #icon>
                            <icon-user />
                        </template>
                        退出登陆
                    </a-menu-item>
                </a-menu>
            </div>
            <router-view></router-view>
        </div>
    </a-layout>
    <good-footer />
</template>
<script>
import PageHeader from "@/components/PageHeader.vue"
import { useStorage } from '@vueuse/core'
import { useRouter } from "vue-router"
export default {
    components: {
        PageHeader
    },
    setup() {
        const user = useStorage('user', null, undefined, {
            serializer: {
                read: (v) => v ? JSON.parse(v) : null,
                write: (v) => JSON.stringify(v)
            },
        })
        const router = useRouter()
        const onClick = () => {
            user.value = null
            router.push({
                name: 'Home'
            })
        }
        const toServe = () => {
            window.open('https://www.baidu.com/')
        }
        const toAlert = () => {
            window.alert('电话号码:120')
        }
        return {
            onClick,
            toServe,
            toAlert
        }
    },
}
</script>
<style lang="scss" scoped>
::deep {
    .arco-menu-collapse-button {
        display: none;
    }
}
</style>