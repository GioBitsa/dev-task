"use client";

import React, { useEffect, useState } from "react";
import Input from "./common/Input";
import Select from "./common/Select";
import { FiltersDataType, TabType } from "@/types";
import {
  collectionsOptions,
  filterTabsArray,
  providersOptions,
} from "@/constants";

interface FiltersProps {
  filtersData: FiltersDataType;
  setFiltersData: (arg: FiltersDataType) => void;
}

const Filters = ({ filtersData, setFiltersData }: FiltersProps) => {
  // Local state for search input to update immediately
  const [searchInput, setSearchInput] = useState(filtersData.search || "");

  const handleChangeFilter = (val: any, name: string) => {
    setFiltersData({ ...filtersData, [name]: val });
  };

  const handleToggleTab = (tabValue: string) => {
    const currentTabs = filtersData.tab || [];

    let updatedTabs: TabType[];

    if (tabValue === "Lobby") {
      // If Lobby is clicked, reset tabs to empty array
      updatedTabs = [];
    } else {
      // For any other tab clicked
      // Remove "Lobby" if it was somehow included (defensive)
      const tabsWithoutLobby = currentTabs.filter((tab) => tab !== "Lobby");

      if (tabsWithoutLobby.includes(tabValue)) {
        // Remove the clicked tab if already selected
        updatedTabs = tabsWithoutLobby.filter((tab) => tab !== tabValue);
      } else {
        // Add the clicked tab
        updatedTabs = [...tabsWithoutLobby, tabValue];
      }
    }

    handleChangeFilter(updatedTabs, "tab");
  };

  const handleSearchInputChange = (val: string) => {
    setSearchInput(val); // update local input immediately

    // Update filtersData.search only if input is empty or has 3+ chars
    if (val.length === 0 || val.length >= 3) {
      handleChangeFilter(val, "search");
    }
  };

  return (
    <div className="wrapper my-3">
      <div className="grid grid-cols-2 gap-1 items-center mb-4 lg:flex lg:gap-2.5">
        <Input
          placeholder="Search your game"
          value={searchInput}
          onChange={handleSearchInputChange}
          className="col-span-2 w-full"
        />
        <Select
          label="Collections"
          labelIcon="/icons/collections-dropdown-label.svg"
          value={filtersData.collections}
          onChange={(val) => handleChangeFilter(val, "collections")}
          options={collectionsOptions}
          className="min-w-[185px]"
        />
        <Select
          label="Providers"
          labelIcon="/icons/providers-dropdown-label.svg"
          value={filtersData.providers}
          onChange={(val) => handleChangeFilter(val, "providers")}
          options={providersOptions}
          className="min-w-[185px]"
        />
      </div>

      {/* tabs */}
      <div className="w-[calc(100vw-20px)] flex items-center gap-1 overflow-x-auto whitespace-nowrap scrollbar-hide lg:w-[calc(100vw-60px-20px)] lg:max-w-[calc(1200px-20px)] lg:gap-2.5">
        {filterTabsArray.map((item) => {
          const isLobby = item.value === "Lobby";

          // If no tabs selected, "Lobby" is active
          // Otherwise, check if the tab is included in filtersData.tab array
          const isActive =
            (filtersData.tab?.length === 0 && isLobby) ||
            (filtersData.tab?.length > 0 &&
              filtersData.tab.includes(item.value));

          return (
            <div
              key={item.id}
              className={`flex-shrink-0 flex items-center gap-2.5 border border-deep-slate rounded-sm p-2.5 cursor-pointer transition-all ${
                isActive ? "bg-deep-navy" : "bg-space-blue"
              }`}
              onClick={() => handleToggleTab(item.value)}
            >
              <img
                src={item.icon}
                alt={item.label}
                className="w-4 h-4 object-contain"
              />
              <p className="text-sm text-pastel-blue font-medium whitespace-nowrap">
                {item.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Filters;
