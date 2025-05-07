import dotenv from 'dotenv'; //Importamos dotenv 

dotenv.config();

const apiKey = process.env.API_KEY; //Definir la apiKey
console.log('API Key:', apiKey);

export const PedirClima = async (req,res) =>{
    try{
        const ciudad = req.query.ciudad; //Obtenemos la ciudad de la query
        
        if (!ciudad) {
            return res.status(400).json({ error: 'Debes especificar una ciudad' });
        }
        
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`; //Definimos la url de la api
        const response = await fetch(url); //Hacemos la peticion a la api
        const data = await response.json(); //Convertimos la respuesta a json
        res.json(data); //Devolvemos el json al cliente
        
        
    }catch(error){
        res.status(500).json({ error: 'Error al obtener el clima' });
    }
} 