import { notification } from 'antd'
import axios from 'axios'
import { BASE_URL, TOKEN_CYBERSOFT } from '../constants/common'

export const request = axios.create({
    baseURL: BASE_URL,
    headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
    },
})

request.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        notification.error({
            message: error.response.data.content,
        })
        throw new Error(error)
    }
)
