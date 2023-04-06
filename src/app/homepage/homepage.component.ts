import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../ingredient.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  constructor(public ingredientService: IngredientService) {}
  ngOnInit(): void {
    this.ingredientService.findIngredients();
  }
  displayedColumns: string[] = ['id', 'name', 'unit'];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.ingredientService.ingredientDataSource.filter = filterValue
      .trim()
      .toLowerCase();
  }
}
