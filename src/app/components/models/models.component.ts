import { Component, OnInit } from '@angular/core';
import { ApiAgenciaEgoService } from 'src/app/api-agencia-ego.service';
import { Model } from 'src/app/modelObject/model';
@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.scss']
})
export class ModelsComponent implements OnInit {

  models: Model[];
  
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
}
