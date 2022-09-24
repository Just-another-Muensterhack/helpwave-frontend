import React from 'react';
import { Text } from 'react-native';

import { ColorAccentPositive } from '../style-constants';

interface Props {
    name: string;
    kind: 'can_you_help' | 'help_notified';
}

const Hey: React.FC<Props> = ({ name, kind }) => {
    return (
        <Text style={{ fontSize: 25, color: 'white', padding: 40 }}>
            Hey <Text style={{ color: ColorAccentPositive }}>{name}</Text>...
            {kind === 'can_you_help' ? '\nkannst du helfen?' : ''}
        </Text>
    );
};

export default Hey;
