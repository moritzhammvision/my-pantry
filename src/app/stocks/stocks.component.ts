import { Component , OnInit} from '@angular/core';
import { StockService } from '../stock.service';
import { IngredientService } from '../ingredient.service';
import { Ingredient } from '../entities/ingredient';
import { loginService } from '../login.service';


@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})
export class StocksComponent implements OnInit{


 
  
  
  constructor(public stockService: StockService,public ingredientService: IngredientService) {}

  ngOnInit(): void {
    this.stockService.findStock();
    this.ingredientService.findIngredients();
    
  }

  displayedColumns: string[] = ['name', 'amount','unit','delete'];

  

}


