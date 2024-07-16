import React from "react";

const FeedbackTableCard = ({ labelName, rowAr }) => {
  return (
    <>
      <div className="FeedbackTableCard">
        <h6 className="fieldLabel">{labelName} </h6>
        <div className="innerTable">
          <table>
            <thead>
              <tr>
                <th className="black"></th>
                <th className="notAll">Not at all</th>
                <th className="notReally">Not really</th>
                <th className="someWhat">Somewhat</th>
                <th className="mostly">Mostly</th>
                <th className="defenitely">Definitely</th>
              </tr>
            </thead>
            <tbody>
              {rowAr.map((e, i) => {
                return (
                  <tr>
                    <td className="name">{e.name}</td>
                    <td className="radioBox">
                      <input type="radio" name="" id="" />
                    </td>
                    <td className="radioBox"><input type="radio" name="" id="" /></td>
                    <td className="radioBox"><input type="radio" name="" id="" /></td>
                    <td className="radioBox"><input type="radio" name="" id="" /></td>
                    <td className="radioBox"><input type="radio" name="" id="" /></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default FeedbackTableCard;
