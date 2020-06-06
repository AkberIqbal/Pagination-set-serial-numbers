import {Component, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

/**
 * @title Paginator
 */
@Component({
  selector: 'paginator-overview-example',
  templateUrl: 'paginator-overview-example.html',
  styleUrls: ['paginator-overview-example.css'],
})
export class PaginatorOverviewExample {
  displayedColumns: string[] = [ 'description'];
  dataSource2:MatTableDataSource<PeriodicElement>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(){
    this.dataSource2 = new MatTableDataSource(ELEMENT_DATA);
  }

  ngAfterViewInit(){
    this.dataSource2.paginator = this.paginator;
  }

}
export interface PeriodicElement {
  description: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, description: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, description: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, description: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, description: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, description: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, description: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, description: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, description: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, description: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 11, description: 'Neon1', weight: 20.1797, symbol: 'Ne'},
  {position: 12, description: 'Neon2', weight: 20.1797, symbol: 'Ne'},
  {position: 13, description: 'Neon3', weight: 20.1797, symbol: 'Ne'},
  {position: 14, description: 'Neon4', weight: 20.1797, symbol: 'Ne'},
  {position: 15, description: 'Neon5', weight: 20.1797, symbol: 'Ne'},
  {position: 16, description: 'Neon6', weight: 20.1797, symbol: 'Ne'},
  {position: 17, description: 'Neon7', weight: 20.1797, symbol: 'Ne'},
  {position: 18, description: 'Neon8', weight: 20.1797, symbol: 'Ne'},
  {position: 19, description: 'Neon9', weight: 20.1797, symbol: 'Ne'},
  {position: 20, description: 'Neon10', weight: 20.1797, symbol: 'Ne'},
  {position: 21, description: 'Neon11', weight: 20.1797, symbol: 'Ne'},
  {position: 22, description: 'Neon12', weight: 20.1797, symbol: 'Ne'},
  {position: 23, description: 'Neon13', weight: 20.1797, symbol: 'Ne'},
  {position: 24, description: 'Neon14', weight: 20.1797, symbol: 'Ne'},
  {position: 25, description: 'Neon15', weight: 20.1797, symbol: 'Ne'},
];