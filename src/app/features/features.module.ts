import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { Route1Component } from './route1/route1.component';
import { Route2Component } from './route2/route2.component';
import { FeaturesRoutingModule } from './features-routing.module';



@NgModule({
  declarations: [
    MainComponent,
    Route1Component,
    Route2Component
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ],
  exports:[
    MainComponent
  ]
})
export class FeaturesModule { }
