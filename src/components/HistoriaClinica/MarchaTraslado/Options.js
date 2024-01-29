export const Options = ({ handleChange, oldOption, name = 'alergia' }) => {
    return (
        <div className="d-flex">
            <div className="form-check me-3">
                <label className="form-check-label" htmlFor="si">
                    Si
                </label>
                <input
                    className="form-check-input"
                    type="radio"
                    id="si"
                    value="si"
                    name={name}
                    onChange={e => handleChange(e.target.value)}
                    checked={oldOption === 'si' ? true : false}
                />
            </div>
            <div className="form-check">
                <label className="form-check-label" htmlFor="no">
                    No
                </label>
                <input
                    className="form-check-input"
                    type="radio"
                    id="no"
                    value="no"
                    name={name}
                    onChange={e => handleChange(e.target.value)}
                    checked={oldOption === 'no' ? true : false}
                />
            </div>
        </div>
    )
}
