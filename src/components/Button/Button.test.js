import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

describe('Button', () => {
  test('renders Button with text', () => {
    render(<Button text="Click me" />);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  test('renders Button with FontAwesome icon and text', () => {
    render(<Button icon={faCoffee} text="Order Coffee" />);
    expect(screen.getByRole('button', { name: /order coffee/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /order coffee/i }).querySelector('svg')).toBeInTheDocument();
  });
  test('Button click triggers onClick event', () => {
    const handleClick = jest.fn();
    render(<Button text="Click me" onClick={handleClick} />);
    fireEvent.click(screen.getByRole('button', { name: /click me/i }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});