import React from 'react';
import {
    Badge
} from 'antd';

const BadgeOffHOC = ({ discountOff, children }) => {

    if (discountOff === 0) return (children);

    return (
        <Badge.Ribbon text={`${discountOff.toFixed()}% OFF`} placement="start">
            {children}
        </Badge.Ribbon>
    )
}

export default BadgeOffHOC;