import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";

const listNotifications = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", html: getLatestNotification() },
];

describe("Test Notifications Component", () => {

    beforeEach(() => {
        StyleSheetTestUtils.suppressStyleInjection();
    });

    it("should render Notifications component", () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.exists()).toBe(true);
    });

    it("should render Notifications component with unordered list", () => {
        const wrapper = shallow(<Notifications />);
        const ul = wrapper.find("ul");
        expect(ul).toBeDefined();
    });

    it('should render menu item when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('div.menuItem')).toHaveLength(1);
    });

    it('should render Notifications when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('div.Notifications')).toHaveLength(1);
    });

    it('should not render Notifications when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />);
        expect(wrapper.find('div.Notifications')).toHaveLength(0);
    });

    it('should render menu item when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('div.menuItem')).toHaveLength(1);
    });

    it("renders Notification component without crashing", () => {
        const wrapper = shallow(<Notifications />);

        expect(wrapper).toBeDefined();
    });

    it("renders correct list items", () => {
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
        expect(wrapper.find("ul").children()).toHaveLength(listNotifications.length + 1);
        wrapper.find("ul").forEach((node) => {
            expect(node.equals(<NotificationItem />));
        });
        expect(wrapper.find("ul").childAt(1).html()).toEqual('<li data-notification-type="default">New course available</li>');
        expect(wrapper.find("ul").childAt(2).html()).toEqual('<li data-notification-type="urgent">New resume available</li>');
        expect(wrapper.find("ul").childAt(3).html()).toEqual(`<li data-notification-type="urgent">${getLatestNotification()}</li>`);
    });

    it("renders correct text", () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);

        expect(wrapper.contains(<p>Here is the list of notifications</p>)).toBe(false);
    });

    it("displays menu item when displayDrawer is false", () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />);

        expect(wrapper.find("div.menuItem").exists()).toBe(true);
        expect(wrapper.find("div.menuItem").html()).toEqual('<div class="menuItem">Your notifications</div>');
    });

    it("does not display notifications when displayDrawer is false", () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />);

        expect(wrapper.find("div.Notifications").exists()).toBe(false);
    });

    it("does not display menuItem when displayDrawer is true", () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);

        expect(wrapper.find("div.menuItem").exists()).toBe(true);
    });

    it("displays Notifications when displayDrawer is true", () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);

        expect(wrapper.find("div.Notifications").exists()).toBe(true);
    });

    it("renders correctly when listCourses is not passed", () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);

        expect(wrapper.containsMatchingElement(<li data-notification-type="default">No new notification for now</li>));
    });

    it("renders correctly when empty array is passed", () => {
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);

        expect(wrapper.containsMatchingElement(<li data-notification-type="default">No new notification for now</li>));
    });

    it('renders "No new notifications for now" instead of "Here is the list of notifications" when listNotifications is empty', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);

        expect(wrapper.containsMatchingElement(<p>Here is the list of notifications</p>)).toBe(false);

        expect(wrapper.containsMatchingElement(<li data-notification-type="default">No new notification for now</li>));
    });
});

describe("onclick event behaves as it should", () => {
    it("should call console.log", () => {
        const wrapper = shallow(<Notifications />);
        const spy = jest.spyOn(console, "log").mockImplementation();

        wrapper.instance().markAsRead = spy;
        wrapper.instance().markAsRead(1);
        expect(wrapper.instance().markAsRead).toBeCalledWith(1);
        expect(spy).toBeCalledTimes(1);
        expect(spy).toBeCalledWith(1);
        spy.mockRestore();
    });
});

describe("Testing Notifications Component Drawer Display handlers ", () => {
    let wrapper;

    beforeEach(() => {
        StyleSheetTestUtils.suppressStyleInjection();
        wrapper = mount(<Notifications handleDisplayDrawer={jest.fn()} handleHideDrawer={jest.fn()} />);
    });

    it("verify that clicking on the menu item calls handleDisplayDrawer", () => {
        (wrapper.find('div').at(0)).simulate('click');
        expect(wrapper.props().handleDisplayDrawer).toBeCalled();
    });

    it("verify that clicking on the button calls handleHideDrawer", () => {
        wrapper.setProps({ displayDrawer: true });
        (wrapper.find('button').at(0)).simulate('click');
        expect(wrapper.props().handleHideDrawer).toBeCalled();
    });
});
