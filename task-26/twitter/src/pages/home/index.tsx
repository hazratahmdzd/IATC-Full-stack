import { TwitterLogo, Title, Button, ButtonApple, ButtonGoogle } from "../../components";
import { Link } from "react-router-dom";
import homemain from './home.module.css'

export const Home = () => {
    return (
        <div className={homemain.main}>
            <TwitterLogo />
            <Title level={1} >Happening now</Title>
            <Title level={2}>Join Twitter today</Title>
            <ButtonGoogle>Sign up with Google</ButtonGoogle>
            <ButtonApple>Sign up with Apple</ButtonApple>
            <Button>Sign up with phone or email</Button>
            <Title level={5}>
                Already have an account
                   <Link to='/login'>Log in</Link>
            </Title>
        </div>
    )
}