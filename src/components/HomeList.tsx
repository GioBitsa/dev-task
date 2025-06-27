"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Filters from "./Filters";
import ScrollableList from "./common/ScrollableList";
import { FiltersDataType, Game, Pagination } from "@/types";
import { collectionsOptions } from "@/constants";

interface HomeListProps {
  games: Game[];
  pagination: Pagination;
  currentFilters: {
    providers?: string;
    categories?: string;
    search?: string;
    page?: string;
  };
}

const HomeList = ({
  games,
  pagination,
  currentFilters = {},
}: HomeListProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // widen string types here if needed in FiltersDataType or cast
  const [filtersData, setFiltersData] = useState<FiltersDataType>({
    search: currentFilters.search || "",
    collections: currentFilters.categories || "All Collections",
    providers: currentFilters.providers || "All Providers",
    tab: [],
  });

  useEffect(() => {
    const params = new URLSearchParams();

    if (filtersData.providers && filtersData.providers !== "All Providers") {
      params.set("providers", filtersData.providers);
    }

    if (filtersData.tab && filtersData.tab.length > 0) {
      const filteredTabs = filtersData.tab.filter((tab) => tab !== "Lobby");
      if (filteredTabs.length > 0) {
        params.set("categories", filteredTabs.join(","));
      }
    }

    if (filtersData.search) {
      params.set("search", filtersData.search);
    }

    // Always reset to page 1 when filters change
    params.set("page", "1");

    router.push(`/?${params.toString()}`, { scroll: false });
  }, [filtersData]);

  // pagination
  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPage.toString());
    router.push(`/?${params.toString()}`, { scroll: false });
  };

  const isLobby = filtersData.tab.length === 0;
  const isAllCollections = filtersData.collections === "All Collections";

  const collectionsToShow =
    isLobby && isAllCollections
      ? collectionsOptions.filter((opt) => opt.value !== "All Collections")
      : collectionsOptions.filter(
          (opt) => opt.value === filtersData.collections
        );

  return (
    <div>
      <Filters filtersData={filtersData} setFiltersData={setFiltersData} />

      {collectionsToShow.map((collection) => {
        const collectionValueLower = collection.value.toLowerCase();

        const filteredGames =
          filtersData.tab.length === 0 // only filter by collection if tab is "Lobby"
            ? games.filter((game) => {
                if (!game.categories || !Array.isArray(game.categories))
                  return false;

                return game.categories.some(
                  (cat) => cat.toLowerCase() === collectionValueLower
                );
              })
            : games; // don't filter by collection when tab is active

        const isMultiple = collectionsToShow.length === 1;

        return (
          <ScrollableList
            key={collection.value}
            title={collection.label}
            icon={collection.icon ?? ""}
            gamesList={filteredGames}
            isMultiple={isMultiple}
          />
        );
      })}

      {/* Pagination only when a specific collection is selected */}
      {collectionsToShow.length === 1 && (
        <div className="flex justify-center gap-4 mt-6">
          <button
            disabled={!pagination.has_prev_page}
            onClick={() => handlePageChange(pagination.current_page - 1)}
            className="px-4 py-2 bg-gray-700 rounded disabled:opacity-50"
          >
            Prev
          </button>
          <span className="text-white self-center">
            Page {pagination.current_page} of {pagination.total_pages}
          </span>
          <button
            disabled={!pagination.has_next_page}
            onClick={() => handlePageChange(pagination.current_page + 1)}
            className="px-4 py-2 bg-gray-700 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default HomeList;
