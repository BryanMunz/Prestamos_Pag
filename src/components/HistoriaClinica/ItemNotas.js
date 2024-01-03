export const ItemNotas = ({title='', value, handleChange, name = 'input'}) => {
    return (
        <div className="mb-3">
            <h3
                className="fs-6 px-3 py-2 mb-0 rounded-top border"
                style={{ backgroundColor: '#f7f7f7' }}>
                {title}
            </h3>
            <textarea className="form-control rounded-top-0 border-top-0" rows='4' value={value} onChange={handleChange} name={name}>
            </textarea>
        </div>
    )
}
