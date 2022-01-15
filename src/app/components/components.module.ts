import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    CarouselComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ], exports: [
    CarouselComponent
  ]
})
export class ComponentsModule { }
