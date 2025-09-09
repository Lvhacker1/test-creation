import { render, screen } from '@testing-library/react';
import AboutPage from '@/app/about/page';

describe('AboutPage Integration', () => {
  test('integrates PageIntro component with about data from pageIntroData', () => {
    render(<AboutPage />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Behind the Screen');
    expect(screen.getByText('Meet the minds shaping our playground and learn why we code the way we do.')).toBeInTheDocument();
  });
});