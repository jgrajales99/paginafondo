<template>
    <div class="container">
    <h1>Tabla Usuario</h1>
    <table>
        <thead>
            <tr>
                <th>Codigo</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Edad</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="usuario in usuario" :key="usuario.codigo">
                <td>{{usuario.codigo}}</td>
                <td>{{usuario.nombre}}</td>
                <td>{{usuario.apellido}}</td>
                <td>{{usuario.edad}}</td>
            </tr>
           
        </tbody>



    </table>






</div>
</template>

<script>
import axios from "axios";

export default{
    data(){

        return{
            usuario:[],
        };

    },
    methods:{

        obtenerUsuario(){

            axios.get("http://localhost:8080/api/usuario/listar")
            .then((response)=>{
                this.usuario=response.data;
            })
            .catch((error)=>{
                console.log("error al consultar",error);
            });
        },
    },
    mounted(){
        this.obtenerUsuario();
    }
};

</script>