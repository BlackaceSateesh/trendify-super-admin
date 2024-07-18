import React from "react";

const TopTotalTableCard = ({ data, coulmns, heading }) => {
  return (
    <>
      <div className="TopTotalTableCard homeCardBox w100">
        <div className="head">
          <p className="homeCardHeading">
            Top {heading}
          </p>
          <span className="tag">Top 5</span>
        </div>
        <div className="tableBox">
            <table>
                <thead>
                    <tr>
                        {
                          coulmns?.map((item, index) => {
                            return (
                              <th key={index}>{item}</th>
                            );
                          })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                      data?.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            { item.typeName && <td>{item.typeName}</td> }
                            <td>{item.name} { item.id && (<><br /> [{item.id}]</>) }</td>
                            <td>{item.amount}</td>
                          </tr>
                        );
                      })
                    }
                    
                </tbody>
            </table>
        </div>
      </div>
    </>
  );
};

export default TopTotalTableCard;
