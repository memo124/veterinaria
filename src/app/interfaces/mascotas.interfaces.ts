export interface mascotasI{
  content: Array<contentMascotasI>;
  pageable:pageableMascotasI;
  totalPages:number;
  totalElements:number;
  last:boolean;
  first:boolean;
  sort:sortMascotasI;
  size:number;
  numberOfElements:number;
  empty:boolean;
}

export interface contentMascotasI{
  idCategoriaMascota:number;
  nombreCategoriaMascota:string;
  estado_categoria_mascota:boolean;
}

export interface pageableMascotasI{
  sort:sortPageableMascotas;
  pageNumber:number;
  pageSize:number;
  offset:number;
  paged:boolean;
  unpaged:boolean;
}

export interface sortPageableMascotas{
  sorted:boolean;
  empty:boolean;
  unsorted:boolean;
}

export interface sortMascotasI{
  sorted:boolean;
  empty:boolean;
  unsorted:boolean;
}
