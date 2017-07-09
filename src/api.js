/**
 * Created by etienne on 11/05/2017.
 */
import axios from 'axios';

export const HTTP = axios.create({
    baseURL: `http://localhost/laravel/laravel5/public/api/v1/`,
    headers: {
        Authorization: 'Bearer {token}'
    }
})