import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  studentsArray: Array<any> = [
    {id: 1, name: 'Preston', isCool: true},
    {id: 2, name: 'Megan', isCool: true},
    {id: 3, name: 'Jaxon', isCool: true},
    {id: 4, name: 'Collin', isCool: false},
    {id: 5, name: 'Izac', isCool: false},
    {id: 6, name: 'Isaac', isCool: false},
    {id: 7, name: 'Kaydan', isCool: true},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
