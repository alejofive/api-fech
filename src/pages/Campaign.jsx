import Table from "../components/Table";
import { Link } from "react-router-dom";

const Campaña = () => {
  return (
    <div className="App">
      <header className="px-4 p-3 shadow relative z-10">
        <div className="flex items-center ">
          <img src="/img/logo.png" alt="" className="mr-4" />
          <h2 className="text-lg font-semibold">
            Price & Promotions management
          </h2>
        </div>
      </header>

      <section className="grid grid-cols-12">
        <section className="col-span-1 pt-4  h-screen sombra relative z-10">
          <nav className="flex flex-col items-center w-full">
            <a href="#">
              <img src="img/icon1.png" alt="" className="w-[25px] h-[25px]" />
            </a>
            <a href="#" className="mt-5">
              <img src="img/icon2.png" alt="" className="w-[25px] h-[25px]" />
            </a>
            <a href="#" className="mt-5">
              <img src="img/icon3.png" alt="" className="w-[25px] h-[25px]" />
            </a>
            <a href="#" className="mt-5">
              <img src="img/icon4.png" alt="" className="w-[25px] h-[25px]" />
            </a>
            <a
              href="#"
              className="mt-5 border-b-2 w-full flex justify-center pb-4"
            >
              <img src="img/icon5.png" alt="" className="w-[25px] h-[25px]" />
            </a>
            <a href="#" className="mt-5">
              <img src="img/icon6.png" alt="" className="w-[25px] h-[25px]" />
            </a>
          </nav>
        </section>

        <section className="col-span-11 color-fondo z-0 px-10 py-10">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl ">Campañas</h1>
            <Link
              to="/create"
              className="bg-blue-700 text-white flex items-center justify-center w-[199px] h-[42px]"
            >
              <i className="mr-2">
                <img src="/img/plus.png" alt="" />
              </i>
              <p className="text-sm"> CREAR CAMPAÑANA</p>
            </Link>
          </div>
          <Table />
        </section>
      </section>
    </div>
  );
};

export default Campaña;
