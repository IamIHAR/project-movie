import React from "react";
import usePagination from "@mui/material/usePagination/usePagination";

function Pagination() {
    const { items } = usePagination({
        count: 10,
      });
  return (
    <div>
      <nav className="pagination-cont">
        <List onClick={handlePage}>
          {items.map(({ page, type, selected, ...item }, index) => {
            let children = null;

            if (type === "start-ellipsis" || type === "end-ellipsis") {
              children = "…";
            } else if (type === "page") {
              children = (
                <button
                  type="button"
                  style={{
                    fontWeight: selected ? "bold" : undefined,
                  }}
                  {...item}
                >
                  {page}
                </button>
              );
            } else {
              children = (
                <button type="button" {...item}>
                  {type}
                </button>
              );
            }

            return <li key={index}>{children}</li>;
          })}
        </List>
      </nav>
    </div>
  );
}

export default Pagination;
