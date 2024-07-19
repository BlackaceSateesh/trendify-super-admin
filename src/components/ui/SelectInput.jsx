import React, { useState, useEffect, useRef, useCallback } from "react";

const SelectInput = ({
    labelName,
    required,
    options,
    onChange,
    value,
    defaultOption,
    error,
    isPaginated,
    loadMoreOptions,
    pages,
    customKey,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptionName, setSelectedOptionName] = useState(defaultOption || "");
    const observer = useRef(null);
    const dropdownRef = useRef(null);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (value) {
            const selectedOption = options.find(
                (option) =>
                    typeof option === "object"
                        ? option.id === value
                        : option === value
            );
            setSelectedOptionName(
                selectedOption
                    ? typeof selectedOption === "object"
                        ? selectedOption.name || selectedOption[customKey]
                        : selectedOption
                    : ""
            );
        }
    }, [value, options]);

    const handleDropdownClick = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };

    const handleOptionClick = (optionValue, optionLabel) => {
        setSelectedOptionName(optionLabel);
        setIsOpen(false);
        onChange({ target: { value: optionValue } });
    };

    const lastOptionRef = useCallback(
        (node) => {
            if (pages?.total >= pages?.current) return;
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && isPaginated) {
                    loadMoreOptions();
                }
            });
            if (node) observer.current.observe(node);
        },
        [isPaginated, loadMoreOptions]
    );

    return (
        <div className="selectInput" ref={dropdownRef}>
            <label className="inputLabel">
                {labelName} <span>{required}</span>
            </label>
            <div className="custom-dropdown">
                <div className="dropdownHeader" onClick={handleDropdownClick}>
                    {selectedOptionName || "Select an option"}
                    <span className="dropdown-arrow">{isOpen ? "▲" : "▼"}</span>
                </div>
                {isOpen && (
                    <div className="dropdownOptions">
                        {options?.length === 0 ? (
                            <div className="dropdownOption" key={1}>
                                No Data
                            </div>
                        ) : (
                            options &&
                            options.map((option, index) => {
                                const optionValue =
                                    typeof option === "object"
                                        ? option.id
                                        : option;
                                const optionLabel =
                                    typeof option === "object"
                                        ? option.name || option[customKey]
                                        : option;
                                return (
                                    <div
                                        key={index + 1}
                                        ref={
                                            index === options.length - 1
                                                ? lastOptionRef
                                                : null
                                        }
                                        className="dropdownOption"
                                        onClick={() =>
                                            handleOptionClick(
                                                optionValue,
                                                optionLabel
                                            )
                                        }
                                    >
                                        {optionLabel}
                                    </div>
                                );
                            })
                        )}
                    </div>
                )}
            </div>
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default SelectInput;
