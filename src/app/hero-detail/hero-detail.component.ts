import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: object;
  private temp: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // grabbing something from url
this.temp = this.route.params.subscribe(params => {
  console.log (params);
  HEROES.forEach((el) => {
   if (el.id === +params['id']) {
     console.log(el);
     this.hero = el;
      }
    });
  });
}

}