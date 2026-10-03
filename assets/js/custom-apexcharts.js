/* ------------------ Unique Visitor Chart Index.html -----------------*/
const chartData = {
  year: {
    categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    pageViews: [45,58,70,52,65,48,75,82,90,78,95,88],
    sessions: [30,48,62,45,55,42,60,72,80,65,85,76]
  },
  month: {
    categories: ['1','5','10','15','20','25','30'],
    pageViews: [20,35,28,45,38,60,52],
    sessions: [35,55,42,30,50,62,45]
  },
  week: {
    categories: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
    pageViews: [0,25,35,22,18,104,75],
    sessions: [48,98,17,45,62,40,0]
  }
};
const C = {
  pv: 'PAGE VIEWS',
  ss: 'SESSIONS',
  orange: '#EE9415',
  blue: '#2879DF',
  text: '#111111',
  font: 'Metropolis'
};
const label = (size, weight) => ({
  style: { colors: C.text, fontSize: size, fontWeight: weight, fontFamily: C.font }
});
function getOptions(period = 'week') {
  const d = chartData[period];
  return {
    series: [
      { name: C.pv, data: d.pageViews },
      { name: C.ss, data: d.sessions }
    ],
    chart: {
      type: 'area',
      height: 550,
      toolbar: { show: false },
      zoom: { enabled: false },
      animations: { enabled: true, easing: 'easeinout', speed: 500 }
    },
    colors: [C.orange, C.blue],
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth', width: 4 },
    fill: { type: 'solid', opacity: 0.30 },
    markers: { size: 0, hover: { size: 5 } },
    xaxis: {
      categories: d.categories,
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: label('17px', 500)
    },
    yaxis: {
      min: 0,
      max: 120,
      tickAmount: 4,
      labels: { ...label('17px', 400), formatter: v => Math.round(v) }
    },
    grid: {
      borderColor: '#E5E5E5',
      strokeDashArray: 0,
      xaxis: { lines: { show: false } },
      yaxis: { lines: { show: true } },
      padding: { left: 10, right: 20, top: 10, bottom: 0 }
    },
    legend: {
      show: true,
      position: 'bottom',
      horizontalAlign: 'center',
      fontSize: '14px',
      fontWeight: 600,
      fontFamily: C.font,
      offsetY: 5,
      markers: { shape: 'square', width: 30, height: 30, radius: 0 },
      itemMargin: { horizontal: 25, vertical: 5 }
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: { formatter: v => v }
    },
    responsive: [
      {
        breakpoint: 768,
        options: {
          chart: { height: 400 },
          xaxis: {
            categories: d.categories,
            labels: { offsetY: 50, ...label('16px', 500) },
            axisBorder: { show: false },
            axisTicks: { show: false }
          },
          yaxis: {
            min: 0,
            max: 120,
            tickAmount: 4,
            labels: label('16px', 500)
          },
          legend: {
            fontSize: '13px',
            markers: { width: 20, height: 20, radius: 0 },
            itemMargin: { horizontal: 12, vertical: 5 }
          }
        }
      },
      {
        breakpoint: 480,
        options: {
          chart: { height: 350 },
          legend: {
            fontSize: '12px',
            markers: { width: 16, height: 16, radius: 0 },
            itemMargin: { horizontal: 8, vertical: 3 }
          }
        }
      }
    ]
  };
}
const visitorChart = new ApexCharts(
  document.querySelector('#visitorChart'),
  getOptions('week')
);
visitorChart.render();
function changePeriod(period, button) {
  document.querySelectorAll('.chart-tab').forEach(tab => tab.classList.remove('active'));
  button.classList.add('active');
  const d = chartData[period];
  visitorChart.updateOptions({
    xaxis: { categories: d.categories },
    responsive: getOptions(period).responsive
  });
  visitorChart.updateSeries([
    { name: C.pv, data: d.pageViews },
    { name: C.ss, data: d.sessions }
  ]);
}

/* ------------------ Income Overview Chart Index.html -----------------*/
const options = {
    series: [{ name: 'Visitors', data: [48, 82, 120, 50, 112, 68, 86] }],
    chart: {
        type: 'bar',
        height: 550,
        toolbar: { show: false },
        zoom: { enabled: false }
    },
    colors: ['#1677FF'],
    plotOptions: {
        bar: {
            columnWidth: '14px',
            borderRadius: 7,
            borderRadiusApplication: 'end'
        }
    },
    dataLabels: { enabled: false },
    xaxis: {
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        labels: {
            style: {
                fontSize: '17px',
                fontWeight: 400,
                fontFamily: 'Arial, sans-serif',
                colors: '#111111'
            }
        },
        axisBorder: { show: false },
        axisTicks: { show: false }
    },
    yaxis: { show: false },
    grid: { show: false },
    tooltip: { enabled: true }
};
new ApexCharts(document.querySelector('#weeklyBarChart'), options).render();