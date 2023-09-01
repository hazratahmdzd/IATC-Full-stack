import { Destinations } from "../../components"
import data from '../../data.json';
import europaimg from '../../assets/destination/image-europa.png'


export const Europa = () => {
    return (
        <div>
            { data.destinations.map((destination, index) => {
                if ( index === 2 ) {
                    return <Destinations url={europaimg} key={index} {...destination} />
                }
            } )}
        </div>
    )
}