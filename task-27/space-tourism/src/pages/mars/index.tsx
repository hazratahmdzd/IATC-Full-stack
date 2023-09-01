import { Destinations } from "../../components"
import data from '../../data.json'
import marsimg from '../../assets/destination/image-mars.png'


export const Mars = () => {
    return (
        <div>
            { data.destinations.map((destination, index) => {
                if ( index === 1 ) {
                    return <Destinations url={marsimg} key={index} {...destination} />
                }
            } )}
        </div>
    )
}