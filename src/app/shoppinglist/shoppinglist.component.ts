import { Component , OnInit} from '@angular/core';
import { StockService } from '../stock.service';
import { IngredientService } from '../ingredient.service';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.scss']
})
export class ShoppinglistComponent implements OnInit{

  constructor(public stockService: StockService,public ingredientService: IngredientService) {}
  ngOnInit(): void {
    this.stockService.findStock();
    this.ingredientService.findIngredients();
  }
  displayedColumns: string[] = ['id', 'name', 'amount','user'];

  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.stockService.stockDataSource.filter = filterValue
      .trim()
      .toLowerCase();
  }
}


