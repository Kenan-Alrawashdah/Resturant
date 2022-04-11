import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Item} from "../../../core/interfaces/item";
import {ResturantService} from "../resturant.service";
import {ActivatedRoute, Router} from "@angular/router";
import {BehaviorSubject, combineLatestWith, map, Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css']
})
export class MealListComponent{
  @Input() items: Item[] = []
  constructor() { }
}
