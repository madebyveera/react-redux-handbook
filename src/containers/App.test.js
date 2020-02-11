import React from "react";
import { Provider } from "react-redux";
import renderer from 'react-test-renderer';
import App from "./App";
import store from "./../store/configureStore";

describe('App Instance', () => {
  let component;
  beforeEach(() => {
    component = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  it("Renders Application", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});