import React from "react";
import { render } from "@testing-library/react";
import Todo from "./Todo";

const TEST_TODO = {
  id: 1,
  title: "test-title",
  description: "test-desc",
  priority: 1
}

describe("works as intended", function () {
  it("renders without crashing", function () {
    render(<Todo />);
  });

  it("contains expected values", function () {
    const {container, debug}= render(
      <Todo
        id={TEST_TODO.id}
        title={TEST_TODO.title}
        description={TEST_TODO.description}
        priority={TEST_TODO.priority}
      />
    );
    // debug(container)
    // console.log("container", container)
    expect(container.querySelector(".Todo")).toHaveTextContent("test-title");
    expect(container.querySelector(".Todo")).toHaveTextContent("test-desc");
    expect(container.querySelector(".Todo")).toHaveTextContent("priority:1");
    expect(container.queryByTestId(1)); //FIXME: FIND IDs
  });
});
