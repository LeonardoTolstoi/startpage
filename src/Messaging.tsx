import './Messaging.css'
import { FC } from 'react';
import Tile, { TileItem } from './Tile';


const Messaging: FC = () => {
    const vk: TileItem = {
        name: 'россиянский вичат',
        link: 'https://vk.com/im',
    }
    const whatsapp: TileItem = {
        name: 'не заблокировали :(',
        link: 'https://web.whatsapp.com/',
    }
    return(
        <Tile title='Гонцы' items={[vk, whatsapp]} />
    );
}

export default Messaging;