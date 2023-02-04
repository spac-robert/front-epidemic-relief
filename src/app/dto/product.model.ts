export interface ProductModel {
  id?: string;
  name: string;
  price: number;
  expirationDate: string;
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
