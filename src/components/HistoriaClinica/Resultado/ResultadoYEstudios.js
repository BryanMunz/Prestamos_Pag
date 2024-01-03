import style from '@/style/HistoriaClinica/InputFile.module.css'
export const ResultadoYEstudios = () => {
    return (
        <div class="container mt-5">
            <h2 className="fs-6 mb-3">Resultado y Estudio Clínicos</h2>
            <div className="row mt-4">
                <div className="col">
                    <h3
                        className="fs-6 px-3 py-2 mb-0 rounded-top border"
                        style={{ backgroundColor: '#f7f7f7' }}>
                        Archivos
                    </h3>
                    <div className="d-flex justify-content-center  border border-top-0">
                        <div className='my-5'>
                            <input
                                type="file"
                                name="file-1"
                                id="file-1"
                                className={`${style.inputfile} ${style.inputfile_1} `}
                                data-multiple-caption="{count} archivos seleccionados"
                                multiple
                            />
                            <label for="file-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`${style.iborrainputfile}`}
                                    width="20"
                                    height="17"
                                    viewBox="0 0 20 17">
                                    <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path>
                                </svg>
                                <span className={`${style.iborrainputfile}`}>
                                    Seleccionar archivo
                                </span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
