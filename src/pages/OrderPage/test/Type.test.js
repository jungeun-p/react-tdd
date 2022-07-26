import { rest } from "msw";
import { server } from "../../../mocks/server";
import { render, screen } from "../../../test-utils";
import Type from "../Type"

test("displays product images from server", async () => {
    render(<Type orderType="products" />);

    const productImages = await screen.findAllByRole("img", {
        name: /product$/i,
    });
    expect(productImages).toHaveLength(2);

    const altText = productImages.map((element) => element.alt);
    expect(altText).toEqual(['America product', 'England product']);
}); 

// error test
test("when fetching product datas, face an error", async () => {
    // server 초기화
    server.resetHandlers(
        rest.get('http://localhost:5000/products', (req, res, ctx) => {
            return res(ctx.status(500));
        })
    );
    render(<Type orderType="products" />);
    const errorBanner = await screen.findByTestId("error-banner");
    expect(errorBanner).toHaveTextContent("에러가 발생했습니다.");
});

test("fetch option information from server", async () => {
    render(<Type orderType="options" />);

    const optionCheckboxes = await screen.findAllByRole("checkbox");
    expect(optionCheckboxes).toHaveLength(2);
})