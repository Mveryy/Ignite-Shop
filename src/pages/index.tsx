import Image from "next/image"
import { styled } from "../styles"
import { HomeContainer, Product } from "../styles/pages/home"

import camiseta1 from '../assets/Variant6.png'
import camiseta2 from '../assets/Variant7.png'
import camiseta3 from '../assets/Variant8.png'

const Button = styled('button', {
  backgroundColor: 'PeachPuff'
})

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={camiseta1} width={520} height={480} alt=""/>
        {/* <Image src={camiseta2} width={520} height={480} alt=""/> */}
        {/* <Image src={camiseta3} width={520} height={480} alt=""/> */}
        <footer>
          <strong></strong>
          <span></span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
