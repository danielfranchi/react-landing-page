import { render, screen } from "@testing-library/react";

import Headiline from "../../components/Headline/Headline";

describe("testing headiline", () => {
  it("testing paragraph headiline", async () => {
    render(<Headiline />);

    const p = screen.getByText(
      /data warehouse is a data storage area that has been tested for security, so you can store your data here safely but not be afraid of being stolen by others\./i
    );
    expect(p).toBeTruthy();
  });

  it("testing h1 headiline", async () => {
    render(<Headiline />);

    const h1 = screen.getByRole("heading", {
      name: /save your data storage here\./i,
    });
    expect(h1).toBeTruthy();
  });
});
