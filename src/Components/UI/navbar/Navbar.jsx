import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context';
import MyButton from '../button/MyButton';

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    }
    return (
        <header className='navbar'>
            <ul className='navbar__links'>
                {isAuth
                ?<MyButton onClick={logout}>Выйти</MyButton>
                :<>
                <Link to='/about'>О сайте</Link>
                <Link to='/posts'>Посты</Link>
                </>
                }
                
            </ul>
        </header>
    );
};

export default Navbar;