import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import logo from '../../images/lo.png'
import './navbar.css'
import Avatar from '../../components/Avatar/Avatar'
import Search from '../../images/search.png'
import { setCurrentUser } from '../../actions/currentUser'
import decode from 'jwt-decode'


const Navbar = () => {

    const dispatch = useDispatch()
    var User = useSelector((state) => (state.currentUserReducer))
    const navigate = useNavigate()

    useEffect(() => {
        const token = User?.token
        if (token) {
            const decodedToken = decode(token)

            if (decodedToken.exp * 1000 < new Date().getItem()) {
                handleLogout()
            }
        }
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    }, [dispatch])

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
        navigate('/');
        window.location.reload();
        dispatch(setCurrentUser(null));
    }


    return (
        <nav className='main-nav'>
            <div className='navbar'>
                <Link to='/' className='nav-item nav-logo'>
                    <img src={logo} alt="logo" />
                </Link>
                <Link to='/' className='nav-item nav-btn'>About</Link>
                <Link to='/' className='nav-item nav-btn'>Products</Link>
                <Link to='/' className='nav-item nav-btn'>For Teams</Link>
                <form>
                    <input type="text" placeholder='Search...' />
                    <img src={Search} alt="Search" className='search-icon' />
                </form>
                {User === null ?
                    <Link to='/Auth' className='nav-item nav-links'>Log in</Link> :
                    <>
                        <Avatar backgroundColor='#009dff' px="10px" py="7px" borderRadius='50%' color="white"><Link to={`/Users/${User?.result?._id}`} style={{ color: "white", textDecoration: "none" }}>{User.result.name.charAt(0).toUpperCase()}</Link></Avatar>
                        <button className='nav-item nav-links' onClick={handleLogout}>Log out</button>
                    </>
                }
            </div>
        </nav>
    )
}

export default Navbar
