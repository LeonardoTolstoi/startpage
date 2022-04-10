import Messaging from './Messaging';
import { FC } from 'react';
import School from './School';
import './Favourites.css';
import Media from './Media';
import Placeholder from './Placeholder';

const Favourites: FC = () => {
    return(
        <div className='fav'>
            <Messaging />
            <School />
            <Media />
            <Placeholder />
        </div>
    );
}

export default Favourites;