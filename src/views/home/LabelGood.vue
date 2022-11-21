<template>
    <a-row style="margin-top: 58px;">
        <a-col :span="3">
            {{type.name}}
        </a-col>
    </a-row>

    <a-row>
        <a-col :span="22" style="padding-left:4%;margin-top: 50px;">
            <div style="display:flex;flex-wrap: wrap;">
                <a-image v-for="type in typeList3" :preview="false" :key="type.id" style="margin-right:43px;"
                    width="288" height="183" :src="type.img" @click="toGoodDetail(type.id)" />
            </div>
        </a-col>
    </a-row>
</template>
<script>
import useList from "@/views/home/js/useList.js"
import { typeListImages } from "@/http/type"
import { useRouter } from "vue-router"
import { onBeforeMount, toRefs } from 'vue'

export default {
    props: {
        type: {
            type: Object,
            default: () => ({})
        }
    },
    setup(props) {
        const router = useRouter()
        const {type} = toRefs(props)
        const toGoodDetail = (id) => {
            router.push({
                name: 'GoodDetail',
                query: {
                    id
                }
            })
        }
        const { list: typeList3, getList: getList3 } = useList(async () => {
            return await typeListImages(type.value.name)
        })

        onBeforeMount(getList3)
        return {
            typeList3,
            toGoodDetail
        }
    },
}
</script>