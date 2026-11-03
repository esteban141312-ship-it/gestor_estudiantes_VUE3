const app = Vue.createApp({

    data() {
        return {
            nombre: "",
            carrera: "",
            calificacion: null,

            carreras: [
                "Software",
                "Sistemas",
                "Electrónica",
                "Industrial"
            ],

            cupoMaximo: 10,
            estudiantes: [],
            siguienteId: 1,

            filtroCarrera: "Todas",
            busqueda: "",
            filtroEstado: "todos"
        };
    },

    methods: {

        // Validar el nombre
        errorNombre() {
            if (this.nombre.length < 3) {
                return "El nombre debe tener al menos 3 letras";
            }

            return "";
        },

        // Validar la carrera
        errorCarrera() {
            if (this.carrera === "") {
                return "Debe elegir una carrera";
            }

            return "";
        },

        // Validar la calificación
        errorCalificacion() {
            if (
                this.calificacion === null ||
                this.calificacion === "" ||
                !Number.isFinite(this.calificacion) ||
                this.calificacion < 0 ||
                this.calificacion > 10
            ) {
                return "La calificación debe estar entre 0 y 10";
            }

            return "";
        },

        // Comprobar si el estudiante ya existe
        esDuplicado() {
            return this.estudiantes.some(est =>
                est.nombre.toLowerCase() === this.nombre.toLowerCase() &&
                est.carrera === this.carrera
            );
        },

        // Comprobar si el formulario es válido
        formularioValido() {
            return (
                this.errorNombre() === "" &&
                this.errorCarrera() === "" &&
                this.errorCalificacion() === "" &&
                !this.esDuplicado() &&
                this.estudiantes.length < this.cupoMaximo
            );
        },

        // Agregar un estudiante
        agregarEstudiante() {

            if (!this.formularioValido()) {
                return;
            }

            const estudiante = {
                id: this.siguienteId,
                nombre: this.nombre,
                carrera: this.carrera,
                calificacion: this.calificacion
            };

            this.estudiantes.push(estudiante);

            this.siguienteId++;

            this.nombre = "";
            this.carrera = "";
            this.calificacion = null;
        },

        // Eliminar un estudiante
        eliminarEstudiante(id) {
            this.estudiantes = this.estudiantes.filter(est =>
                est.id !== id
            );
        },

        // Subir la calificación en un punto
        subirCalificacion(est) {
            if (est.calificacion < 10) {
                est.calificacion++;
            }
        },

        // Bajar la calificación en un punto
        bajarCalificacion(est) {
            if (est.calificacion > 0) {
                est.calificacion--;
            }
        },

        // Obtener el color de la calificación
        colorNota(nota) {
            if (nota >= 6) {
                return "verde";
            }

            if (nota >= 4) {
                return "naranja";
            }

            return "rojo";
        },

        // Filtrar estudiantes por carrera, nombre y estado
        estudiantesFiltrados() {
            return this.estudiantes.filter(est => {

                const coincideCarrera =
                    this.filtroCarrera === "Todas" ||
                    est.carrera === this.filtroCarrera;

                const coincideNombre =
                    est.nombre.toLowerCase().includes(
                        this.busqueda.toLowerCase()
                    );

                const coincideEstado =
                    this.filtroEstado === "todos" ||
                    (
                        this.filtroEstado === "aprobados" &&
                        est.calificacion >= 6
                    ) ||
                    (
                        this.filtroEstado === "reprobados" &&
                        est.calificacion < 6
                    );

                return (
                    coincideCarrera &&
                    coincideNombre &&
                    coincideEstado
                );
            });
        },

        // Calcular el promedio
        promedio() {
            if (this.estudiantes.length === 0) {
                return 0;
            }

            const suma = this.estudiantes.reduce(
                (total, est) => total + est.calificacion,
                0
            );

            return suma / this.estudiantes.length;
        },

        // Contar los estudiantes aprobados
        contarAprobados() {
            return this.estudiantes.filter(est =>
                est.calificacion >= 6
            ).length;
        },

        // Contar los estudiantes reprobados
        contarReprobados() {
            return this.estudiantes.filter(est =>
                est.calificacion < 6
            ).length;
        },

        // Encontrar al estudiante con la nota más alta
        mejorEstudiante() {
            return this.estudiantes.reduce((mejor, est) => {
                if (est.calificacion > mejor.calificacion) {
                    return est;
                }

                return mejor;
            }, this.estudiantes[0]);
        },

        // Borrar todos los estudiantes
        borrarTodo() {
            this.estudiantes = [];
        }

    }

});

app.mount("#app");
