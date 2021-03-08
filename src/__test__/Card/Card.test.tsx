import { render, screen } from "@testing-library/react";

import Card from "../../components/Card/Card";

describe("testing Card", () => {
  it("testing paragraph Card", async () => {
    render(<Card />);

    const p = screen.getByText(
      /the place to store various data that you can access at any time through the internet and where you can carry it\. this very flexible storage area has a high level of security\. to enter into your own data you must enter the password that you created when you registered in this data warehouse\./i
    );
    expect(p).toBeTruthy();
  });

  it("testing h1 Card", async () => {
    render(<Card />);

    const h1 = screen.getByRole("heading", {
      name: /we are a high\-level data storage bank/i,
    });
    expect(h1).toBeTruthy();
  });
});
