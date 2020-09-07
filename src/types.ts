export interface CardData {
  id: string;
  category: string;
  title: string;
  pointOfInterest: number;
  width: string;
  overlayColor: string;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  description: string;
  links?: Link[];
  titleFont: string;
}

export interface Link{
  linkHref: string;
  linkText: string
}
