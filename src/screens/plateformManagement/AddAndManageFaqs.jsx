import React, { useState, useEffect, useMemo } from "react";
import DashboardInnerTitle from "../../components/dashboard/DashboardInnerTitle";
import TextInput from "../../components/ui/TextInput";
import TextareaInput from "../../components/ui/TextareaInput";
import ButtonMain from "../../components/ui/ButtonMain";
import SelectInput from "../../components/ui/SelectInput";
import AllFaqsCard from "../../components/ui/AllFaqsCard";
import "../../styles/dashboard/AddAndManageFaqs.css";
import PreviewFaq from "../../components/ui/popups/PreviewFaq";
import { getAllFaqCategories, addFaq, createFaqCategory, getAllFaqs, deleteFaq } from "../../api/faq-api";
import { MdDeleteOutline } from "react-icons/md";
import SpinnerLoader from "../../components/ui/SpinnerLoader";
import ApprovePopup from "../../components/ui/popups/ApprovePopup";

const AddAndManageFaqs = () => {

  const [showPreview, setShowPreview] = useState(false);
  const [faqCategory, setFaqCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [steps, setSteps] = useState([""]);
  const [faq, setFaq] = useState({
    question: "",
    answer: "",
    categoryId: "",
  });
  const [allFaqs, setAllFaqs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState(false);
  const [currentTab, setCurrentTab] = useState(0);

  const addFaqHandler = async () => {
    try {
      const payload = {
        question: faq.question,
        answer: `${faq.answer} \n Steps: ${steps.join(";")}`,
        faqCategoryId: faq.categoryId
      };
      await addFaq(payload);
    } catch (error) {
      console.log(error);
    }
  };

  const openPopup = () => {
    if (!faq.question || !faq.answer || !faq.categoryId) return;
    setPopup(true);
  };

  const addCategoryHandler = async () => {
    if (!faqCategory) return;
    if (loading) return;
    setLoading(true);
    try {
      const id = await createFaqCategory(faqCategory);
      setCategories([...categories, { categoryName: faqCategory, id }]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const generateRandomKey = useMemo(() => {
    return Math.random();
  }, []);

  const addStepHandler = (index, e) => {
    const newSteps = [...steps];
    newSteps[index] = e.target.value;
    setSteps(newSteps);
  };

  const deleteStepHandler = (index) => {
    const newSteps = [...steps];
    newSteps.splice(index, 1);
    setSteps(newSteps);
  };

  const handleTabChange = (id) => {
    setCurrentTab(id);
    getAllFaqs({ categoryId: id }).then((res) => {
      setAllFaqs(res);
    });
  };

  const deleteFaqHandler = async (id) => {
    try {
      await deleteFaq(id);
      const newFaqs = allFaqs.filter((e) => e.id !== id);
      setAllFaqs(newFaqs);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllFaqCategories().then((res) => {
      setCategories(res);
      setCurrentTab(res[0].id);
      getAllFaqs({ categoryId: res[0].id }).then((res) => {
        setAllFaqs(res);
      });
    });
  }, []);

  useEffect(() => {
    // console.log(faq);
  }, [currentTab]);

  return (
    <>
      <div className="AddAndManageFaqs sectionContainer">
        <DashboardInnerTitle name="Add New FAQ Category" />
        <div className="writeAndAdd">
          <div className="writeAndAdd_left category">
            <TextInput placeholder="Write your category here" onChange={(e) => setFaqCategory(e.target.value)} />
            <ButtonMain
              name={loading ? <SpinnerLoader /> : "Add Category"}
              onClick={addCategoryHandler}
            />
          </div>
        </div>

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
            </div>
            <div className="steps">
              <label htmlFor="" className="inputLabel">
                Write Steps
              </label>
              <div className="lists">
                {steps.map((element, i) => {
                  return (
                    <div key={i} className="list">
                      <span>{i + 1}.</span>
                      <TextInput key={generateRandomKey} placeholder="Write your step here" onChange={(e) => addStepHandler(i, e)} value={element} />
                      <button onClick={() => deleteStepHandler(i)}>
                        <MdDeleteOutline />
                      </button>
                    </div>
                  );
                })}
                <button onClick={() => setSteps([...steps, ""])}>+ Add More</button>
              </div>

            </div>
          </div>
        </div>

        {/* btns */}
        <div className="centerBtns">
          <ButtonMain name="Reset" />
          <ButtonMain onClick={() => setShowPreview(true)} name="Preview FAQ" />
          <ButtonMain
            btnColor="green"
            name={"Save"}
            onClick={openPopup}
          />
        </div>

        {/* preview popup */}
        <PreviewFaq
          show={showPreview}
          onHide={() => setShowPreview(false)}
          faq={faq}
          steps={steps}
        />
        {/* faqs */}
        <div className="all_faqs">
          <DashboardInnerTitle name="All FAQ's" />
          <div className="sm_cardTags">
            {
              categories.map((e) => {
                return <span className={currentTab === e.id ? "active" : ""} onClick={() => handleTabChange(e.id)} key={e.id}>
                  {e.categoryName}
                </span>
            })}
          </div>
          {/* {
    "question": "string",
    "answer": "string",
    "faqCategoryId": 0,
    "id": 0,
    "categoryName": "string"
  } */}
          <div className="allFaqsCards">
            {allFaqs?.map((e, i) => {
              return <AllFaqsCard 
                key={i} 
                para={e.answer}
                title={e.question}
                onDelete={() => deleteFaqHandler(e.id)}
              />;
            })}
          </div>
        </div>

        <ApprovePopup
          show={popup}
          onHide={() => setPopup(false)}
          message="Add FAQ"
          messageDetail="Are you sure you want to add this FAQ?"
          onApprove={() => addFaqHandler()}
        />
      </div>
    </>
  );
};

export default AddAndManageFaqs;
