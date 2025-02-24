function App () {
    const alumnos = [
        
        {nombre : "Maria", edad : 23},
        {nombre : "Pedro", edad : 25}, 
        {nombre : "Juan", edad : 30},
        {nombre : "David", edad : 25},
        {nombre : "Ana", edad : 28},
        {nombre : "Luis", edad : 35},
        {nombre : "Carlos", edad : 40},
        {nombre : "Mateo", edad : 29},
    ]

    return (
        <div>
            <h1>Alumnos</h1>
            {alumnos.map(
                (alumno) => (
                <p>{alumno.nombre}{alumno.edad}</p>
            )
            )
            }
        </div>
    )
}