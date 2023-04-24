import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.css']
})
export class AreaChartComponent {

  Highcharts=Highcharts
  chartOptions={}

  constructor(){
    this.chartOptions={
      chart: {
        renderTo: 'container',
        type: 'column',
        options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            depth: 50,
            viewDistance: 25
        }
    },
    xAxis: {
        categories: ['MEARN', 'PYTHON', 'DATA SCIENCE', 'TESTING', 'FLUTTER', 'JAVA',
            'BIG DATA', '.NET', 'AI', 'PDjango']
    },
    yAxis: {
        title: {
            enabled: false
        }
    },
    tooltip: {
        headerFormat: '<b>{point.key}</b><br>',
        pointFormat: 'Placements: {point.y}'
    },
    title: {
        text: 'Yearly Placements -2022',
        align: 'center'
    },
    subtitle: {
        text: 'Source: ' +
            'Luminar technolabs',
        align: 'center'
    },
    credits:{
    enabled:false
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        column: {
            depth: 25
        }
    },
    series: [{
        data: [318, 73, 60, 83, 77, 75, 57, 44, 46, 39],
        colorByPoint: true
    }]
    }
  

    // To export chart
   
    HC_exporting(Highcharts)

  }

  // 
}
