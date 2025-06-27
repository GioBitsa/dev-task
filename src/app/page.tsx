import AboutCasino from "@/components/AboutCasino";
import CryptoAdvert from "@/components/CryptoAdvert";
import FailedLoad from "@/components/FailedLoad";
import HeroPhotoGrid from "@/components/HeroPhotoGrid";
import HeroSlider from "@/components/HeroSlider";
import HomeList from "@/components/HomeList";
import { fetchGames } from "@/lib/api";
import { ApiResponse } from "@/types";

interface Props {
  searchParams: {
    page?: string;
    providers?: string;
    categories?: string;
    search?: string;
  };
}

export default async function Home({ searchParams }: Props) {
  const pageNum = searchParams.page
    ? Math.max(1, parseInt(searchParams.page))
    : 1;

  const limit = 20;

  const providers = searchParams.providers
    ? searchParams.providers.split(",").filter(Boolean)
    : [];

  const categories = searchParams.categories
    ? searchParams.categories.split(",").filter(Boolean)
    : [];

  try {
    const apiResponse = await fetchGames({
      page: pageNum,
      limit,
      providers,
      categories,
      search: searchParams.search || "",
    });

    return (
      <>
        <HeroSlider />
        <HeroPhotoGrid />
        <HomeList
          games={apiResponse.data}
          pagination={apiResponse.pagination}
          currentFilters={{
            providers: searchParams.providers || "",
            categories: searchParams.categories || "",
            search: searchParams.search || "",
            page: pageNum.toString(),
          }}
        />
        <CryptoAdvert />
        <AboutCasino />
      </>
    );
  } catch (error) {
    console.error("Failed to fetch games:", error);
    return (
      <>
        <HeroSlider />
        <HeroPhotoGrid />
        <FailedLoad />
        <CryptoAdvert />
        <AboutCasino />
      </>
    );
  }
}
