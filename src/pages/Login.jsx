import React, { useContext } from 'react';
import MyButton from '../Components/UI/button/MyButton';
import MyInput from '../Components/UI/input/MyInput';
import { AuthContext } from '../context';

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const login = (event) => {
        event.preventDefault();
        localStorage.setItem('auth', 'true');
        setIsAuth(true);
    }
    return (
        <div className='border-teal'>
            <h1>Авторизация</h1>
            <form onSubmit={login}>
                <MyInput type='text' placeholder='Введите логин'/>
                <MyInput type='password' placeholder='Введите пароль'/>
                <MyButton>Войти</MyButton>
            </form>
        </div>
    );
};

export default Login;