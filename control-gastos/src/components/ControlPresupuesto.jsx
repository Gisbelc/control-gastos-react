import { useEffect, useState} from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"

const ControlPresupuesto = ({presupuesto, 
    gastos, 
    setGastos, 
    setPresupuesto,
    setIsValidPresupuesto}) => {

const [disponible, setDisponible] = useState(0);
const [gastado, setGastado] = useState(0); 
const [porcentaje, setPorcentaje] = useState(0);


useEffect(() => {
const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0);
const totalDisponible = presupuesto - totalGastado;

//calcular porcentaje
const nuevoPorcentaje = (( (presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2);

setGastado(totalGastado);
setDisponible(totalDisponible);
setTimeout(() => {

    setPorcentaje(nuevoPorcentaje)
}, 1000)
},[gastos])

const formatearCantidad = (cantidad) => {
    return cantidad.toLocaleString("es-CL", {
      style:"currency", 
      currency:"CLP"
}).replace(",00",""); 
}

const handleResetApp = () => {
const resultado = confirm("¿Desear reiniciar presupuesto?");
if(resultado){
setGastos([]);
setPresupuesto(0);
setIsValidPresupuesto(false)
}
}


  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
<div>
    <CircularProgressbar
    buildStyles={buildStyles({
        pathColor: porcentaje > 100 ? "redd" : "blue",
        trailColor: "#f5f5f5",
        textColor:"#3B82F6"
    })}
    value={porcentaje}
    text={`${porcentaje}% Gastado`}
    
    />
</div>
<div className='contenido-presupuesto'>
    <button className='reset-app' type='button' onClick={() => handleResetApp()}>Resetear App</button>
<p>
    <span>Presupuesto</span> {" "} {formatearCantidad(presupuesto)}
</p>
<p className={`${disponible < 0 ? "negativo" : ""}`}>
    <span>Disponible</span> {" "} {formatearCantidad(disponible)}
</p>
<p>
    <span>Gastado</span> {" "} {formatearCantidad(gastado)}
</p>
</div>
    </div>
  )
}

export default ControlPresupuesto;