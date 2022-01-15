import { ComponentRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [],
  imports: [
    HomeModule,
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }
