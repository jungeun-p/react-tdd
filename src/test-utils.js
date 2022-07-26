import { render } from "@testing-library/react"
import { OrderContextProvider } from "./contexts/OrderContext"

const customRender = (ui, options) => 
    render(ui, { wrapper: OrderContextProvider, ...options })
    // ui : 렌더하고자 하는 jsx
    // options : wrapper 이외의 모든 옵션
export * from '@testing-library/react';

export { customRender as render } // render로 customRender를 export 처리