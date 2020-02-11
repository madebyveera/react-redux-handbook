import React from "react";
import { Provider } from "react-redux";
import renderer from 'react-test-renderer';
import App from "./App";
import store from "./../store/configureStore";

describe('My Connected React-Redux Component', () => {
  let component;
  beforeEach(() => {
    component = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  it("renders learn react link", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});