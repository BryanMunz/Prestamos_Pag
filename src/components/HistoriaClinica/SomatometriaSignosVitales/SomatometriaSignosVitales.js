import { SignosVitales } from "./SignosVitales"
import { Somatometria } from "./Somatometria"

export const SomatometriaSignosVitales = ( {id_historia_clinica, data} ) => {
  return (
    <div className="container mt-5" id='signos_vitales'>
        <h2 className="fs-6">SOMATOMETRÍA / SIGNOS VITALES</h2>
        <div className="row justify-content-between">
            <Somatometria id_historia_clinica={id_historia_clinica} data={data?.somatometria}/>
            <SignosVitales id_historia_clinica={id_historia_clinica} data={data?.signos_vatales}/>
        </div>
    </div>
  )
}
