import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

describe("Header", () => {

    beforeEach(() => {
        StyleSheetTestUtils.suppressStyleInjection();
    });

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
        expect(wrapper.find("img").prop("alt")).toBe("Holberton Logo");
    });

    it(`Tests that logoutSection is not rendered with default context values`, () => {
        const context = {
            user: {
                email: '',
                password: '',
                isLoggedIn: false
            },
            logOut: jest.fn()
        }

        wrapper = mount(
            <AppContext.Provider value={context}>
                <Header />
            </AppContext.Provider>
        )

        expect(wrapper.find('#logoutSection').length).toBe(0);
        expect(wrapper.find('#logoutSection').exists()).toBe(false);
        wrapper.unmount();
    })

    it(`Tests that logoutSection is rendered with context values`, () => {
        const context = {
            user: {
                email: 'test@test.com',
                password: '123',
                isLoggedIn: true
            },
            logOut: jest.fn()
        }

        wrapper = mount(
            <AppContext.Provider value={context}>
                <Header />
            </AppContext.Provider>
        )

        expect(wrapper.find('#logoutSection').length).toBe(1);
        expect(wrapper.find('#logoutSection').exists()).toBe(true);
        wrapper.unmount();
    })

    it(`Verifies that the logOut function is called when clicking on logOut link`, () => {
        const context = {
            user: {
                email: 'test@test.com',
                password: '123',
                isLoggedIn: true
            },
            logOut: jest.fn()
        }

        const spy = jest.spyOn(context, 'logOut');

        wrapper = mount(
            <AppContext.Provider value={context}>
                <Header />
            </AppContext.Provider>
        )

        wrapper.find('a').simulate('click');

        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledTimes(1);
        wrapper.unmount();
    })
});
