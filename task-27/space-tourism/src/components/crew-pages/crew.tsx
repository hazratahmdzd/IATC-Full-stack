import { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import crewStyle from '../destination-pages/dp.module.css';


interface CrewProps {
    name: ReactNode | ReactNode[];
    role: ReactNode | ReactNode[];
    bio: ReactNode | ReactNode[];
    url: any;
}

export const Crew: FC<CrewProps> = ({ name, role, bio, url }) => {

    return (
        <div style={{
            width: '100%',
            gap: '100px',
        }} className={crewStyle.main}>
            <div className={crewStyle.right}>
                <h2 id={crewStyle.role}>{role}</h2>
                <h1 style={{
                    fontSize: '55px'
                }} id={crewStyle.name}>{name}</h1>
                <p id={crewStyle.bio}>{bio}</p>
                <div style={{
                    position: 'absolute',
                    bottom: '50px'
                }} className={crewStyle.links}>
                    <NavLink style={({ isActive }) => ({
                        backgroundColor: isActive ? '#fff' : 'grey',
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                    })} to='/crew'>
                    </NavLink>
                    <NavLink style={({ isActive }) => ({
                        backgroundColor: isActive ? '#fff' : 'grey',
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                    })} to='/crew/mark-shuttleworth'>
                    </NavLink>
                    <NavLink style={({ isActive }) => ({
                        backgroundColor: isActive ? '#fff' : 'grey',
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                    })} to='/crew/victor-glover'>
                    </NavLink>
                    <NavLink style={({ isActive }) => ({
                        backgroundColor: isActive ? '#fff' : 'grey',
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                    })} to='/crew/anousheh-ansari'>
                    </NavLink>
                </div>
            </div>
            <div className={crewStyle.left}>
                <img style={{
                    marginBottom: '0px',
                    padding: '0px',
                    width: '400px',
                    height: '450px',
                    marginTop: '-40px'
                }} src={url} />
            </div>
        </div>
    )
}