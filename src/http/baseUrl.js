import { isObject } from "medash"

isObject
export const url = 'http://e75g3a.natappfree.cc'

export const getData = (result) => {
    if (isObject(result)) {
        return result.data
    }

    return {}
}