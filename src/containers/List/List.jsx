import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import {
    Row
} from 'antd';
import Item from '../../components/Item/Item';
import { getAllProductsFormatted } from '../../services/MercadoAPI/products';

const List = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { searchQuery } = useParams();

    useEffect(() => {
        setIsLoading(true);
        const toSend = searchQuery.replace(/(-)+/g, ' ').toLowerCase();
        getAllProductsFormatted(toSend).then(items => {
            setItems(items)
            setIsLoading(false);
        });
    }, [searchQuery])

    return (
        <Row justify="center">
            {
                items.map((item, key) => (
                    <Item key={key} item={item} isLoading={isLoading}></Item>
                ))
            }
        </Row>
    )
}

export default List;