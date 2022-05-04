import React from 'react'
import TitleSection from '../TitleSection'
import {trickOrTreat} from '../../Json/trickOrTreat'
import Item from '../ProductItem'
type Props = {}

function TrickOrTreat({}: Props) {
  return (
    <div className='py-6 px-5'>
        <TitleSection title1="Trick ot treat" />
        <div className="grid gap-6 grid-cols-2 mt-12 ">
            {trickOrTreat.map((item) => (
                <Item key={item.id} data={item} />
            ))}
        </div>
    </div>
  )
}

export default TrickOrTreat