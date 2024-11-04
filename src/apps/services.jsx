import { AxiosClient } from "./Client"

export const DoGet = async ({ url }) => {
    try {
        return await AxiosClient.get(url)        
    } catch (error) {
        return(error)
    }
}

export const DoPost = async ({ url, data }) => {
    try {
        return await AxiosClient.post(url, data)        
    } catch (error) {
        return error
    }
}
