import axios from "axios";
import { API } from "../config";
import { isAuthenticated } from "../pages/auth";
import{
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_FAIL,
    MY_ORDERS_REQUEST,
    MY_ORDERS_SUCCESS,
    MY_ORDERS_FAIL,
    CLEAR_ERRORS
} from '../constants/orderConstants'

export const createOrder=(order)=>async(dispatch,getState)=>{
    const {token}=isAuthenticated()
    try{
        dispatch({type:CREATE_ORDER_REQUEST})

        const config={
            headers:{
                'Content_Type':'application/json',
                Authorization:`Bearer ${token}`
            }
        }
         const {data}= await axios.post(`${API}/postorder`,order,config)
         dispatch({
             type:CREATE_ORDER_SUCCESS,
             payload:data
         })

    }
    catch(error){
        dispatch({
            type:CREATE_ORDER_FAIL,
            payload:error.error
        })
    }
}

export const myOrders=()=>async(dispatch)=>{
    const{user,token}=isAuthenticated()
    try{
        dispatch({type:MY_ORDERS_REQUEST})
        const config={
            headers:{
                Authorization:`Bearer ${token}`
            }
        }
        const{data}=await axios.get(`${API}/userorderlist/${user._id}`,config)
        dispatch({
            type:MY_ORDERS_SUCCESS,
            payload:data

        })

    }
    catch(error){
        dispatch({
            type:MY_ORDERS_FAIL,
            payload:error.error
        })
    }
}

//clear Errors
export const clearErrors=()=>async(dispatch)=>{
    dispatch({
        type:CLEAR_ERRORS
    })
}