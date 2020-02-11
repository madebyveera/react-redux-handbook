import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import { addTodo } from "./../store/actions";
import AddTodo from "./AddTodo";
const mockStore = configureStore([]);
describe("AddTodo Component", () => {
  let store;
  let component;
  beforeEach(() => {
    store = mockStore({
      todos: []
    });
    store.dispatch = jest.fn();
    component = renderer.create(
      <Provider store={store}>
        <AddTodo />
      </Provider>
    );
  });
  it("AddTodo Component Snapshot", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("AddTodo Button Click Scenario", () => {
    renderer.act(() => {
      component.root.findByType("button").props.onClick();
    });
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(addTodo({index: 1, text: "Use Redux"}));
  });
});
