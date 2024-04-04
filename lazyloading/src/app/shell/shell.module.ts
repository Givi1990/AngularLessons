import { NgModule } from "@angular/core";
import { ShellComponent } from "./shell.component";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from '@angular/common';

const routes: Routes = [
    {
        path: "shell",
        component: ShellComponent,
        children: [
            {
                path: "home",
                loadChildren: () => import('./home/home.module')
                    .then(module => module.HomeModule)
            },
            {
                path: "features",
                loadChildren: () => import('./features/features.module')
                    .then(module => module.FeaturesModule)
            },
            {
                path: "pricing",
                loadChildren: () => import('./pricing/pricing.module')
                    .then(module => module.PricingModule),
            }
        ]
    },
   
];

@NgModule({
    declarations: [ShellComponent],
    exports: [ShellComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})

export class ShellModule { }
