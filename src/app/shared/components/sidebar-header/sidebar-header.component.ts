import { Component } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-sidebar-header',
  templateUrl: './sidebar-header.component.html',
  styleUrls: ['./sidebar-header.component.scss']
})
export class SidebarHeaderComponent {

  constructor(
    public appService: AppService
  ) { }

  toggleSidebarMobileOpen() {
    this.appService.toggleSidebarMobile = !this.appService.toggleSidebarMobile;
  }

}
