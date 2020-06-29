import { Component, OnInit } from '@angular/core';
import { ApiAgenciaEgoService } from 'src/app/api-agencia-ego.service';
import { ModelFeatures } from 'src/app/modelObject/modelFeatures';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-model-item',
  templateUrl: './model-item.component.html',
  styleUrls: ['./model-item.component.scss']
})
export class ModelItemComponent implements OnInit {
  public id:any;
  public modelFeatures: ModelFeatures;
  carouselData = [];

  constructor( private apiAgenciaEgoService: ApiAgenciaEgoService,
                private route: ActivatedRoute,
                private router: Router ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getDataService(this.id);

    console.log(this.carouselData);
  }

  getDataService(id){
      this.apiAgenciaEgoService.GetModelById(id).subscribe((res: ModelFeatures) => {
        this.modelFeatures = res;
        this.loadDataCarousel(res);
      },error =>{
        console.log(error);
      }
    );
  }

      loadDataCarousel(res){
        res.model_features.filter((element, index) => {
          this.carouselData.push({
            description: element.description, name: element.name , photo: element.photo
          });
        });
    }   

removeSlide() {

}

slickInit(e) {

}

breakpoint(e) {

}

afterChange(e) {

}

beforeChange(e) {

}

slideConfig = {"slidesToShow": 4, "slidesToScroll": 1, "speed": 300,
  "dots": true, "arrows": true,
  "responsive": [
    {
      "breakpoint": 720,
      "settings": {
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "infinite": true,
        "dots": true,
        "arrows": false
      }
    },
    {
      "breakpoint": 1100,
      "settings": {
        "slidesToShow": 2,
        "slidesToScroll": 1,
        "infinite": true,
        "dots": true,
        "arrows": true
      }
    },
    {
      "breakpoint": 1120,
      "settings": {
        "slidesToShow": 3,
        "slidesToScroll": 1,
        "infinite": true,
        "dots": true,
        "arrows": true
      }
    }
  ]
};
}
