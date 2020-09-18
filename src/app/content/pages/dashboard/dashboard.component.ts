import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  breadcrumb = [{ label: 'Home', active: true }];

  statistics = [
    {
      amount: 26873,
      heading: {
      text: 'Booked Trips'
      },
      trending: {
        text: '03%',
        color: 'text-success'
      },
      tagLine: {
        text: 'This week'
      },
      progressBar: {
        val: 62,
        maxVal: 100,
        color: 'bg-primary'
      }
    },
    {
      amount: 384,
      heading: {
        text: 'Cancelled Trips'
      },
      tagLine: {
        text: '7 New cities this week'
      },
      progressBar: {
        val: 48,
        maxVal: 100,
        color: 'bg-warning'
      }
    },
    {
      amount: 84729,
      heading: {
        text: 'New Users'
      },
      tagLine: {
        text: 'Avg. 327 visits daily'
      },
      progressBar: {
        val: 85,
        maxVal: 100,
        color: 'bg-success'
      }
    },
    {
      amount: 87239,
      heading: {
        text: 'Total Earning'
      },
      trending: {
        text: '38%',
        color: 'text-success',
        icon: 'pointer-up'
      },
      tagLine: {
        text: 'past month'
      },
      progressBar: {
        val: 90,
        maxVal: 100,
        color: 'bg-secondary'
      }
    }
  ];

  pieChart= {
    title: 'Pie Chart',
    chartType: 'pie',
    data: [65, 59, 90],
    labels: ['Active Trip', 'Booked Trips', 'Cancelled Trip'],
    colors: [
      {
        backgroundColor: [
          'rgba(89, 170, 45, 1)',
          'rgba(255, 99, 132, 1)',        
          'rgba(51, 103, 214, 1)',
        ]
      }
    ],
    options: {
      responsive: true,
      legend: {
        display: true,
        position: 'right'
      }
    }
  };

  @ViewChild('canvas', {static: true}) canvas: ElementRef;
  constructor() {
  }
  ngOnInit(): void {
    console.log(this.pieChart.data)
  }

  public chartClicked(e: any): void {
    
  }

  public chartHovered(e: any): void {
    
  }

}
