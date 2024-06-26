import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { getImagesAsync } from "../redux/gallery/actions";
import { selectIsLoading } from "../redux/gallery/selectors";
import { GalleryList } from "../components/Gallery/Gallery";
import { Header } from "../components/Header/Header";
import { Filters } from "../components/Filters/Filters";
import { SearchInput } from "../components/SearchInput/SearchInput";
import { Pagination, Stack } from "@mui/material";

const HomePage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const query = new URLSearchParams(location.search);

  const [page, setPage] = useState<number>(Number(query.get("page")) || 1);
  const [imagesType, setImagesType] = useState<string>(
    query.get("imagesType") || "all"
  );
  const [colors, setColors] = useState<string>(query.get("colors") || "");
  const [order, setOrder] = useState<string>(query.get("order") || "popular");
  const [orientation, setOrientation] = useState<string>(
    query.get("orientation") || "all"
  );
  const [searchQuery, setSearchQuery] = useState<string>(query.get("q") || "");

  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading);

  const buildSearchParams = () => {
    const params = new URLSearchParams();
    if (page !== 1) params.set("page", String(page));
    if (imagesType !== "all") params.set("imagesType", imagesType);
    if (colors) params.set("colors", colors);
    if (order !== "popular") params.set("order", order);
    if (orientation !== "all") params.set("orientation", orientation);
    if (searchQuery) params.set("q", searchQuery);
    return params.toString();
  };

  useEffect(() => {
    const searchParams = buildSearchParams();
    navigate(`/?${searchParams}`);
    dispatch(
      getImagesAsync({
        page,
        imagesType,
        colors,
        order,
        orientation,
        searchQuery,
      })
    );
  }, [
    dispatch,
    navigate,
    page,
    imagesType,
    colors,
    order,
    orientation,
    searchQuery,
  ]);

  const clearFilters = () => {
    setColors("");
    setOrder("popular");
    setOrientation("all");
    setSearchQuery("");
    setPage(1);
  };

  const handlePageChange = (_: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleImagesTypeChange = (type: string) => {
    setImagesType(type);
    setPage(1);
  };

  return (
    <>
      <Header setImagesType={handleImagesTypeChange} />
      <main>
        <section>
          <SearchInput setSearchQuery={setSearchQuery} setPage={setPage} />
          <Filters
            colors={colors}
            setColors={setColors}
            orientation={orientation}
            setOrientation={setOrientation}
            order={order}
            setOrder={setOrder}
            clearFilters={clearFilters}
            setPage={setPage}
          />
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <>
              <GalleryList />
              <Stack spacing={2} sx={{ justifyContent: "center", mt: 2 }}>
                <Pagination
                  count={20} // Замініть на фактичну кількість сторінок з вашого даних
                  page={page}
                  onChange={handlePageChange}
                  color="primary"
                />
              </Stack>
            </>
          )}
        </section>
      </main>
    </>
  );
};

export default HomePage;
