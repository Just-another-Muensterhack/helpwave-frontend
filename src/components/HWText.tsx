import React from 'react';
import { Text, TextProps } from 'react-native';

const HWText = (props: TextProps) => {
    return <Text style={getStyle(props)}>{props.children}</Text>;
};

function getStyle(props: any) {
    return { ...{ fontFamily: 'Inter' }, ...props.style };
}

export default HWText;
