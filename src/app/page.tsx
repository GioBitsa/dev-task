import AboutCasino from "@/components/AboutCasino";
import CryptoAdvert from "@/components/CryptoAdvert";
import FailedLoad from "@/components/FailedLoad";
import HeroPhotoGrid from "@/components/HeroPhotoGrid";
import HeroSlider from "@/components/HeroSlider";
import HomeList from "@/components/HomeList";
import { fetchGames } from "@/lib/api";
import { ApiResponse } from "@/types";

interface Props {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function Home({ searchParams }: Props) {
  // Helper to normalize param to string (take first if array)
  const getFirstParam = (param?: string | string[]) =>
    Array.isArray(param) ? param[0] : param;

  const pageParam = getFirstParam(searchParams.page);
  const pageNum = pageParam ? Math.max(1, parseInt(pageParam)) : 1;

  const providersParam = getFirstParam(searchParams.providers);
  const providers = providersParam
    ? providersParam.split(",").filter(Boolean)
    : [];

  const categoriesParam = getFirstParam(searchParams.categories);
  const categories = categoriesParam
    ? categoriesParam.split(",").filter(Boolean)
    : [];

  const search = getFirstParam(searchParams.search) || "";

  const limit = 20;

  try {
    const apiResponse: ApiResponse = await fetchGames({
      page: pageNum,
      limit,
      providers,
      categories,
      search,
    });

    return (
      <>
        <HeroSlider />
        <HeroPhotoGrid />
        <HomeList
          games={apiResponse.data}
          pagination={apiResponse.pagination}
          currentFilters={{
            providers: providersParam || "",
            categories: categoriesParam || "",
            search,
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
