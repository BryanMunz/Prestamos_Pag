import { Button, Modal } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faLink } from '@fortawesome/free-solid-svg-icons'
import axios from '@/lib/axios'
import { useEffect, useState } from 'react'
import { ListsProtocolos } from './ListsProtocolos'

export const AsignarProtocolo = ({
    setShow,
    show,
    paciente,
    setFlag,
    setShowCrear,
}) => {
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const [data, setData] = useState(null)
    const [lastPage, setLastPage] = useState(1)
    const [total, setTotal] = useState(null)
    const [totalPagina, setTotalPagina] = useState(null)

    const getProtocolo = () => {
        axios
            .get('/api/protocolos?page=1')
            .then(res => {
                setData(res.data.data)
                setLastPage(res.data.last_page)
                setTotal(res.data.total)
                setTotalPagina(res.data.data.length)
            })
            .catch(error => console.log(error))
    }

    const handleNuevoProtocolo = () => {
        setShow(false)
        setShowCrear(true)
    }

    useEffect(() => {
        getProtocolo()
    }, [])

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                size="xl"
                fullscreen="lg-down">
                <Modal.Body>
                    <div className="d-flex justify-content-between align-items-center">
                        <InputGroup className="w-75">
                            <InputGroup.Text
                                id="basic-addon1"
                                className="bg-white">
                                <FontAwesomeIcon
                                    icon={faMagnifyingGlass}
                                    style={{ width: '15px' }}
                                />
                            </InputGroup.Text>
                            <Form.Control
                                placeholder="Buscar protocolo"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                className="border-start-0"
                            />
                        </InputGroup>
                        <Button
                            className="rounded-pill px-4"
                            onClick={handleNuevoProtocolo}>
                            {' '}
                            Crear protocolo{' '}
                        </Button>
                    </div>

                    <div className="mt-3">
                        <p>
                            Protocolos totales{' '}
                            <span className="text-primary">{totalPagina}</span>/
                            {total}
                        </p>
                    </div>

                    <ListsProtocolos
                        protocolos={data}
                        paciente={paciente}
                        setFlag={setFlag}
                        setShow={setShow}
                    />
                </Modal.Body>
            </Modal>
        </>
    )
}
