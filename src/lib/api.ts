// lib/api.ts

import { ApiResponse } from "@/types";

interface FetchGamesParams {
  page?: number;
  limit?: number;
  providers?: string[];
  categories?: string[];
  search?: string;
}

export async function fetchGames({
  page = 1,
  limit = 20,
  providers = [],
  categories = [],
  search = "",
}: FetchGamesParams): Promise<ApiResponse> {
  const params = new URLSearchParams();

  params.append("page", page.toString());
  params.append("limit", limit.toString());

  if (
    providers.length > 0 &&
    !(providers.length === 1 && providers[0] === "All")
  ) {
    params.append("provider", providers.join(","));
  }

  if (
    categories.length > 0 &&
    !(categories.length === 1 && categories[0] === "All")
  ) {
    params.append("category", categories.join(","));
  }

  if (search) {
    params.append("search", search);
  }

  const url = `https://api.remailer.eu/games/list.php?${params.toString()}`;

  const res = await fetch(url, { next: { revalidate: 60 } });
  if (!res.ok) {
    throw new Error("Failed to fetch games");
  }
  const data: ApiResponse = await res.json();
  return data;
}
