import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Form from '../components/form/index';

describe('Form Testing', () => {
  it('Calls the handleApi function', () => {
    let handleApiCall = jest.fn();
    render(<Form handleApiCall={handleApiCall} />);
    // let button = screen.getByText
    
    expect(handleApiCall).toHaeBeenCalled();
  })
})
