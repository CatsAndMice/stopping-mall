import { isObject } from "medash"

export const url = 'http://qtwqm8.natappfree.cc'

export const getData = (result) => {
    if (isObject(result)) {
        return result.data
    }

    return {}
}