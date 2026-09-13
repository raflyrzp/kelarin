export interface CatalogAddon {
  id: string;
  name: string;
  price: number;
  priceFormatted: string;
  unit?: string;
  description?: string;
}

export interface CatalogServiceItem {
  id: string;
  sku: string;
  code: string;
  pillarId: string;
  name: string;
  shortDescription: string;
  deliverable: string;
  deliverableItems: string[];
  targetProblem: string;
  calculationBasis?: string;
  priceUnit: string;
  priceMin: number;
  priceMax: number;
  basePrice: number;
  startingPrice: number;
  priceFormatted: string;
  expressPriceFormatted?: string;
  estimatedDuration?: string;
  maxRevision?: string;
  techStackOrNotes?: string;
  rawFileAccess?: string;
  badge?: string;
  popular?: boolean;
}

export interface CatalogPillar {
  id: string;
  code: string;
  name: string;
  tagline: string;
  calculationBasis?: string;
  notes?: string[];
  addOns?: CatalogAddon[];
  services: CatalogServiceItem[];
}

export interface CatalogBundleItem {
  id: string;
  sku: string;
  name: string;
  badge?: string;
  highlighted?: boolean;
  targetAudience: string;
  triggerCondition: string;
  packageItems: string[];
  normalPrice: number;
  normalPriceFormatted: string;
  specialPrice: number;
  specialPriceFormatted: string;
  savings: number;
  savingsFormatted: string;
  basePrice: number;
  priceFormatted: string;
  ctaType: 'bundle';
}

export interface CatalogPolicy {
  title: string;
  quota?: string;
  dpPercentage?: number;
  summary: string;
  detail: string;
}

export interface CatalogBriefField {
  key: string;
  label: string;
  placeholder: string;
}

export interface CatalogBriefTemplate {
  categoryName: string;
  title: string;
  fields: CatalogBriefField[];
}

export interface CatalogData {
  catalogTitle: string;
  catalogSubtitle: string;
  disclaimer: string;
  pillars: CatalogPillar[];
  bundles: CatalogBundleItem[];
  policies: {
    revision: CatalogPolicy;
    payment: CatalogPolicy;
    confidentiality: CatalogPolicy;
    academicDisclaimer: CatalogPolicy;
  };
  briefTemplates: {
    website: CatalogBriefTemplate;
    document: CatalogBriefTemplate;
    design: CatalogBriefTemplate;
  };
}
