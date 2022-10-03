import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  lstfilm;
  constructor(private router: Router, private activeRoute: ActivatedRoute) {
    this.lstfilm = this.router.getCurrentNavigation().extras.state.param1;
  }

  ngOnInit() {
  }

}
