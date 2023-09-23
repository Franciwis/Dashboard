export const ApiClima1 = async(url) => {
    try{
        const respuesta = await fetch (url);
        
     

        const datos = await respuesta.json();


    return datos;

    }catch(error){
        console.log(error)
    }
}


export const fetchApi = async (url) => {
    const response = await fetch(url);
    const data = response.json();
    return data;
}


export const ApiTempActual = async(url) => {
    try{
        const respuesta = await fetch (url);
        
       

        const datos = await respuesta.json();


    return datos;

    }catch(error){
        console.log(error)
    }
}
