import style from '@/style/ejercicios/itemEjercicio.module.css'
export const ItemEjercicio = ({ejercicio}) => {
  return (
    <div className={`shadow m-3 pt-5 pb-2 ${style.conteiner_ejercicio}`}>
        <img src='/images/logo/yoga.jpg' className={`w-100 ${style.img_ejercicio}`}/>
        <p className='fs-6 fw-medium text-secondary mt-2 ms-3'>{ejercicio?.nombre}</p>
    </div>
  )
}
