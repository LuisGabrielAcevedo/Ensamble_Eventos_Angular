export interface ISearchMatches {
    active: boolean;
    conceptActive: boolean;
    conceptId: string;
    definitionStatus: string;
    fsn: string;
    module: string;
    term: string;
}

export interface ISearchFilters {
    lang:string;
    module:string;
    refsetId:string;
    semTag: number;
}

export interface ISeachDetails {
    returnLimit:number;
    skipTo:number;
    total: number;
}

export interface IConcept {
    active:boolean;
    additionalRelationships:string[];
    conceptId: string;
    defaultTerm: string;
    definitionStatus: string;
    descriptions: string [];
    effectiveTime:string;
    fsn:string;
    inferredDescendants: number;
    isLeafInferred: boolean;
    isLeafStated: boolean;
    memberships: string[];
    module: string;
    relationships: string[];
    statedDescendants: number;
    statedRelationships: string [];
}

export interface ISerach{
    details: ISeachDetails;
    filters: ISearchFilters;
    matches: ISearchMatches;
}