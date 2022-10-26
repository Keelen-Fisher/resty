import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Results from '../components/results/index';

describe('Results Component', () => {
  it('renders data as expected', () => {
    let data = {
      banana: 'banana',
    }
    render(<Results data={data}/>);
    let section = screen.getByTestId('results-section');

    expect(section).toHaveTextContent('banana');
  });

  it('renders no data as expected', () => {

    render(<Results />);
    // let section 
  })
})
