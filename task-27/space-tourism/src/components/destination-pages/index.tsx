import { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import dpStyle from './dp.module.css'


interface DestinationsProps {
    name: string;
    description: string | string[];
    distance: ReactNode | ReactNode[];
    travel: ReactNode | ReactNode[];
    url: any;
}

export const Destinations: FC<DestinationsProps> = ({ name, description, distance, travel, url }) => {

    return (
        <div className={dpStyle.main}>
            <div className={dpStyle.left}>
                <img id={dpStyle.img} src={url} />
            </div>
            <div className={dpStyle.right}>
                <div className={dpStyle.links}>
                    <NavLink style={({ isActive }) =>({
                        borderBottom: isActive ? '1px solid #ffff' : 'none',
                    })} className={dpStyle.link} to='/destinations'>MOON</NavLink>
                    <NavLink style={({ isActive }) =>({
                        borderBottom: isActive ? '1px solid #ffff' : 'none',
                    })} className={dpStyle.link} to='/destinations/mars'>MARS</NavLink>
                    <NavLink style={({ isActive }) =>({
                        borderBottom: isActive ? '1px solid #ffff' : 'none',
                    })} className={dpStyle.link} to='/destinations/europa'>EUROPA</NavLink>
                    <NavLink style={({ isActive }) =>({
                        borderBottom: isActive ? '1px solid #ffff' : 'none',
                    })} className={dpStyle.link} to='/destinations/titan'>TITAN</NavLink>
                </div>
                <h1 id={dpStyle.name}>{name}</h1>
                <p id={dpStyle.description}>{description}</p>
                <hr />
                <div className={dpStyle.bottom}>
                    <div>
                        <p id={dpStyle.bmdescription}>AVG. DISTANCE</p>
                        <h1>{distance}</h1>
                    </div>
                    <div>
                        <p id={dpStyle.bmdescription}>EST. TRAVEL TIME</p>
                        <h1>{travel}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}