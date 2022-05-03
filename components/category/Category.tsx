import React from 'react'
import CategoryItme from './CategoryItme'
import {category} from '../../Json/category'
type Props = {}

function Category({}: Props) {

  

  return (
    <div className="py-16">
        <p className='text-center text-white font-bold text-3xl'>Favorite Scare <br/> Category</p>
        <div className='grid grid-cols-2 gap-10 p-4'>
            {category.map((item) => (
              <CategoryItme key={item.id} title={item.title} description={item.description} img={item.img} />
            ))}
        </div>
    </div>
  )
}

export default Category