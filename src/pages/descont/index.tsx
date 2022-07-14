import type { NextPage } from 'next'
import { MyCart } from '../../components/MyCart'
import { ICart } from '../../dto/ICart'
import product from '../../api/acima-10.json'


const Home: NextPage = () => {
  const cart: ICart = product as any
  return (
    <>
      
      <MyCart cart={cart} />
    </>
  )
}

export default Home
