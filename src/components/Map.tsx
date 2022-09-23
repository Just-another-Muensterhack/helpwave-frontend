import { View, Image, Dimensions } from 'react-native';

import { ColorAccentWarn } from '../style-constants';

const HOST = 'https://api.mapbox.com';
const ACCESS_TOKEN =
    'pk.eyJ1IjoiZm9zZWZ4IiwiYSI6ImNrOGFkOW56ZjAxNjgzZW0za3dxdHFic3UifQ.85f3mrJqSnISFg20Bz0xng';

interface LongLat {
    long: number;
    lat: number;
}

interface Props {
    marker: LongLat;
    center: LongLat;
    zoom: number;
}

function source(x: number, y: number, props: Props): string {
    const { marker, center, zoom } = props;
    const color = ColorAccentWarn.substring(1);

    return `${HOST}/styles/v1/mapbox/streets-v11/static/pin-s+${color}(${marker.long},${marker.lat})/${center.long},${center.lat},${zoom},0/${x}x${y}?access_token=${ACCESS_TOKEN}`;
}

const Map: React.FC<Props> = (props) => {
    const { width, height } = Dimensions.get('window');
    return (
        <Image
            source={{ uri: source(width, height, props) }}
            style={{ width, height }}
        />
    );
};

export default Map;
