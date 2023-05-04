import React, { useEffect, useState } from "react";
import {
  deleteCompaign,
  geCompaigns,
  updateCompaing,
} from "../services/compaign";
import { Link } from "react-router-dom";

const Table = () => {
  const [campaign, setCampains] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const listResponse = await geCompaigns();
      if (listResponse.error) {
        alert(listResponse.error);
      } else {
        console.log(listResponse);
        setCampains(listResponse.data);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    console.log(campaign);
  }, [campaign]);

  const [search, setSearch] = useState("");

  const searcher = (e) => {
    setSearch(e.target.value);
  };

  const Filter = () => {
    let results = campaign.sort((a, b) => (a.id < b.id ? 1 : -1));
    results = results.filter((campaign) =>
      campaign.nombre.toLowerCase().includes(search.toLowerCase())
    );

    return results;
  };

  const [clicked, setClicked] = useState(-1);

  const select = (id) => {
    if (clicked === -1) {
      setClicked(id);
    } else {
      setClicked(-1);
    }
  };

  //cambiar estado

  const active = async (id) => {
    updateCompaing(id);
  };

  //delete

  const deleCompaign = async (id) => {
    let opcion = window.confirm("realmente desea Eliminar ");
    setClicked(-1);
    if (opcion) {
      const data = await deleteCompaign(id);
      if (data.data) {
        setEmployees([...employees.filter((employee) => employee.id !== id)]);
      } else {
        alert("No se pudo eliminar la tarea");
      }
    }
  };

  return (
    <section className="bg-white mt-10 pt-8 px-4">
      <div className="w-full flex items-center justify-center">
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar"
            value={search}
            onChange={searcher}
            className="border pl-12 py-1 rounded-lg"
          />
          <img
            src="/img/buscar.png"
            alt=""
            className="w-[24px] h-[24px] object-contain absolute top-1 left-3"
          />
        </div>
      </div>

      <section className="mt-5">
        {/* head */}
        <div className="flex items-center border-b-2">
          <div className="flex items-center w-[220px] h-[56px]">
            <h2 className="font-bold">Nombre de campaña</h2>
            <img src="/img/flecha.png" alt="" className="ml-2" />
          </div>
          <div className="flex items-center w-[140px] h-[56px]">
            <h2 className="font-bold">Tipo</h2>
            <img src="/img/flecha.png" alt="" className="ml-2" />
          </div>
          <div className="flex items-center w-[220px] h-[56px]">
            <h2 className="font-bold">Fecha vigencia</h2>
            <img src="/img/flecha.png" alt="" className="ml-2" />
          </div>
          <div className="flex items-center w-[120px] h-[56px]">
            <h2 className="font-bold">canal</h2>
            <img src="/img/flecha.png" alt="" className="ml-2" />
          </div>
          <div className="flex items-center w-[160px] h-[56px]">
            <h2 className="font-bold">Prom. vinculadas</h2>
            <img src="/img/flecha.png" alt="" className="ml-2" />
          </div>
          <div className="flex items-center w-[120px] h-[56px]">
            <h2 className="font-bold">Bandera</h2>
            <img src="/img/flecha.png" alt="" className="ml-2" />
          </div>
          <div className="flex items-center w-[120px] h-[56px]">
            <h2 className="font-bold">Estado</h2>
            <img src="/img/flecha.png" alt="" className="ml-2" />
          </div>
        </div>
        {/* table */}
        <div>
          {Filter().map((item) => {
            return (
              <div className="flex items-center border-b-2 py-4">
                <div className="w-[220px] ">
                  <h3>{item.nombre}</h3>
                </div>
                <div className="w-[140px] ">
                  <h3>{item.tipo}</h3>
                </div>
                <div className="w-[220px] ">
                  <p>
                    {item.fecha} a {item.fecha2}
                  </p>
                </div>
                <div className="w-[120px] ">
                  <h3>{item.canal}</h3>
                </div>
                <div className="w-[160px] ">
                  <p>{item.vinculadas}</p>
                </div>
                <div className="w-[120px] ">
                  <h3>{item.bandera}</h3>
                </div>
                <div className="w-[182px] ">
                  <span
                    className={`estado 
            ${item.estado === "Creada" && "creada"}
            ${item.estado === "Activada" && "activada"} 
            ${item.estado === "Pendiente Activación" && "pendiente"}
            ${item.estado === "Desactivada" && "desactivada"}
            `}
                  >
                    {item.estado}
                  </span>
                </div>

                <div className="w-[100px] flex relative">
                  <a href="" className="mr-4">
                    <img src="/img/IconButton1.png" alt="" />
                  </a>
                  <div
                    className={`links ${clicked === item.id ? "active" : ""}`}
                  >
                    <Link to={`/edit/${item.id}`}>Ver detalle</Link>
                    <button className="mt-5" onClick={() => active(item.id)}>
                      Activar campaña
                    </button>

                    <button
                      className="mt-5"
                      onClick={() => deleCompaign(item.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                  <button onClick={() => select(item.id)}>
                    <img src="/img/IconButton2.png" alt="" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        {/* footer */}
        <div className="border-b-2  py-4 flex justify-end">
          <div className="mr-3">
            <p>Rows per page : 10</p>
          </div>
          <div className="mr-3">
            <p>1-5 of 13</p>
          </div>
          <div>
            <button>
              <img src="/img/Left.png" alt="" />
            </button>
            <button>
              <img src="/img/r.png" alt="" />
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Table;
