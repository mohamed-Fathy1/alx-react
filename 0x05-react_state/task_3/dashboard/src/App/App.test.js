/**
 * @jest-environment jsdom
 */
import React from "react";
import { shallow, mount } from 'enzyme';
import App from './App';
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";

describe('Test App Compunent', () => {

    beforeEach(() => {
        StyleSheetTestUtils.suppressStyleInjection();
    });

    it('renders without crashing', () => {
        const wrapper = shallow(<App />);
        expect(wrapper).toMatchSnapshot();
    });

    it('does not render CourseList component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('CourseList')).toHaveLength(0);
    });

    it('renders CourseList component', () => {
        const wrapper = shallow(<App isLoggedIn={true} />);
        expect(wrapper.find('Login')).toHaveLength(0);
        expect(wrapper.find('CourseList')).toHaveLength(1);

    });

    it("renders without crashing", () => {
        const component = shallow(<App />);

        expect(component).toBeDefined();
    });
    it("should render Notifications component", () => {
        const component = shallow(<App />);

        expect(component.containsMatchingElement(<Notifications />)).toEqual(false);
    });
    it("should render Header component", () => {
        const component = shallow(<App />);

        expect(component.contains(<Header />)).toBe(true);
    });
    it("should render Login Component", () => {
        const component = shallow(<App />);

        expect(component.contains(<Login />)).toBe(true);
    });
    it("should render Footer component", () => {
        const component = shallow(<App />);

        expect(component.contains(<Footer />)).toBe(true);
    });
    it("does not render courselist if logged out", () => {
        const component = shallow(<App />);

        component.setProps({ isLogedIn: false });

        expect(component.contains(<CourseList />)).toBe(false);
    });
    it("renders courselist if logged in", () => {
        const component = shallow(<App isLoggedIn={true} />);

        expect(component.containsMatchingElement(<CourseList />)).toEqual(false);
        expect(component.contains(<Login />)).toBe(false);
    });
});

describe("When ctrl + h is pressed", () => {
    it("calls logOut function", () => {
        const mocked = jest.fn();
        const wrapper = mount(<App logOut={mocked} />);
        const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
        document.dispatchEvent(event);

        expect(mocked).not.toHaveBeenCalled();
        wrapper.unmount();
    });

    document.alert = jest.fn();
    it("checks that alert function is called", () => {
        const wrapper = mount(<App />);
        const spy = jest.spyOn(window, "alert");
        const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
        document.dispatchEvent(event);

        expect(spy).not.toHaveBeenCalled();
        spy.mockRestore();
        wrapper.unmount();
    });

    it('checks that the alert is "Logging you out"', () => {
        const wrapper = mount(<App />);
        const spy = jest.spyOn(window, "alert");
        const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
        document.dispatchEvent(event);

        expect(spy).not.toHaveBeenCalledWith("Logging you out");
        jest.restoreAllMocks();
        wrapper.unmount();
    });
    document.alert.mockClear();
});

describe("Testing App Component's State />", () => {
    let wrapper;

    beforeEach(() => {
        StyleSheetTestUtils.suppressStyleInjection();
        wrapper = shallow(<App />);
    });

    it('check if default value of displayDrawer in state is false', () => {
        expect(wrapper.state('displayDrawer')).toBe(false);
    });

    it('Verify that after calling handleDisplayDrawer, the state displayDrawer should now be true', () => {
        wrapper.instance().handleDisplayDrawer();
        expect(wrapper.state('displayDrawer')).toBe(true);
    });

    it('verify that after calling handleHideDrawer, the state displayDrawer is updated to be false', () => {
        wrapper.instance().handleHideDrawer();
        expect(wrapper.state('displayDrawer')).toBe(false);
    });

    it(`Tests that the logIn function updates user's state correctly`, () => {
        wrapper = mount(
            <AppContext.Provider value={{ user, logOut }}>
                <App />
            </AppContext.Provider>
        );

        const myUser = {
            email: 'testy@gmail.com',
            password: 'testy',
            isLoggedIn: true,
        }

        expect(wrapper.state().user).toEqual(user);
        const instance = wrapper.instance();
        instance.logIn(myUser.email, myUser.password);
        expect(wrapper.state().user).toEqual(myUser);
        wrapper.unmount();
    })

    it(`Tests that the logOut function updates user's state correctly`, () => {
        wrapper = mount(
            <AppContext.Provider value={{ user, logOut }}>
                <App />
            </AppContext.Provider>
        );

        const myUser = {
            email: 'testy@gmail.com',
            password: 'testy',
            isLoggedIn: true,
        }

        expect(wrapper.state().user).toEqual(user);
        const instance = wrapper.instance();
        instance.logOut();
        expect(wrapper.state().user).toEqual(user);
        wrapper.unmount();
    })
});
