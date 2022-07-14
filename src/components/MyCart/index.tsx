/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ICart } from "../../dto/ICart";
import { Container } from "./styled";

interface IMyCart {
    cart: ICart
}


export function MyCart({ cart }: IMyCart) {
    return (
        <Container>
            <header>
                <nav>
                    <Link href="/">Pagina sem Desconto</Link>
                    <Link href="/descont">Pagina com Desconto</Link>
                </nav>
            </header>
            <div className="container">
                <header>Meu carrinho</header>
                <main>
                    <ul>
                        {cart.items.map((item) => {
                            return (
                                <li key={item.id}>
                                    <main>
                                        <img src={item.imageUrl} alt={item.name} />
                                    </main>

                                    <div>
                                        <h3>{item.quantity} X {item.name}</h3>

                                        <span>
                                            <small>R$ {new Intl.NumberFormat().format(item.price / 100)}</small>
                                            <p>R$ {new Intl.NumberFormat().format(item.sellingPrice / 100)}</p>
                                        </span>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </main>
                <footer>
                    <div>
                        {
                            cart.totalizers.map((item) => {
                                if (item.name === "Total dos Itens") {
                                    return (
                                        <>
                                            <article>
                                                <p>Total:</p>
                                                <strong>
                                                    R$ {new Intl.NumberFormat().format(item.value / 100)}
                                                </strong>
                                            </article>

                                            {item.value > 1000 && (
                                                <>
                                                    <span>
                                                        Parabéns, sua compra tem frete grátis!
                                                    </span>
                                                </>
                                            )
                                            }
                                        </>
                                    )
                                }


                            })
                        }



                    </div>

                    <button>Finalizar compra</button>

                </footer>
            </div>
        </Container>
    )
}