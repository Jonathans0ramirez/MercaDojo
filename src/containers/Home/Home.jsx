import React from 'react';
import img from '../../assets/HomeIMG.jpg';
import {
    Image
} from 'antd';

export default function Home() {
    return (
        <div style={{ marginTop: "10px" }}>
            <Image
                preview={false}
                src={img}
            />
        </div>
    )
}
