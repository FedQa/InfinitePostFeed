import React from "react";
import { Select } from "./UI/Select/Select";
import { Input } from "./UI/Input/Input";

export const PostFilter = ({ filter, setFilter, limit, setLimit }) => {
  return (
    <div>
      <Input
        value={filter.query}
        type="text"
        placeholder="search..."
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <Select
        defaultValue={"Сортировка по"}
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        options={[
          { value: "title", name: "По названию" },
          { value: "body", name: "По описанию" },
        ]}
      />
      <Select
        value={limit}
        onChange={(value) => setLimit(value)}
        defaultValue="Количество элементов на странице"
        options={[
          { value: 5, name: "5" },
          { value: 10, name: "10" },
          { value: 25, name: "25" },
          { value: 50, name: "50" },
          { value: -1, name: "Загрузить все посты" },
        ]}
      />
    </div>
  );
};
