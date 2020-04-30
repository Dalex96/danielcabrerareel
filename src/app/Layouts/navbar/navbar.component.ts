import { Component, OnInit } from '@angular/core';

declare var M: any;
declare var options: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
	  document.addEventListener('DOMContentLoaded', function() {
	    var elems = document.querySelectorAll('.sidenav');
	    var instances = M.Sidenav.init(elems, options);
	  });

  }

}
