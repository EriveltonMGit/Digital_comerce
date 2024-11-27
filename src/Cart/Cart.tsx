import "./Cart.css";
import { IoBagRemove } from "react-icons/io5";

// Definindo a interface para os itens no carrinho
interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface CartProps {
  cartItems: CartItem[];
  removeFromCart: (index: number) => void;
}

function Cart({ cartItems, removeFromCart }: CartProps) {
  // Função para calcular o total dos produtos
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (parseFloat(item.price.toString()) || 0), 0);
  };

  return (
    <section className="cart" id="cart_model">
      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <div key={index} className="cart_item">
            <img src={item.image} alt={item.name} />
            <div className="cart_info">
              <p>{item.name}</p>
              <span>1x R$ : {item.price.toFixed(2)}</span>
              <button onClick={() => removeFromCart(index)}>
                <IoBagRemove />
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Carrinho vazio!</p>
      )}

      {/* Exibindo o total diretamente */}
      <div className="totalPrice">
        <h3>Total: R$ {calculateTotal().toFixed(2)}</h3>
      </div>
    </section>
  );
}

export default Cart;
