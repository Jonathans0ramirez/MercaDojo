import React from 'react'
import { useHistory } from "react-router-dom";
import {
    Row,
    Col,
    BackTop,
    Typography
} from 'antd';
import {
    ShopTwoTone,
    UpCircleFilled
} from '@ant-design/icons';
import LayStyles from './LayoutHOC.module.sass';
import Search from '../../components/Search/Search';

const { Title } = Typography;

const LayoutHOC = ({ children }) => {
    const history = useHistory();

    const onSearch = (value) => {
        const valueFrm = value.replace(/\s+/g, '-').replace(/(-)+/g, '-').toLowerCase();
        history.push(`/${valueFrm}`)
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
                            <ShopTwoTone twoToneColor="#1DA57A" /> MercaJotyR
                        </Title>
                    </Col>
                    <Col
                        xs={{ span: 16, offset: 0 }}
                        sm={{ span: 13, offset: 3 }}
                        md={{ span: 10, offset: 6 }}
                        lg={{ span: 8, offset: 8 }}
                        xl={{ span: 7, offset: 9 }}
                        xxl={{ span: 5, offset: 11 }}
                    >
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
            <BackTop className={LayStyles.backTopBox}>
                <div className={LayStyles.iconBackTopBox}><UpCircleFilled /></div>
            </BackTop>
        </div>
    )
}

export default LayoutHOC
