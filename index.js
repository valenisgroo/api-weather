import express from 'express'; //Importar express module
import dotenv from 'dotenv'; //Importar dotenv module
dotenv.config(); //Cargar variables de entorno desde el archivo .env
import { PedirClima } from './logica.js'; //Importar la funcion PedirClima desde el archivo logica.js

import cors from 'cors'; //Importar cors module

const app = express(); //App tiene metodos de express

app.use(cors());// Permitir peticiones desde cualquier origen



const port = process.env.PORT || 3001; //Definir el puerto, si no existe en el archivo .env se usara el 3001 por defecto

app.get('/', (req, res) => { //Si alguien entra a la ruta '/' se ejecuta la funcion
    res.send('Hello World!');
});

app.get('/weather', PedirClima);



//Inciar el servidor
app.listen(port, () => {  //Inicia el servidor y lo pone a escuchar en el puerto 3000.
    console.log(`El servidor está corriendo el puerto http://localhost:${port}`); //Mensaje de confirmacion
});                 

