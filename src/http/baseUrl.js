import { isObject } from "medash"

isObject
export const url = 'http://z3n2x5.natappfree.cc'

export const getData = (result) => {
    if (isObject(result)) {
        return result.data
    }

    return {}
}