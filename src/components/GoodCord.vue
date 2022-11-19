<template>
    <div class="good" @click="openDetail">
        <a-image width="200" :preview="false" height="200" :src="src" />
        <h3 class="title">{{ title }}</h3>
        <div>￥{{ money }}</div>
    </div>
</template>
<script>
import { toRefs } from 'vue'
import { useRouter } from "vue-router"


export default {
    props: {
        src: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: '标题'
        },
        money: {
            type: Number,
            default: 0
        },
        id: {
            type: Number,
            default: 0
        }
    },
    setup(props) {
        const router = useRouter()
        const { id } = toRefs(props)

        const openDetail = () => {
            router.push({
                name: 'GoodDetail',
                query: {
                    id: id.value
                }
            })
        }

        return {
            openDetail
        }
    },
}
</script>
<style lang="scss" scoped>
.good {
    text-align: left;
    margin-bottom: 46px;
}

.title {
    margin: 30px 0 23px 0;
    font-size: 14px;
}
</style>