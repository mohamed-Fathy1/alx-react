import React from "react";
import { shallow } from 'enzyme';
import App from './App';

describe('Test App Compunent', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.exists()).toBe(true);
    });

    it('renders a header', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('Header').length).toBe(1);
    });

    it('renders a Login component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('Login').length).toBe(1);
    });

    it('renders a Footer component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('Footer').length).toBe(1);
    });

    it('renders a Notification component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('Notification').length).toBe(1);
    });
});
