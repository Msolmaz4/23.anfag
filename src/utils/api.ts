//butun api istekeri burdan yapacagiz

import axios from 'axios'

export default axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
})