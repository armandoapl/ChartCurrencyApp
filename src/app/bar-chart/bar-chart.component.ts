import { Component, OnInit } from '@angular/core';
import { ChartOptions , ChartType, ChartDataset} from 'chart.js';
import { CoinDeskService } from '../coin-desk.service';
//import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';

//import { Label } from 'ng2-charts';


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  prices: any;
  constructor(private coinDeskService: CoinDeskService) { }

  ngOnInit(): void {
   this.coinDeskService.getPrices().subscribe(
     prices => {
       console.log('this is the response from the service call: ', this.prices);
       this.prices = prices;
     }
   );
    console.log('Prices', this.prices);
  }

  




  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: string[] = ['Apple', 'Banana', 'Kiwifruit', 'Blueberry', 'Orange', 'Grapes'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataset[] = [
    { data: [45, 37, 60, 70, 46, 33], label: 'Best Fruits' }
  ];

}
