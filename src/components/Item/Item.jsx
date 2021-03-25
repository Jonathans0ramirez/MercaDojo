import React, { useState } from 'react';
import {
    Col,
    Card,
    Image,
    Skeleton
} from 'antd';
import './Item.sass'
import ItemDrawer from './ItemDrawer/ItemDrawer';
import BadgeOffHOC from '../../HOC/BadgeOffHOC/BadgeOffHOC';

const { Meta } = Card;

const calcOffVal = (price, originalPrice) => {
    if (!originalPrice) {
        return 0;
    }
    return 100 - ((price * 100) / originalPrice);
}

const Item = ({ item, isLoading }) => {

    const { thumbnail: thumb, title, price, original_price } = item;

    const [visible, setVisible] = useState(false);

    const onClick = (event) => {
        showDrawer();
    }

    const showDrawer = () => {
        setVisible(true);
    }

    const onClose = () => {
        setVisible(false);
    }

    const discountOff = calcOffVal(price, original_price);
    return (
        <>
            <Col
                xs={20}
                sm={20}
                md={11}
                lg={8}
                xl={8}
                xxl={6}
            >
                <BadgeOffHOC
                    discountOff={discountOff}
                    isLoading={isLoading}
                >
                    <Card
                        onClick={(event) => onClick(event)}
                        hoverable
                    >
                        <Skeleton
                            avatar={{ active: true, shape: "circle", size: 90 }}
                            paragraph={{ rows: 1 }}
                            loading={isLoading}
                            active
                        >
                            <Meta
                                className="MetaStyles"
                                avatar={
                                    <Image
                                        width={90}
                                        height={90}
                                        src={thumb}
                                        preview={false}
                                    />
                                }
                                title={(<span className="MetaTitle">{title}</span>)}
                                description={
                                    original_price ? (
                                        <>
                                            <div className="originalPrice">
                                                {original_price.toLocaleString('es')}
                                            </div>
                                            <div className="price">
                                                <span className="priceSpan">{price.toLocaleString('es')}</span>
                                            </div>
                                        </>
                                    )
                                        : price ? <div className="price">{price.toLocaleString('es')}</div> : null
                                }
                            />
                        </Skeleton>
                    </Card>
                </BadgeOffHOC>
            </Col>
            {item && <ItemDrawer itemRes={item} visible={visible} onClose={onClose} />}
        </>
    )
}

export default Item;