import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CanvasJSAngularChartsModule],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss'
})
export class PieChartComponent {
  chartOptions = {
    animationEnabled: true,
    title: {
      text: "Dry Foods"
    },
    data: [{
      type: "pie",
      startAngle: -90,
      indexLabel: "{name}: {y}",
      yValueFormatString: "#,###.##'%'",
      dataPoints: [
        { y: 14.1, name: "Maggie Noodles" },
        { y: 28.2, name: "Dhal" },
        { y: 14.4, name: "Rice" },
        { y: 43.3, name: "Koththu Rotti" }
      ]
    }]
  }
}
