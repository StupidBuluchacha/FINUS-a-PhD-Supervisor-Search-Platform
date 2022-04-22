import React, { useEffect, useState } from 'react'
import { useLazyQuery } from '@apollo/client';
import ProfessorsList from '../component/professorsList'
import { GET_PROFESSORS } from '../graphql/queries/professor';
import {isEmpty} from 'lodash'

export const ProfList = () => {

  const [getProfessors, {data, error, refetch = () => {} }] = useLazyQuery(GET_PROFESSORS);
  const [professors, setProfessors] = useState({})
  useEffect(() => {
    getProfessors() && refetch()
  }, [])

  useEffect(() => {
    if(!isEmpty(data)){
      const {professors: all} = data
      setProfessors(all)
    }
  }, [data])
  return (
    <div className="container">
      <div>
        <h1 className="rec-text">Professor List</h1>
        <ProfessorsList professors={professors} refetch={refetch} />
      </div>
    </div>)

}
