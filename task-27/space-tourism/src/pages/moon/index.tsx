import { Destinations } from "../../components"
import data from '../../data.json'
import moonimg from '../../assets/destination/image-moon.png'


export const Moon = () => {
    return (
        <div>
            { data.destinations.map((destination, index) => {
                if ( index === 0 ) {
                    return <Destinations url={moonimg} key={index} {...destination} />
                }
            } )}
        </div>
    )
}