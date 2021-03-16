import React, { useState } from 'react';
import {
    Col,
    Card,
    Avatar,
    Skeleton
} from 'antd';
import './Item.sass'
import ItemDrawer from './ItemDrawer/ItemDrawer';

const { Meta } = Card;
const { Image } = Skeleton;

const Item = ({ thumb, title, isLoading }) => {

    const [visible, setVisible] = useState(false)

    const onClick = (event) => {
        showDrawer();
    }

    const showDrawer = () => {
        setVisible(true);
    }

    const onClose = () => {
        setVisible(false);
    }

    return (
        <>
            <Col span={23} offset={1}>
                <Card
                    onClick={(event) => onClick(event)}
                    hoverable
                    style={{ width: "90vw", marginTop: "15px" }}
                >
                    {isLoading && <Image style={{ width: "160px", height: "160px" }} />}
                    <Skeleton loading={isLoading} active>
                        <Meta
                            avatar={
                                <Avatar
                                    size="large"
                                    src={thumb}
                                />
                            }
                            title={title}
                            description="www.instagram.com"
                        />
                    </Skeleton>
                </Card>
            </Col>
            <ItemDrawer visible={visible} onClose={onClose} />
        </>
    )
}

export default Item;