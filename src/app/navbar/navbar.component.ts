import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Observable, filter, map } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router
    ) { }

  ngOnInit(): void {
    this.currentMenuItem = this.router.events.pipe(filter(event=>event instanceof NavigationEnd), map(event=>(event as NavigationEnd).url));
  }

  menuItems = [
    {name: 'Fernkampf', path: 'fernkampf', disabled: false},
  ]

  currentMenuItem?: Observable<String>;
  private currentRoute?: string;
  isCurrentRoute (path: String): boolean {
    return this.currentRoute === '/' + path;
  }

  navigate(url: string) {
    this.router.navigateByUrl(url);
  }

}
