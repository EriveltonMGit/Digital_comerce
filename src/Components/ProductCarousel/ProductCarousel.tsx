import { useRef } from "react";
import "./ProdutosCarosel.css"; // Importando o CSS externo
import { FaHeart } from "react-icons/fa";
// Definindo a interface para o item do carrinho
interface CartItem {
  id: string;
  image: string;
  name: string;
  price: number;
  category: string;
  discount: string;
  delivery: string;
}

interface ProductCarouselProps {
  addToCart: (item: CartItem) => void; // Função para adicionar ao carrinho
}

const products: CartItem[] = [
  {
    id: "5",
    name: "Headset Gamer Redragon Zeus Pro Sem Fio 2.4ghz 7.1 Rgb White",
    image:
      "/img/page_2/produtocts/D_NQ_NP_714891-MLU77135349688_062024-O.webp",
    delivery: "/img/icons/full.png",
    price: 198.69,
    discount: "De R$ 230,00 ",
    category: "Headset",
  },
  {
    id: "6",
    name: "Headset Qcy H3 Anc Adaptativo Bluetooth 5.3 Multiponto 60h Cor Preto",
    image:
      "/img/page_2/produtocts/D_NQ_NP_916173-MLU73338098992_122023-O.webp",
      delivery: "/img/icons/full.png",
    price: 289.9,
    discount: "De R$ 330,00",
    category: "SmartPhones",
  },
  {
    id: "7",
    name: "Fone De Ouvido Gamer Headset Havit H2015d Pc/xbox/ps4/ps5",
    image:
      "/img/page_2/produtocts/D_NQ_NP_980801-MLU77126363818_062024-O.webp",
      delivery: "/img/icons/full.png",
    price: 149.0,
    discount: "De R$ 200,00",
    category: "SmartPhones",
  },
  {
    id: "8",
    name: "Asus Rog Phone 6 256 GB Phantom black 8 GB RAM",
    image:
      "/img/page_2/produtocts/D_NQ_NP_746941-MLU77156916376_072024-O.webp",
      delivery: "/img/icons/full.png",
    price: 6993.0,
    discount: "De R$ 7500,00",
    category: "SmartPhones",
  },
  {
    id: "9",
    name: "Redmagic 9S Pro Dual SIM 256 GB sleet 12 GB RAM",
    image:
      "/img/page_2/produtocts/D_NQ_NP_830945-MLA78791932800_092024-O.webp",
      delivery: "/img/icons/full.png",
    price: 4998,
    discount: "",
    category: "SmartPhones",
  },
  {
    id: "10",
    name: "Caixa De Som Portatil Philco Extreme Pbs220bt Led 220w Cor Preto 110V/220V",
    image:
      "/img/page_2/produtocts/D_NQ_NP_980388-MLU73129945908_122023-O.webp",
      delivery: "/img/icons/full.png",
    price: 431.0,
    discount: "De 500,30",
    category: "SmartPhones",
  },
  {
    id: "11",
    name: "Caixa de Som Bluetooth Portátil Go 4 JBL - Branca",
    image:
      "/img/page_2/produtocts/D_NQ_NP_715293-MLU75930189032_042024-O.webp",
      delivery: "/img/icons/full.png",
    price: 260.0,
    discount: "De R$ 288,00",
    category: "SmartPhones",
  },
  {
    id: "12",
    name: "Notebook Gamer Acer Nitro V15 ANV15-51-57WS Intel Core I5-13420H 8GB RAM 512GB SSD NVIDIA RTX 3050 LINUX",
    image:
      "/img/page_2/produtocts/D_NQ_NP_757417-MLU76569758316_062024-O.webp",
      delivery: "/img/icons/full.png",
    price: 4299.0,
    discount: "De R$ 4690",
    category: "SmartPhones",
  },
  {
    id: "13",
    name: "Notebook Acer Aspire 5 Intel Core I5 12450H 8GB RAM 512GB SSD Windows 11 Home Tela 15,6",
    image:
      "/img/page_2/produtocts/D_NQ_NP_814797-MLU71575027995_092023-O.webp",
      delivery: "/img/icons/full.png",
    price: 3499.0,
    discount: "De R$ 3700",
    category: "SmartPhones",
  },
  {
    id: "14",
    name: "Teclado Gamer Evolut Eg-212 Slender Qwerty Português Brasil Teclas Silenciosas Slim Led Rainbow 3 Modos",
    image:
      "/img/page_2/produtocts/D_NQ_NP_845375-MLU73212956491_122023-O.webp",
      delivery: "/img/icons/full.png",
    price: 67.0,
    discount: "De R$ 120",
    category: "SmartPhones",
  },
  {
    id: "15",
    name: "Memória RAM Para Notebook DDR4 8GB SODIMM CL22 3200MHz Corsair Vengeance CMSX8GX4M1A3200C22",
    image:
      "/img/page_2/produtocts/D_NQ_NP_918947-MLU76993761857_062024-O.webp",
      delivery: "/img/icons/full.png",
    price: 202.0,
    discount: "De R$ 240",
    category: "SmartPhones",
  },
];

function ProductCarousel({ addToCart }: ProductCarouselProps) {
  // Verifica se o preço tem casas decimais e aplica .toFixed(3) se necessário
  function formatPrice(price: number): string {
    return price.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 3,
    });
  }

  const carouselRef = useRef<HTMLDivElement>(null);

  // Função para mover o carrossel para a esquerda
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -400, // Move 5 cards para a esquerda
        behavior: "smooth",
      });
    }
  };

  // Função para mover o carrossel para a direita
  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 400, // Move 5 cards para a direita
        behavior: "smooth",
      });
    }
  };

  //  FUNÇÃO PAA FAVORITAR PTODUTOS
  function favoritarProduct() {
    const favoritos = document.getElementById(`favoritos_span`);
    const fa = document.getElementById(`favoritos`);
    if (favoritos) {
      favoritos.style.display = "flex";
      
      setTimeout(() => {
        favoritos.style.display = "none";
      }, 4000);
    }
    if (fa) {
      fa.style.color = "#28a745";
      setTimeout(() => {
        fa.style.color = "";
      }, 2000);
    }
  }

  return (
    <div className="product-carousel-container">
      <button className="carousel-control-btn left" onClick={scrollLeft}>
        {"<"}
      </button>

      <div ref={carouselRef} className="carousel-track">
        {products.map((product) => (
          <div key={product.id} className="carousel-card">
            <FaHeart onClick={favoritarProduct} className="favoritos" />
            <img
              src={product.image}
              alt={product.name}
              className="carousel-card-img"
            />
            <div className="carousel-card-body">
              <h5 className="carousel-card-title">{product.name}</h5>

              <div className="carousel-card-price">
                <div className="delivery">
                  <b>
                    Frete Grátis: <img src={product.delivery} alt="" />
                  </b>
                </div>
                <div className="price_area">
                  <p>{product.discount}</p>{" "}
                  <span>R$ {formatPrice(product.price)}</span>{" "}
                </div>
              </div>

              <button
                className="add-to-cart-btn"
                onClick={() => {
                  addToCart(product);
                }}
              >
                Adicionar ao carrinho
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className="carousel-control-btn right" onClick={scrollRight}>
        {">"}
      </button>
    </div>
  );
}

export default ProductCarousel;
