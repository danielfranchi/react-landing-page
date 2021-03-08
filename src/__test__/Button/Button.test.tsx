import { render, screen } from "@testing-library/react";

import Button from "../../components/Button/Button";

describe("testing button", () => {
  it("testing whether button exists", async () => {
    render(<Button text="Request Demo" color="#212353" background="FFFFFF" />);

    const btn = screen.getByRole("button", {
      name: /btn/i,
    });
    expect(btn).toBeTruthy();
  });
});
