import { render, screen } from '@testing-library/react';
import App from './App';

test('the counter starts at 0', () => {
  render(<App />);
  // screen obejct를 이용해서 원하는 엘레멘트에 접근
  const countElement = screen.getByTestId("counter");
  // id가 counter인 element의 텍스트가 0인지 테스트
  expect(countElement).toHaveTextContent(0);
});
