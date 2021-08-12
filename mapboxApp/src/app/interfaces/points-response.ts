export interface Points {
    type:     string;
    crs:      CRS;
    features: Feature[];
}

export interface CRS {
    type:       string;
    properties: CRSProperties;
}

export interface CRSProperties {
    name: string;
}

export interface Feature {
    type:       string;
    properties: FeatureProperties;
    geometry:   Geometry;
}

export interface Geometry {
    type:        string;
    coordinates: number[];
}

export interface FeatureProperties {
    id:      string;
    mag:     number;
    time:    number;
    felt:    null;
    tsunami: number;
}