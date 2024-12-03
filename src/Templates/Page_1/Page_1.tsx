'use client';
// IMPORT COMPONENTS 




// AQUI FICA O IMPORT DO CARRINHO 




import "./Page_1.css";

function Page_1() {
  return (
    <>
      <section className="section_1">
       
        <main className="carosel_products">
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="carousel" 
            data-bs-interval="3000" 
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="/img/page_1/img_1.webp" className="d-block w-100" alt="Slide 1" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>FRETE GRÁTIS</h5>
                  <p>Somente hoje, preços imperdiveis!</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="/img/page_1/img_1.webp" className="d-block w-100" alt="Slide 2" />
                <div className="carousel-caption d-none d-md-block">
                  {/* <h5>Tu</h5> */}
                  <p>Tudo para mesa,cama e banho!</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="/img/page_1/img_1.webp" className="d-block w-100" alt="Slide 3" />
                <div className="carousel-caption d-none d-md-block">
                  {/* <h5>Third slide label</h5> */}
                  <p>Escolha seu produto adicione ao carrinho e aproveite.</p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </main>
    {/* MENU DEVICE LISTA */}
  
        <div className="opacity_nuvem">

        </div>
      </section>
    </>
  );
}

export default Page_1;
