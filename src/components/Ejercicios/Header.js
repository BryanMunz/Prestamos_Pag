import styles from '@/style/ejercicios/header.module.css';

const Header = () => {
  return (
    <div className={`${styles.header_img} d-flex align-items-center`}>
        <h1 className='text-white text-uppercase ps-4'>Biblioteca de ejercicios</h1>
    </div>
  )
}

export default Header