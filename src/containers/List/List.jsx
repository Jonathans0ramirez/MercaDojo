import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import {
    Row,
    Col,
    Pagination
} from 'antd';
import Item from '../../components/Item/Item';
import { getAllProductsFormatted } from '../../services/MercadoAPI/products';

const List = () => {
    const [items, setItems] = useState([]);
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
            console.log(items)
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
        console.log(offset)
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
            <Row justify="center" gutter={[{ xs: 0, sm: 0, md: 20, lg: 16 }, 16]}>
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