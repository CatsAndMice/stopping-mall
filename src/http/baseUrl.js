import { isObject } from "medash"

isObject
export const url = 'http://gs4v23.natappfree.cc'

export const getData = (result) => {
    if (isObject(result)) {
        return result.data
    }

    return {}
}