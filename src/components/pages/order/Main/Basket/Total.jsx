import styled from "styled-components"
import { theme } from "../../../../../theme"
import Header from "./Header.jsx"
import { formatPrice } from "../../../../../utils/maths.jsx"
import OrderContext from "../../../../../context/OrderContext.jsx"
import { useContext } from "react"
import { calculateSumToPay } from "./helper.jsx"
import CasinoEffect from "../../../../reusable/CasinoEffect.jsx"
export default function Total() {
  const { basket, catalog } = useContext(OrderContext)
  const sumToPay = calculateSumToPay(basket, catalog)

  return (
    <Header>
      <TotalStyled>
        <span className="total">Total</span>
        <CasinoEffect count={formatPrice(sumToPay)} className={"amount"} />
      </TotalStyled>
    </Header>
  )
}

const TotalStyled = styled.div`
  color: ${theme.colors.primary};
  justify-content: space-between;
  display: flex;
  align-items: center;
  height: 100%;
  font-size: ${theme.fonts.size.P4};
  font-family: ${theme.fonts.family.stylish};
  font-weight: bold;
`
