import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ProductMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Product {
  readonly id: string;
  readonly Title?: string | null;
  readonly Description?: string | null;
  readonly ImageUrl?: string | null;
  readonly Price?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Product, ProductMetaData>);
  static copyOf(source: Product, mutator: (draft: MutableModel<Product, ProductMetaData>) => MutableModel<Product, ProductMetaData> | void): Product;
}