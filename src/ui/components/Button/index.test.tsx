import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import { CreateButton } from ".";

describe("CreateButton", () => {
  it("должен рендерить кнопку с текстом 'Create Task'", () => {
    render(<CreateButton />);
    
    expect(screen.getByText(/Create Task/i)).toBeInTheDocument();
  });
});