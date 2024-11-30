import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetails from '../../Components/ProductDetails/ProductDetails';
import App from '../../App';
import { useState, useEffect } from "react";
interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
}
const RoutesComponent = () => {
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



  // Função para adicionar produto ao carrinho, que vem de App 
  const productsDetailsAdd = document.getElementById(`productsDetailsAdd`)
  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => [
      ...prevItems,
      item, // Mantém o preço como número
    ]);


    if( productsDetailsAdd){
      productsDetailsAdd.style.display = 'flex'
      productsDetailsAdd.style.position = 'absolute'
    
      
    setTimeout(()=>{
      productsDetailsAdd.style.display = 'none'
    }, 4000)
    }
  };



  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        {/* Passando a função addToCart para ProductDetails */}
        <Route path="/product/:id/:name" element={<ProductDetails addToCart={addToCart} />} />
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
