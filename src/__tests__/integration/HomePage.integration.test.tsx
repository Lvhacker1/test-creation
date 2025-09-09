import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('HomePage Integration', () => {
  test('integrates PageIntro with home data from pageIntroData', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Code Playground');
    expect(screen.getByText('Play, experiment, and tinker with programming concepts in an interactive way.')).toBeInTheDocument();
  });
});