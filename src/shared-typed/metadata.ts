export type Metadata = {
  data: Data[];
};

export type Data = {
  id: string;
  attributes: Atributes;
};

export type Atributes = {
  displayName: string;
  slug: string;
};
