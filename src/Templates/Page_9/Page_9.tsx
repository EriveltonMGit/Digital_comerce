
import { useRef } from "react";
import './Page_9.css'
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
    id: "62",
    name: "Jogo De Cama Pratic Casal King Conjunto Promocional",
    image: "/img/page_9/products/D_NQ_NP_833231-MLB45755206600_042021-O.webp",
    delivery: "/img/icons/full.png",
    price: 168,
    discount: "De R$ 230 ",
    category: "Cama",
  },
  {
    id: "63",
    name: "Cama Box Baú Casal Colchão Gazin Molas Flora Bege 138x188x61cm",
    image: "/img/page_9/products/D_NQ_NP_676534-MLU78670003195_082024-O.webp",
    delivery: "/img/icons/full.png",
    price: 1256,
    discount: "De R$ 1320",
    category: "Cama",
  },
  {
    id: "64",
    name: "Cama Box Baú Casal + Colchão Molas Ensacadas Pillow Angel",
    image: "/img/page_9/products/D_NQ_NP_739267-MLB80553773343_112024-O.webp",
    delivery: "/img/icons/full.png",
    price: 1034,
    discount: "De R$ 1430",
    category: "Cama",
  },
  {
    id: "65",
    name: "Sala De Jantar Estofada Madesa Evelin Mesa Tampo Vidro Com 4 Cadeiras Cor Rustic",
    image: "/img/page_9/products/D_NQ_NP_928092-MLU72627735210_112023-O.webp",
    delivery: "/img/icons/full.png",
    price:912,
    discount: "De R$ 1100",
    category: "Mesa",
  },
  {
    id: "66",
    name: "Sala De Jantar Madesa Jaíne Mesa Tampo De Madeira 6",
    image: "/img/page_9/products/D_NQ_NP_628131-MLU72700360567_112023-O.webp",
    delivery: "/img/icons/full.png",
    price: 670,
    discount: "898",
    category: "Mesa",
  },
  {
    id: "67",
    name: "Loção Deo-Hidratante para Banho Nivea Milk Frasco 250ml",
    image: "/img/page_9/products/D_NQ_NP_984828-MLU75862961338_042024-O.webp",
    delivery: "/img/icons/full.png",
    price:22,
    discount: "De 27",
    category: "Banho",
  },
  {
    id: "68",
    name: "Kit 10 Toalhas De Banho Hotel Profissional Teka Roma 440g",
    image: "/img/page_9/products/D_NQ_NP_830705-MLU72648783776_112023-O.webp",
    delivery: "/img/icons/full.png",
    price:38,
    discount: "De R$ 42",
    category: "Banho",
  },
  {
    id: "69",
    name: "Toalha De Banho Buddemeyer Gigante+ Toalha De Rosto Jogo 5pç",
    image: "/img/page_9/products/D_NQ_NP_686717-MLB73900527231_012024-O.webp",
    delivery: "/img/icons/full.png",
    price:348,
    discount: "De R$ 420",
    category: "Banho",
  },
  {
    id: "70",
    name: "Jogo Toalhas Banho Gigante Buddemeyer Algodão Egípcio 4 Pçs",
    image: "/img/page_9/products/D_NQ_NP_861149-MLB79008728515_092024-O.webp",
    delivery: "/img/icons/full.png",
    price: 667,
    discount: "De R$ 713",
    category: "Banho",
  },
  {
    id: "71",
    name: "Lápis Risque e Apague Brinquedo De Banho 10 Cores Buba",
    image: "/img/page_9/products/D_NQ_NP_821836-MLU74523684769_022024-O.webp",
    delivery: "/img/icons/full.png",
    price: 24,
    discount: "De R$ 30",
    category: "Perfumes",
  },
  {
    id: "72",
    name: "Cortina Box Banheiro Lisa Antimofo Pvc C/ Visor Transparente Cor Preto Liso",
    image: "/img/page_9/products/D_NQ_NP_887976-MLU78179706944_082024-O.webp",
    delivery: "/img/icons/full.png",
    price: 60,
    discount: "De R$ 70",
    category: "Perfumes",
  },
];


import { useNavigate } from "react-router-dom";

function Page_9({ addToCart }: ProductCarouselProps) {
  const navigate = useNavigate();

  // Verifica se o preço tem casas decimais e aplica .toFixed(3) se necessário
  function formatPrice(price: number): string {
    return price.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
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
        <>
         <section className="section_9">
          <div className="title_">
       <h1 >CAMA, MESA E BANHO</h1>      
          </div>
      
        {/*  card ofertas  */}
        <div className="card_ofertas">
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
                   <button
              className="btn_exibir"
              onClick={() => navigate(`/product/${product.id}/${encodeURIComponent(product.name)}`)}
            >
              Visualizar
            </button>
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

            <button
              className="carousel-control-btn right"
              onClick={scrollRight}
            >
              {">"}
            </button>
          </div>
        </div>

        
      </section>
        </>
    );
}

export default Page_9;
<>
</>