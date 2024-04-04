import { NgModule } from "@angular/core";
import { FeaturesComponent } from "./features.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
      path: "",
      component: FeaturesComponent
    }
  ];

@NgModule({
    declarations: [FeaturesComponent],
    exports: [FeaturesComponent],
    imports: [RouterModule.forChild(routes)]
})

export class FeaturesModule {

}