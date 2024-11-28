import { useState, useEffect } from "react";
import Nav from "./Templates/Nav/Nav";
import Page_1 from "./Templates/Page_1/Page_1";
import MiniCards from "./Components/MiniCards/Mini_Cards";
import Cart from "./Cart/Cart";
import Page_2 from "./Templates/Page_2/Page_2";
import ProductCarousel from "./Components/ProductCarousel/ProductCarousel";
import Menagem from "./Components/MensagemAviso/MensagemFavoritos";
import MensagemProducts from "./Components/MensagemProducts/MensagemProdutos";
import Page_3 from "./Templates/Page_3/Page_3";
import Page_4 from "./Templates/Page_4/Page_4";
import Page_5 from "./Templates/Page_5/Page_5";
import Page_6 from "./Templates/Page_6/Page_6";
import Page_7 from "./Templates/Page_7/Page_7";
import Page_8 from "./Templates/Page_8/Page_8";

// Definindo a interface para os itens do carrinho
interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
}

export default function App() {
  // Carregar itens do Local Storage diretamente no estado inicial
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) {
      return JSON.parse(savedCart); // Mantém como número
    }
    return [];
  });

  // Atualizar o Local Storage sempre que o estado do carrinho mudar
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);




 

  // Função para adicionar item ao carrinho
  const mensagemCartProdutos = document.getElementById(`mensagemCartProdutos`)
  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => [
      ...prevItems,
      item, // Mantém o preço como número
    ]);


    if( mensagemCartProdutos){
    mensagemCartProdutos.style.display = 'flex'

    setTimeout(()=>{
  mensagemCartProdutos.style.display = 'none'
    }, 4000)
    }


  };

// Função para remover item do carrinho
  const mensagemRemoveCartProdutos= document.getElementById(`mensagemRemoveCartProdutos`)
 
  const removeCartItems = (index: number) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
    

    if( mensagemRemoveCartProdutos){
      mensagemRemoveCartProdutos.style.display = 'flex'
      
      setTimeout(()=>{
        mensagemRemoveCartProdutos.style.display = 'none'
      }, 4000)
      }
  


  };

  return (
    <section>
      <Nav />
      <Menagem/>
      < MensagemProducts/>
      <Cart cartItems={cartItems} removeFromCart={removeCartItems} />
      <Page_1 />
      <MiniCards addToCart={addToCart} />
      <Page_2 />
      <ProductCarousel addToCart={addToCart} />
      <Page_3 addToCart={addToCart}/>
      <Page_4/>
      <Page_5 addToCart={addToCart}/>
      <Page_6 addToCart={addToCart} />
      <Page_7 addToCart={addToCart}/>
      <Page_8/>
    </section>
  );
}
