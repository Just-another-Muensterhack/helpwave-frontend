import React from 'react';

import { ColorAccentPositive } from '../style-constants';
import HWText from './HWText';

interface Props {
    name: string;
    kind: 'can_you_help' | 'help_notified';
}

const Hey: React.FC<Props> = ({ name, kind }) => {
    return (
        <HWText style={{ fontSize: 25, color: 'white', padding: 40 }}>
            Hey <HWText style={{ color: ColorAccentPositive }}>{name}</HWText>...
            {kind === 'can_you_help' ? '\nkannst du helfen?' : ''}
        </HWText>
    );
};

export default Hey;
