import { NgModule }                     from '@angular/core';
import { BrowserModule }                from '@angular/platform-browser';
import { HttpModule }                   from '@angular/http';
import {FormsModule}                    from "@angular/forms";
import { AppComponent }                 from './app.component';
import { Ng2BootstrapModule }           from 'ng2-bootstrap/ng2-bootstrap';
import { NAV_DROPDOWN_DIRECTIVES }      from './shared/nav-dropdown.directive';

import { ChartsModule }                 from 'ng2-charts/ng2-charts';
import { SIDEBAR_TOGGLE_DIRECTIVES }    from './shared/sidebar.directive';
import { AsideToggleDirective }         from './shared/aside.directive';
import { BreadcrumbsComponent }         from './shared/breadcrumb.component';
import { routing }                      from './app.routing';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api'

//Layouts
import { FullLayoutComponent }          from './layouts/full-layout.component';
import { SimpleLayoutComponent }        from './layouts/simple-layout.component';

//Main view
import { DashboardComponent }           from './dashboard/dashboard.component';

//Components
import { ButtonsComponent }             from './components/buttons.component';
import { CardsComponent }               from './components/cards.component';
import { FormsComponent }               from './components/forms.component';
import { SocialButtonsComponent }       from './components/social-buttons.component';
import { SwitchesComponent }            from './components/switches.component';
import { TablesComponent }              from './components/tables.component';

//Icons
import { FontAwesomeComponent }         from './icons/font-awesome.component';
import { SimpleLineIconsComponent }     from './icons/simple-line-icons.component';

//Widgets
import { WidgetsComponent }             from './widgets/widgets.component';

//Charts
import { ChartsComponent }              from './charts/charts.component';

//Pages
import { p404Component }                from './pages/404.component';
import { p500Component }                from './pages/500.component';
import { LoginComponent }               from './pages/login.component';
import { RegisterComponent }            from './pages/register.component';
import { Ng2DatetimePickerModule }      from 'ng2-datetime-picker';
import {InMemoryDataService}            from './services/in-memory-data-service';
import { ChartDataService} from './services/chart-data.service';
import { CommentService} from './services/comment.service';
import {CommentListComponent} from './comments/comments-list.component';
import {PeopleService} from './services/people-service';
import {PoolDataService} from './services/pool-data-service';


import './rxjs-extensions';



@NgModule({
  imports: [
    BrowserModule,
    routing,
    Ng2BootstrapModule,
    ChartsModule,
    Ng2DatetimePickerModule,
    HttpModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    FullLayoutComponent,
    SimpleLayoutComponent,
    DashboardComponent,
    ButtonsComponent,
    CardsComponent,
    FormsComponent,
    SocialButtonsComponent,
    SwitchesComponent,
    TablesComponent,
    FontAwesomeComponent,
    SimpleLineIconsComponent,
    WidgetsComponent,
    ChartsComponent,
    p404Component,
    p500Component,
    LoginComponent,
    RegisterComponent,
    NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective,
    CommentListComponent
  ],
  providers: [ChartDataService, CommentService,PeopleService,PoolDataService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
