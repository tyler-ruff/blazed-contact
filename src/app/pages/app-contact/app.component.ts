import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/shared/app.service';

import { page } from './app.page';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppContactComponent implements OnInit {

  public page = page;

  constructor(private appService: AppService) {
    appService.setPage(page);
  }
  
  ngOnInit(): void {
  }

}
