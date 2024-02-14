import React from "react";
import { shallow } from 'enzyme';
import Footer from "./Footer";
import { getFullYear, getFooterCopy } from '../utils/utils';

describe('Test Footer component', () => {

    it('renders without crashing', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.exists()).toBe(true);
    });

    it('renders a footer', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.find('.App-footer').exists()).toBe(true);
    });

    it('renders a paragraph', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.find('p').exists()).toBe(true);
    });

    it('renders the correct text', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.find('p').text()).toEqual(`Copyright ${getFullYear()} - ${getFooterCopy()}`);
    });

    it('renders the correct year', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.find('p').text()).toContain(getFullYear());
    });

    it('renders the correct text', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.find('p').text()).toContain(getFooterCopy());
    });
});
