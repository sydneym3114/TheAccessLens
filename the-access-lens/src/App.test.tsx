import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the access lens header', () => {
  render(<App />);
  const linkElement = screen.getByText("Welcome to The Access Lens!");
  expect(linkElement).toBeInTheDocument();
});
