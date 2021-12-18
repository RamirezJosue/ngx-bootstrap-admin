import { Component } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    public appService: AppService
  ) { }

  toggleSidebarMobileOpen() {
    this.appService.toggleSidebarMobile = !this.appService.toggleSidebarMobile;
  }
}
