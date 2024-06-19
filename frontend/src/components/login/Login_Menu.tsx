import '../../styles/login.css'
import NavButton from '../navigation/NavButton';

export default function Login_Menu() {

    return(
        <div className='white-box'>
            <NavButton name={'Sign In'} style={'login-button'} path={'/dashboard'}/>
            <NavButton name={'Sign Up'} style={'login-button'} path={'/signup'}/>
        </div>
    )
}