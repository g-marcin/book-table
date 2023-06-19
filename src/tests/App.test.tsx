import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("renders subheader first breadcrumb", () => {
    render(<App />);
    const homeCrumb = screen.getByText("Home");
    expect(homeCrumb).toBeDefined();
  });
  it("renders authors", () => {
    render(<App />);
    const authorRecord = screen.findByRole("author-record");
    expect(authorRecord).toBeDefined();
  });
});
