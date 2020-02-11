import React from 'react'
import FilterLink from '../components/FilterLink'
import { VisibilityFilters } from '../store/actions'

const Footer = () => (
  <div className="d-flex justify-content-end">
    <div className="btn-group">
      <FilterLink filter={VisibilityFilters.SHOW_ALL} classStyle="btn-primary">
        All
      </FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}  classStyle="btn-warning">
        Active
      </FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED} classStyle="btn-success">
        Completed
      </FilterLink>
    </div>
  </div>
)

export default Footer
