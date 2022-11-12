import { isObject } from "medash"

isObject
export const url = 'http://srryjf.natappfree.cc'

export const getData = (result) => {
    if (isObject(result)) {
        return result.data
    }

    return {}
}