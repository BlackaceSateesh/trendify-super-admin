import React, { useState, useEffect } from "react";
import SelectInput from "../../components/ui/SelectInput";
import FileInput from "../../components/ui/FileInput";
import { fetchProductCategories, fetchProductTypesByCategory, fetchBrandsByType } from "../../utils/dataFetchers";

const InputFieldSet = ({ index, onDataChange, onImageSet }) => {
    const [category, setCategory] = useState("");
    const [type, setType] = useState("");
    const [brand, setBrand] = useState("");
    const [categories, setCategories] = useState([]);
    const [types, setTypes] = useState([]);
    const [brands, setBrands] = useState([]);
    const [image, setImage] = useState(null);
    const [productDetail, setProductDetail] = useState("");

    useEffect(() => {
        fetchProductCategories()
            .then((data) => {
                setCategories(data.content);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = new Image();
                img.src = e.target.result;
                img.onload = () => {
                    const base64 = e.target.result.split("base64,")[1];
                    setImage(base64);
                    onImageSet(index, base64);
                };
            };
            reader.readAsDataURL(file);
        }
    };

    useEffect(() => {
        onDataChange(index, { category, type, brand, image, productDetail });
    }, [category, type, brand, image, productDetail]);

    const handleCategoryChange = (value) => {
        setCategory(value);
        setTypes([]);
        setBrands([]);
        setType("");
        setBrand("");

        fetchProductTypesByCategory(value)
            .then((data) => {
                setTypes(data.content);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleTypeChange = (value) => {
        setType(value);
        setBrands([]);
        setBrand("");

        fetchBrandsByType(value)
            .then((data) => {
                setBrands(data.content);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const loadMoreOptions = (filter) => {
        if (filter === "CATEGORY") {
            fetchProductCategories(categories.page + 1).then((data) => {
                setCategories([...categories, ...data.content]);
            });
        } else if (filter === "TYPES") {
            fetchProductTypesByCategory(category, types.page + 1).then((data) => {
                setTypes([...types, ...data.content]);
            });
        } else if (filter === "BRANDS") {
            fetchBrandsByType(type, brands.page + 1).then((data) => {
                setBrands([...brands, ...data.content]);
            });
        }
    };

    return (
        <div className="bannerDetails">
            <div className="head">
                <h3>Edit Details {index + 1}</h3>
            </div>
            <div className="inputField">
                <FileInput labelName='Image' value={image} onChange={handleImageChange} />
                <SelectInput
                    labelName="Product Category"
                    default="Select Category"
                    options={categories}
                    onChange={(e) => handleCategoryChange(e.target.value)}
                    isPaginated={true}
                    loadMoreOptions={() => loadMoreOptions("CATEGORY")}
                />
                <SelectInput
                    labelName="Product Type"
                    default="Select Type"
                    options={types}
                    onChange={(e) => handleTypeChange(e.target.value)}
                    isPaginated={true}
                    loadMoreOptions={() => loadMoreOptions("TYPES")}
                />
                <SelectInput
                    labelName="Brand"
                    default="Select Brand"
                    options={brands}
                    onChange={(e) => setBrand(e.target.value)}
                    isPaginated={true}
                    loadMoreOptions={() => loadMoreOptions("BRANDS")}
                />
                <SelectInput 
                    labelName="Select Which Product Detail To Pick"
                    options={[
                        { label: "Product Category", id: "category" },
                        { label: "Product Type", id: "type" },
                        { label: "Brand", id: "brand" }
                    ]}
                    onChange={(e) => setProductDetail(e.target.value)}
                    customKey={"label"}
                />
            </div>
        </div>
    );
};

export default InputFieldSet;
