import { API } from "../../config";

//for signup
export const signup=(user)=>{
    return fetch(`${API}/register`,{
        method:"POST",
        headers:{
            Accept:'application/json',
            "Content-type":"application/json"
        },
        body:JSON.stringify(user)
    })
    .then(response=>{
        return response.json()
    })
    .catch(err=>{
        console.log(err)
    })
}