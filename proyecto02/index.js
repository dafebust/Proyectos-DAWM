    const API_url = 'https://api.covid19api.com/summary';
    const input = document.querySelector('input');
    const button = document.querySelector('button');

button.addEventListener('click', (e) => {
    e.preventDefault();
    traerGrafica(input.value);
})

function traerGrafica(name_country){
    fetch(API_url)
    .then( response => response.json() )
    .then( (data) => {
    
    for (let k in data["Countries"]){
        if ( data["Countries"][k]["Country"] == name_country) {
            console.log(k,name_country)
            let n_c = data["Countries"][k]["NewConfirmed"];
            let t_c = data["Countries"][k]["TotalConfirmed"];
            let n_d = data["Countries"][k]["NewDeaths"];
            let t_d = data["Countries"][k]["TotalDeaths"];
        
            const ctx = document.getElementById('myChart');
            new Chart(ctx, {
            type: 'line',
            data: {
              labels: ['Nuevos casos', 'Total casos', 'Nuevas muertes', 'Total muertes'],
              datasets: [{
                label: 'Cantidad de personas: ',
                backgroundColor: "rgb(0,0,0)",
                borderColor: "rgb(0,255,0",
                data: [n_c, t_c , n_d, t_d],
                borderWidth: 1
              }]
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            }
          });


        }

        else{
            console.log("No es válido el país, pruebe otro o en su defecto en inglés.")
        }
    }

    });    
}


