import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { SidebarService } from '../sidebar/sidebar.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{
  constructor(
    // public sidebarservice: SidebarService,
    private router: Router) { }

  ngOnInit(){
    $(document).ready(function () {
      $(".mobile-search-icon").on("click", function () {
          $(".search-bar").addClass("full-search-bar")
      }),
      $(".search-close").on("click", function () {
          $(".search-bar").removeClass("full-search-bar")
      })
  });
  }

  // toggleSidebar() {
  //     this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
  // }

  // getSideBarState() {
  //     return this.sidebarservice.getSidebarState();
  // }

  // hideSidebar() {
  //     this.sidebarservice.setSidebarState(true);
  // }

  salir(){
    this.router.navigate(['login'])
  }

}
