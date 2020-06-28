import { Component, OnInit } from '@angular/core';
import { ApiAgenciaEgoService } from 'src/app/api-agencia-ego.service';
import { modelFeatures } from 'src/app/modelObject/modelFeatures';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-model-item',
  templateUrl: './model-item.component.html',
  styleUrls: ['./model-item.component.scss']
})
export class ModelItemComponent implements OnInit {
  
  public id:any;
  modelFeatures: modelFeatures[];
  carouselData = [];

  constructor( private apiAgenciaEgoService: ApiAgenciaEgoService,
                private route: ActivatedRoute,
                private router: Router ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getDataService(this.id);
  }

  getDataService(id){
    this.apiAgenciaEgoService.GetModelById(id).subscribe((res: modelFeatures[]) => {
      console.log(res);
      this.modelFeatures = res;
    },error =>{
      console.log(error);
    }
    );
  }





}
