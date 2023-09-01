import data from "../../data.json";
import anoushehImg from '../..//assets/crew/image-anousheh-ansari.png'
import { Crew } from "../../components";


export const AnoushehAnsari =  () => {
    return (
        <div>
            {data.crew.map((crew, index) => {
                if (index === 3) {
                    return <Crew key={index} url={anoushehImg} {...crew} />
                }
            })}
        </div>
    )
}