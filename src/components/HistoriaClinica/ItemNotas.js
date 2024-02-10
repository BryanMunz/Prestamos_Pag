import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export const ItemNotas = ({
    title = '',
    value,
    handleChange,
    name = 'input',
    handleDelete,
    iconDelete,
}) => {
    return (
        <div className="mb-3">
            <div
                style={{ backgroundColor: '#f7f7f7' }}
                className="d-flex align-items-center border rounded-top justify-content-between">
                <h3 className="fs-6 m-0 p-0 px-3 py-1">{title}</h3>
                {iconDelete && (
                    <div className="px-3 py-1 border-start" >
                        <FontAwesomeIcon
                            icon={iconDelete}
                            className="text-danger"
                            style={{ width: '25px', cursor: 'pointer' }}
                            onClick={() => handleDelete(title, name)}
                        />
                    </div>
                )}
            </div>

            <textarea
                className="form-control rounded-top-0 border-top-0"
                rows="4"
                value={value}
                onChange={handleChange}
                name={name}></textarea>
        </div>
    )
}
