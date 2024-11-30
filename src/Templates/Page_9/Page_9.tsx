
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
    category: "Smartphones",
  },
  {
    id: "63",
    name: "Xiaomi Redimi 13c 256gb 8gb Ram Global + Nota Fiscal + Fone",
    image: "/img/page_3/products/D_NQ_NP_945155-MLB80003110267_102024-O.webp",
    delivery: "/img/icons/full.png",
    price: 1256,
    discount: "De R$ 1320",
    category: "SmartPhones",
  },
  {
    id: "64",
    name: "Xiaomi Redmi Note 13 256gb 8gb Ram Camera Top 108mpx +brind",
    image: "/img/page_3/products/D_NQ_NP_678175-MLB79435931762_102024-O.webp",
    delivery: "/img/icons/full.png",
    price: 1315,
    discount: "De R$ 1430",
    category: "SmartPhones",
  },
  {
    id: "65",
    name: "Tablet Positivo Vision Tab 10 4gb 128gb 10,1 Hd Ips Preto",
    image: "/img/page_3/products/D_NQ_NP_839193-MLB74210683498_012024-O.webp",
    delivery: "/img/icons/full.png",
    price:912,
    discount: "De R$ 1100",
    category: "SmartPhones",
  },
  {
    id: "66",
    name: "Guitarra Telecaster Seven Stc-307 Lh Canhoto C/ Bag Cor Âmbar",
    image: "/img/page_3/products/D_NQ_NP_676861-MLA80956236533_112024-O.webp",
    delivery: "/img/icons/full.png",
    price: 870,
    discount: "998",
    category: "Instrumentos",
  },
  {
    id: "67",
    name: "Guitarra elétrica Jackson JS Series JS22 DKA dinky de choupo snow white brilhante com diapasão de amaranto",
    image: "/img/page_3/products/D_NQ_NP_863465-MLA74779497997_022024-O.webp",
    delivery: "/img/icons/full.png",
    price:2206,
    discount: "De 2.700",
    category: "Instrumentos",
  },
  {
    id: "68",
    name: "Serra Mármore 4.3/8 4100nh3z 1.300w Makita 220v",
    image: "/img/page_3/products/D_NQ_NP_871242-MLU76219023004_052024-O.webp",
    delivery: "/img/icons/full.png",
    price: 439,
    discount: "De R$ 510",
    category: "Ferramentas",
  },
  {
    id: "69",
    name: "Furadeira De Impacto 3/8 10mm Gsb450 Re 127v Bosch Com Jogo De Brocas Bits E Buchas 300 Peças The Black Tools",
    image: "/img/page_3/products/D_NQ_NP_921231-MLU79228400765_092024-O.webp",
    delivery: "/img/icons/full.png",
    price:378,
    discount: "De R$ 412",
    category: "Ferramentas",
  },
  {
    id: "70",
    name: "Furadeira E Parafusadeira De Impacto 1/2 Gsb 183 Li 18v Com Carregador Bivolt Bateria E Maleta Bosch",
    image: "/img/page_3/products/D_NQ_NP_915856-MLA80174257891_102024-O.webp",
    delivery: "/img/icons/full.png",
    price: 667,
    discount: "De R$ 713",
    category: "Ferramentas",
  },
  {
    id: "71",
    name: "Perfume Feminino La Vie Est Belle Lancôme EDP 100ml",
    image: "/img/page_3/products/D_NQ_NP_934059-MLA80281737621_102024-O.webp",
    delivery: "/img/icons/full.png",
    price: 534,
    discount: "De R$ 730",
    category: "Perfumes",
  },
  {
    id: "72",
    name: "Carolina Herrera Good Girl Tradicional EDP 150ml para feminino",
    image: "/img/page_3/products/D_NQ_NP_950204-MLA49695604575_042022-O.webp",
    delivery: "/img/icons/full.png",
    price: 650,
    discount: "De R$ 740",
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