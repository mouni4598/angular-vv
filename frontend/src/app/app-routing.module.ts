import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StateComponent } from './dashboard/components/state/state.component';
import { CountryComponent } from './dashboard/components/country/country.component';
import { SkillsComponent } from './dashboard/components/skills/skills.component';
import { LoginSuccessComponent } from './login/login-success/login-success.component';
import { RegistrationComponent } from './registration/registration.component';
import { FamilyComponent } from './dashboard/components/family/family.component';
import { AccomodationComponent } from './dashboard/components/accomodation/accomodation.component';
import { LanguageComponent } from './dashboard/components/language/language.component';
import { PersonaldetailsComponent } from './dashboard/components/personaldetails/personaldetails.component';
import { EducationDetailsComponent } from './dashboard/components/education-details/education-details.component';
import { CityComponent } from './dashboard/components/city/city.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'loginsuccess', component: LoginSuccessComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard', component: DashboardComponent, children: [
      { path: 'countries', component: CountryComponent },
      { path: 'states', component: StateComponent },
      { path: 'cities', component: CityComponent },
      { path: 'personal', component: PersonaldetailsComponent },
      { path: 'skills', component: SkillsComponent },
      { path: 'family', component: FamilyComponent },
      { path: 'accomodation', component: AccomodationComponent },
      { path: 'language', component: LanguageComponent },
      { path: 'education', component: EducationDetailsComponent }
    ]
  },
  { path: 'master', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
