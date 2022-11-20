import axios from "axios"
import { url, getData } from "./baseUrl"

export const getDetail = async (id) => {
    const result = await axios.get(url + `/api/queryGoodsDetail?id=${id}`)
    return getData(result)
}

export const addCar = async (params) => {
    const result = await axios.post(url + `/api/addCart`, params)
    const r = getData(result)
    return r.code === 0
}

export const getCarList = async (params) => {
    const result = await axios.post(url + '/api/queryCartList', params)
    return getData(result)
}

export const deleteGood = async (id, cb) => {
    const result = await axios.get(url + `/api/deleteCartBy?id=${id}`)
    const r = getData(result)
    if (r.code === 0) {
        cb()
    }
}

export const getOrderGoodList = async (id) => {
    const result = await axios.get(url + `/api/queryMyOrder?user_id=${id}`)
    return getData(result)
}


export const getOrderTable = async (id) => {
    const result = await axios.post(url + `/api/queryListOrder`, {
        'user_id': id
    })
    return getData(result)
}

export const addOrder = async (params, cb) => {
    const result = await axios.post(url + `/api/addOrder`, params)
    const r = getData(result)
    if (r.code === 0) {
        cb()
    }
}