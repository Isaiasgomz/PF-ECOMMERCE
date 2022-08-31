import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  clearSearch,
  getProducts,
  sortProductByCategory,
} from "../../../Actions";
import { createCont } from "../../contexto/contextProvider";
import "./DestacadosTech.css";

export default function CarouselNotebooks() {
  const { AllProducts } = useSelector((state) => state);

  const dispatch = useDispatch();

  const { setCurrentPage, trueorfalse, setTrueorFalse } =
    useContext(createCont);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const sortByCategory = (e) => {
    if (e === "componentes") {
      let productSorted = AllProducts?.filter((g) => g.compatible !== "false");
      dispatch(sortProductByCategory(productSorted));
      dispatch(clearSearch());
      setCurrentPage(1);
      trueorfalse === true ? setTrueorFalse(false) : setTrueorFalse(true);
      return;
    }
    if (e === "perifericos") {
      let productSorted = AllProducts?.filter((g) => g.compatible === "false");

      let moreSort = productSorted?.filter((f) => f.category !== "Laptops");

      dispatch(sortProductByCategory(moreSort));
      dispatch(clearSearch());
      setCurrentPage(1);
      trueorfalse === true ? setTrueorFalse(false) : setTrueorFalse(true);
      return;
    }
    let productSorted = AllProducts?.filter((g) => g.category === e);
    dispatch(sortProductByCategory(productSorted));
    dispatch(clearSearch());
    setCurrentPage(1);
    trueorfalse === true ? setTrueorFalse(false) : setTrueorFalse(true);
  };

  return (
    <div className="contAccesorios">
      <div class="containerAcc mt-100">
        <div class="titleAcce">
          <h2>
            <span class="spanTitleAcc">💚</span> ¡DESTACADOS
            <span class="spanTitleAcc"> TECH</span>!
          </h2>
        </div>
        <div class="rowAcc">
          <div class="col-md-4 col-sm-6">
            <div class="card mb-30">
              <a class="card-img-tiles" href="#" data-abc="true">
                <div class="inner">
                  <div class="main-img">
                    <Link to="/detail/19">
                      <img
                        src="https://http2.mlstatic.com/D_NQ_NP_860605-MLA49211284992_022022-V.webp"
                        alt="Category"
                      />
                    </Link>
                  </div>
                  <div class="thumblist">
                    <Link to="/detail/17">
                      <img
                        src="https://http2.mlstatic.com/D_NQ_NP_622883-MLA48011304859_102021-V.webp"
                        alt="Category"
                      />
                    </Link>
                    <Link to="/detail/13">
                      <img
                        src="https://http2.mlstatic.com/D_NQ_NP_645141-MLA48708038233_122021-V.webp"
                        alt="Category"
                      />
                    </Link>
                  </div>
                </div>
              </a>
              <div class="card-body text-center">
                <h4 class="card-title">Notebooks</h4>
                <p class="text-muted">A partir de $35000</p>
                <Link to="/home">
                  <button
                    class="btn btn-outline-primary btn-sm"
                    data-abc="true"
                    onClick={() => sortByCategory("Laptops")}
                  >
                    Ver Productos
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6">
            <div class="card mb-30">
              <a class="card-img-tiles" href="#" data-abc="true">
                <div class="inner">
                  <div class="main-img">
                    <Link to="/detail/29">
                      <img
                        src="https://http2.mlstatic.com/D_NQ_NP_744609-MLA32854739285_112019-V.webp"
                        alt="Category"
                      />
                    </Link>
                  </div>
                  <div class="thumblist">
                    <Link to="/detail/5">
                      <img
                        src="https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30014_Monitor_Gamer_ASUS_ROG_SWIFT_24__PG259QNR_360Hz_1Ms_G-Sync_c37ea8f1-grn.jpg"
                        alt="Category"
                      />
                    </Link>
                    <Link to="/detail/1">
                      <img
                        src="https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_31482_Teclado_Mecanico_ASUS_ROG_Strix_Scope_TKL_RGB_Cherry_Red_ac577937-grn.jpg"
                        alt="Category"
                      />
                    </Link>
                  </div>
                </div>
              </a>
              <div class="card-body text-center">
                <h4 class="card-title">Periféricos</h4>
                <p class="text-muted">A partir de $858</p>
                <Link to="/home">
                  <button
                    class="btn btn-outline-primary btn-sm"
                    data-abc="true"
                    onClick={() => sortByCategory("perifericos")}
                  >
                    Ver Productos
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6">
            <div class="card mb-30">
              <a class="card-img-tiles" href="#" data-abc="true">
                <div class="inner">
                  <div class="main-img">
                    <Link to="/detail/86">
                      <img
                        src="https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_33234_Disco_Solido_SSD_KingDian_120GB_S280_500Mb_s_c98f29db-grn.jpg"
                        alt="Category"
                      />
                    </Link>
                  </div>
                  <div class="thumblist">
                    <Link to="/detail/79">
                      <img
                        src="https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_27836_Placa_de_Video_ASUS_GeForce_RTX_3090_24GB_GDDR6X_TUF_GAMING_OC_c5a7da31-grn.jpg"
                        alt="Category"
                      />
                    </Link>
                    <Link to="/detail/85">
                      <img
                        src="https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_9847_Disco_R__gido_Seagate_1TB_Barracuda_64MB_SATA_6GB_s_b2f27e5a-grn.jpg"
                        alt="Category"
                      />
                    </Link>
                  </div>
                </div>
              </a>
              <div class="card-body text-center">
                <h4 class="card-title">Componentes PC</h4>
                <p class="text-muted">A partir de $3550</p>
                <Link to="/home">
                  <button
                    class="btn btn-outline-primary btn-sm"
                    data-abc="true"
                    onClick={() => sortByCategory("componentes")}
                  >
                    Ver Productos
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
