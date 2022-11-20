import { isObject } from "medash"

isObject
export const url = 'http://frwyvv.natappfree.cc'

export const getData = (result) => {
    if (isObject(result)) {
        return result.data
    }

    return {}
}