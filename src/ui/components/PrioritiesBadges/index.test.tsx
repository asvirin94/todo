import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import PrioritiesBadges from ".";

describe("PrioritiesBadges", () => {
  it("должен рендерить 'All' badge, если длина массива значений равна 3", () => {
    render(<PrioritiesBadges values={['low', 'normal', 'high']} />);
    
    expect(screen.getByText(/All/i)).toBeInTheDocument();
  });

  it("должен рендерить badges для каждого значения, если длина массива значений не равна 3", () => {
    render(<PrioritiesBadges values={['low', 'normal']} />);
    
    expect(screen.getByText(/low/i)).toBeInTheDocument();
    expect(screen.getByText(/normal/i)).toBeInTheDocument();
  });
});