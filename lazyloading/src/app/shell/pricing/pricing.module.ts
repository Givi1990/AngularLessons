import { NgModule } from "@angular/core";
import { PricingComponent } from "./pricing.component";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { App1Component } from './app1/app1.component';
import { App1Module } from "./app1/app1.module";

const routes: Routes = [
    {
      path: "",
      component: PricingComponent,
      children: [
        {
            path: "app1",
            component: App1Component
        }
      ]
    }
  ];

@NgModule({
    declarations: [PricingComponent],
    imports: [
      App1Module,
      CommonModule,
      RouterModule.forChild(routes)
    ]
})
export class PricingModule {}
