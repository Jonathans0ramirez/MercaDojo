import React from 'react'
import {
    Drawer,
    Space,
    Image
} from 'antd';
import './ItemDrawer.sass'

const { PreviewGroup } = Image;

// const DescriptionItem = ({ title, content }) => (
//     <div className="site-description-item-profile-wrapper">
//         <p className="site-description-item-profile-p-label">{title}:</p>
//         {content}
//     </div>
// );

const ItemDrawer = ({ itemRes, visible, onClose }) => {
    if (itemRes === undefined) {
        return (<p>TROLL</p>);
    }

    const {
        title,
        description,
        seller,
        pictures,
        price,
        original_price
    } = itemRes;

    return (
        <Drawer
            width={640}
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
        >
            {pictures && pictures.length > 0 &&
                <div className="ImgGroupContainer">
                    <PreviewGroup>
                        {
                            pictures.map((pic, index) => (
                                <Space className="drawerImgGroup" key={index}>
                                    <Image
                                        width={100}
                                        src={pic.url}
                                    />
                                </Space>
                            ))
                        }
                    </PreviewGroup>
                </div>
            }
            <p>{title}</p>
            <p>{description}</p>
            <p>{seller}</p>
            <p>{price}</p>
            <p>{original_price}</p>
        </Drawer>
    )
}

export default ItemDrawer