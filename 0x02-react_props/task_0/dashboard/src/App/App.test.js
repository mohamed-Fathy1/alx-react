import React from "react";
import { shallow } from 'enzyme';
import App from './App';

describe('Test App Compunent', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<App />);
        expect(wrapper).toMatchSnapshot();
    });
});
