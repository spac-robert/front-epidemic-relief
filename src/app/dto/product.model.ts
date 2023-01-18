export interface ProductModel {
  id?: string;
  name: string;
  price: number;
  expirationDate: string;
  description: string;
  manufacturer: string;
  media: Media;

}

export interface Media {
  uploadImageData: FormData | null;
  mime: string;
  url: any;
}
