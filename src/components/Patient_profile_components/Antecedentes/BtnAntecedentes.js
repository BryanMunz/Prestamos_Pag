import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
export const BtnAntecedentes = ({
    text = '',
    name = '',
    setAntecedentes,
    flags,
}) => {
    const handleChange = e => {
        setAntecedentes({ ...flags, [e.target.name]: !flags[e.target.name] })
    }
    return (
        <button
            className="btn w-100 text-start border-0 text-primary fw-bold d-flex align-items-center"
            type="button"
            name={name}
            onClick={handleChange}>
            <span
                className="d-inline-flex align-items-center border-primary me-3 rounded"
                style={{
                    border: '2px dashed #000000',
                    padding: '12px 14px',
                }}>
                {flags[name] ? (
                    <FontAwesomeIcon
                        icon={faMinus}
                        width="12px"
                        className="text-primary"
                    />
                ) : (
                    <FontAwesomeIcon
                        icon={faPlus}
                        width="12px"
                        className="text-primary"
                    />
                )}
            </span>
            {text}
        </button>
    )
}
