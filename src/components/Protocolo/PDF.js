import {
    Document,
    Page,
    Text,
    StyleSheet,
    View,
    Image,
} from '@react-pdf/renderer'

const styles = StyleSheet.create({
    header: {
        marginBottom: 10,
    },
    header_table: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '20px',
    },
    image_table_header: {
        width: '50px',
    },
    title_header_table: {
        textAlign: 'center',
        fontSize: '12px',
        margin: 'auto',
    },
    footer: {
        position: 'absolute',
        bottom: 20,
        left: 10,
        right: 10,
        fontSize: 10,
        borderTop: '1px solid #0000',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 5,
    },
    body: {
        paddingTop: '15px',
        paddingBottom: '50px',
        paddingLeft: '20px',
        paddingRight: '20px',
        flexDirection: 'column',
        margin: 10,
    },
    info_principal: {
        fontWeight: 'bold',
        fontSize: '11px',
    },
    sets: {
        fontSize: '12px',
        textAlign: 'right',
        marginTop: '10px',
    },
    content: {
        borderTop: '1px solid #0000',
        marginTop: '30px',
    },
    image: {
        width: '200px',
        height: '110px',
    },

    content_info: {
        display: 'flex',
        flexDirection: 'row',
    },
    title_ejercicio: {
        fontWeight: 'bold',
        fontSize: '14px',
        marginLeft: '7px',
        marginBottom: '5px',
    },
    description_ejercicio: {
        fontSize: '11px',
        fontWeight: 'normal',
        marginLeft: '7px',
    },
    content_comentarios: {
        backgroundColor: '#cee9fe',
        padding: '10px 15px',
    },
    content_comentario: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title_comentario: {
        fontSize: '12px',
        fontWeight: 'bold',
        width: '30%',
        maxWidth: '30%',
    },
    comentario: {
        fontSize: '11px',
        width: '40%',
        maxWidth: '40%',
        paddingRight: '5px',
    },
    fecha_comentario: {
        fontSize: '9px',
        width: '30%',
        maxWidth: '30%',
    },
    piePaginaNumPagina: {
        paddingRight: 10,
    },
    table: {
        display: 'table',
        width: 'auto',
        borderTop: '1px solid #0000',
        paddingTop: '10px',
    },
    tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '5px',
        marginBottom: '5px',
    },
    tableCol: {
        width: '30px',
        border: '1px solid #0000',
        alignItems: 'center',
    },
    tableColTitle: {
        width: '60px',
        border: '1px solid #0000',
        fontSize: '11px',
        alignItems: 'center',
    },
    cell: { margin: 'auto', marginTop: 5, fontSize: 10, marginBottom: 5 },
    cell_title: {
        marginTop: '5px',
        marginBottom: '5px',
    },
})
const data = Array.from({ length: 18 }, (_, rowIndex) => {
    // Aquí puedes poner lógica para generar datos específicos para cada fila
    return rowIndex
})

