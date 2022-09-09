import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProfileModule } from './pages/profile/profile.module';
import { AllModule } from './pages/all/all.module';
import { AttentionComponent } from './pages/attention/attention.component';
import { AttentionDetailComponent } from './pages/attention/views/attention-detail/attention-detail.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatSidenavModule,
    ComponentsModule,
    AppRoutingModule,
    DashboardModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
