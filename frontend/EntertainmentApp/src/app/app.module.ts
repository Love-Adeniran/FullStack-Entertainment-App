import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InterceptorInterceptor } from './interceptor.interceptor'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MaterialModule } from './material/material.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { FormsModule } from '@angular/forms';
import { GuestDashboardComponent } from './dashboard/dashboard-guest.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MusicianDashboardComponent } from './musician-dashboard/musician-dashboard.component';
import { DiscoverComponent } from './discover/discover.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { BookingsComponent } from './bookings/bookings.component';
import { ProfileComponent } from './profile/profile.component';
import { McompleteProfileComponent } from './mcomplete-profile/mcomplete-profile.component';
import { TestComponent } from './test/test.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { SonglistComponent } from './songlist/songlist.component';
// import { AutoCompleteModule } from 'primeng/autocomplete';
// import { PrimeNGConfig } from 'primeng/api';



@NgModule({
    declarations: [
    AppComponent,
    LandingPageComponent,
    NotFoundComponent,
    SignUpComponent,
    LogInComponent,
    GuestDashboardComponent,
    MusicianDashboardComponent,
    DiscoverComponent,
    NotificationsComponent,
    BookingsComponent,
    ProfileComponent,
    McompleteProfileComponent,
    TestComponent,
    NavBarComponent,
    SonglistComponent,
    
    ],
    imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    // AutoCompleteModule
    
    ],
    providers: [
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorInterceptor, multi: true}
],
    bootstrap: [AppComponent]
})
export class AppModule { }
