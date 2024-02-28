import React from "react";
import Login from "./Login";
import { shallow } from "enzyme";

describe("Login", () => {
    it("should render Login component", () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.exists()).toBe(true);
    });

    it("should render a 2 input fields", () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find("input")).toHaveLength(2);
    });

    it("should render 2 labels", () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find("label")).toHaveLength(2);
    });

    it("should render a button", () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find("button")).toHaveLength(1);
    });
});
