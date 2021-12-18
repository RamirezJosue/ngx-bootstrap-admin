import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../services/app.service';
import { SidebarMenuService } from '../../services/sidebar-menu.service';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss'],
  animations: [
    trigger('slide', [
      state('up', style({ height: 0, opacity: '0' })),
      state('down', style({ height: '*', opacity: '1' })),
      transition('up <=> down', animate(200))
    ])
  ]
})
export class SidebarMenuComponent implements OnInit {

  menus: any = []

  constructor(
    public appService: AppService,
    private sidebarMenuService: SidebarMenuService,
    private router: Router
  ) {
    this.menus = [ ...sidebarMenuService.getMenuList() ]
  }

  private innerWidth!: number;

  ngOnInit(): void {
    const theActiveMenu = this.sidebarMenuService.getMenuItemByUrl(this.menus, this.router.url); 
    if (theActiveMenu) {
      this.toggle(theActiveMenu);
    }

    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
  }

  toggleSidebarMobileOpen() {
    if (this.innerWidth < 992) {
      this.appService.toggleSidebarMobile = !this.appService.toggleSidebarMobile;
    }
  }

  toggle(currentMenu: any) {
    this.menus = this.sidebarMenuService.toggleMenuItem(this.menus, currentMenu);
  }

  getState(currentMenu: any) {
    if (currentMenu.active) {
      return 'down';
    } else {
      return 'up';
    }
  }

}
