export function chartFunction(){
    const ctx = document.getElementById('orderChart');

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: [
          "08-Feb", "09-Feb", "10-Feb", "11-Feb",
          "12-Feb", "13-Feb", "14-Feb", "15-Feb",
          "16-Feb", "17-Feb", "18-Feb", "19-Feb",
          "20-Feb", "21-Feb"
        ],
        datasets: [{
          label: 'Amount',
          data: [0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
          borderColor: 'orange',
          backgroundColor: 'rgba(255,165,0,0.2)',
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: {
           min: 0,
            max: 3,
            ticks: {
              stepSize: 1,
              precision: 0
            }
          }
        }
      }
    });
}