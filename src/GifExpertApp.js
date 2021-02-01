
import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({deafultCategories = []}) => {

    // const [categories, setCategories] = useState(['One Punch']);
    const [categories, setCategories] = useState(deafultCategories);

    // const handleAdd = () => {
    //     setCategories( [...categories, 'HunterXHunter'] );
    // }

    return (
      <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories = {setCategories}/>
        <hr/>

        <ol>
            {
                categories.map(category => 
                   <GifGrid 
                      key={category}
                      category={category}/>
                  )
            }
        </ol>
      </>
    )
  }