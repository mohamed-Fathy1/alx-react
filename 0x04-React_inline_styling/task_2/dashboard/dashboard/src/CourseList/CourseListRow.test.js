import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('<CourseListRow />', () => {
    it('renders a row with two cells when passed textFirstCell and textSecondCell', () => {
        const wrapper = shallow(<CourseListRow textFirstCell="First Cell" textSecondCell="Second Cell" />);
        const tds = wrapper.find('td');
        expect(wrapper.find('tr')).toHaveLength(1);
        expect(tds).toHaveLength(2);
        expect(tds.at(0).text()).toEqual('First Cell');
        expect(tds.at(1).text()).toEqual('Second Cell');
    });

    it('renders a row with one cell when passed only textFirstCell', () => {
        const wrapper = shallow(<CourseListRow textFirstCell="First Cell" />);
        const tds = wrapper.find('td');
        expect(wrapper.find('tr')).toHaveLength(1);
        expect(tds).toHaveLength(2);
        expect(tds.at(0).text()).toEqual('First Cell');
    });

    it('check to test the component renders one cell with colspan = 2 when textSecondCell does not exist' , () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="First Cell" />);
        const ths = wrapper.find('th');
        expect(wrapper.find('tr')).toHaveLength(1);
        expect(ths).toHaveLength(1);
        expect(ths.at(0).text()).toEqual('First Cell');
        expect(ths.at(0).props().colSpan).toEqual('2');
    });

    it('check to test the component renders two cells when textSecondCell is present' , () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="First Cell" textSecondCell="Second Cell" />);
        const ths = wrapper.find('th');
        expect(wrapper.find('tr')).toHaveLength(1);
        expect(ths).toHaveLength(2);
        expect(ths.at(0).text()).toEqual('First Cell');
        expect(ths.at(1).text()).toEqual('Second Cell');
    });
});
