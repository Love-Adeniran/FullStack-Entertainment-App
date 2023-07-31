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
import { ProfileComponent } from './profile/profile.component';
import { DiscoverComponent } from './discover/discover.component';
import { SonglistComponent } from './songlist/songlist.component';
import { SearchComponent } from './search/search.component';
import { EachProfileComponent } from './each-profile/each-profile.component';
import { BookingsComponent } from './bookings/bookings.component';
import { NotificationsComponent } from './notifications/notifications.component';

const routes: Routes = [
    {path:"", redirectTo:'home', pathMatch:'full'},
    {path:"home",  component:LandingPageComponent},
    {path:"signup", component:SignUpComponent},
    {path:"signin", component:LogInComponent},
    {path:"dash",component:GuestDashboardComponent, children:[
        {path:'', redirectTo:'discover', pathMatch:'full'},
        {path:'discover', component:DiscoverComponent},
        {path:'search', component:SearchComponent},
        {path:'booking', component:BookingsComponent},
        {path:'notification', component:NotificationsComponent},
        {path:":id", component:EachProfileComponent}
    ],canActivate:[GuestGuard]},
    
    {path:"musiciandashboard",component:MusicianDashboardComponent, children:[
        {path:"", redirectTo:'profile', pathMatch:'full'},
        {path:"profile", component:ProfileComponent},
        {path:"songlist", component:SonglistComponent},
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
