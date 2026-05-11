const API_URL = "https://script.google.com/macros/s/AKfycbx82H6AzBkEiSNhn3gWTRzR-NCbqle-ydcYP8_nkfMyVfd_U8me_PtwbqMwwp_DCS-yaA/exec";
        maintainAspectRatio: false,

        scales: {
            x: {
                ticks: {
                    color: 'white'
                }
            },
            y: {
                ticks: {
                    color: 'white'
                }
            }
        },

        plugins: {
            legend: {
                labels: {
                    color: 'white'
                }
            }
        }
    }
});


async function loadData() {

    try {

        const response = await fetch(API_URL);
        const data = await response.json();


        // MACHINE 1
        document.getElementById('temp1').innerText = data.machine1.temp + '°C';
        document.getElementById('pressure1').innerText = data.machine1.pressure + ' bar';
        document.getElementById('status1').innerText = data.machine1.status;


        // MACHINE 2
        document.getElementById('temp2').innerText = data.machine2.temp + '°C';
        document.getElementById('pressure2').innerText = data.machine2.pressure + ' bar';
        document.getElementById('status2').innerText = data.machine2.status;


        // TABLE
        const tableBody = document.getElementById('tableBody');
        tableBody.innerHTML = '';

        data.table.forEach(row => {

            tableBody.innerHTML += `
                <tr>
                    <td>${row.machine}</td>
                    <td>${row.temp}</td>
                    <td>${row.pressure}</td>
                    <td>${row.status}</td>
                    <td>${row.output}</td>
                </tr>
            `;
        });


    } catch(error) {

        console.error(error);
    }
}


loadData();

setInterval(loadData, 5000);