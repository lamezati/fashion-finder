export interface User {
  id: string;
  email: string;
  style_preferences: StylePreferences;
  budget: Budget;
  physical_attributes?: PhysicalAttributes;
  is_new_user?: boolean;
}

export interface StylePreferences {
  style_types: string[];
  favorite_colors: string[];
  size: string;
  occasions: string[];
  unsure_categories?: string[];
}

export interface PhysicalAttributes {
  height: number; // in cm
  weight: number; // in kg
  age: number;
}

export interface Budget {
  min: number;
  max: number;
  currency: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  currency: string;
  description: string;
  images: string[];
  category: string;
  sizes: string[];
  colors: string[];
  affiliate_url: string;
}