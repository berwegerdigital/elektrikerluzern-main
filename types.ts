export interface Company {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  website?: string;
  address?: string;
  zip?: string;
  city?: string;
  location: string; // Display string e.g. "6000 Luzern"
  region: string; // Slug for filtering
  slug: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  icon: string;
  shortDesc: string;
  fullDesc: string;
  metaTitle: string;
  metaDesc: string;
}

export interface Region {
  name: string;
  slug: string;
  zip: string;
}