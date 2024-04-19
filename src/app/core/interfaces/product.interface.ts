export interface IProduct {
  id: number;
  Name: string;
  Category: string;
  Price: string;
  Description_content: string;
  Image: string;
  Image1: string;
  Color_detail: ColorDetail[];
  Reviews: Review;
  Content: string;
}

export interface ColorDetail {
  color: string;
  image_url: string;
}

export interface Review {
  votes: string;
  rating: string;
}
