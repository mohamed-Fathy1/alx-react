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
        expect(wrapper.find('p').text()).toContain(getFullYear().toString());
    });

    it('renders the correct text', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.find('p').text()).toContain(getFooterCopy());
    });
});

describe('Testing Footer Component context and state', () => {
	beforeEach(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it('Tests that there is no link rendered when user is logged out within context', () => {
		const context = {
			user: {
				email: '',
				password: '',
				isLoggedIn: false
			}
		}

		const wrapper = mount(
			<AppContext.Provider value={context}>
				<Footer />
			</AppContext.Provider>
		)

		expect(wrapper.find('a').length).toBe(0);
		expect(wrapper.find('a').exists()).toBe(false);
		expect(wrapper.text()).not.toContain('Contact us');

		wrapper.unmount();
	})

	it('Tests that there is a link rendered when user is logged in within context', () => {
		const context = {
			user: {
				email: '',
				password: '',
				isLoggedIn: true
			}
		}

		const wrapper = mount(
			<AppContext.Provider value={context}>
				<Footer />
			</AppContext.Provider>
		)

		expect(wrapper.find('a').length).toBe(1);
		expect(wrapper.find('a').exists()).toBe(true);
		expect(wrapper.text()).toContain('Contact us');

		wrapper.unmount();
	})
})
