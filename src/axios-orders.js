import Axios from "axios";

const axiosInstance = Axios.create({
    baseURL: 'https://react-burer-builder.firebaseio.com/'
})

export default axiosInstance