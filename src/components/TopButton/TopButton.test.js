import { render, screen, fireEvent } from '@testing-library/react';
import { TopButton } from './TopButton';

describe('TopButton Component', () => {
  test('renders the back to top button', () => {
    render(<TopButton />);
    const buttonElement = screen.getByRole('button', { name: /↑/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test('button has the correct class name', () => {
    render(<TopButton />);
    const buttonElement = screen.getByRole('button', { name: /↑/i });
    expect(buttonElement).toHaveClass('backToTopButton');
  });

  // Simulate scroll behavior (this won't actually scroll the page)
  test('shows the button when scrollY is greater than 300', () => {
    render(<TopButton />);
    // Simulate scrollY > 300
    window.scrollY = 301;
    fireEvent.scroll(window);
    const buttonElement = screen.getByRole('button', { name: /↑/i });
    expect(buttonElement).toHaveClass('show');
  });

  test('hides the button when scrollY is less than 300', () => {
    render(<TopButton />);
    // Simulate scrollY < 300
    window.scrollY = 299;
    fireEvent.scroll(window);
    const buttonElement = screen.getByRole('button', { name: /↑/i });
    expect(buttonElement).not.toHaveClass('show');
  });
});