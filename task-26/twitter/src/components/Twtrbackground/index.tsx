import twtrBg from '../../..//public/back-twitter.png';
import twtr from './twtr.module.css'


export const TwitterBackground = () => {
    return (
        <div>
            <img className={twtr.img} src={twtrBg} />
        </div>
    )
}