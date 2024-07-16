import React from "react";

const TopTotalTableCard = () => {
  return (
    <>
      <div className="TopTotalTableCard homeCardBox w100">
        <div className="head">
          <p className="homeCardHeading">
            Top Seller <span>(May)</span>
          </p>
          <span className="tag">Top 5</span>
        </div>
        <div className="tableBox">
            <table>
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Seller Name</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>01</td>
                        <td>Vimal Pandey <br /> [VID-8752028]</td>
                        <td>9,999</td>
                    </tr>
                    <tr>
                        <td>02</td>
                        <td>Vimal Pandey <br /> [VID-8752028]</td>
                        <td>9,999</td>
                    </tr>
                    <tr>
                        <td>03</td>
                        <td>Vimal Pandey <br /> [VID-8752028]</td>
                        <td>9,999</td>
                    </tr>
                    <tr>
                        <td>04</td>
                        <td>Vimal Pandey <br /> [VID-8752028]</td>
                        <td>9,999</td>
                    </tr>
                    <tr>
                        <td>05</td>
                        <td>Vimal Pandey <br /> [VID-8752028]</td>
                        <td>9,999</td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
      </div>
    </>
  );
};

export default TopTotalTableCard;
