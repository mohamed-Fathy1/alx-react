import React from "react";
import { shallow } from 'enzyme';
import App from './App';

describe('Test App Compunent', () => {
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
});
