type CollectionsType =
  | "All Collections"
  | "Featured"
  | "Popular"
  | "Bonus Buy"
  | "Fruits";
type ProvidersType =
  | "All Providers"
  | "Bgaming"
  | "GameBeat"
  | "Pragmatic Play"
  | "NetEnt";

export type TabType = "Lobby" | "Slots" | string;

export interface FiltersDataType {
  search: string;
  collections: CollectionsType | string;
  providers: ProvidersType | string;
  tab: TabType[];
}

export interface SelectOption {
  id: number;
  label: string;
  value: any;
  icon?: string;
}

export interface Game {
  id: number;
  name: string;
  provider: string;
  identifier: string;
  type: number;
  demo: number;
  image: string;
  categories: string[];
}

export interface Pagination {
  current_page: number;
  per_page: number;
  total_items: number;
  total_pages: number;
  has_next_page: boolean;
  has_prev_page: boolean;
  next_page: number | null;
  prev_page: number | null;
}

export interface ApiResponse {
  data: Game[];
  pagination: Pagination;
  filters_applied: {
    providers: string[];
    categories: string[];
    search: string;
  };
}
