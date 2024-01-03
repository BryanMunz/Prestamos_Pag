export const Options = ({ handleChange, oldOption, name = 'alergia' }) => {
    return (
        <div className="d-flex">
            <div className="form-check me-3">
                <input
                    className="form-check-input"
                    type="radio"
                    name={name}
                    id="si"
                    value="si"
                    onChange={e => handleChange(e.target.value)}
                    checked={oldOption === 'si' ? true : false}
                />
                <label className="form-check-label" for="si">
                    Si
                </label>
            </div>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="radio"
                    name={name}
                    id="no"
                    value="no"
                    onChange={e => handleChange(e.target.value)}
                    checked={oldOption === 'no' ? true : false}
                />
                <label className="form-check-label" for="no">
                    No
                </label>
            </div>
        </div>
    )
}
