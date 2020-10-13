const API_URL = "http://localhost:9000";


export async function listlogEntries(){
    const response = await fetch(`${API_URL}/api/logs `);
    return response.json();
}

export async function createlogEntries(entry){
    const response = await fetch(`${API_URL}/api/logs `, {
        method: 'POST',
        headers:{
            'content-type': 'application/json',
        },
        body : JSON.stringify(entry),
    });
    return response.json();
}