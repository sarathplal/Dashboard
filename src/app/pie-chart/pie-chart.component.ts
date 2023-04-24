import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {

  Highcharts = Highcharts
  chartOptions = {}

  constructor() {
    this.chartOptions = {
      // give chart data from high charts

      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Students count January, 2023',
        align: 'left'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      credits:{
      enabled:false
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          }
        }
      },
      series: [{
        name: 'count',
        colorByPoint: true,
        data: [{
          name: 'MERN',
          y: 70.67,
          sliced: true,
          selected: true
        }, {
          name: 'DATA SCIENCE',
          y: 14.77
        }, {
          name: 'PYTHON',
          y: 4.86
        }, {
          name: 'TESTING',
          y: 2.63
        }, {
          name: 'BIG DATA',
          y: 1.53
        }, {
          name: 'AI',
          y: 1.40
        }, {
          name: 'PDjango',
          y: 0.84
        }, {
          name: 'JAVA',
          y: 0.51
        }, {
          name: '.NET',
          y: 2.6
        }]
      }]
    }
  }


}
