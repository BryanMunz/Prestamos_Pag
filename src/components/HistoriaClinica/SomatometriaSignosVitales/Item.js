import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export const Item = ({
    icon,
    text,
    signo,
    color = '#000000',
    width = '15px',
    name,
    handleChange,
    value
}) => {
    return (
        <div className="d-flex justify-content-between align-items-center px-4 mt-3">
            <div className="d-flex">
                <FontAwesomeIcon
                    icon={icon}
                    style={{ width: width, color: color }}
                />
                <p className="p-0 m-0 ms-3">{text}</p>
            </div>
            <div className="d-flex align-items-center justify-content-end">
                <input
                    type="number"
                    className="form-control w-50"
                    name={name}
                    onChange={handleChange}
                    value={value}
                />
                <p
                    className="m-0 ms-2 text-center"
                    style={{ maxWidth: '40px', minWidth: '40px' }}>
                    {signo}
                </p>
            </div>
        </div>
    )
}
