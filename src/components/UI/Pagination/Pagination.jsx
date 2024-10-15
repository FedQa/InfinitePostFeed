import { getPagesArray } from "../../utils/pages";

export const Pagination = ({totalPages, page, setPage}) => {

    let pagesArray = getPagesArray(totalPages);
    const changePage = (page) => {
        setPage(page);
      }
  return (
    <div className="page__wrapper">
      {pagesArray.map((p) => (
        <span
          onClick={() => changePage(p)}
          className={page === p ? "page page__current" : "page"}
          key={p}
        >
          {p}
        </span>
      ))}
    </div>
  );
};
