const { createContext, useState, useMemo, useEffect } = require("react");

export const OrderContext = createContext();

const pricePerItem = {
    products: 1000,
    options: 500,
};

function calculateSubtotal(orderType, orderCounts){
    let optionCount = 0;
    for (const count of orderCounts[orderType].values()){
        optionCount += count;
    }
    return optionCount * pricePerItem[orderType];
}

export function OrderContextProvider(props){
    const [orderCounts, setOrderCounts] = useState({
        products: new Map(),
        options: new Map(),
    });

    // 총 가격 
    const [totals, setTotals] = useState({
        products: 0,
        options: 0,
        total: 0,
    });

    // state 초기화
    const resetOrderDatas = () => {
        setOrderCounts({
            products: new Map(),
            options: new Map(),
        })
    }

    useEffect(() => {
        const productsTotal = calculateSubtotal('products', orderCounts);
        const optionsToal = calculateSubtotal('options', orderCounts);
        const total = productsTotal + optionsToal; 
        setTotals({
            products: productsTotal,
            options: optionsToal,
            total
        });

    }, [orderCounts])

    const value = useMemo(() => {
        function updateItemCount(itemName, newItemCount, orderType){
            const newOrderCounts = { ...orderCounts};
            const orderCountsMap = orderCounts[orderType]; // option or products
            orderCountsMap.set(itemName, parseInt(newItemCount))
            setOrderCounts(newOrderCounts);
        }

        return [{...orderCounts, totals }, updateItemCount, resetOrderDatas]; // orderDatas, updateItemCount함수
    }, [orderCounts, totals]);

    return <OrderContext.Provider value={value} {...props}/>;
}