export default function PDF({
    protocolos = [],
    paciente,
    consulorio,
    usuario,
    infoProfesional,
    organizacion,
    dias,
    comentarios,
    fechas = [],
}) {
    return (
        <Document>
            <Page size="A4" style={styles.body} wrap>
                <View style={styles.header}>
                    <Text style={styles.info_principal}>
                        NOMBRE DE LA CLÍNICA:{' '}
                        {organizacion?.nombre_organizacion
                            ? organizacion?.nombre_organizacion
                            : 'Sin información'}
                    </Text>
                    <Text style={styles.info_principal}>
                        NOMBRE MÉDICO/TERAPEUTA RESPONSABLE:{' '}
                        {`${usuario?.name} ${usuario?.last_name}`}
                    </Text>
                    <Text style={styles.info_principal}>
                        DIRECIÓN DE LA CLÍNICA/CONSULTORIO:{' '}
                        {consulorio?.direccion
                            ? consulorio?.direccion
                            : 'Sin información'}
                    </Text>
                    <Text style={styles.info_principal}>
                        CÉDULA PREFESIONAL:{' '}
                        {infoProfesional?.cedula
                            ? infoProfesional?.cedula
                            : 'Sin información'}
                    </Text>
                </View>
                <View>
                    <View>
                        <Text style={styles.info_principal}>
                            PACIENTE:{' '}
                            {`${paciente?.name} ${paciente?.last_name}`}
                        </Text>
                        <Text style={styles.info_principal}>
                            NOMBRE DEL PROGRAMA: Programa sin nombre
                        </Text>
                        <Text style={styles.info_principal}>
                            PERIODO: 1 semana
                        </Text>
                    </View>

                    {protocolos?.length > 0 &&
                        protocolos.map((protocolo, index) => (
                            <View style={styles.content} key={index}>
                                <Text style={styles.sets}>
                                    {protocolo?.sets} Serie /{' '}
                                    {protocolo?.repeticiones} Repetición
                                </Text>
                                <View style={styles.content_info}>
                                    <Image
                                        style={styles.image}
                                        src="/images/logo/yoga.jpg"></Image>
                                    <View>
                                        <Text style={styles.title_ejercicio}>
                                            {protocolo?.nombre}
                                        </Text>
                                        <Text
                                            style={
                                                styles.description_ejercicio
                                            }>
                                            {protocolo?.descripcion}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        ))}
                    <View style={styles.content}>
                        <View style={styles.content_comentarios}>
                            {comentarios &&
                                comentarios.map((comentario, index) => (
                                    <View
                                        style={styles.content_comentario}
                                        key={index}>
                                        <Text style={styles.title_comentario}>
                                            Comentario del programa:
                                        </Text>
                                        <Text style={styles.comentario}>
                                            {comentario?.comentario}
                                        </Text>
                                        <Text style={styles.fecha_comentario}>
                                            Registrado{' '}
                                            {comentario?.formatted_date}
                                        </Text>
                                    </View>
                                ))}
                        </View>
                    </View>
                </View>

                {/* <Footer /> */}
                <View style={styles.footer} fixed>
                    <View>
                        <Text>Nombre del programa</Text>
                        <Text>
                            Asignado por:{' '}
                            {`${usuario?.name} ${usuario?.last_name}`}
                        </Text>
                    </View>
                    <View style={styles.piePaginaNumPagina}>
                        <Text
                            render={({ pageNumber, totalPages }) =>
                                `${pageNumber} / ${totalPages}`
                            }
                        />
                    </View>
                </View>
            </Page>
            <Page wrap orientation="landscape" style={styles.body}>
                <View style={styles.header_table}>
                    <View>
                        <Image
                            style={styles.image_table_header}
                            src="/images/logo/yoga.jpg"></Image>
                    </View>
                    <View style={styles.title_header_table}>
                        <Text>Nombre del programa</Text>
                        <Text>
                            Asignado por:{' '}
                            {`${usuario?.name} ${usuario?.last_name}`}
                        </Text>
                    </View>
                </View>
                {protocolos?.length > 0 &&
                    protocolos.map((protocolo, index) => (
                        <View style={styles.table} key={index}>
                            <Text
                                style={
                                    styles.title_ejercicio
                                }>{`${index} .- ${protocolo?.nombre}`}</Text>
                            {/* Fechas */}
                            <View style={styles.tableRow}>
                                {data.map((d, i) =>
                                    i === 0 ? (
                                        <View style={styles.tableColTitle}>
                                            <Text style={styles.cell_title}>
                                                Fecha
                                            </Text>
                                        </View>
                                    ) : (
                                        <View style={styles.tableCol}>
                                            <Text style={styles.cell}>
                                                {dias && dias[i] ? dias[i] : ''}
                                            </Text>
                                        </View>
                                    ),
                                )}
                            </View>
                            {/* Serires */}
                            <View style={styles.tableRow}>
                                {data.map((d, i) =>
                                    i === 0 ? (
                                        <View style={styles.tableColTitle}>
                                            <Text style={styles.cell_title}>
                                                Series
                                            </Text>
                                        </View>
                                    ) : (
                                        <View style={styles.tableCol}>
                                            <Text style={styles.cell}>
                                                {fechas &&
                                                Object.values(fechas).length > i
                                                    ? fechas[dias[i]] === '--'
                                                        ? '--'
                                                        : '/1'
                                                    : ''}
                                            </Text>
                                        </View>
                                    ),
                                )}
                            </View>
                            {/* Repeticiones */}
                            <View style={styles.tableRow}>
                                {data.map((d, i) =>
                                    i === 0 ? (
                                        <View style={styles.tableColTitle}>
                                            <Text style={styles.cell_title}>
                                                Repetición
                                            </Text>
                                        </View>
                                    ) : (
                                        <View style={styles.tableCol}>
                                            <Text style={styles.cell}>
                                                {fechas &&
                                                Object.values(fechas).length > i
                                                    ? fechas[dias[i]] === '--'
                                                        ? '--'
                                                        : '/1'
                                                    : ''}
                                            </Text>
                                        </View>
                                    ),
                                )}
                            </View>
                            <View style={styles.tableRow}>
                                {data.map((d, i) =>
                                    i === 0 ? (
                                        <View style={styles.tableColTitle}>
                                            <Text style={styles.cell_title}>
                                                Dolor (0/10)
                                            </Text>
                                        </View>
                                    ) : (
                                        <View style={styles.tableCol}>
                                            <Text style={styles.cell}></Text>
                                        </View>
                                    ),
                                )}
                            </View>
                        </View>
                    ))}
                <View style={styles.footer} fixed>
                    <View>
                        <Text>Nombre del programa</Text>
                        <Text>
                            Asignado por:{' '}
                            {`${usuario?.name} ${usuario?.last_name}`}
                        </Text>
                    </View>
                    <View style={styles.piePaginaNumPagina}>
                        <Text
                            render={({ pageNumber, totalPages }) =>
                                `${pageNumber} / ${totalPages}`
                            }
                        />
                    </View>
                </View>
            </Page>
        </Document>
    )
}
