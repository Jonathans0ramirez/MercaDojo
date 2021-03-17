import React, { useState } from 'react';
import {
    Col,
    Card,
    Image,
    Skeleton
} from 'antd';
import './Item.sass'
import ItemDrawer from './ItemDrawer/ItemDrawer';

const { Meta } = Card;
const { Image: SkeImage } = Skeleton;

const calcOffVal = (price, originalPrice) => {
    return 100 - ((price * 100) / originalPrice);
}

const Item = ({ item, isLoading }) => {

    const { thumbnail: thumb, title, price, original_price } = item;

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
                    {isLoading && <SkeImage style={{ width: "160px", height: "160px" }} />}
                    <Skeleton loading={isLoading} active>
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
                            title={title}
                            description={
                                original_price ? (
                                    <>
                                        <div className="originalPrice">
                                            {original_price.toLocaleString('es')}
                                        </div>
                                        <div className="price">
                                            <span className="priceSpan">{price.toLocaleString('es')}</span>
                                            <span className="discountSpan">{`${calcOffVal(price, original_price).toFixed()}% de Descuento`}</span>
                                        </div>
                                    </>
                                )
                                    : <div className="price">{price.toLocaleString('es')}</div>
                            }
                        />
                    </Skeleton>
                </Card>
            </Col>
            {item && <ItemDrawer itemRes={item} visible={visible} onClose={onClose} />}
        </>
    )
}

export default Item;