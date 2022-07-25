import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Products from './Products';

const Type = ({ orderType }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        loadItems(orderType);
    }, [])
    const loadItems = async (orderType) => {
        try{
            const res = await axios.get(`http://localhost:5000/${orderType}`);
            setItems(res.data);
        } catch(e){
            console.log(e);
        }
    }

    const ItemComponents = orderType === "products" ? Products : null;
    const optionItems = items.map((item) => (
        <ItemComponents 
            key={item.name}
            name={item.name}
            imagePath={item.imagePath}
        />
    ))
    return (
        <div>
            {optionItems}
        </div>
    );
};

export default Type;