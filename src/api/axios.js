import axios from "axios";

const URL = 'http://localhost:5000/api/user';

export default axios.create({
    baseURL: URL
});

export const login = async (data) => {
    try{
        const result = await axios.post(`${URL}/signup`, data, {
            withCredentials: true,
        });
        if(result.status === 200){
            return result;
        }
    }
    catch(e){
        return e.response.data;
    }

}

