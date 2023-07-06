import { useState } from "react"
import Mensaje from "./Mensaje";
export const NuevoPresupuesto = ({presupuesto, setPresupuesto,setIsValidPresupuesto}) => {
  
    const [msg, setMsg] = useState("");
    
 
 
    const handlePresupuesto =(e) => {
    e.preventDefault();
    if(!presupuesto || presupuesto < 0){
        setMsg("No es un presupuesto válido")
        return
  }
  setMsg("");
  setIsValidPresupuesto(true)
}


  
    return (
    <div className="contenedor-presupuesto contenedor sombra">
   <form onSubmit={handlePresupuesto} className="formulario">
<div className="campo">
    <label>Definir presupuesto</label>
    <input
    className="nuevo-presupuesto"
    type="number"
    placeholder="Ingresa tu presupuesto"
    value={presupuesto}
    onChange={(e) => setPresupuesto(Number(e.target.value))}
    />
</div>
<input
type="submit" value="Ingresar"
/>
{msg && <Mensaje tipo="error">{msg}</Mensaje>}
   </form>
    </div>
  )
}
