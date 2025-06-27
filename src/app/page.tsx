import AboutCasino from "@/components/AboutCasino";
import CryptoAdvert from "@/components/CryptoAdvert";
import FailedLoad from "@/components/FailedLoad";
import HeroPhotoGrid from "@/components/HeroPhotoGrid";
import HeroSlider from "@/components/HeroSlider";
import HomeList from "@/components/HomeList";
import { fetchGames } from "@/lib/api";
import { ApiResponse } from "@/types";

interface Props {
  searchParams: Promise<{
    page?: string;
    providers?: string;
    categories?: string;
    search?: string;
  }>;
}

export default async function Home({ searchParams }: Props) {
  const params = await searchParams;
  const pageNum = params.page ? Math.max(1, parseInt(params.page)) : 1;

  const limit = 20;

  // parse comma separated filters into arrays
  const providers = params.providers
    ? params.providers.split(",").filter(Boolean)
    : [];
  const categories = params.categories
    ? params.categories.split(",").filter(Boolean)
    : [];

  try {
    const apiResponse: ApiResponse = await fetchGames({
      page: pageNum,
      limit,
      providers,
      categories,
      search: params.search || "",
    });

    return (
      <>
        <HeroSlider />
        <HeroPhotoGrid />
        <HomeList
          games={apiResponse.data}
          pagination={apiResponse.pagination}
          currentFilters={{
            providers: params.providers || "",
            categories: params.categories || "",
            search: params.search || "",
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
