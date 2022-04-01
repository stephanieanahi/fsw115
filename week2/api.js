
const api ='https://opentdb.com/api.php?amount=10'
async function getISS() {
    const response = await fetch (api);
    const data = await response.json();
    console.log(data);
    const {results} = data
    document.getElementById('res').textContent=results;
}
 getISS();
 