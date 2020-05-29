import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cover-page',
  templateUrl: './cover-page.component.html',
  styleUrls: ['./cover-page.component.css']
})
export class CoverPageComponent implements OnInit {

  public clanName:string;
  public clanTag:string;

  constructor() { }

  ngOnInit() {
    this.clanName = environment.clanInfo.clanName;
    this.clanTag = environment.clanInfo.clanTag;
    
  }

}
