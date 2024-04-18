import axios from 'axios';

const checkIsLogin = async () => {
    const host = "http://127.0.0.1:8000/api/";
    const endPoint = "authorization";
    const token = window.localStorage.getItem('token');

    if (token) {
        try {
            const res = await axios.get(host + endPoint, { headers: { Authorization: 'Bearer ' + token } });
            if (res.data.status === true) {
                return true
            }
        } catch (err) {
            console.log(err);
        }
    }

    return false;
}

export default checkIsLogin;
