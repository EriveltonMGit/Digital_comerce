import { useState, useEffect } from "react";
import Nav from "../../Templates/Nav/Nav";
import "./Produtos_Selecionados.css";

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

function Produtos_Selecionados() {
  // Recuperar os itens do carrinho do localStorage
  const savedCart = localStorage.getItem("cartItems");
  const [cartItems, setCartItems] = useState<CartItem[]>(
    savedCart
      ? JSON.parse(savedCart).map((item: CartItem) => ({
          ...item,
          quantity: item.quantity || 1,
        }))
      : []
  );

  // Estado para controlar exibição da tela de sucesso
  const [showSuccessScreen, setShowSuccessScreen] = useState(false);

  // Atualizar o Local Storage sempre que o estado do carrinho mudar
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Função para formatar o preço no padrão brasileiro
  const formatPrice = (price: number): string => {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    });
  };

  // Atualizar quantidade do produto
  const updateQuantity = (index: number, increment: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item, i) => {
        if (i === index) {
          const newQuantity = Math.max(item.quantity + increment, 1);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  // Remover produto do carrinho
  const removeItem = (index: number) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  // Finalizar compra
  const finalizarCompra = () => {
    // setCartItems([]); 
    // localStorage.removeItem("cartItems"); 
    setShowSuccessScreen(true); // Exibir a tela de sucesso
  };

  return (
    <>
      {showSuccessScreen && (
        <div className="success_screen">
          <div className="success_message">
            <h1>Pedido realizado com sucesso!</h1>
            <p>Obrigado por sua compra! :)</p>
            <button onClick={() => setShowSuccessScreen(false)} >Voltar</button>
          </div>
        </div>
      )}
      <Nav />
      <section className="produtos_Selecionados">
        <div className="table_produtos">
          {cartItems.length > 0 ? (
            <div className="produtos_lista">
              {cartItems.map((item, index) => (
                <div  key={`${item.id}-${index}`} className="produto_item">
                  <img src={item.image} alt={item.name} />
                  <div className="produto_detalhes">
                    <p className="name_">{item.name}</p>
                    <span>Preço unitário: {formatPrice(item.price)}</span>
                    <div className="quantidade_controles">
                      <button onClick={() => updateQuantity(index, -1)}>-</button>
                      <input
                        type="number"
                        value={item.quantity}
                        readOnly
                        className="quantidade_input"
                      />
                      <button onClick={() => updateQuantity(index, 1)}>+</button>
                    </div>
                    <p className="preco_geral">
                      Total:{" "}
                      <strong>{formatPrice(item.price * item.quantity)}</strong>
                    </p>
                    <button
                      className="remover_produto"
                      onClick={() => removeItem(index)}
                    >
                      Remover
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="mensagem_Carinho">Seu carrinho está vazio!</p>
          )}
        </div>
        {/* área para total e ações */}
        <div className="area_preco_pagar">
          <h3>
            Total:{" "}
            {formatPrice(
              cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
            )}
          </h3>
          <button className="finalizar_compra" onClick={finalizarCompra}>
            Finalizar Compra
          </button>
        </div>
      </section>
    </>
  );
}

export default Produtos_Selecionados;
