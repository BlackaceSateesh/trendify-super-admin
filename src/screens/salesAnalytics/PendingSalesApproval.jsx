import React from 'react'
import FilterDataSection from '../../components/dashboard/FilterDataSection'
import DashboardInnerTitle from '../../components/dashboard/DashboardInnerTitle'

const PendingSalesApproval = () => {
  return (
    <>
      <div className="PendingSalesApproval sectionGap">
        <FilterDataSection />

          <div className="head">
            <DashboardInnerTitle name="Reviews List" />
          </div>

      </div>
    </>
  )
}

export default PendingSalesApproval
