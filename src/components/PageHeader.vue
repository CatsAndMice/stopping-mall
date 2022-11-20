<template>
    <a-layout-header style="height: 59px;">
        <a-page-header :show-back="false" class="page-header" :style="{
            background: 'var(--color-bg-2)',
            height: '59px',
            border: '1px solid rgba(187, 187, 187, 1)'
        }">
            <template #title>
                <span style="color: rgba(16, 16, 16, 1);font-size: 14px;font-weight: 400;">欢迎来到XXX</span>
            </template>

            <template v-if="isShowExtra" #extra>
                <a-space size="mini">
                    <template v-if="user">
                        <a-button type="text" size="mini" style="color:rgba(16, 16, 16, 1);margin-left: 25px;">
                            {{ user.no }}
                        </a-button>
                    </template>
                    <template v-else>
                        <a-button type="text" size="mini" style="color:rgba(16, 16, 16, 1);margin-left: 25px;"
                            @click="onLogin">请登陆
                        </a-button>
                        <a-divider direction="vertical" margin="2px" />
                        <a-button type="text" size="mini" style="color:rgba(16, 16, 16, 1);" @click="onRegister">请注册
                        </a-button>
                    </template>

                </a-space>
                <a-space size="mini">
                    <a-button type="text" size="mini" style="color:rgba(16, 16, 16, 1);" @click="toUserCenter" v-show="user">个人中心</a-button>
                </a-space>
            </template>
        </a-page-header>
    </a-layout-header>
</template>
<script>
import { useRouter } from "vue-router"
import { useStorage } from '@vueuse/core'
export default {
    props: {
        isShowExtra: {
            type: Boolean,
            default: true
        }
    },
    setup() {
        const router = useRouter()
        const user = useStorage('user', null, undefined, {
            serializer: {
                read: (v) => v ? JSON.parse(v) : null,
                write: (v) => JSON.stringify(v)
            },
        })
        const onLogin = () => {
            router.push({
                name: "Login"
            })
        }

        const onRegister = () => {
            router.push({
                name: "Register"
            })
        }

        const toUserCenter = ()=>{
            router.push({
                name: "OrderData"
            })
        }

        return {
            onLogin,
            onRegister,
            user,
            toUserCenter
        }
    },
}
</script>
<style lang="scss" scoped>
.page-header {
    ::v-deep {
        .arco-page-header-extra {
            flex-grow: 1;
            display: flex;
            justify-content: space-between;
        }
    }
}
</style>