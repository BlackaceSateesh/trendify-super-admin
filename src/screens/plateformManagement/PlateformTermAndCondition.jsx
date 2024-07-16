import React, { useState } from "react";
import DashboardInnerTitle from "../../components/dashboard/DashboardInnerTitle";
import { MdOutlineDelete } from "react-icons/md";
import ButtonMain from "../../components/ui/ButtonMain";
import TextInput from "../../components/ui/TextInput";
import "../../styles/dashboard/PlateformTermAndCondition.css";
import PreviewPolicy from "../../components/ui/popups/PreviewPolicy";

const PlateformTermAndCondition = () => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <>
      <div className="PlateformTermAndCondition sectionGap">
        <div className="add_new_plateform sectionContainer">
          <DashboardInnerTitle name="Add New Platform Terms & Conditions" />
          <div className="current_active">
            <p className="heading">Current Active</p>
            <div className="lists">
              <ol>
                <li>
                  <div className="list">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aut, non sit animi autem eum assumenda soluta corrupti est
                      ea odit ratione voluptas aperiam nam! Hic deleniti velit
                      non dolorum corporis.
                    </p>
                    <span>
                      <MdOutlineDelete />
                    </span>
                  </div>
                </li>
                <li>
                  <div className="list">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aut, non sit animi autem eum assumenda soluta corrupti est
                      ea odit ratione voluptas aperiam nam! Hic deleniti velit
                      non dolorum corporis.
                    </p>
                    <span>
                      <MdOutlineDelete />
                    </span>
                  </div>
                </li>
                <li>
                  <div className="list">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aut, non sit animi autem eum assumenda soluta corrupti est
                      ea odit ratione voluptas aperiam nam! Hic deleniti velit
                      non dolorum corporis.
                    </p>
                    <span>
                      <MdOutlineDelete />
                    </span>
                  </div>
                </li>
              </ol>

              {/* btns */}
              <div className="centerBtns">
                <ButtonMain btnColor="red" name="Delete" />
                <ButtonMain name="Update" />
              </div>
            </div>
          </div>

          <div className="add_new_terms">
            <p className="heading">Add New Terms & Conditions</p>

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
              <ButtonMain name="Add More" />
            </div>
          </div>
          {/* btns */}
          <div className="centerBtns">
            <ButtonMain btnColor="red" name="Delete" />
            <ButtonMain name="Reset" />
            <ButtonMain
              onClick={() => setShowPreview(true)}
              name="Preview Policies"
            />
            <ButtonMain btnColor="green" name="Save Policies" />
          </div>
          {/* preview popup */}
          <PreviewPolicy
            show={showPreview}
            onHide={() => setShowPreview(false)}
          />
        </div>

        {/* all previews */}
        <div className="all_preview sectionContainer">
          <DashboardInnerTitle name="All Preview Terms & Conditions" />
          <div className="list_box">
            <p className="heading">12-04-2022 Terms & Conditions</p>
            <ol>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                non sit animi autem eum assumenda soluta corrupti est ea odit
                ratione voluptas aperiam nam! Hic deleniti velit non dolorum
                corporis.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                non sit animi autem eum assumenda soluta corrupti est ea odit
                ratione voluptas aperiam nam! Hic deleniti velit non dolorum
                corporis.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                non sit animi autem eum assumenda soluta corrupti est ea odit
                ratione voluptas aperiam nam! Hic deleniti velit non dolorum
                corporis.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                non sit animi autem eum assumenda soluta corrupti est ea odit
                ratione voluptas aperiam nam! Hic deleniti velit non dolorum
                corporis.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                non sit animi autem eum assumenda soluta corrupti est ea odit
                ratione voluptas aperiam nam! Hic deleniti velit non dolorum
                corporis.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                non sit animi autem eum assumenda soluta corrupti est ea odit
                ratione voluptas aperiam nam! Hic deleniti velit non dolorum
                corporis.
              </li>
            </ol>
          </div>
          <div className="list_box">
            <p className="heading">12-04-2023 Terms & Conditions</p>
            <ol>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                non sit animi autem eum assumenda soluta corrupti est ea odit
                ratione voluptas aperiam nam! Hic deleniti velit non dolorum
                corporis.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                non sit animi autem eum assumenda soluta corrupti est ea odit
                ratione voluptas aperiam nam! Hic deleniti velit non dolorum
                corporis.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                non sit animi autem eum assumenda soluta corrupti est ea odit
                ratione voluptas aperiam nam! Hic deleniti velit non dolorum
                corporis.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                non sit animi autem eum assumenda soluta corrupti est ea odit
                ratione voluptas aperiam nam! Hic deleniti velit non dolorum
                corporis.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                non sit animi autem eum assumenda soluta corrupti est ea odit
                ratione voluptas aperiam nam! Hic deleniti velit non dolorum
                corporis.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                non sit animi autem eum assumenda soluta corrupti est ea odit
                ratione voluptas aperiam nam! Hic deleniti velit non dolorum
                corporis.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlateformTermAndCondition;
