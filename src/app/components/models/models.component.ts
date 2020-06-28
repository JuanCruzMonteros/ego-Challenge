import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiAgenciaEgoService } from 'src/app/api-agencia-ego.service';
import { Model } from 'src/app/modelObject/model';
@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.scss']
})
export class ModelsComponent implements OnInit {


  @ViewChild('btnFilterOne') btnFilterOne: ElementRef;
  @ViewChild('btnFilterTwo') btnFilterTwo: ElementRef;
  @ViewChild('btnFilterTwoThree') btnFilterTwoThree: ElementRef;
  @ViewChild('btnFilterFour') btnFilterFour: ElementRef;

  @ViewChild('btnOrderOne') btnOrderOne: ElementRef;
  @ViewChild('btnOrderTwo') btnOrderTwo: ElementRef;
  @ViewChild('btnOrderOnThree') btnOrderOnThree: ElementRef;
  @ViewChild('btnOrderFour') btnOrderFour: ElementRef;
  @ViewChild('btnOrderFive') btnOrderFive: ElementRef;

  // Lista de modelos
  models: Model[];
  

  
  filterOpen = false;
  orderOpen = false;


  //Opciones de Filtros
  listafiltros:string[]=["","Autos","Pickups y Comerciales","SUVs y Crossovers"];
  indice = 0;

  //Opciones de Orden
  listaOrden: string[]=["","price","year"];
  indiceOrden = 0;
  OrdenAscDesc = "";

  constructor( private apiAgenciaEgoService: ApiAgenciaEgoService ) { }


  ngOnInit(): void {
    this.getDataService();
  }

  getDataService(){
    this.apiAgenciaEgoService.getModels().subscribe((res: Model[]) => {
      console.log(res);
      this.models = res;
    },error =>{
      console.log(error);
    }
    );
  }

  orderFunction(numberOrder,numerAscDesc) {
    // numberOrder 0-nothing 1-price 2-year
    // numerAscDesc 0-desc 1-asc
    if(numberOrder == 0 && numerAscDesc ==0){
      this.indiceOrden=0;
      this.OrdenAscDesc="no";
      return;
    }
    this.indiceOrden=numberOrder;
    if(numerAscDesc==0){
      this.OrdenAscDesc = "desc";
    }else{
      this.OrdenAscDesc = "asc";
    }
  }

  //filtros:
  filterFunction(number){
    this.indice = number;
  }

  navFilterOpen(){
    this.filterOpen = !this.filterOpen;
  }
  navOrderOpen(){
    this.orderOpen=!this.orderOpen
  }
}
