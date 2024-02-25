import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('<NotificationItem />', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<NotificationItem />);
        expect(wrapper.exists()).toEqual(true);
    });

    it('renders with correct type and value', () => {
        const wrapper = shallow(<NotificationItem type='default' value='test' />);
        expect(wrapper.html()).toEqual('<li data-notification-type="default">test</li>');
    });

    it('renders with correct type and value', () => {
        const wrapper = shallow(<NotificationItem type='urgent' value='test' />);
        expect(wrapper.html()).toEqual('<li data-notification-type="urgent">test</li>');
    });

    it('renders with correct html', () => {
        const wrapper = shallow(<NotificationItem html='<u>test</u>' />);
        expect(wrapper.html()).toEqual('<li data-notification-type="urgent"><u>test</u></li>');
    });
});

describe("onclick event behaves as it should", () => {
    it("should call console.log", () => {
        const wrapper = shallow(<NotificationItem />);
        const spy = jest.fn();

        wrapper.setProps({ value: "test item", markAsRead: spy, id: 1 });
        wrapper.find("li").props().onClick();
        expect(spy).toBeCalledTimes(1);
        expect(spy).toBeCalledWith(1);
        spy.mockRestore();
    });
});
