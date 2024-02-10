import { ItemNotas } from "../ItemNotas";

export default function ShowExploracionFisica({data}) {
  return (
    <>
        {
            data.cabeza_parte_frontal && <ItemNotas />
        }
    </>
  )
}
