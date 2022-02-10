import { Component, OnInit } from '@angular/core';
import { Fruit } from "./fruit";
import { FRUIT } from "./mock-fruit";

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css']
})
export class FruitComponent implements OnInit {
  edit = false;

  fruits = FRUIT;

  selectedFruit: Fruit = new Fruit();

  select(fruit: Fruit): void {
    this.selectedFruit = fruit;
    this.edit = true;
  }

  delete(fruit: Fruit) {
    this.fruits =this.fruits.filter(f => f != fruit);
    this.selectedFruit = new Fruit();
  }

  addOrEdit() {
    if (!this.edit) {
      this.selectedFruit.image = this.selectedFruit.name.toLocaleLowerCase() + ".png";
      this.fruits.push(this.selectedFruit);
    }
    this.selectedFruit = new Fruit();
    this.edit = false;
  }

  constructor() { }

  ngOnInit(): void {
  }
}
