import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  page = 0
  allDataLoaded = false;
  users = [];

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.fetchData();
    this.checkScroll();
  }

  fetchData(){
    console.log("fetching data...");
    this.page += 1;
    this.dataService.fetchUsers(this.page).subscribe(res=>{
      if(res["data"].length > 0){
        for(let i=0; i<res["data"].length; i++)
          this.users.push(res["data"][i]);

        console.log(this.users);
      }else{
        this.allDataLoaded = true;
        console.log("all data loaded");
      }
    })
  }

  checkScroll(){
    window.onscroll = () => {
      let bottomOfWindow =
        Math.max(
          window.pageYOffset,
          document.documentElement.scrollTop,
          document.body.scrollTop
        ) +
          window.innerHeight ===
        document.documentElement.offsetHeight;
      if (bottomOfWindow) {
        this.fetchData();
        console.log("reached the bottom");
      }
    };
  }

}
