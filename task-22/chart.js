const ctx = document.getElementById('myChart');


function getNumber(){
    let reqem1 = Math.floor(Math.random() * 100);
    let reqem2 = Math.floor(Math.random() * 100);
    let reqem3 = Math.floor(Math.random() * 100);
    let reqem4 = Math.floor(Math.random() * 100);
}

function liveChart() {
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['User 1', 'user 2', 'user 3', 'user 4'],
            datasets: [{
                label: 'Users',
                data: [`${reqem1}`, `${reqem2}`, `${reqem3}`, `${reqem4}`],
                backgroundColor: 'grey'
            }]
        },
        options: {
            // scales: {
            //     y: {
            //         beginAtZero: true
            //     }
            // }
        }
    });
}

setInterval(function liveChart(){getNumber()}, 1000);
