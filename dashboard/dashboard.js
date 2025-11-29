/* globals Chart:false */

(() => {
  'use strict'

  const chartElement = document.getElementById('ticketSalesChart')

  if (!chartElement) {
    return
  }

  const gradient = chartElement.getContext('2d').createLinearGradient(0, 0, 0, 300)
  gradient.addColorStop(0, 'rgba(99, 102, 241, 0.35)')
  gradient.addColorStop(1, 'rgba(129, 140, 248, 0.05)')

  // eslint-disable-next-line no-unused-vars
  const ticketSalesChart = new Chart(chartElement, {
    type: 'line',
    data: {
      labels: [
        'Aug 26',
        'Sep 2',
        'Sep 9',
        'Sep 16',
        'Sep 23',
        'Sep 30',
        'Oct 7'
      ],
      datasets: [
        {
          label: 'Tickets sold',
          data: [
            812430,
            834120,
            862934,
            910223,
            902118,
            941502,
            988410
          ],
          tension: 0.35,
          backgroundColor: gradient,
          borderColor: '#6366f1',
          borderWidth: 3,
          pointBackgroundColor: '#4338ca',
          pointRadius: 4,
          fill: true
        },
        {
          label: 'Target',
          data: [
            780000,
            800000,
            820000,
            840000,
            860000,
            880000,
            900000
          ],
          borderColor: '#f97316',
          borderWidth: 2,
          borderDash: [6, 6],
          pointRadius: 0,
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        intersect: false,
        mode: 'index'
      },
      plugins: {
        legend: {
          display: true,
          labels: {
            boxWidth: 12,
            usePointStyle: true
          }
        },
        tooltip: {
          boxPadding: 8,
          backgroundColor: '#111827e6'
        }
      },
      scales: {
        y: {
          ticks: {
            callback: value => `${(value / 1000).toFixed(0)}k`
          },
          grid: {
            color: 'rgba(148, 163, 184, 0.25)'
          }
        },
        x: {
          grid: {
            display: false
          }
        }
      }
    }
  })
})()
