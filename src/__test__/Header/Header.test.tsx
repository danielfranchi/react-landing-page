import { render, screen, fireEvent } from "@testing-library/react";

import Header from "../../components/Header/Header";

describe("testing header", () => {
  it("testing itens header", async () => {
    render(<Header />);

    const ul = screen.getByTestId("list");
    const li = screen.getByTestId("item");
    expect(ul).toContainElement(li);
  });
});
