import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('the counter starts at 0', () => {
  render(<App />);
  // screen obejct를 이용해서 원하는 엘레멘트에 접근
  const countElement = screen.getByTestId("counter");
  // id가 counter인 element의 텍스트가 0인지 테스트
  expect(countElement).toHaveTextContent(0);
});

test('When the + button is pressed, the counter changes to 1', () => {
  render(<App />);
  // screen object를 통해 element 접근
  const buttonElement = screen.getByTestId("plus-button");
  // click plus button
  fireEvent.click(buttonElement);
  // counter가 0에서 +1으로 1이 됩니다.
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(1);
});

test('When the - button is pressed, the counter changes to -1', () => {
  render(<App />);
  // screen object를 통해 element 접근
  const buttonElement = screen.getByTestId("minus-button");
  // click plus button
  fireEvent.click(buttonElement);
  // counter가 0에서 으로 -1이 됩니다.
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(-1);
});

test("on/off button has blue color", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("on/off-button");
  expect(buttonElement).toHaveStyle({ backgroundColor: 'blue' });
});

test.only("Prevent the -,+ button from being pressed when the on/off button is clicked", () => {
  render(<App />);
  const onOffButtonElement = screen.getByTestId("on/off-button");
  fireEvent.click(onOffButtonElement);
  const plusButtonElement = screen.getByTestId("plus-button");
  expect(plusButtonElement).toBeDisabled();
});