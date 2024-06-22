<template>
<div class="container">
    <h1>Formulario Usuario</h1>
    <form class="Usuario-form" @submit.prevent="guardar">
        <div class="form-group">
            <label for="codigo">Codigo</label>
            <input type="text" id="codigo" name="codigo" required v-model="codigo">
        </div>
        <div class="form-group">
            <label for="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre" required v-model="nombre">
        </div>
        <div class="form-group">
            <label for="apellido">Apellido</label>
            <input type="text" id="apellido" name="apellido" required v-model="apellido">
        </div>
        <div class="form-group">
            <label for="edad">Edad</label>
            <input type="text" id="edad" name="edad" required v-model="edad">
        </div>
    
    <button type="submit" id="guardar" name="guardar">Guardar</button><br>
    <button type="button" name="eliminar" id="eliminar" @click="eliminar">Eliminar</button><br>
    <button type="button" name="actualizar" id="actualizar" @click="actualizar">Acutalizar</button><br>
    <button type="button" name="consultar" id="consultar" @click="consultar">Consultar</button><br>
</form>
</div>
</template>
<script>
import axios from 'axios';
export default {
    data(){
    
    return{

    codigo:"",
    nombre:"",
    apellido:"",
    edad:null,
    };

},

methods:{
    guardar(){
        axios
        .post("http://localhost:8080/api/usuario",{
            codigo:this.codigo,
            nombre:this.nombre,
            apellido:this.apellido,
            edad:this.edad,
        })
        .then((response)=>{
            console.long("Usuario registrado con exito", response.data);
            alert("exito");
            this.codigo="";
            this.nombre="";
            this.apellido="";
            this.edad="";
        })
        .catch((error)=>{
            console.error("error al registrar", error)
        });
        },
        consultar(){

            axios.get("http://localhost:8080/api/usuario/"+this.codigo)
            .then((response)=>{
                this.nombre=response.data.nombre;
                this.apellido=response.data.apellido;
                this.edad=response.data.edad;

            })
            .catch((error)=>{
                console.error("error al consultar estudiante", error);
            });

        },

        actualizar(){
            axios.put("http://localhost:8080/api/usuario/actualizar/"+this.codigo,{
                codigo:this.codigo,
                nombre:this.nombre,
                apellido:this.apellido,
                edad:this.edad,


            })
            .then((response)=>{
                console.log("usuario actualizado", response.data);
            })
            .catch((error)=>{
                console.error("error al actualizar", error);
            });
        },

        eliminar(){
            axios.delete("http://localhost:8080/api/usuario/"+this.codigo)
            .then(()=>{
                console.log("estudiante eliminado");
                alert("estudiante eliminado con exito");
                this.codigo="";
                this.nombre="";
                this.apellido="";
                this.edad="";

            })
            .catch((error)=>{
                console.error("error al eliminar",error);
            });
        }

        },
};

</script>