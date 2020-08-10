import { Component, OnInit } from '@angular/core';

import { CountryReports } from '../CountryReports';
import { MatTableDataSource } from '@angular/material';
import { Covid19serService } from '../Covid.service';





@Component({
  selector: 'app-covid',
  templateUrl: './Covid.component.html',
  styleUrls: ['./Covid.component.css']
})
export class Covid19Component implements OnInit {
  Resp:[]
  searchText;
  ELEMENT_DATA : CountryReports[];
  displayedColumns: string[] = ['country', 'cases', 'todayCases', 'deaths','todayDeaths','recovered','active','critical','casesPerOneMillion','deathsPerOneMillion','tests','testsPerOneMillion'];
dataSource = new MatTableDataSource<CountryReports>(this.ELEMENT_DATA);


applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
}

  constructor(private servive:Covid19serService) { 
  
  }

  ngOnInit() {
    this.getAllReports();
  }

  getAllReports()
  {
    const resp = this.servive.covid19Reports();
    resp.subscribe(report => this.dataSource.data=report as CountryReports[])
  }


  // getAllReports()   
  // {
  //   this.servive
  // .covid19Reports()
  // .subscribe(response => {
  //   if (response['status'] == 'success') {
  //     this.Resp = response['data']
  //     console.log(this.Resp);
  //   } else {
  //     console.log(response['error'])
  //   }
  // })

  // }

}
