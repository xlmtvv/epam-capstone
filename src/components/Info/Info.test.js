import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Info } from './Info';

describe('Info Component', () => {
  test('renders the text passed to it', () => {
    const testText = 'Test Info Text';
    render(<Info text={testText} className="test-class" />);
    const textElement = screen.getByText(testText);
    expect(textElement).toBeInTheDocument();
  });

  test('applies the className passed to it', () => {
    const testClassName = 'test-class';
    render(<Info text="Test Info Text" className={testClassName} />);
    const textElement = screen.getByText('Test Info Text');
    expect(textElement).toHaveClass(testClassName);
  });

  test('renders cyrilic in component', () => {
    const testText = 'абвгдежзийклмнопрстуфхцчшщъыьэюя';
    render(<Info text={testText} className="test-class" />);
    const textElement = screen.getByText(testText);
    expect(textElement).toBeInTheDocument();
  });
});