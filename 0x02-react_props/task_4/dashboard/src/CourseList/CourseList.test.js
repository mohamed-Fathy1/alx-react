import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';

describe('<CourseListRow />', () => {
    it('renders CourseList component without crashing', () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.exists());
    });

    it('renders the 5 different rows correctly', () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.find('CourseListRow')).toHaveLength(5);
    });
});


