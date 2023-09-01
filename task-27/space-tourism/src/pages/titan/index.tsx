import { Destinations } from "../../components"
import data from '../../data.json'
import titanimg from '../../assets/destination/image-titan.png'


export const Titan = () => {
    return (
        <div>
            { data.destinations.map((destination, index) => {
                if ( index === 3 ) {
                    return <Destinations url={titanimg} key={index} {...destination} />
                }
            } )}
        </div>
    )
}