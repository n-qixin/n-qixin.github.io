import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { IntroComponent } from './intro/intro.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: "", component: IntroComponent },
  { path: "ContactMe", component: ContactComponent },
  { path: "**", component: PageNotFoundComponent }
];

export const RoutingComponents: any = [IntroComponent, ContactComponent, PageNotFoundComponent];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
