export type serverResponse<T> = T

export type Shop = {
  id: number,
  created_at: string,
  updated_at: string,
  slug: string,
  country_id: number,
  cover_image: string,
  name: {
    en: string,
    es: string
  },
  description: { en: string | null },
  short_description: { en: string | null },
  address: string | null,
  phone: string |null,
  email: string | null,
  website: string | null,
  facebook: string | null,
  instagram: string | null
  country: Country
}

export type Country = {
  id: number,
  name: string,
  iso_code: string,
}