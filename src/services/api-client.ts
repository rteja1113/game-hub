import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params:{
        key: "d36a9215f7c645858b989d7b8b7e6eb2"
    }
})

