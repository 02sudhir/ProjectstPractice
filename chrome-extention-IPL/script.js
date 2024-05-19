async function getMatchDate(){
    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=ed4fbfcb-0655-40f8-9c0e-d06077bd7ede&offset=0")
    .then(data => data.json())
    .then(data=>{
        if(data.status != "success")return;

        const MatchList =data.data;

        if(!MatchList)return [];
        const releventData = MatchList.filter(match => match.
            series_id =="76ae85e2-88e5-4e99-83e4-5f352108aebc").map(match =>`${match.name}, ${match.status}.`);

        // const score =MatchList.map(match =>``)

        document.getElementById("matches").innerHTML=releventData.map(match =>`<li>${match} </li>`).join('');
       


        return releventData()
    })
    .catch(e => console.log(e));

}

getMatchDate()