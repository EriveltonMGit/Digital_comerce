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
import Page_9 from "./Templates/Page_9/Page_9";

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

  // Estado para controlar a visibilidade das mensagens
  const [messageCartVisible, setMessageCartVisible] = useState(false);
  const [messageRemoveCartVisible, setMessageRemoveCartVisible] = useState(false);

  // Função para adicionar item ao carrinho
  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => [
      ...prevItems,
      item, // Mantém o preço como número
    ]);

    // Exibir mensagem de sucesso ao adicionar o item
    setMessageCartVisible(true);

    // Ocultar a mensagem após 4 segundos
    setTimeout(() => {
      setMessageCartVisible(false);
    }, 4000);
  };

  // Função para remover item do carrinho
  const removeCartItems = (index: number) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));

    // Exibir mensagem de sucesso ao remover o item
    setMessageRemoveCartVisible(true);

    // Ocultar a mensagem após 4 segundos
    setTimeout(() => {
      setMessageRemoveCartVisible(false);
    }, 4000);
  };

  return (
    <section>
      <Nav />
      <Menagem />
      <MensagemProducts />
      
      {/* Mensagens de sucesso */}
      {messageCartVisible && (
        <div id="mensagemCartProdutos" style={{ display: "flex" }}>
          Produto adicionado ao carrinho!
        </div>
      )}
      {messageRemoveCartVisible && (
        <div id="mensagemRemoveCartProdutos" style={{ display: "flex" }}>
          Produto removido do carrinho!
        </div>
      )}
      
      <Cart cartItems={cartItems} removeFromCart={removeCartItems} />
      <Page_1 />
      <MiniCards addToCart={addToCart} />
      <Page_2 />
      <ProductCarousel addToCart={addToCart} />
      <Page_3 addToCart={addToCart} />
      <Page_4 />
      <Page_5 addToCart={addToCart} />
      <Page_6 addToCart={addToCart} />
      <Page_7 addToCart={addToCart} />
      <Page_8 />
      <Page_9 addToCart={addToCart} />
    </section>
  );
}
