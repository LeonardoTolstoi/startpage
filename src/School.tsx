import Tile, { TileItem } from './Tile';

const School = () => {
    
    const math: TileItem = {
        name: 'данекянск',
        link: 'https://vk.com/im?sel=c77',
    }
    const mstodo: TileItem = {
        name: 'туды',
        link: 'https://to-do.live.com/',
    }
    const items = [math, mstodo];
    return(
        <div>
            <Tile
             title='Школа готовит нас к жизни в мире, которого не существует. (А. Камю)'
             items={items}/>
        </div>
    );
}

export default School;