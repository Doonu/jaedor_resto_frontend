export interface IOrder {
  id: number;
  title: string;
  price: number;
  qty: number;
  src: string;
  comment: string | null;
}
