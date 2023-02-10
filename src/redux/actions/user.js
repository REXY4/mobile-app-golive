
import { Api } from '../../config/api';
import {store} from '../stores';

const getAll = ()=>async(dispatch)=>{
    const token = store.getState().auth.token;
    try {
        const response = await Api({
            method : 'GET',
            url : '/user',
            headers : {
                'Content-Type' : 'application/json',
                Authorization : `Bearer ${token}`,
            },
            data :null,
        });
        if (response.data.statusCode === 200){
            dispatch({
                type : 'GET_USER',
                payload : response.data.data,
            });
        }
    } catch (error) {
        console.log(error);
    }
};



const getBy = (id, navigation)=>async(dispatch)=>{
    const token = store.getState().auth.token;
    try {
        const response = await Api({
            method : 'GET',
            url : `/user/${id}`,
            headers : {
                'Content-Type' : 'application/json',
                Authorization : `Bearer ${token}`,
            },
            data :null,
        });
        if (response.data.statusCode === 200){
            navigation.navigate('DetailUser');
            dispatch({
                type : 'GET_USER_DETAIL',
                payload : response.data.data,
            });
        }
    } catch (error) {
        console.log(error);
    }
};


const getByEdit = (id, navigation, getOne)=>async(dispatch)=>{
    const token = store.getState().auth.token;
    try {
        const response = await Api({
            method : 'GET',
            url : `/user/${store.getState().auth.users.id}`,
            headers : {
                'Content-Type' : 'application/json',
                Authorization : `Bearer ${token}`,
            },
            data :null,
        });
        console.log(response.data.data);
        if (response.data.statusCode === 200){
            dispatch({
                type : 'GET_USER_DETAIL',
                payload : response.data.data,
            });

             navigation.navigate('EditScreen');
        }
    } catch (error) {
        console.log(error);
    }
};




const editData = (data, navigation,getOne)=>async(dispatch)=>{
    const token = store.getState().auth.token;
    try {
        const response = await Api({
            method : 'PUT',
            url : '/user/update',
            headers : {
                'Content-Type' : 'application/json',
                Authorization : `Bearer ${token}`,
            },
            data :{
                name : data.name,
                email : data.email,
                ktp : data.ktp,
                religion : data.religion,
                status :data.status,
                noTelp : data.noTelp,
                posision : data.posision,
            },
        });
        if (response.data.statusCode === 200){
            getOne(store.getState().auth.users.id, navigation);
        }
    } catch (error) {
        console.log(error);
    }
};

const changeStatus = (data, getUser,navigation, reloadUser)=>async(dispatch)=>{
    const token = store.getState().auth.token;
    try {
        const response = await Api({
            method : 'PUT',
            url : `/user/update/${data.id}`,
            headers : {
                'Content-Type' : 'application/json',
                Authorization : `Bearer ${token}`,
            },
            data :{
                status : String(data.status).toLowerCase() === 'active' ? 'Non Active' : 'Active',
            },
        });
        if (response.data.statusCode === 200){
            getUser(data.id, navigation);
            reloadUser();
        }
    } catch (error) {
        console.log(error);
    }
};

export {
    getAll,
    getBy,
    editData,
    changeStatus,
    getByEdit,
};
