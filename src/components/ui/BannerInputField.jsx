import React, { useState, useEffect } from "react";
import SelectInput from "../../components/ui/SelectInput";
import { MdDeleteOutline } from "react-icons/md";
import FileInput from "../../components/ui/FileInput";
import TextInput from "./TextInput";
import {
    fetchProductCategories,
    fetchProductTypesByCategory,
    fetchBrandsByType,
    fetchProductsByBrand
} from "../../utils/dataFetchers";

const InputFieldSet = ({ index, onDataChange, onImageSet, onDelete, isSlider, sizes, setSizeError }) => {
    const [category, setCategory] = useState("");
    const [type, setType] = useState("");
    const [brand, setBrand] = useState("");
    const [product, setProduct] = useState("");
    const [categories, setCategories] = useState([]);
    const [types, setTypes] = useState([]);
    const [brands, setBrands] = useState([]);
    const [products, setProducts] = useState([]);
    const [image, setImage] = useState(null);
    const [discountOrPrice, setDiscountOrPrice] = useState("");
    const [discountOrPriceValue, setDiscountOrPriceValue] = useState(0);

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
            setSizeError("");
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = new Image();
                img.src = e.target.result;
                img.onload = () => {
                    if (sizes && sizes.length > 0) {
                        const size = getSize();
                        console.log(size);
                        if (img.width !== size.width || img.height !== size.height) {
                            setSizeError(`Image size should be ${size.width} x ${size.height}`);
                            return;
                        }
                    }
                    const base64 = e.target.result.split("base64,")[1];
                    setImage(base64);
                    onImageSet(index, base64);
                };
            };
            reader.readAsDataURL(file);
        }
    };

    useEffect(() => {
        onDataChange(index, { category, type, brand, image, product, discountOrPrice, discountOrPriceValue });
    }, [category, type, brand, image, product, discountOrPrice, discountOrPriceValue]);

    const handleCategoryChange = (value) => {
        setCategory(value);
        setTypes([]);
        setBrands([]);
        setType("");
        setBrand("");
        setProduct("");

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
        setProduct("");

        fetchBrandsByType(value)
            .then((data) => {
                setBrands(data.content);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleBrandChange = (value) => {
        setBrand(value);
        setProduct("");

        fetchProductsByBrand(value)
            .then((data) => {
                setProducts(data.content);
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
        } else if (filter === "PRODUCTS") {
            fetchProductsByBrand(brand, products.page + 1).then((data) => {
                setProducts([...products, ...data.content]);
            });
        }
    };

    const getSize = () => {
        if (isSlider) {
            if (isSlider && sizes && sizes.length > 1) {
                return index === 0 ? sizes?.[0] : sizes?.[1];
            } else {
                return sizes?.[0];
            }
        } else {
            return sizes?.[index];
        }
    }

    return (
        <div className="bannerDetails">
            <div className="head">
                <h3>Image Details {index + 1} {
                    getSize() && (
                        <span className="size">
                            ({getSize().width} x {getSize().height})
                        </span>
                    )
                }</h3>
                {
                    isSlider && (
                        <button onClick={() => onDelete(index)}>
                            <MdDeleteOutline />
                        </button>
                    )
                }
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
                    onChange={(e) => handleBrandChange(e.target.value)}
                    isPaginated={true}
                    loadMoreOptions={() => loadMoreOptions("BRANDS")}
                />
                <SelectInput
                    labelName="Product"
                    default="Select Product"
                    options={products}
                    onChange={(e) => setProduct(e.target.name)}
                    isPaginated={true}
                    loadMoreOptions={() => loadMoreOptions("PRODUCTS")}
                />
                <SelectInput
                    labelName="Select Discount or Price"
                    options={[
                        { label: "Discount", id: "discount" },
                        { label: "Price", id: "price" }
                    ]}
                    onChange={(e) => setDiscountOrPrice(e.target.value)}
                    customKey={"label"}
                />
                {discountOrPrice === "discount" && (
                    <TextInput
                        labelName="Discount %"
                        type="number"
                        value={discountOrPriceValue}
                        onChange={(e) => setDiscountOrPriceValue(e.target.value)}
                        min={0}
                        max={100}
                    />
                )}
                {discountOrPrice === "price" && (
                    <TextInput
                        labelName="Price"
                        type="number"
                        value={discountOrPriceValue}
                        onChange={(e) => setDiscountOrPriceValue(e.target.value)}
                        min={0}
                    />
                )}
            </div>
        </div>
    );
};

export default InputFieldSet;
