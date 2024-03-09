import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProjectsComponent } from './projects/projects.component';


const routes: Routes = [
  { path: "", component: IntroComponent, data: {animation: 'HomePage'} },
  { path: "AboutMe", component: AboutMeComponent, data: {animation: 'AboutPage'} },
  { path: "Projects", component: ProjectsComponent, data: {animation: 'openClosePage'} },
  { path: "ContactMe", component: ContactComponent, data: {animation: 'openClosePage'} },
  { path: "**", component: PageNotFoundComponent, data: {animation: 'openClosePage'} }
];

export const RoutingComponents: any = [HeaderComponent, FooterComponent, FormComponent, IntroComponent, ContactComponent, AboutMeComponent, ProjectsComponent, PageNotFoundComponent];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
