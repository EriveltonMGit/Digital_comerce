// IMPORT CSS
import "./Page_4.css";

function Page_4() {
  const itemsImage = [
    {
      id: "27",
      image: "/img/page_3/D_NQ_NP720296-MLA80434081638_112024-B.webp",
    },
    {
      id: "28",
      image: "/img/page_3/D_NQ_NP612329-MLA80434063492_112024-B.webp",
    },
  ];

  return (
    <>
      <section className="section_4">
        {/* CATEGORIAS */}
        <div className="categorias">
          <h1>Categorias</h1>
        </div>
        {/* BUTTON CATEGORIAS */}
        <div className="grup_categorias">
          <div>
            <button className="btn_categorias">
              <img
                src="/img/page_4/D_Q_NP_827967-MLA80429541870_112024-G.webp"
                alt=""
              />
            </button>
            <p>PERFUMES </p>
          </div>
          <div>
            <button className="btn_categorias">
              <img
                src="/img/page_4/D_Q_NP_799935-MLA80689495273_112024-G.webp"
                alt=""
              />
            </button>
            <p>TUDO PARA NATAL</p>
          </div>
          <div>
            <button className="btn_categorias">
              <img
                src="img/page_4/D_Q_NP_638810-MLA80054106558_102024-G.webp"
                alt=""
              />
            </button>
            <p>FERRAMENTAS</p>
          </div>
          <div>
            <button className="btn_categorias">
              <img
                src="/img/page_4/D_Q_NP_895957-MLA80429933094_112024-G.webp"
                alt=""
              />
            </button>
            <p>INSTRUMENTOS </p>
          </div>
          <div>
            <button className="btn_categorias">
              <img
                src="/img/page_4/D_Q_NP_863846-MLA80690055505_112024-G.webp"
                alt=""
              />
            </button>
            <p>LIVROS </p>
          </div>
          <div>
            <button className="btn_categorias">
              <img
                src="/img/page_4/D_Q_NP_859029-MLA80430509314_112024-G.webp"
                alt=""
              />
            </button>
            <p>ACESSÓRIOS </p>
          </div>
        </div>
        {/* CARD DOUBLE IMAGE */}
        <div className="double_image">
          {itemsImage.map((item) => (
            <div key={item.id} className="card_">
              <img src={item.image} alt="" />

              <button className="btn_marcas">SAIBA MAIS</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Page_4;
