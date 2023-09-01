import data from "../../data.json";
import douglasImg from '../..//assets/crew/image-douglas-hurley.png'
import { Crew } from "../../components";


export const DouglasHurley =  () => {
    return (
        <div>
            {data.crew.map((crew, index) => {
                if(index === 0) {
                    return <Crew key={index} url={douglasImg} {...crew} />
                }
            })}
        </div>
    )
}