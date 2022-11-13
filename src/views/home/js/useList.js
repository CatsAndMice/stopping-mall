import { shallowRef } from "vue"
export default (cb) => {
    const list = shallowRef([])
    const getImage = (data = []) => {
        return data.map(d => {
            const { img } = d
            return img
        })
    }
    const getList = async (params) => {
        const { data } = await cb(params)
        list.value = data
    }
    return {
        list,
        getList
    }
}