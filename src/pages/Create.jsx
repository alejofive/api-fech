import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { editCompaign, getCompaign, postCompaigns } from "../services/compaign";

const Create = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [newCampaign, setNewCampaign] = useState({
    id: "",
    nombre: "",
    tipo: "",
    fecha: "",
    fecha2: "",
    canal: "",
    vinculadas: "",
    bandera: "",
    estado: "",
    pais: "",
    zona: "",
    seccion: "",
    locales: "",
  });

  useEffect(() => {
    const getData = async () => {
      const campaign = await getCompaign(params.id);
      console.log(campaign);
      if (campaign.data) {
        setNewCampaign(campaign.data);
      } else {
        alert(campaign.error);
      }
    };
    getData();
  }, []);

  const handleInput = (e) => {
    setNewCampaign({
      ...newCampaign,
      [e.target.name]: e.target.value,
    });
  };

  const guardarCompaigns = async (e) => {
    e.preventDefault();
    if (params.id) {
      editCompaign(params.id, newCampaign);
    } else {
      postCompaigns({
        ...newCampaign,
      });
    }
    navigate("/");
  };
  return (
    <section className="bg-blue-500 h-screen flex justify-end">
      <div className="bg-white w-[1200px] h-screen rounded-s-3xl px-10 py-10">
        <div className="flex">
          <img src="/img/icon3.png" alt="" />
          <h1 className="font-bold ml-5">Nombre de campaña</h1>
        </div>

        <section className="mt-10 ">
          <h3 className="font-bold text-gray-500 border-b-2 pb-2">
            Segmentación
          </h3>
          <form
            action=""
            method="post"
            onSubmit={guardarCompaigns}
            className="mt-4"
          >
            <div className="grid grid-cols-6 gap-4">
              <div className="flex flex-col col-span-2">
                <label className="text-xs mb-3 font-bold " htmlFor="">
                  pais
                </label>
                <select
                  name="pais"
                  className="px-6 py-2.5 border w-full border-zinc-800 rounded-lg"
                  required
                  onChange={handleInput}
                  value={newCampaign.pais}
                >
                  <option value="">---</option>
                  <option value="Argentina">Argentina</option>
                  <option value="España">España</option>
                  <option value="Venezuela">Venezuela</option>
                  <option value="Colombia">Colombia</option>
                </select>
              </div>

              <div className="flex flex-col col-span-2">
                <label className="text-xs mb-3 font-bold " htmlFor="">
                  Bandera
                </label>
                <select
                  name="bandera"
                  className="px-6 py-2.5 border w-full border-zinc-800 rounded-lg"
                  required
                  onChange={handleInput}
                  value={newCampaign.bandera}
                >
                  <option value="">---</option>
                  <option value="JUMBO - AR">JUMBO - AR</option>
                  <option value="JUMBO - ES">JUMBO - ES</option>
                  <option value="JUMBO - VE">JUMBO - VE</option>
                  <option value="JUMBO - CO">JUMBO - CO</option>
                </select>
              </div>

              <div className="flex flex-col col-span-2">
                <label className="text-xs mb-3 font-bold " htmlFor="">
                  Zona
                </label>
                <select
                  name="zona"
                  className="px-6 py-2.5 border w-full border-zinc-800 rounded-lg"
                  required
                  onChange={handleInput}
                  value={newCampaign.zona}
                >
                  <option value="">---</option>
                  <option value="JUMBO - AR">Zona 01 - Argentina</option>
                  <option value="JUMBO - ES">Zona 02 - España</option>
                  <option value="JUMBO - VE">Zona 03 - Venenezuela</option>
                  <option value="JUMBO - CO">Zona 04 - Colombia</option>
                </select>
              </div>

              <div className="flex flex-col col-span-2">
                <label className="text-xs mb-3 font-bold " htmlFor="">
                  Locales
                </label>
                <select
                  name="locales"
                  className="px-6 py-2.5 border w-full border-zinc-800 rounded-lg"
                  required
                  onChange={handleInput}
                  value={newCampaign.locales}
                >
                  <option value="">---</option>
                  <option value="S504, S502, S504, S504, S505, S506">
                    S504, S502, S504, S504, S505, S506
                  </option>
                  <option value="S505, S502, S504, S504, S505, S506">
                    S505, S502, S504, S504, S505, S506
                  </option>
                  <option value="S507, S502, S504, S504, S505, S506">
                    S507, S502, S504, S504, S505, S506
                  </option>
                  <option value="S5008, S502, S504, S504, S505, S506">
                    S5008, S502, S504, S504, S505, S506
                  </option>
                </select>
              </div>

              <div className="flex flex-col col-span-2">
                <label className="text-xs mb-3 font-bold " htmlFor="">
                  Sección
                </label>
                <select
                  name="seccion"
                  className="px-6 py-2.5 border w-full border-zinc-800 rounded-lg"
                  required
                  onChange={handleInput}
                  value={newCampaign.seccion}
                >
                  <option value="">---</option>
                  <option value="26 - Botillería / Gaseosas">
                    26 - Botillería / Gaseosas
                  </option>
                  <option value="JUMBO - ES">30 - Botillería / Vino</option>
                  <option value="JUMBO - VE">18 - Bolsa / Maiz</option>
                  <option value="JUMBO - CO">Zona 04 - Bolsa / Cafe</option>
                </select>
              </div>

              <div className="flex flex-col col-span-2">
                <label className="text-xs mb-3 font-bold " htmlFor="">
                  Estado
                </label>
                <select
                  name="estado"
                  className="px-6 py-2.5 border w-full border-zinc-800 rounded-lg"
                  required
                  onChange={handleInput}
                  value={newCampaign.estado}
                >
                  <option value="">---</option>
                  <option value="Creada">Creada</option>
                  <option value="Activada">Activada</option>
                  <option value="Pendiente Activación">
                    Pendiente Activación
                  </option>
                  <option value="Desactivada">Desactivada</option>
                </select>
              </div>

              <div className="flex flex-col col-span-2">
                <label className="text-xs mb-3 font-bold " htmlFor="">
                  Prom.viculadas
                </label>
                <select
                  name="viculadas"
                  className="px-6 py-2.5 border w-full border-zinc-800 rounded-lg"
                  required
                  onChange={handleInput}
                  value={newCampaign.vinculadas}
                >
                  <option value="">---</option>
                  <option value="100">100</option>
                  <option value="200">200</option>
                  <option value="300">300</option>
                  <option value="400">400</option>
                </select>
              </div>

              <h3 className="font-bold text-gray-500 border-b-2 pb-2 col-span-6">
                Datos Generales
              </h3>

              <div className="flex flex-col col-span-2">
                <label className="text-xs mb-3 font-bold" htmlFor="">
                  Nombre de la Campaña
                </label>
                <input
                  className="px-6 py-2.5 border border-zinc-800 rounded-lg w-full"
                  type="text"
                  placeholder="Nombre de la Campaña"
                  name="nombre"
                  required
                  onChange={handleInput}
                  value={newCampaign.nombre}
                />
              </div>

              <div className="flex flex-col col-span-2">
                <label className="text-xs mb-3 font-bold " htmlFor="">
                  tipo de campaña
                </label>
                <select
                  name="tipo"
                  className="px-6 py-2.5 border w-full border-zinc-800 rounded-lg"
                  required
                  onChange={handleInput}
                  value={newCampaign.tipo}
                >
                  <option value="">---</option>
                  <option value="Jumbo Mensual">Jumbo Mensual</option>
                  <option value="FDM">FDM</option>
                  <option value="Local">Local</option>
                  <option value="Semanal">Semanal</option>
                  <option value="Especiales">Especiales</option>
                </select>
              </div>

              <div className="flex flex-col col-span-2">
                <label className="text-xs mb-3 font-bold " htmlFor="">
                  Canal
                </label>
                <select
                  name="canal"
                  className="px-6 py-2.5 border w-full border-zinc-800 rounded-lg"
                  required
                  onChange={handleInput}
                  value={newCampaign.canal}
                >
                  <option value="">---</option>
                  <option value="Ecommerce">Ecommerce</option>
                  <option value="Físico">Físico</option>
                </select>
              </div>

              <div className="flex flex-col col-span-2">
                <label className="text-xs mb-3 font-bold" htmlFor="">
                  Fecha de vigencia
                </label>
                <input
                  className="px-6 py-2.5 border border-zinc-800 rounded-lg w-full"
                  type="month"
                  placeholder="Nombre de la Campaña"
                  name="fecha"
                  required
                  onChange={handleInput}
                  value={newCampaign.fecha}
                />
              </div>

              <div className="flex flex-col col-span-2">
                <label className="text-xs mb-3 font-bold" htmlFor="">
                  Fecha de vigencia
                </label>
                <input
                  className="px-6 py-2.5 border border-zinc-800 rounded-lg w-full"
                  type="month"
                  placeholder="Nombre de la Campaña"
                  name="fecha2"
                  required
                  onChange={handleInput}
                  value={newCampaign.fecha2}
                />
              </div>

              <div className="col-span-6 mt-10">
                <button className="bg-blue-700 px-7 py-2 text-white font-semibold text-lg flex items-center rounded-lg">
                  <img src="/img/guardar.png" alt="" className="mr-2" />
                  Guardar
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </section>
  );
};

export default Create;
