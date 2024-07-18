import React, { useState, useEffect } from "react";
import DashboardInnerTitle from "../../components/dashboard/DashboardInnerTitle";
import TextInput from "../../components/ui/TextInput";
import TextareaInput from "../../components/ui/TextareaInput";
import ButtonMain from "../../components/ui/ButtonMain";
import SelectInput from "../../components/ui/SelectInput";
import AllFaqsCard from "../../components/ui/AllFaqsCard";
import "../../styles/dashboard/AddAndManageFaqs.css";
import PreviewFaq from "../../components/ui/popups/PreviewFaq";
import { getAllFaqs, addFaq } from "../../api/faq-api";

const AddAndManageFaqs = () => {

  const [showPreview, setShowPreview] = useState(false);
  const [categories, setCategories] = useState([]);
  const [faq, setFaq] = useState({
    question: "",
    answer: "",
    categoryId: "",
  });

  // dummy data
  const allFaqs = [
    {
      title: 'Find a missing package that shows as "Delivered"',
      para: 'Most packages arrive on time, but, sometimes, the tracking may show as "delivered" and you don"t have your package.',
    },
    {
      title: "Track your package",
      para: "You can find tracking information in your order details. If an order includes multiple items, each may have separate delivery dates and tracking",
    },
    {
      title: "Check status of a refund",
      para: "You can check the status of your refund in Your Orders .",
    },
    {
      title: 'Find a missing package that shows as "Delivered"',
      para: 'Most packages arrive on time, but, sometimes, the tracking may show as "delivered" and you don"t have your package.',
    },
    {
      title: "Track your package",
      para: "You can find tracking information in your order details. If an order includes multiple items, each may have separate delivery dates and tracking",
    },
    {
      title: "Check status of a refund",
      para: "You can check the status of your refund in Your Orders .",
    },
    {
      title: 'Find a missing package that shows as "Delivered"',
      para: 'Most packages arrive on time, but, sometimes, the tracking may show as "delivered" and you don"t have your package.',
    },
    {
      title: "Track your package",
      para: "You can find tracking information in your order details. If an order includes multiple items, each may have separate delivery dates and tracking",
    },
    {
      title: "Check status of a refund",
      para: "You can check the status of your refund in Your Orders .",
    },
  ];

  const addFaqHandler = async () => {
    try {
      await addFaq({
        question: faq.question,
        answer: faq.answer,
        faqCategoryId: faq.categoryId
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllFaqs().then((res) => {
      setCategories(res);
      console.log(res);
    });
  }, []);

  return (
    <>
      <div className="AddAndManageFaqs sectionContainer">
        <DashboardInnerTitle name="Add New FAQ" />

        <div className="writeAndAdd">
          <div className="writeAndAdd_left">
            <TextInput
              labelName="Write FAQ Question"
              placeholder="Write your question here"
              onChange={(e) => setFaq({ ...faq, question: e.target.value })}
            />
            <div className="fullText">
              <label htmlFor="" className="inputLabel">
                Write FAQ Answer
              </label>
              <div className="withBtn">
                <TextareaInput
                  placeholder="Write your answer here"
                  onChange={(e) => setFaq({ ...faq, answer: e.target.value })}
                />
                <ButtonMain name="Add Steps" />
              </div>
            </div>
          </div>
          <div className="writeAndAdd_right">
            <div className="col_2">
              <SelectInput 
                labelName="FAQ Category" 
                options={categories}
                customKey={"categoryName"}
                onChange={(e) => setFaq({ ...faq, categoryId: e.target.value })}
              />
              <SelectInput labelName="Select Arrangement" options={["Choose"]} />
            </div>
            <div className="steps">
              <label htmlFor="" className="inputLabel">
                Write Steps
              </label>
              <div className="lists">
                <div className="list">
                  <span>1.</span>
                  <TextInput />
                </div>
                <div className="list">
                  <span>2.</span>
                  <TextInput />
                </div>
                <div className="list">
                  <span>3.</span>
                  <TextInput />
                </div>
              <button>+ Add More</button>
              </div>
             
            </div>
          </div>
        </div>

        {/* btns */}
        <div className="centerBtns">
          <ButtonMain btnColor="red" name="Delete" />
          <ButtonMain name="Reset" />
          <ButtonMain onClick={() => setShowPreview(true)} name="Preview FAQ" />
          <ButtonMain btnColor="green" name="Add FAQ" />
        </div>

        {/* preview popup */}
        <PreviewFaq
          show={showPreview}
          onHide={() => setShowPreview(false)}
        />
        {/* faqs */}
        <div className="all_faqs">
          <DashboardInnerTitle name="All FAQ's" />
          <div className="allFaqsCards">
            {allFaqs.map((e, i) => {
              return <AllFaqsCard key={i} para={e.para} title={e.title} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddAndManageFaqs;
