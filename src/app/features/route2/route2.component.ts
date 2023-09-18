import { Component, OnInit } from '@angular/core';
import { Beer } from 'src/app/core/interface/beer';
import { BeersService } from 'src/app/core/services/beers.service';

@Component({
  selector: 'wrk-route2',
  templateUrl: './route2.component.html',
  styleUrls: ['./route2.component.css']
})
export class Route2Component implements OnInit {

  beers: Beer[]=[]

  constructor(private _beerService: BeersService) { }

  ngOnInit(): void {
    this.getBeers();
  }

  getBeers(){
    this._beerService.getBers().subscribe((beers:Beer[]) => this.beers= beers)
  }
}
