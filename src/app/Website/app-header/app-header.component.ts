import { Component, OnInit } from '@angular/core';
import {Places} from '../Places';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  showCompare = false;
  constructor() { }

  ngOnInit(): void {
  }
  searchText: any;
  heroes:Places[] = [
    {image:"assets/kerala.jpg", name: 'Kerala', days: 5, cost: 85000 , discount: '20%'},
    {image:"assets/chennai.jpg", name: 'Chennai', days: 4, cost: 85000 , discount: '15%'},
    {image:"assets/bangalore.jpg", name: 'Bangalore', days: 5, cost: 95000 , discount: '20%'},
    {image:"assets/mumbai.jpg", name: 'Mumbai', days: 5, cost: 90000 , discount: '10%'},
    {image:"assets/kerala1.jpg", name: 'Kerala', days: 4, cost: 75000 , discount: '15%'},
    {image:"assets/chennai1.jpg", name: 'Chennai', days: 4, cost: 80000 , discount: '5%'},
    {image:"assets/madras.jpg", name: 'Madras', days: 5, cost: 85000 , discount: '10%'}

  ];
  
  selected:Places[]=[];
  selectedforCompare:Places[]=[];
  addToCompare(hero: Places){
    this.checkIfExist(hero) ? this.selected.splice(this.selected.indexOf(hero),1) : this.selected.push(hero);

  }


  checkIfExist(hero:Places){
    return this.selected.indexOf(hero) > -1;
  }

  showCompareModal(){
    if(this.selected.length==1){
      alert("Please select atleast two destinations to compare");
      this.showCompare = false;
    }
    else {
      this.showCompare = true;
      this.selectedforCompare = [...this.selected];
    }
  }
  closeCompareModal() {
    this.showCompare = false;
  }

  sortBasedOnCost(){
   this.heroes.sort((a:Places,b:Places) : number => {
    return a.cost  -  b.cost;
  });
}


}

