
export function deleteJob(id: number){
    const url = "http://thor.jobhuntapi/api/job/byID/" + id;

    fetch(url, 
    {
        method: 'DELETE'
    })
}