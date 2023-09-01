import data from "../../data.json";
import { Crew } from "../../components";
import victorImg from '../..//assets/crew/image-victor-glover.png'


export const VictorGlover =  () => {
    return (
        <div>
            { data.crew.map((crew, index) => {
                if (index === 2) {
                    return <Crew key={index} url={victorImg} {...crew} />
                }
            } )}
        </div>
    )
}