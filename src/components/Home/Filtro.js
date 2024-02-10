import { useEffect, useState } from 'react'
import ItemFiltro from './ItemFiltro'

const Filtro = ({ getPacientes }) => {
    const [order, setOrder] = useState({ value: '', text: 'Nombre(A - Z)' })
    const [filter, setFilter] = useState({ value: 'todos', text: 'Todos' })

    useEffect(() => {
        getPacientes(order.value, filter.value)
    }, [order])

    useEffect(() => {
        getPacientes(order.value, filter.value)
    }, [filter])

    const handleOrder = event => {
        const selectedIndex = event.target.selectedIndex
        const selectedOptionText =
            selectedIndex == 0
                ? 'Nombre(A - Z)'
                : event.target.options[selectedIndex].text
        setOrder({ value: event.target.value, text: selectedOptionText })
    }

    const handleFilter = event => {
        const selectedIndex = event.target.selectedIndex
        const selectedOptionText =
            selectedIndex == 0
                ? 'Sin plan'
                : event.target.options[selectedIndex].text
        setFilter({ value: event.target.value, text: selectedOptionText })
    }

    const handleFilterBotton = (text, value) => {
        setFilter({ value, text })
    }

    return (
        <div className="container-fluid">
            <div className="row d-flex d-md-none px-1 mt-2">
                <div className="col-6 m-0 p-0">
                    <select className="form-select" onChange={handleFilter}>
                        <option>Filtrar por:</option>
                        <option value="sin plan">Sin plan</option>
                        <option value="activo">Plan activo</option>
                        <option value="finalizado">Plan finalizado</option>
                        <option value="cancelado">Plan cancelado</option>
                    </select>
                </div>
                <div className="col-6 d-flex align-items-center m-0 p-0 ps-3">
                    <p className="text-primary fw-bold p-0 m-0">
                        {filter.text}
                    </p>
                </div>
            </div>
            <div className="row px-1 px-md-5 text-center mt-3 ">
                <div className="col-12 col-lg-8 border border-black rounded-pill d-flex flex-wrap justify-content-between p-0 d-none d-md-flex m-0">
                    <ItemFiltro
                        text="Todos los pacientes"
                        border="start"
                        active={ filter.value == 'todos' ? true : false }
                        value='todos'
                        handleFilterBotton={handleFilterBotton}></ItemFiltro>
                    <ItemFiltro
                        text="Plan activo"
                        value='activo'
                        active={ filter.value == 'activo' ? true : false }
                        handleFilterBotton={handleFilterBotton}></ItemFiltro>
                    <ItemFiltro
                        text="Plan finalizado"
                        value='finalizado'
                        active={ filter.value == 'finalizado' ? true : false }
                        handleFilterBotton={handleFilterBotton}></ItemFiltro>
                    <ItemFiltro
                        text="Plan cancelado"
                        value='cancelado'
                        active={ filter.value == 'cancelado' ? true : false }
                        handleFilterBotton={handleFilterBotton}></ItemFiltro>
                    <ItemFiltro
                        text="Sin plan"
                        border="end"
                        value='sin plan'
                        active={ filter.value == 'sin plan' ? true : false }
                        handleFilterBotton={handleFilterBotton}></ItemFiltro>
                </div>
                <div className="col-6 col-lg-2 mt-3 mt-lg-0 p-0 ps-lg-2 m-0">
                    <select
                        id="disabledSelect"
                        className="form-select"
                        onChange={handleOrder}>
                        <option>Ordenar por: </option>
                        <option value="asc_nombre">Nombre(A - Z)</option>
                        <option value="desc_nombre">Nombre(Z - A)</option>
                        <option value="asc_fecha">
                            Fecha de nacimiento(MAY - MEN)
                        </option>
                        <option value="desc_fecha">
                            Fecha de nacimiento(MEN - MAY)
                        </option>
                    </select>
                </div>
                <div className="col-6 col-lg-2 d-flex align-items-center mt-lg-0 mt-3">
                    <p className="text-primary fw-bold p-0 m-0">{order.text}</p>
                </div>
            </div>
        </div>
    )
}

export default Filtro
