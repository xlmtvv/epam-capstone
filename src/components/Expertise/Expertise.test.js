import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Expertise } from './Expertise';

describe('Expertise Component', () => {
  const mockData = [
    {
      info: {
        company: 'Company A',
        job: 'Engineer',
        description: 'Developing cool stuff.'
      },
      date: 'Jan 2020 - Present'
    },
    {
      info: {
        company: 'Company B',
        job: 'Designer',
        description: 'Designing beautiful interfaces.'
      },
      date: 'Feb 2018 - Dec 2019'
    }
  ];

  test('renders without crashing', () => {
    render(<Expertise data={[]} />);
    expect(screen.getByText('Experience')).toBeInTheDocument();
  });

  test('renders experience list based on provided data', () => {
    render(<Expertise data={mockData} />);
    expect(screen.getAllByRole('listitem').length).toBe(mockData.length);
  });

  test('displays correct content for each experience', () => {
    render(<Expertise data={mockData} />);
    mockData.forEach((exp) => {
      expect(screen.getByText(exp.info.company)).toBeInTheDocument();
      expect(screen.getByText(exp.date)).toBeInTheDocument();
      expect(screen.getByText(exp.info.job)).toBeInTheDocument();
      expect(screen.getByText(exp.info.description)).toBeInTheDocument();
    });
  });
});