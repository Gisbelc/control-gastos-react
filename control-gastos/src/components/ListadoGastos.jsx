import Gasto from "./Gasto";

const ListadoGastos = ({
  gastos,
  setGastoEditar,
  eliminarGasto,
  gastosFiltrados,
  filtro,
}) => {
  return (
    <div>
      <div className="listado-gastos contenedor">
        {filtro ? (
          <>
            <h2>{gastosFiltrados.length ? "Gastos" : "No hay gastos aún"}</h2>
            {gastosFiltrados.map((gasto) => (
              <Gasto
                key={gastos.id}
                gasto={gasto}
                setGastoEditar={setGastoEditar}
                eliminarGasto={eliminarGasto}
              />
            ))}
          </>
        ) : (
          <>
            <h2>{gastos.length ? "Gastos" : "No hay gastos aún"}</h2>
            {gastos.map((gasto) => (
              <Gasto
                key={gastos.id}
                gasto={gasto}
                setGastoEditar={setGastoEditar}
                eliminarGasto={eliminarGasto}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ListadoGastos;
