<template>
    <div class="components">
        <FormularioUsuario/>
        <TablaUsuario/>
    </div>


</template>

<script>
import FormularioUsuario from "@/components/FormularioUsuario.vue"
import TablaUsuario from "@/components/TablaUsuario.vue"

export default{

    name: "UsuarioView",

    components:{

        FormularioUsuario,
        TablaUsuario
    }
}
</script>

<style>
body{
    font-family: Arial, Helvetica, sans-serif;
    background-color: aliceblue;
    margin: 0;
    padding: 0;
}

.components{
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-auto-rows: 1fr;

}

.container{
    margin: 1rem;
    padding: 1rem;
    background-color: azure;
    box-shadow: 0 0 10px black;
    border-radius: 5px;

}
h1{
    text-align: center;
    margin-bottom: 15px;

}
.form-group{
    margin-bottom: 15px;
}

form{
    padding: 2%;

}
label{
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}
input{
    width:100%;
    padding: 8px;
    border: 1px solid antiquewhite;
    border-radius: 3px;
}
button{
    display: block;
    width: 100%;
    padding: 10px;
    background-color: aquamarine;
    color:blanchedalmond;
    border:none;
    cursor:pointer;
}

button:hover{
    background-color: blue;
}
table{
    width:100%;
    border-collapse: collapse;
    margin-bottom: 20px; 
}
th, td{
    padding:10px;
    text-align:left;
    border-style: solid;
}
tr{
    border-style: solid;
}
th{
    background-color: aquamarine;
    color:white;
    border-style:solid;
}
tr:hover{
    background-color: blanchedalmond;
}
</style>
