import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;

  a {
    transition: opacity 0.2s;

    img {
      max-width: 185px;
      max-height: 50px;
    }

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #191920;

    }
    
    span {
      font-size: 12px;
      color: #333;
    }

    @media(max-width: 411px) {
      strong, span {
        display: none;
      }
    }
  }
`;