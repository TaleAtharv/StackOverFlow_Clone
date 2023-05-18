import * as api from '../api'
import { setCurrentUser } from './currentUser'

export const signup = (authData, navigate) => async (disptach) => {
    try{
        const {data} = await api.signUp(authData)
        disptach({type: 'AUTH', data})
        disptach(setCurrentUser(JSON.parse(localStorage.getItem('Profile')) ))
        navigate('/')
    }catch(error){
     console.log(error)
    }
}

export const login = (authData, navigate) => async (disptach) => {
    try{
        const {data} = await api.logIn(authData)
        disptach({type: 'AUTH', data})
        disptach(setCurrentUser(JSON.parse(localStorage.getItem('Profile')) ))
        navigate('/')
    }catch(error){
     console.log(error)
    }
}


export const loginOtp = (authData, navigate) => async (disptach) => {
    try{
        const {data} = await api.logInOtp(authData)
         disptach({type: 'AUTH', data})
        disptach(setCurrentUser(JSON.parse(localStorage.getItem('Profile')) ))
        navigate('../')
    }catch(error){
     console.log(error)
    }
}

