export const fetchAllHAChars = async () => {
    const rawData = await fetch('https://hey-arnold-api.herokuapp.com/api/v1/characters');
    const jsonData = await rawData.json();
  
    return jsonData
  };


export const fetchHACharById = async (id) => {
    const rawData = await fetch(`https://hey-arnold-api.herokuapp.com/api/v1/characters/${id}`);
    const jsonData = await rawData.json();
  
    return jsonData
  };