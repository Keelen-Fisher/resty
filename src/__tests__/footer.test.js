import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from '../components/footer/index';

describe('Testing the Form', () => {
  it('can display Footer and its content', () => {
    render(<Footer/>);
    let footerDisplay = screen.getByText('Keelen Fisher Inc. 2022');
    expect(footerDisplay).toBeInTheDocument();
  });
});
