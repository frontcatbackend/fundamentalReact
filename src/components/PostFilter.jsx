import React from 'react';

const PostFilter = ({PostFilter, setFilter}) => {
    return (
        <div>
             <MyInput
          placeholder="Search . ."
          value={searchQuery}
          onChange={event => setSearchQuery(event.target.value)}
        />
        <MySeclect
          value={selectedSort}
          onChange={sortPosts}
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