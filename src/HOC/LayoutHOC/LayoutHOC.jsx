import React from 'react'
import { useHistory, useLocation } from "react-router-dom";
import {
    Row,
    Col,
    Menu,
    Input,
    Typography
} from 'antd';
import {
    ShopTwoTone,
    SearchOutlined
} from '@ant-design/icons';
import LayStyles from './LayoutHOC.module.sass';

const {
    Item
} = Menu;
const { Title } = Typography;

const LayoutHOC = ({ children }) => {
    const history = useHistory();
    const location = useLocation();

    const handleClick = (e) => {
        history.replace(e.key)
    }

    const onSearch = (e) => {
        const value = e.target.value;
        const valueFrm = value.replace(/\s+/g, '-').replace(/(-)+/g, '-');
        history.push(`/list/${valueFrm}`)
    };

    return (
        <div className={LayStyles.box}>
            <div className={LayStyles.headerBox}>
                <Row align="middle">
                    <Col span={8}>
                        <Title
                            className={LayStyles.titleBox}
                            level={3}
                            code={true}
                        >
                            <ShopTwoTone twoToneColor="#1DA57A" /> MercaDojo by JR
                        </Title>
                    </Col>
                    <Col span={4}>
                        <Input
                            className={LayStyles.inputBox}
                            placeholder="Articulo"
                            onPressEnter={onSearch}
                            bordered={false}
                            prefix={<SearchOutlined />}
                        />
                    </Col>
                    <Col span={11}>
                        <Menu
                            mode='horizontal'
                            onClick={handleClick}
                            className={LayStyles.layoutMenu}
                            selectedKeys={[location.pathname]}
                        >
                            <Item key="/home">Home- Temporal</Item>
                            <Item key="/list">Lista - Temporal</Item>
                        </Menu>
                    </Col>
                    <Col span={1}></Col>
                </Row>
            </div>
            <div className={LayStyles.contentBox}>
                {children}
            </div>
        </div>
    )
}

export default LayoutHOC
