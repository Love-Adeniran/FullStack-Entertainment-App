import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { GuestDashboardComponent } from './dashboard/dashboard-guest.component';
import { MusicianDashboardComponent } from './musician-dashboard/musician-dashboard.component';
import { GuestGuard } from './guards/guest.guard';
import { MusicianGuard } from './guards/musician.guard';
// import { TestComponent } from './test/test.component';
// import { NavBarComponent } from './nav-bar/nav-bar.component';
import { McompleteProfileComponent } from './mcomplete-profile/mcomplete-profile.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
    {path:"", redirectTo:'home', pathMatch:'full'},
    {path:"home",  component:LandingPageComponent},
    {path:"signup", component:SignUpComponent},
    {path:"signin", component:LogInComponent},
    {path:"guestdashboard", children:[
        {path:"", component:GuestDashboardComponent}
    ],canActivate:[GuestGuard]},
    {path:"musiciandashboard",component:MusicianDashboardComponent, children:[
        {path:"", redirectTo:'profile', pathMatch:'full'},
        // {path:"profile", component:McompleteProfileComponent},
        {path:"profile", component:ProfileComponent},
        {path:"songlist", component:MusicianDashboardComponent},
        {path:"videos", component:MusicianDashboardComponent},
        {path:"about", component:MusicianDashboardComponent},
    ],canActivate:[MusicianGuard]},
    {path:"**", component:NotFoundComponent},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
