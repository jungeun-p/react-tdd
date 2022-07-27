import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import ErrorBanner from '../../components/ErrorBanner';
import { OrderContext } from '../../contexts/OrderContext';

const CompletePage = ({ setStep }) => {
    const [OrderDatas] = useContext(OrderContext);
    const [orderHistory, setOrderHistory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    
    useEffect(() => {
        orderComplete(OrderDatas);
    }, []);
    const orderComplete = async () => {
        try {
            let res = await axios.post('http://localhost:5000/order', OrderDatas);
            setOrderHistory(res.data);
            setLoading(false);
        } catch (error) {
            setError(true);
        }
    };

    const orderTable = orderHistory.map((item) => (
        <tr key={item.orderNumber}>
            <td>{item.orderNumber}</td>
            <td>{item.price}</td>
        </tr>
    ));
    
    return (
        <>  
            {error && <ErrorBanner message="에러가 발생했습니다" />}
            {loading && <div>loading</div>}
            {!loading && 
                <div style={{ textAlign: "center" }}>
                    <h2>주문이 성공했습니다.</h2>
                    <h3>지금까지 모든 주문</h3>
                    <table style={{ margin: "auto" }}>
                        <thead>
                            <tr>
                                <th>주문 번호</th>
                                <th>주문 가격</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderTable}
                        </tbody>
                    </table>
                    <br />
                    <button onClick={() => setStep(0)}>
                        첫 페이지로
                    </button>
                </div>
            }
        </>
    ); 
};

export default CompletePage;