import React, { useState, useEffect, useCallback, useMemo } from "react";
import "../../styles/dashboard/AddNewCategory.css";
import AddProductByCategory from "../../components/ui/addProductModals/AddProductByCategory";
import DataTable from "react-data-table-component";
import SpinnerLoader from "../../components/ui/SpinnerLoader";
import { fetchProductCategories } from "../../utils/dataFetchers";
import { toPascalCase } from "../../utils/stringFunctions";

const DataColumns = [
  {
    name: "S.No",
    selector: (row) => row.sno,
  },
  {
    name: "Image",
    selector: (row) => (
      <div className="productImg">
        <img src={row.image} alt="" />
      </div>
    )
  },
  {
    name: "Name",
    selector: (row) => row.name,
  },
  {
    name: "Description",
    selector: (row) => row.description,
  },
  {
    name: "Product Category Type",
    selector: (row) => row.categoryType,
  },
];

const AddNewCategory = () => {
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [categoryList, setCategoryList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);

  const mapCategoryList = useCallback((categories) => {
    return categories?.map((category, index) => ({
      sno: index + 1,
      image: category?.imageUrl,
      name: category?.name,
      categoryType: toPascalCase(category?.productCategoryType || "N/A"),
      description: category?.description
    }));
  });

  const fetchCategories = useCallback(async (page) => {
    setLoading(true);
    try {
      const response = await fetchProductCategories(page, perPage);
      setCategoryList(mapCategoryList(response?.content));
      setTotalRows(response?.totalElements);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  });

  const memoizedOrderList = useMemo(() => categoryList, [categoryList]);

  const handlePageChange = useCallback((page) => {
    fetchCategories(page);
  }, [fetchCategories]);

  const handlePerRowsChange = useCallback((newPerPage, page) => {
    setPerPage(newPerPage);
    fetchCategories(page);
  }, [fetchCategories]);

  useEffect(() => {
    fetchCategories(1);
  }, []);

  return (
    <>
      <div className="AddNewCategory sectionGap">
      <div className="categoryHead">
        <button className="addCategoryBtn" onClick={() => setShowAddCategory(true)}>
          Add New Category
        </button>
      </div>

        <div className="datatableMain addNewCategory dataTable_main">
          <DataTable
            columns={DataColumns}
            data={memoizedOrderList}
            progressPending={loading}
            progressComponent={<SpinnerLoader />}
            pagination
            paginationServer
            selectableRows
            paginationTotalRows={totalRows}
            onChangeRowsPerPage={handlePerRowsChange}
            onChangePage={handlePageChange}
          />
        </div>
      </div>

      <AddProductByCategory
        show={showAddCategory}
        onSuccessfullyAdded={() => fetchCategories(1)}
        onHide={() => setShowAddCategory(false)}
      />
    </>
  );
};

export default AddNewCategory;
