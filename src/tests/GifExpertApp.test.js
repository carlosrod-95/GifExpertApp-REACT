import { shallow } from "enzyme"
import '@testing-library/jest-dom';
import React from 'react';
import { GifExpertApp } from "../GifExpertApp";

describe('Pruebas en GifExpertApp', () => {


    test('Debe de mostrar el componente adecuadamente', () => {
        const wrapper = shallow(<GifExpertApp/>)
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe de mostrar una lista de categorías', () => {
        const categories = ['One Punch', 'Dragon Ball'];
        const wrapper = shallow(<GifExpertApp deafultCategories={categories}/>)

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    })
    
    
});
