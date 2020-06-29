export class ModelFeatures {
    id?: number;
    name?: string;
    segment?: string ;
    year?: number ;
    price?: number ;
    thumbnail?: string ;
    photo?: string;
    title?: string;
    description?: string ;
    model_features?: [
    {
        name?: string ;
        description?: string ;
        photo?: string
    }
    ];
    model_highlights?: [
    {
        title?: string ;
        content?: string ;
        image?: string;
    }];
}