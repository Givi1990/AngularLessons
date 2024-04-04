import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { RouterModule, Routes } from "@angular/router";

const loginRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    }
]

@NgModule ({
    declarations: [LoginComponent],
    exports: [LoginComponent],
    imports: [RouterModule.forChild(loginRoutes)]
})

export class LoginModule {}