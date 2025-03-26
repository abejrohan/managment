import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatInputModule, FormsModule, MatButtonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 600 },
    { name: 'Tablet', price: 400 },
    { name: 'Watch', price: 200 }
  ];

  filteredProducts = [...this.products];
  displayedColumns: string[] = ['index', 'name', 'price'];
  searchText: string = '';
  isSorted: boolean = false;

  applyFilter() {
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  addProduct() {
    const newProduct = { name: 'New Product', price: 500 };
    this.products.push(newProduct);
    this.applyFilter();
    alert('New product added successfully!');
  }

  sortProducts() {
    this.isSorted = !this.isSorted;
    this.filteredProducts.sort((a, b) => 
      this.isSorted 
        ? a.name.localeCompare(b.name) 
        : b.name.localeCompare(a.name)
    );
  }
}
