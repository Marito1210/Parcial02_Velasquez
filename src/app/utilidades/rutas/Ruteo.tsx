import { Route, Routes } from "react-router-dom";
import { Inicio } from "../../componentes/contenedor/Inicio";
import { CancionAdmin } from "../../componentes/canciones/CancionAdmin";
import { CancionCrear } from "../../componentes/canciones/CancionCrear";
import { CancionListar } from "../../componentes/canciones/CancionListar";
export const Ruteo = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio/>} />

      <Route path="/CancionAdm" element={<CancionAdmin />} />
      <Route path="/Cancioncre" element={<CancionCrear />} />
      <Route path="/Cancionlis" element={<CancionListar />} />
     
    </Routes>
  );
};
