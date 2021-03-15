import React from 'react'
import {
    Row,
    Col,
    Menu,
    Input
} from 'antd';
import {
    ShopTwoTone
} from '@ant-design/icons';
import { useHistory, useLocation } from "react-router-dom";
import LayStyles from './LayoutHOC.module.sass';

const {
    Item
} = Menu;
const {
    Search
} = Input;

const onSearch = value => console.log(value);

const LayoutHOC = ({ children }) => {
    const history = useHistory();
    const location = useLocation();

    const handleClick = (e) => {
        console.log(history)
        history.replace(e.key)
    }
    return (
        <div className={LayStyles.box}>
            <div className={LayStyles.headerBox}>
                <Row align="middle">
                    <Col span={8}>
                        <ShopTwoTone twoToneColor="#1DA57A" style={{ fontSize: "30px", marginLeft:"5px" }} />
                    </Col>
                    <Col span={4}>
                        <Search placeholder="Articulo" onSearch={onSearch} loading={true} />
                    </Col>
                    <Col span={11}>
                        <Menu className={LayStyles.layoutMenu} mode='horizontal' onClick={handleClick} selectedKeys={[location.pathname]}>
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
