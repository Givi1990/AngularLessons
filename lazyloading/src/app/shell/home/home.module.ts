import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from '@angular/common';

const routes: Routes = [
    {
      path: "",
      component: HomeComponent
    }
  ];

@NgModule({
    declarations: [HomeComponent],
    exports: [HomeComponent],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class HomeModule {

}