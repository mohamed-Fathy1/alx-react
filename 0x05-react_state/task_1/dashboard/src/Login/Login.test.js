import React from "react";
import Login from "./Login";
import { shallow } from "enzyme";

describe("Login", () => {

    beforeEach(() => {
        StyleSheetTestUtils.suppressStyleInjection();
    });

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

    it("verify that the submit button is disabled by default", () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find("input[type='submit']").props().disabled).toEqual(true);
    });

    it("verify that after changing the value of the two inputs, the button is enabled", () => {
        const wrapper = shallow(<Login />);
        wrapper.find("#email").simulate('change', { target: { value: 't' } });
        wrapper.find("#password").simulate('change', { target: { value: 't' } });
        expect(wrapper.find("input[type='submit']").props().disabled).toEqual(false);
    });
});
