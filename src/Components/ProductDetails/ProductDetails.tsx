/* eslint-disable @typescript-eslint/no-unused-vars */
import { useParams } from "react-router-dom";
import products, { CartItem } from "../products"; // Ajuste o caminho conforme necessário
import "./ProductsDetails.css";

// IMPORT NAVBAR
import Nav from "../../Templates/Nav/Nav";
import CartDevice from "../../assets/CartDevice/CartDevice";
import { useState, useEffect } from "react";

interface ProductCarouselProps {
  addToCart: (item: CartItem) => void; // Função para adicionar ao carrinho
}

function ProductDetails({ addToCart }: ProductCarouselProps) {
  // Verifica se o preço tem casas decimais e aplica .toFixed(3) se necessário
  function formatPrice(price: number): string {
    return price.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  const { id, name } = useParams<{ id: string; name: string }>();

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

  // Verifica se o id e o name são válidos
  if (!id || !name) {
    return <p>Produto não encontrado.</p>;
  }

  // Decodificando o nome do produto, pois ele foi codificado com encodeURIComponent
  const decodedName = decodeURIComponent(name);
  const product = products.find(
    (p: CartItem) => p.id === id && p.name === decodedName
  );

  if (!product) {
    return <p>Produto não encontrado.</p>;
  }

  // Função para adicionar item ao carrinho
  const handleAddToCart = (product: CartItem) => {
    setCartItems((prevItems) => {
      const updatedCart = [...prevItems, product]; // Adiciona o produto ao carrinho
      return updatedCart;
    });

    // Exibir a nova mensagem de sucesso (div com id #addedToCartMessage)
    const messageElement = document.getElementById("addedToCartMessage");
    if (messageElement) {
      messageElement.style.display = "flex"; // Exibe a mensagem
      setTimeout(() => {
        messageElement.style.display = "none"; // Esconde após 4 segundos
      }, 4000);
    }
  };

  return (
    <section className="produtos_details">
      {/* Mensagem de sucesso, visível ao adicionar ao carrinho */}
      <span id="addedToCartMessage" className="added-to-cart-message">
        Produto adicionado ao carrinho! :)
      </span>

      <Nav />

      {/* Passando os itens do carrinho para o componente Cart */}
      <CartDevice cartItems={cartItems} removeFromCart={() => {}} />
{/* AQUI FICA AS IMAGENS DOS PRODOs */}
<div className="mini_images">
  {product.miniImages && product.miniImages.length > 0 ? (
    product.miniImages.map((miniImage, index) => (
      <div key={index} className="card_img_products_mini">
        <img 
          src={miniImage} 
          alt={`${product.name} - Mini ${index + 1}`} 
        />
      </div>
    ))
  ) : (
    <div className="card_img_products_mini">
      <img 
        src="https://via.placeholder.com/150" 
        alt="Placeholder" 
      />
    </div>
  )}
</div>


      <div className="product-details-container">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="card_descricao">
        <div className="area-price">
          <h1>{product.name}</h1>
          <p className="estado">Estado: {product.estado}</p>
          <b>Desconto: {product.discount || "Sem desconto"}</b>
          <p className="avista">À vista</p>
          <p className="price">Por: R$ {formatPrice(product.price)}</p>
          <p className="frete">
            Entrega: Frete Grrátis{" "}
            <img src={product.delivery} alt="Frete grátis" />
          </p>
        </div>
        <div className="desc_products">
          <p>{product.descricao}</p>
          <button
            className="btn_cart"
            onClick={() => {
              handleAddToCart(product); // Chama a função para adicionar ao carrinho
            }}
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
