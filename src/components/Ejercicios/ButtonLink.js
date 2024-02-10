import styles from '@/style/ejercicios/buttonLink.module.css'

export const ButtonLink = ({text, active}) => {
  return (
    <button className={`btn ${active ? styles.active : ''}`}>{text}</button>
  )
}
