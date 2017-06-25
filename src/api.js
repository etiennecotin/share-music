/**
 * Created by etienne on 11/05/2017.
 */
import axios from 'axios';

export const HTTP = axios.create({
    baseURL: `https://jsonplaceholder.typicode.com`,
    headers: {
        Authorization: 'Bearer {token}'
    }
})