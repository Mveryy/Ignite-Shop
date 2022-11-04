import Image from "next/image"
import { styled } from "../styles"
import { HomeContainer, Product } from "../styles/pages/home"
import {useKeenSlider} from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import camiseta1 from '../assets/Variant6.png'
import camiseta2 from '../assets/Variant7.png'
import camiseta3 from '../assets/Variant8.png'
import { stripe } from "../lib/stripe"
import { GetServerSideProps } from "next"
import Stripe from "stripe"

interface HomeProps {
  products: {
    id: string;
    name: string
    imageUrl: string
    price: number
  }[]
}

export default function Home({products}: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
     {products.map(product => {
      return (
        <Product className="keen-slider__slide" key={product.id}>
        <Image src={product.imageUrl} width={520} height={480} alt=""/>
        <footer>
          <strong>{product.name}</strong>
          <span>{product.price}</span>
        </footer>
      </Product>
      )
     })}
    </HomeContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount / 100,
    }
  })
  return {
    props: {
      products
    }
  }
}
