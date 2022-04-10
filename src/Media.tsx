import Tile, { TileItem } from './Tile';

const Media = () => {
    const unixporn: TileItem = {
        name: 'красивые терминалы',
        link: 'https://reddit.com/r/unixporn'
    }
    const wallpapers: TileItem = {
        name: 'красивые картинки',
        link: 'https://reddit.com/r/wallpapers'
    }
    const youtube: TileItem = {
        name: 'пока не заблокировали!',
        link: 'https://youtube.com'
    }
    return(
        <Tile title='Вот пиндосы дают!'
            items={[unixporn, wallpapers, youtube]}/>
    );
}

export default Media;