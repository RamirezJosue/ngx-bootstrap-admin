import { Component } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(
    public appService: AppService
  ) { }

  toggleSidebarMobileOpen() {
    this.appService.toggleSidebarMobile = !this.appService.toggleSidebarMobile;
  }

}
