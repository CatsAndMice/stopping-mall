import { shallowRef } from "vue"
export default (cb) => {
    const list = shallowRef([])
    const getImage = (data = []) => {
        return data.map(d => {
            const { img } = d
            return img
        })
    }
    const getList = async () => {
        const { data } = await cb()
        list.value = data
    }
    return {
        list,
        getList
    }
}