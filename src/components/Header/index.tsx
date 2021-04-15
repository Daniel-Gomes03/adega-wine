import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';

import * as S from './styles';
import { useCart } from '../../hooks/useCart';
import logo from '../../assets/images/logo.png';

const Header = (): JSX.Element => {
  const { cart } = useCart();
  const cartSize = cart.length;

  return (
    <S.Container>
      <Link to="/">
        <img src={logo} alt="Adega Wine" />
      </Link>

      <S.Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>
            {cartSize === 1 ? `${cartSize} item` : `${cartSize} itens`}
          </span>
        </div>
        <MdShoppingBasket size={36} color="#191920" />
      </S.Cart>
    </S.Container>
  );
};

export default Header;
