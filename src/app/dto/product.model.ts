export interface Page<T> {
  content: T[];
  totalElements: number;
  pageNumber: number;
  pageSize: number;

  pageable: Pageable;

}

export interface Pageable {
  pageNumber: number;
  pageSize: number;
  sort: Sort;
}

export interface Sort {
  direction: string;
  property: string;
}


export interface ProductModel {
  id?: string;
  name: string;
  price: number;
  // stock: number;
  // expirationDate: string;
  description: string;
  manufacturer: string;
  media: Media;
  mediaUrl: DisplayMedia;
  image: string

}

//todo de facut 2 produse unnu pt salvare unu pt retrive
export interface Media {
  uploadImageData: FormData | null;
  mime: string;
  url: any;
}

export interface DisplayMedia {
  id: number;
  name: string;
  data: Blob;

}

export interface Lot {
  id: string;
  productId: number;
  quantity: number;
  expirationDate: string;
}
