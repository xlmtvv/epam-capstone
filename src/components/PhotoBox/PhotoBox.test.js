import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { PhotoBox } from './PhotoBox';

describe('PhotoBox Component', () => {
  const mockProps = {
    name: 'John Doe',
    title: 'Software Engineer',
    description: 'Experienced in React and Node.js',
    avatar: 'https://example.com/avatar.jpg',
  };

  test('renders without crashing', () => {
    render(<PhotoBox {...mockProps} />);
    expect(screen.getByText(mockProps.name)).toBeInTheDocument();
  });

  test('displays correct props', () => {
    render(<PhotoBox {...mockProps} />);
    expect(screen.getByText(mockProps.name)).toBeInTheDocument();
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    expect(screen.getByText(mockProps.description)).toBeInTheDocument();
    expect(screen.getByAltText(`${mockProps.name}'s avatar`)).toHaveAttribute('src', mockProps.avatar);
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<PhotoBox {...mockProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});