import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Auto } from '../../interfaces/auto';

@Component({
  imports: [FontAwesomeModule],
  selector: 'app-search-bar',
  styleUrl: './search-bar.css',
  templateUrl: './search-bar.html',
})
export class SearchBar implements OnChanges {
  faMagnifyingGlass = faMagnifyingGlass;
  @Input() selectedCar?: Auto;
  @Input() autos: Auto[] = [];
  @Output() onSelectCar = new EventEmitter<Auto>();
  selectedAutos: Auto[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['autos']) {
      this.selectedAutos = this.autos;
    }
  }

  selectAutos(selectedBrand: string) {
    if (selectedBrand) {
      this.selectedAutos = this.autos.filter(x =>
        x.brand.toLowerCase().startsWith(selectedBrand.toLowerCase())
      );
    } else {
      this.selectedAutos = this.autos;
    }
  }

  selectCar(auto: Auto) {
    this.onSelectCar.emit(auto);
  }
}