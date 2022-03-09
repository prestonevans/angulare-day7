import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {
  id: string | null | undefined;
  isCool: boolean | null | undefined;
  constructor(
    private route: ActivatedRoute,
    private loaction: Location,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getInfo()
  }

  getInfo() {
    this.id = this.route.snapshot.paramMap.get('id')
    let result = this.route.snapshot.paramMap.get('isCool')
    result === 'true' ? this.isCool = true : this.isCool = false
    console.log(this.id)
  }

  goBack() {
    this.loaction.back()
  }

  navigateToSomethingElse() {
    this.router.navigate(['/something-else']);
  }
}
