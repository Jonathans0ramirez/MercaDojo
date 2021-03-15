import React, { useState } from 'react';
import {
    Col,
    Card,
    Skeleton
} from 'antd';
import './Item.sass'
import ItemDrawer from './ItemDrawer/ItemDrawer';

const { Meta } = Card;
const { Image } = Skeleton;

const Item = ({ image, title, description, price }) => {

    const [load, setLoad] = useState(true)
    const [visible, setVisible] = useState(false)

    const onClick = (event) => {
        setLoad(!load);
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
            <Col xs={{ span: 20, offset: 4 }} sm={{ span: 10, offset: 1 }} md={{ span: 10 }} lg={{ span: 7 }} xl={{ span: 5, offset: 1 }} xxl={4}>
                <Card
                    onClick={(event) => onClick(event)}
                    hoverable
                    style={{ width: 240, marginTop: "15px" }}
                    cover={!load && <img style={{ padding: "24px 24px 0 24px" }} alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    {load && <Image style={{ width: "190px", height: "280px" }} />}
                    <Skeleton loading={load} active>
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Skeleton>
                </Card>
            </Col>
            <ItemDrawer visible={visible} onClose={onClose} />
        </>
    )
}

export default Item;