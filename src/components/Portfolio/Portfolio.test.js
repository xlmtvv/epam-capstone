import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Portfolio from './Portfolio';
import Isotope from 'isotope-layout';

jest.mock('isotope-layout');

beforeEach(() => {
  // Setup necessary for Isotope mock
  Isotope.mockImplementation(() => ({
    arrange: jest.fn(),
    destroy: jest.fn(),
  }));
});

afterEach(cleanup);

describe('Portfolio Component', () => {
  test('renders without crashing', () => {
    const { getByText } = render(<Portfolio />);
    expect(getByText('Portfolio')).toBeInTheDocument();
  });

  test('initial selected category is all', () => {
    const { getByText } = render(<Portfolio />);
    fireEvent.click(getByText('All /'));
    expect(getByText('All /')).toBeTruthy();
  });
});