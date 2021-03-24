import React from 'react'
import { useHistory } from "react-router-dom";
import {
    Row,
    Col,
    Input,
    Typography
} from 'antd';
import {
    ShopTwoTone,
    SearchOutlined
} from '@ant-design/icons';
import LayStyles from './LayoutHOC.module.sass';

const { Title } = Typography;

const LayoutHOC = ({ children }) => {
    const history = useHistory();

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
                    <Col span={8} offset={7}>
                        <Input
                            className={LayStyles.inputBox}
                            placeholder="Articulo"
                            onPressEnter={onSearch}
                            bordered={true}
                            prefix={<SearchOutlined />}
                        />
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
