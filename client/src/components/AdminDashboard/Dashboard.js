import { Chart } from "./Chart";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdminProducts } from "../../Actions";
import style from "./Dashboard.module.css";
import DashboardSold from "./DashboardSold";
function AdminDashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdminProducts());
  }, []);

  let allProductsBackup = useSelector((state) => state.allAdminProducts);
  const allCategory = allProductsBackup.map((product) => product.category);

  const countOcurrences = (arr) =>
    arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {});
  const data = {
    datasets: [
      {
        label: "Category",
        data: countOcurrences(allCategory),
        borderWidth: "2",
        backgroundColor: [
          "#ffbb11",
          "#c0c0c0",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
      },
    ],
  };

  return (
    <div className={style.container}>
      <div className={style.containerTitle}>
        <h2>Estadísticas</h2>
      </div>
      <div className={style.containerAllEstadisticas}>
        <div className={style.containerEstadisticas}>
          <Chart className={style.chart} chartData={data} />
        </div>
        <div className={style.containerEstadisticas}>
          <DashboardSold></DashboardSold>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
