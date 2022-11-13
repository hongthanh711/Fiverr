import { request } from '../configs/axios'

const fetchJobListApi = (tenCongViec) => {
    return request({
        url: `/cong-viec/lay-danh-sach-cong-viec-theo-ten/${tenCongViec}`,
        method: 'GET',
    })
}

const fetchMenuJobApi = () => {
    return request({
        url: '/cong-viec/lay-menu-loai-cong-viec',
        method: 'GET',
    })
}

export { fetchJobListApi, fetchMenuJobApi }
