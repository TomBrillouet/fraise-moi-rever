import styled from "styled-components"
import { theme } from "../../../../theme"
import { FaReact } from "react-icons/fa"

export default function Basket() {
  return (
    <BasketStyled>
      <div className="header">
        <div className="total">Total</div>
        <div className="sum">0,00€</div>
      </div>
      <div className="main">Votre commande est vide.</div>
      <div className="footer">
        Codé avec <FaReact /> par Tom Brillouet
      </div>
    </BasketStyled>
  )
}

const BasketStyled = styled.div`
  display: grid;
  grid-template-rows: 1fr 10fr 1fr;
  font-family: ${theme.fonts.family.stylish};

  .header {
    background-color: ${theme.colors.background_dark};
    color: ${theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    font-size: ${theme.fonts.size.P4};

  }

  .main {
    background-color: ${theme.colors.background_white};
    box-shadow: 0px 0px 20px 0px #00000033 inset;
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.greyBlue};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .footer {
    background-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
    text-align: center;
    font-size: ${theme.fonts.size.P2};
    align-content: center;

    svg {
        color:#61DBFB
    }
`
