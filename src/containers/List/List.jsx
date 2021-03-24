import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import {
    Row,
    Col,
    Carousel,
    Pagination
} from 'antd';
import Item from '../../components/Item/Item';
import { getAllProductsFormatted } from '../../services/MercadoAPI/products';

const List = () => {
    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#1DA57A'
    };
    const [items, setItems] = useState([{}, {}, {}, {}, {}, {}, {}, {}, {}]);
    const [pagination, setPagination] = useState({
        total: '',
        offset: 0
    });
    const [isLoading, setIsLoading] = useState(true);
    const { searchQuery } = useParams();

    useEffect(() => {
        setIsLoading(true);
        const toSend = searchQuery.replace(/(-)+/g, ' ').toLowerCase();
        makeAPICall(toSend).then(items => {
            setItems(items.items);
            setPagination({
                total: items.total,
                offset: items.offset === 0 ? 1 : items.offset / 10
            });
            setIsLoading(false);
        });
    }, [searchQuery]);

    const makeAPICall = (query, offset = 0) => {
        const callback = getAllProductsFormatted(query, offset).then(items => items);
        return callback;
    }

    const onPagingChange = (page) => {
        setIsLoading(true);
        const offset = page - 1;
        const toSend = searchQuery.replace(/(-)+/g, ' ').toLowerCase();
        makeAPICall(toSend, offset * 10).then(items => {
            setItems(items.items);
            setPagination({
                total: items.total,
                offset: items.offset === 0 ? 1 : items.offset / 10 + 1
            });
            setIsLoading(false);
        });
    }

    return (
        <>
            <Carousel autoplay dotPosition="right" effect="fade">
                <div>
                    <h3 style={contentStyle}>Ofertas</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>Increíbles</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>Cada</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>Día</h3>
                </div>
            </Carousel>
            <Row justify="center" gutter={[{ xs: 0, sm: 0, md: 20, lg: 20, xl: 30, xxl: 30 }, 16]}>
                {
                    items.map((item, key) => (
                        <Item key={key} item={item} isLoading={isLoading}></Item>
                    ))
                }
            </Row>
            <Row justify="center">
                <Col
                    style={{ margin: "10px" }}
                >
                    {!isLoading && <Pagination showSizeChanger={false} current={pagination.offset} total={pagination.total} onChange={onPagingChange} defaultPageSize={10} />}
                </Col>
            </Row>
        </>
    )
}

export default List;