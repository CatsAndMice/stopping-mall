import { getBanner } from "@/http/queryListBanner"
import { shallowRef } from "vue"
export default (num) => {
    const list = shallowRef([])

    const getBannerList = async () => {
        const { data } = await getBanner(num)
        list.value = data
    }
    return {
        list,
        getBannerList
    }
}