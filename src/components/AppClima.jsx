import useClima from "../hooks/useClima";
import Formulario from "./Formulario";
import Loading from "./Loading";
import Resultado from "./Resultado";

const AppClima = () => {
  const { resultado, cargando, noResultado } = useClima();
  return (
    <>
      <main className="dos-columnas">
        <Formulario />
        {/* optional chaged es para evitar errores : El operador de encadenamiento opcional ?. permite leer el valor de una propiedad ubicada dentro de una cadena de objetos conectados sin tener que validar expresamente que cada referencia en la cadena sea válida. */}
        {cargando ? (
          <Loading />
        ) : resultado?.name ? (
          <Resultado />
        ) : noResultado ? (
          <p>{noResultado}</p>
        ) : (
          <p>El clima se va a mostrar aquí</p>
        )}
      </main>
    </>
  );
};

export default AppClima;
