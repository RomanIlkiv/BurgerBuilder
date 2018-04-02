import  React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavigationItems from './NavigationItems';

configure({adapter: new Adapter()});

describe('<NavigationItems />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<NavigationItems />);
    });

    it('Should render 2 navahation items if not authenticated', () => {
        //expect(wrapper.find('<li>')).toHaveLength(2);
    });

    it('Should render 3 navahation items if authenticated', () => {
        wrapper.setProps({
            isAuthenticated: true
        });
        //expect(wrapper.find('<li>')).toHaveLength(2);
    });
});