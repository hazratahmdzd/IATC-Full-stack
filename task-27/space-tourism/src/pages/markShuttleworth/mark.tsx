import data from "../../data.json";
import markImg from '../..//assets/crew/image-mark-shuttleworth.png'
import { Crew } from "../../components";


export const MarkShuttleworth =  () => {
    return (
        <div>
            {data.crew.map((crew, index) => {
                if(index === 1) {
                    return <Crew key={index} url={markImg} {...crew} />
                }
            })}
        </div>
    )
}