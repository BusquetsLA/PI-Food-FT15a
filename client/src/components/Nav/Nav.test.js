import React from 'react';
import { Link } from 'react-router-dom';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Nav from './Nav';
import SearchBar from '../SearchBar/SearchBar';

configure({adapter: new Adapter()});

describe('<Nav />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Nav />)
  })
  it('It should render the <SearchBar /> component', () => {
    expect(wrapper.find(SearchBar)).toHaveLength(1);
  });
  it('It should render TWO <Link />', () => {
    expect(wrapper.find(Link)).toHaveLength(2);
  });
  it('The first link should have the text "HOME" and reroute to "/home".', () => {
    expect(wrapper.find(Link).at(0).prop('to')).toEqual('/home');
    expect(wrapper.find(Link).at(0).text()).toEqual(' HOME ');
  });
  it('The second link should have the text "CREATE RECIPE" and reroute to "/create"', () => {
    expect(wrapper.find(Link).at(1).prop('to')).toEqual('/create');
    expect(wrapper.find(Link).at(1).text()).toEqual(' CREATE RECIPE ');
  });
});