import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  // Header
  headerFixed = true;
  headerShadow = true;
  headerTransparentBg = true;

  // Sidebar
  toggleSidebarMobile = false;
  sidebarBackground = '';
  sidebarBackgroundStyle = 'dark';
  sidebarFixed = true;
  // Main content

  contentBackground = '';

  constructor() { }
}
