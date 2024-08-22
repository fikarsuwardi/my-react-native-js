import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import App from "../App";

describe("To-Do List App", () => {
  it("should add a task", () => {
    const { getByPlaceholderText, getByText } = render(<App />);

    const input = getByPlaceholderText("Add a new task");
    const addButton = getByText("Add Task");

    fireEvent.changeText(input, "Test Task");
    fireEvent.press(addButton);

    expect(getByText("Test Task")).toBeTruthy();
  });

  it("should remove a task", () => {
    const { getByPlaceholderText, getByText, queryByText } = render(<App />);

    const input = getByPlaceholderText("Add a new task");
    const addButton = getByText("Add Task");

    fireEvent.changeText(input, "Test Task");
    fireEvent.press(addButton);

    const task = getByText("Test Task");
    fireEvent.press(task);

    expect(queryByText("Test Task")).toBeNull();
  });
});
