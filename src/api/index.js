import axios from 'axios';

async function api(type, payload) {
    switch (type) {
        case "SIGNUP":
            const { data } = await axios.post('http://localhost:6001/signup', payload)
            return data;

        default:
            break;
    }

}

export default api;