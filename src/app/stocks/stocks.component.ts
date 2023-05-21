import { Component , OnInit} from '@angular/core';
import { StockService } from '../stock.service';
import { IngredientService } from '../ingredient.service';
import { Ingredient } from '../entities/ingredient';



@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})
export class StocksComponent implements OnInit{

 // myObj: Ingredient[] = [];
 
  
  
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


