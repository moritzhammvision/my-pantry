import { Component , OnInit} from '@angular/core';
import { shoppingService } from '../shopping.service';
import { IngredientService } from '../ingredient.service';
import { Ingredient } from '../entities/ingredient';
import { loginService } from '../login.service';


@Component({
  selector: 'app-shopping',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.scss']
})
export class shoppinglistComponent implements OnInit{

  
  constructor(public shoppingService: shoppingService,public ingredientService: IngredientService) {}

  ngOnInit(): void {
    this.shoppingService.findshopping();
    this.ingredientService.findIngredients();
    
  }

  displayedColumns: string[] = ['name', 'amount','unit','delete'];

  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.shoppingService.shoppingDataSource.filter = filterValue
      .trim()
      .toLowerCase();
  }
}


