export interface CatalogServiceItem {
  id: string;
  code: string;
  pillarId: string;
  name: string;
  shortDescription: string;
  deliverable: string;
  deliverableItems: string[];
  targetProblem: string;
  basePrice: number;
  startingPrice: number;
  priceUnit: string;
  priceFormatted: string;
  badge?: string;
  popular?: boolean;
}

export interface CatalogPillar {
  id: string;
  code: string;
  name: string;
  tagline: string;
  services: CatalogServiceItem[];
}

export interface CatalogBundleItem {
  id: string;
  name: string;
  badge?: string;
  highlighted?: boolean;
  targetAudience: string;
  triggerCondition: string;
  packageItems: string[];
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
