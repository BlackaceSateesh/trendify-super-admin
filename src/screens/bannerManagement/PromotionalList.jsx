import React, { useState, useEffect, useCallback, useMemo } from "react";
import "../../styles/dashboard/AddNewCategory.css";
import DataTable from "react-data-table-component";
import SpinnerLoader from "../../components/ui/SpinnerLoader";
import { fetchAllPromotions } from "../../utils/dataFetchers";
import { deletePromotion } from "../../api/promotion-api";
import { MdDeleteOutline } from 'react-icons/md';
import AddPromotionalListPopup from "../../components/ui/popups/AddPromotionalListPopup";

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
    name: "Product Name",
    selector: (row) => row.name,
  },
  {
    name: "Product Item Code",
    selector: (row) => row.description,
  },
  {
    name: "Vendor Name",
    selector: (row) => row.categoryType,
  },
  {
    name: "Action",
    selector: (row) => (
      <div className="actionBtns">
        <button className="delete" onClick={() => row.action(row.id)}>
          <MdDeleteOutline />
        </button>
      </div>
    ),
  }
];

const PromotionalList = () => {
  const [showPromotionalList, setShowPromotionalList] = useState(false);
  const [categoryList, setCategoryList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);

  const mapCategoryList = useCallback((categories) => {
    return categories?.map((category, index) => ({
      sno: index + 1,
      image: category?.bannerUrl,
      name: category?.productRes?.title,
      categoryType: category?.productRes?.vendorName,
      description: category?.productRes?.itemCode,
      id: category?.id,
      action: deleteCategory,
    }));
  });

  const fetchCategories = useCallback(async (page) => {
    setLoading(true);
    try {
      const response = await fetchAllPromotions(page, perPage);
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

  const deleteCategory = async (id) => {
    try {
      await deletePromotion(id);
      fetchCategories(1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="PromotionalList sectionGap">
      <div className="categoryHead">
        <button className="addCategoryBtn" onClick={() => setShowPromotionalList(true)}>
          Add Promotional List
        </button>
      </div>

        <div className="datatableMain PromotionalList_table dataTable_main">
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

      <AddPromotionalListPopup
        show={showPromotionalList}
        onHide={() => setShowPromotionalList(false)}
        onSuccess={() => fetchCategories(1)}
      />
    </>
  );
};

export default PromotionalList;
