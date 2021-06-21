export interface Composition {
  id: number;
  name: string;
  image: string;
  description: string;
}

export interface CompositionCollection {
  compostions: Composition[];
  totalSize: number;
}
