import type { NextPage } from 'next'
import { MyCart } from '../components/MyCart'
import product from '../api/abaixo-10.json'
import { ICart } from '../dto/ICart'

const Home: NextPage = () => {
  const cart: ICart = product as any
  return (
    <>
      <MyCart cart={cart} />
    </>
  )
}

export default Home
