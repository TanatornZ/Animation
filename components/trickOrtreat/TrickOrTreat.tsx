import React from 'react'
import TitleSection from '../TitleSection'
import {trickOrTreat} from '../../Json/trickOrTreat'
import Item from './Item'
type Props = {}

function TrickOrTreat({}: Props) {
  return (
    <div className='p-6'>
        <TitleSection title1="Trick ot treat" />
        <div className="grid gap-6 grid-cols-2 mt-12 ">
            {trickOrTreat.map((item) => (
                <Item key={item.id} data={item}/>
            ))}
        </div>
    </div>
  )
}

export default TrickOrTreat