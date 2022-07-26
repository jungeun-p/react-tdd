import Type from "../Type"
import userEvent from "@testing-library/user-event";
import { render, screen } from "../../../test-utils";


test("update product's total when products change", async () => {
    // render(<Type orderType="products" />, { wrapper: OrderContextProvider });
    render(<Type orderType="products" />);
    // 여행 상품 가격을 0으로 시작
    const productsTotal = screen.getByText("상품 총 가격:", { exact: false });
    expect(productsTotal).toHaveTextContent("0");
    
    // 아메리카 여행 상품 한개 올리기 
    const americaInput = await screen.findByRole("spinbutton", {
        name: "America",
    });
    userEvent.clear(americaInput); // input, textarea에 text선택 후 제거 처리
    userEvent.type(americaInput, "1"); // americaInput에 1 추가 
    expect(productsTotal).toHaveTextContent("1000");
    
    // 영국 여행 상품 3개 올리기 
    const englandInput = await screen.findByRole("spinbutton", {
        name: "England",
    });
    userEvent.click(englandInput);
    userEvent.type(englandInput, "3");
    expect(productsTotal).toHaveTextContent("4000");
}); 