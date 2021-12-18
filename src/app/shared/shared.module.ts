import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarHeaderComponent } from './components/sidebar-header/sidebar-header.component';
import { RouterModule } from '@angular/router';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { HeaderUserboxComponent } from './components/header-userbox/header-userbox.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faDotCircle } from '@fortawesome/free-regular-svg-icons';

const COMPONENTS = [
  SidebarComponent,
  HeaderComponent,
  FooterComponent
]

@NgModule({
  declarations: [
    ...COMPONENTS,
    SidebarHeaderComponent,
    SidebarMenuComponent,
    HeaderUserboxComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PerfectScrollbarModule,
    FontAwesomeModule,
    BsDropdownModule.forRoot()
  ],
  exports: [
    CommonModule,
    ...COMPONENTS
  ]
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faAngleRight, faAngleDown, faFacebook, faDotCircle)
  }
}
