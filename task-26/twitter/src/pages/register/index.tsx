import { Title, TwitterLogo } from "../../components";
import rgstr from './register.module.css';


export const Register = () => {
    return (
        <div className={rgstr.main}>
            <TwitterLogo />
            <Title level={1}>Create an account</Title>
            <input className={rgstr.input} type="text" placeholder="Name" />
            <input className={rgstr.input} type="text" placeholder="Phone Number" />
            <Title level={5}>Date of birth</Title>
            <p style={{
                width: '95%'
            }} className={rgstr.title}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam laudantium rem nam vitae maiores ducimus, laboriosam iste. In, ratione est vero tempora, incidunt iusto veniam culpa quas odit voluptatem repellendus.
            </p>
            <div className={rgstr.form}>
                <input className={rgstr.monthinput} type="text" placeholder="Month" />
                <input className={rgstr.dayinput} type="text" placeholder="Day" />
                <input className={rgstr.yearinput} type="text" placeholder="Year" />
            </div>
            <button className={rgstr.btn}>Next</button>
        </div>
    )
}