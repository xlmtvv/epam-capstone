import { render, screen } from '@testing-library/react';
import Address from './Address';

describe('Address Component', () => {
  test('renders the "Contacts" heading', () => {
    render(<Address />);
    const headingElement = screen.getByText('Contacts');
    expect(headingElement).toBeInTheDocument();
  });

  test('renders the phone number and link', () => {
    render(<Address />);
    const phoneLink = screen.getByRole('link', { name: /500 342 242/i });
    expect(phoneLink).toHaveAttribute('href', 'tel://+500342242');
    expect(phoneLink).toHaveTextContent('500 342 242');
  });

  test('renders the email address and link', () => {
    render(<Address />);
    const emailLink = screen.getByRole('link', { name: /office@kamsolutions.pl/i });
    expect(emailLink).toHaveAttribute('href', 'mailto:office@kamsolutions.pl');
    expect(emailLink).toHaveTextContent('office@kamsolutions.pl');
  });
});