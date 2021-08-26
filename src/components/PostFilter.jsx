import React from "react";
import MyInput from "./UI/input/MyInput";
import MySeclect from "./UI/select/MySeclect";

const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
      <MyInput
        placeholder="Search . ."
        value={filter.query}
        onChange={(event) => setFilter({...filter, query: event.target.value})}
      />
      <MySeclect
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
        defaultValue="Sorting By .."
        options={[
          {
            value: "title",
            name: "By name",
          },
          {
            value: "body",
            name: "By description",
          },
        ]}
      />
    </div>
  );
};

export default PostFilter;
