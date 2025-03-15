export type Metadata = {
  data: Data[];
};

export type Data = {
  id: string;
  attributes: Attributes;
};

export type Attributes = {
  displayName: string;
  slug: string;
};
