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
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  // Função para formatar o preço no padrão brasileiro
  function formatPrice(price: number): string {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    });
  }

  return (
    <section className="cart" id="cart_model">
      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <div key={index} className="cart_item">
            <img src={item.image} alt={item.name} />
            <div className="cart_info">
              <p>{item.name}</p>
              {/* Formatação de preço individual */}
              <span>1x {formatPrice(item.price)}</span>
              <button onClick={() => removeFromCart(index)}>
                <IoBagRemove />
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Carrinho vazio!</p>
      )}

      {/* Exibindo o total formatado */}
      <div className="totalPrice">
        <h3>Total: {formatPrice(calculateTotal())}</h3>
      </div>
    </section>
  );
}

export default Cart;
