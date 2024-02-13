import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

describe("Header", () => {
    it("should render the Header component", () => {
        const wrapper = shallow(<Header />);
        expect(wrapper).toBeDefined();
    });

    it("should render the Header component with class App-header", () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find(".App-header").length).toBe(1);
    });

    it("should render the Header component with img tag", () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find("img").length).toBe(1);
    });

    it("should render the Header component with h1 tag", () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find("h1").length).toBe(1);
    });

    it("should render the Header component with h1 tag and text", () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find("h1").text()).toBe("School dashboard");
    });

    it("should render the Header component with img tag and alt", () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find("img").prop("alt")).toBe("Helberton School");
    });
});
