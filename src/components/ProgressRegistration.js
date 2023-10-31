import {
    faMoneyBill1,
    faInfo,
    faHospital,
    faList,
} from '@fortawesome/free-solid-svg-icons'
import ItemRegister from '@/components/ItemRegister'

const ProgressRegistration = ({ location = 0 }) => {
    return (
        <div className="row px-1 text-center px-sm-5">
            <ItemRegister
                text="Creación de cuenta"
                icon={faMoneyBill1}
                active={location >= 0 ? true : false}></ItemRegister>
            <ItemRegister
                text="Suscripción"
                icon={faInfo}
                size="8px"
                active={location >= 1 ? true : false}></ItemRegister>
            <ItemRegister
                text="Información clínica"
                icon={faHospital}
                active={location >= 2 ? true : false}></ItemRegister>
            <ItemRegister
                text="Completado"
                icon={faList}
                active={(location >= 3 ? true : false)}></ItemRegister>
        </div>
    )
}

export default ProgressRegistration
