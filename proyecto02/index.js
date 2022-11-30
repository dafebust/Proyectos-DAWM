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
            type: 'doughnut',
            data: {
              labels: ['Nuevos casos', 'Total casos', 'Nuevas muertes', 'Total muertes'],
              datasets: [{
                label: 'Cantidad de personas: ',
                backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(55, 25, 66)'],
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

          
          const ctz = document.getElementById('myChart2');
            new Chart(ctz, {
            type: 'polarArea',
            data: {
              labels: ['Nuevos casos', 'Total casos', 'Nuevas muertes', 'Total muertes'],
              datasets: [{
                label: 'Cantidad de personas: ',
                borderColor: "rgb(0,255,0",
                data: [n_c, t_c , n_d, t_d],
                backgroundColor: [
                  'rgb(255, 99, 132)',
                  'rgb(75, 192, 192)',
                  'rgb(255, 205, 86)',
                  'rgb(201, 203, 207)'
                ],

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


