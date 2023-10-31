import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../style/itemRegister.module.css'

const ItemRegister = ({ text, icon, active = false, size = '20px' }) => {
    return (
        <div className="col-6 col-lg-3 mt-2">
            <p className={`${styles.text} ${active ? styles.active : ''}`}>
                {text}
            </p>
            <div
                className={`d-flex justify-content-center align-items-center rounded m-auto ${
                    styles.conteiner_icon
                } ${active ? styles.active : ''}`}>
                <FontAwesomeIcon
                    icon={icon}
                    width={size}
                    color={active ? '#ffffff' : '#19191934'}
                />
            </div>
        </div>
    )
}

export default ItemRegister;
