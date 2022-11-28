import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Todo from "./index";

describe("Todo tests", () => {
  let button, input;
  beforeEach(() => {
    render(<Todo />);
    button = screen.getByText("Add");
    input = screen.getByLabelText("Text");
  });

  test("Default values should be show in the document", () => {
    const items = screen.getAllByText(/Item/i); // item ile başlayanları getirir.

    expect(items.length).toEqual(3); // 3 tane item var mı?
  });

  test("Input and button should be in the document", () => {
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test("Should be adding item to item list when input value", () => {
    const newItem = "Item d";
    userEvent.type(input, newItem); // inputa yazı yazdırır.
    userEvent.click(button);

    const items = screen.getAllByText(/Item/i); 
    expect(items.length).toEqual(4); // 4 tane item var mı?
    expect(screen.getByText(newItem)).toBeInTheDocument(); // item d var mı?
  });
});
