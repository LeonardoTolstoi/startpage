import { FC } from 'react';
import './Tile.css'

export interface TileItem {
    name: string,
    link?: string,
}

interface TileProps {
    title?: string,
    items?: Array<TileItem>,
}

const Tile: FC<TileProps> = (props) => {
    let title: string = (!props.title ? '' : props.title);
    let items: JSX.Element[] = [];
    if (!!props.items) {
        items = props.items.map(item => renderTile(item));
    }
    return(
        <div className='Tile'>
            <div id='title'>{title}</div>
            {items}
        </div>
    );
}

function renderTile(item: TileItem) {
    return(
        <div className='items'>
            <a href={item.link}>{item.name}</a>
        </div>
    );
}

export default Tile;
