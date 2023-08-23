import { TwitterLogo, Title } from "../../components";
import lgn from './login.module.css';
import { Link } from "react-router-dom";

export const Login = () => {
    return (
        <div>
            <TwitterLogo/>
            <Title level={1}>Log in to Twitter</Title>
            <div className={lgn.form}>
            <input className={lgn.input} type="text" placeholder="Phone number, email adress" />
            <input className={lgn.input} type="password" placeholder="Password" />
            <button className={lgn.btn}>Log in</button>
            </div>
            <div className={lgn.foot}>
                <Link to='/'>Forgot password?</Link>
                <Link to='/register'>Sign up to Twitter</Link>
            </div>
        </div>
    )
}