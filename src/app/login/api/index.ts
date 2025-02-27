import axiosInstance from "@/lib/axios";

// http://185.8.173.51:90/api/v1/Authentication/Login
const  login=async(username:string, password:string)=>{
    console.log(username, password)
    let body={
        userName: 'vendor3',
        password: 'passW0rd!',
        ipAddress: "string",
        updateLogInCount: true
      }
    return await  axiosInstance.post('/api/v1/Authentication/Login',body)
    }


    export {
        login
    }