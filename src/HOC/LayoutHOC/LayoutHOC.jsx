import React from 'react'
import { useHistory } from "react-router-dom";
import {
    Row,
    Col,
    Typography
} from 'antd';
import {
    ShopTwoTone
} from '@ant-design/icons';
import LayStyles from './LayoutHOC.module.sass';
import Search from '../../components/Search/Search';

const { Title } = Typography;

const LayoutHOC = ({ children }) => {
    const history = useHistory();

    const onSearch = (value) => {
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
                    <Col span={8} offset={8}>
                        <Search 
                            placeholder="Buscar..."
                            handleAction={onSearch}
                        />
                    </Col>
                </Row>
            </div>
            <div className={LayStyles.contentBox}>
                {children}
            </div>
        </div>
    )
}

export default LayoutHOC
