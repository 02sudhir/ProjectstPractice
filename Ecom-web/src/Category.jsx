import React from 'react';

function Category({ finalcategory, setcatname, catname }) {
  return (
    <>
      <h3 className='text-[25px] font-[500] p-[10px]'>Product Category</h3>
      <ul>
        {finalcategory.map((v, i) => (
          <li
            key={i}
            onClick={() => setcatname(v)}
            className={`p-[7px] cursor-pointer text-[20px] font-serif font-500 mb-2 ${
              catname === v ? 'bg-blue-500 text-white' : 'bg-lightblue'
            } hover:bg-blue-300`}
          >
            {v}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Category;
