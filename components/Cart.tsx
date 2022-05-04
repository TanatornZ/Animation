import React from 'react'
import {TiShoppingCart} from 'react-icons/ti'
type Props = {}

function Cart({}: Props) {
  return (
    <div className="bg-orange-600 p-2 rounded-md absolute bottom-0 -right-10 cart-content transition">
        <TiShoppingCart size='20' />
    </div>
  )
}

export default Cart