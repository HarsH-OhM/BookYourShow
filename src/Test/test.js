import React from "react";
import ReactDOM from "react-dom";

import InputForm from "../inputForm";
import MovieShow from "../movieShow";

import Enzyme, { shallow, render, mount } from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

it("renders correctly enzyme", () => {
  const wrapper = shallow(<InputForm />);

  expect(toJson(wrapper)).toMatchSnapshot();
});
