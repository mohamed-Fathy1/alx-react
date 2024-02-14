import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe("Test Notifications Component", () => {
    it("should render Notifications component", () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper).toMatchSnapshot();
    });

    it("should render Notifications component with unordered list", () => {
        const wrapper = shallow(<Notifications />);
        const ul = wrapper.find("ul");
        expect(ul).toBeDefined();
    });

    it("should render Notifications component with three list items", () => {
        const wrapper = shallow(<Notifications />);
        const listItems = wrapper.find("ul").children();
        expect(listItems).toHaveLength(3);
    });

    it("should render Notifications component with correct text", () => {
        const wapper = shallow(<Notifications />);
        const text = wapper.find("p").text();
        expect(text).toEqual("Here is the list of notifications");
    });
});
