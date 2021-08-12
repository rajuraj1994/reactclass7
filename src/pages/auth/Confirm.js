import React,{useState,useEffect} from 'react'
import { API } from '../../config'

const Confirm = ({match}) => {
    const [values,setValues]=useState({
        error:'',
        success:false
    })
    const{error,success}=values

    useEffect(()=>{
        const token=match.params.token
        fetch(`${API}/confirmation/${token}`,{
            method:"POST",
            headers:{
                Accept:'application/json',
                "Content-type":"application/json"
            }
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.error){
                setValues({...values,error:data.error,success:false})
            }
            else{
                setValues({...values,error:'',success:true})
            }
        })
        .catch(err=>console.log(err))
    },[match.params.token,values])
   
     //to show error msg
  const showError=()=>(
    <div className="alert alert-danger" style={{display:error?'':'none'}}>
        {error}
    </div>
)

//to show success msg
const showSuccess=()=>(
  <div className="alert alert-info" style={{display:success?'':'none'}}>
   your account has been verified
</div>

)

    return (
        <>
        {showError()}
        {showSuccess()}

            
        </>
    )
}

export default Confirm
