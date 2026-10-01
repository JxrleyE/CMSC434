function openCity(tab) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Show the specific tab content
  document.getElementById(tab).style.display = "block";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// Creating chart and inserting it into colors div

Chart.register(ChartDataLabels)

const ctx = document.getElementById("myChart")

new Chart(ctx, {
    type: "pie",

    data: {
      labels: [
        "Roses", 
        "Violets",
        "Tulips",
      ],
        datasets: [{
            data: [300, 500, 100],
            backgroundColor: [
              'rgb(255, 0, 127)',
              'rgb(127, 0, 255)',
              'rgb(255, 135, 141)'
            ], 
        }]
    },

    options: {
      layout: {
        padding: {
        top: 35,
        bottom: 65,
        }
    },
      plugins: {
          legend: {
            labels: {
              color: 'White'
            },
            position: 'bottom'
          },

          datalabels: {
          anchor: 'end',
          align: 'end',
          offset: 10,
          color: 'white',
          }
      }
    }
});