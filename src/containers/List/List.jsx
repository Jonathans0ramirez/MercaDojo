import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import {
    Row
} from 'antd';
import Item from '../../components/Item/Item';
import { searchItems } from '../../services/MercadoAPI/search';

const List = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { searchQuery } = useParams();

    useEffect(() => {
        setIsLoading(true);
        const toSend = searchQuery.replace(/(-)+/g, ' ').toLowerCase();
        searchItems(toSend).then(s => {
            setItems(s)
            setIsLoading(false);
        });
    }, [searchQuery])

    return (
        <Row justify="center">
            {
                items.map((item, key) => (
                    <Item key={key} title={item.title} thumb={item.thumbnail} isLoading={isLoading}></Item>
                ))
            }
        </Row>
    )
}

export default List;