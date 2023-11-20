import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

const Search = ({ pacientes, setNewPacientes }) => {
    const [search, setSearch] = useState('')

    useEffect(() => {
        const filterPacientes = pacientes?.filter(item =>
            item.name.toLowerCase().includes(search.toLowerCase()),
        )
        if (search.trim() === '') setNewPacientes([...pacientes])
        else setNewPacientes([...filterPacientes])
    }, [search])

    return (
        <div className="input-group p-3">
            <span className="input-group-text">
                <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    width="26px"
                    color="#25A2B7"></FontAwesomeIcon>
            </span>
            <input
                type="text"
                className="form-control"
                aria-label="Dollar amount (with dot and two decimal places)"
                name="search"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
        </div>
    )
}

export default Search
