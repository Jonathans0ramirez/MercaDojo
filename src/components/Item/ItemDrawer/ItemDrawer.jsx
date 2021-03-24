import React from 'react'
import {
    Descriptions,
    Typography,
    Drawer,
    Space,
    Image
} from 'antd';
import './ItemDrawer.sass'

const { PreviewGroup } = Image;
const { Item } = Descriptions;
const { Paragraph } = Typography;

const ItemDrawer = ({ itemRes, visible, onClose }) => {
    if (itemRes === undefined) {
        return (<p>TROLL</p>);
    }

    const {
        title,
        price,
        seller,
        pictures,
        attributes,
        description,
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
            <Descriptions
                title="Información General"
                layout="vertical"
                bordered
            >
                <Item className="contentItemDrawer" label={<Paragraph className="paragraphItemDrawer" strong>Titulo</Paragraph>} span={1}>
                    {title}
                </Item>
                <Item className="contentItemDrawer" label={<Paragraph className="paragraphItemDrawer" strong>Vendedor</Paragraph>} span={2}>
                    {seller}
                </Item>
                {
                    pictures && pictures.length > 0 &&
                    <Item className="contentItemDrawer" label={<Paragraph className="paragraphItemDrawer" strong>Imagenes</Paragraph>} span={3}>
                        <div className="ImgGroupContainer">
                            <PreviewGroup>
                                {
                                    pictures.slice(0, 5).map((pic, index) => (
                                        <Space className="drawerImgGroup" key={index}>
                                            <Image
                                                width={90}
                                                src={pic.url}
                                            />
                                        </Space>
                                    ))
                                }
                            </PreviewGroup>
                        </div>
                    </Item>
                }
                <Item className="contentItemDrawer" label={<Paragraph className="paragraphItemDrawer" strong>Descripción</Paragraph>} span={3}>
                    {description}
                </Item>
                <Item className="contentItemDrawer" label={<Paragraph className="paragraphItemDrawer" strong>Precio</Paragraph>}>
                    {original_price ? (
                        <>
                            <div className="originalPrice originalPriceDrawer">
                                {original_price.toLocaleString('es')}
                            </div>
                            <div className="price priceDrawer">
                                <span className="priceSpan">{price.toLocaleString('es')}</span>
                            </div>
                        </>
                    )
                        : price ? <div className="price priceDrawer">{price.toLocaleString('es')}</div> : null
                    }
                </Item>
            </Descriptions>
            <Descriptions
                title="Atributos"
                layout="vertical"
                bordered
            >
                {
                    attributes && attributes.map((att, index) => (
                        att.value_name && <Item key={index} className="contentItemDrawer" label={<Paragraph className="paragraphItemDrawer" strong>{att.name}</Paragraph>}>
                            {att.value_name}
                        </Item>
                    ))
                }
            </Descriptions>
        </Drawer>
    )
}

export default ItemDrawer