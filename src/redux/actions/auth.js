import { Api } from '../../config/api';

const authLogin = (data, navigation) => async (dispatch)=>{
    try {
        const response = await Api({
            method : 'POST',
            url : '/login',
            headers : {
                'Content-Type' : 'application/json',
            },
            data : {
                email : data.email,
                password :data.password,
            },
        });

        if (response.data.statusCode === 200){
            dispatch({
                type : 'LOGIN_SUCCESS',
                payload : response.data.data,
            });
            navigation.navigate('Home');
        }
    } catch (error) {
        console.log(error);
    }
};

const logout = (navigation)=>async(dispatch)=>{
    try {
        dispatch({
            type : 'LOGOUT',
        });
        navigation.navigate('LoginScreen');
    } catch (err){
        console.log(err);
    }
};


const authRegister = (data, navigation) => async (dispatch)=>{
    try {
        const response = await Api({
            method : 'POST',
            url : '/register',
            headers : {
                'Content-Type' : 'application/json',
            },
            data : {
                email : data.email,
                password :data.password,
                name : String(data.name),
            },
        });
        if (response.data.statusCode === 200){
            navigation.navigate('LoginScreen');
        }
    } catch (error) {
        console.log(error.response.data.message);
    }
};


export  {
    authLogin,
    authRegister,
    logout,
};
