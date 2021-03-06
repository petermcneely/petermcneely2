import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ResumeComponent } from './components/resume/resume.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        AboutComponent,
        HomeComponent,
        ResumeComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'about', component: AboutComponent, data: { title: 'About' } },
            { path: 'resume', component: ResumeComponent, data: { title: 'Resume' } },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}
