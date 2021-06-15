import { UnauthenGuard } from './guards/unauthen.guard';
import { AuthenGuard } from './guards/authen.guard';
import { DeactivateGuard } from './guards/deactivate.guard';
import { ActivateGuard } from './guards/activate.guard';
import { DataComponent } from './components/data/data.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'register', component: RegisterComponent, canActivate: [UnauthenGuard] },
    { path: 'login', component: LoginComponent, canActivate: [UnauthenGuard] },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthenGuard] },
    { path: 'data', component: DataComponent },

    // หากว่าไม่เข้า URL ไหนเลยก็ให้ทำการ Redirect page ไปที่หน้าที่ต้องการ
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
