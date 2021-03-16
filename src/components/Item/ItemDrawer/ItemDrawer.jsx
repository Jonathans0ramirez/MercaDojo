import React from 'react'
import {
    Drawer
} from 'antd';

// const DescriptionItem = ({ title, content }) => (
//     <div className="site-description-item-profile-wrapper">
//         <p className="site-description-item-profile-p-label">{title}:</p>
//         {content}
//     </div>
// );

const ItemDrawer = ({ itemRes, visible, onClose }) => {
    // const { src } = itemRes;

    return (
        <Drawer
            width={640}
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
        >
            {/* <Image
                width={ 12 }
                src={src}
            /> */}
        </Drawer>
    )
}

export default ItemDrawer