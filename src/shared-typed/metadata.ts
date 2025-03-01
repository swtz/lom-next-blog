export type Metadata = {
  data: Data[];
};

type Data = {
  id?: string;
  attributes: Atributes;
};

type Atributes = {
  displayName: string;
  slug: string;
};
