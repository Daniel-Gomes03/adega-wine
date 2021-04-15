import React from 'react';
import {
  MdDelete,
  MdAddCircleOutline,
  MdRemoveCircleOutline,
} from 'react-icons/md';

import { useCart } from '../../hooks/useCart';
import { formatPrice } from '../../util/format';
import * as S from './styles';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  amount: number;
}

const Cart = (): JSX.Element => {
  const { cart, removeProduct, updateProductAmount } = useCart();

  const cartFormatted = cart.map(product => ({
    ...product, priceFormatted: formatPrice(product.price), subtotal: formatPrice(product.price * product.amount)
  }))

  const total =
    formatPrice(
      cartFormatted.reduce((sumTotal, product) => {
        sumTotal += product.price * product.amount

        return sumTotal
      }, 0)
    )

    function handleProductIncrement(product: Product) {
      const IncrementArguments = {
        productId: product.id,
        amount: product.amount + 1
      }
      updateProductAmount(IncrementArguments)
    }

    function handleProductDecrement(product: Product) {
      const IncrementArguments = {
        productId: product.id,
        amount: product.amount - 1
      }
      updateProductAmount(IncrementArguments)
    }
  
    function handleRemoveProduct(productId: number) {
      removeProduct(productId)
    }
  return (
    <S.Container>
      <S.ProductTable>
      <thead>
          <tr>
            <th aria-label="product image" />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th aria-label="delete icon" />
          </tr>
        </thead>
        <tbody>
          {cartFormatted.map(product => (
            <tr key={product.id}>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.priceFormatted}</span>
              </td>
              <td>
                <div>
                  <button
                    type="button"
                    disabled={product.amount <= 1}
                    onClick={() => handleProductDecrement(product)}
                  >
                    <MdRemoveCircleOutline size={20} />
                  </button>
                  <input
                    type="text"
                    readOnly
                    value={product.amount}
                  />
                  <button
                    type="button"
                    onClick={() => handleProductIncrement(product)}
                  >
                    <MdAddCircleOutline size={20} />
                  </button>
                </div>
              </td>
              <td>
                <strong>{product.subtotal}</strong>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => handleRemoveProduct(product.id)}
                >
                  <MdDelete size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </S.ProductTable>
    </S.Container>
  );
};

export default Cart;