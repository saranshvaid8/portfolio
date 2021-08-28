import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Saransh is learning react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/saransh/i);
  expect(linkElement).toBeInTheDocument();
});
