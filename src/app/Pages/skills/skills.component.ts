import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

	stars1 = [1]
	stars2 = [1,2]
	stars3 = [1,2,3]
	stars4 = [1,2,3,4]
	stars5 = [1,2,3,4,5]
  constructor() {
  }

  ngOnInit(): void {
  }

}
