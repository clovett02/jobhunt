
export async function PostLocation(ID: string, city: string, state: string){
    
    const url = "http://thor.jobhuntapi/api/job/updatelocation";
    const payload = {
        ID: ID,
        City: city,
        State: state
    };

    try{
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);}
    } catch (error) {
            alert(`Failed to update location: ${error.message}`);
        }
}

export async function PostDescription(ID: string, description: string)
{
    const url = "http://thor.jobhuntapi/api/job/updatedescription";
    const payload = {
        ID: ID,
        JobDescription: description
    };

    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response;
}