import { useLazyQuery } from "@apollo/client";
import { TableContainer, Paper, Button } from "@material-ui/core";
import { isArray, isEmpty } from "lodash";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Dummy from '../assets/avatar.png'
import { GET_PROFESSOR } from "../graphql/queries/professor";

function ProfDetails() {
    const {id} = useParams()
    const [getProfessor, {data, loading, error}] = useLazyQuery(GET_PROFESSOR)
    const [professor, setProfessor] = useState({})

    useEffect(() => {
        if(!isEmpty(id)){
            getProfessor(({variables: {id}}))
        }
    }, [])

    useEffect(() => {
        if(!isEmpty(data)){
            const {professor: details} = data;
            setProfessor(details)
        }
    }, [data])
    return (
        <div style={{ padding: '20px' }}>
            <h1 className="rec-text">Professor's Details</h1>
            <Button classes={{ contained: 'main-btn' }} onClick={() => window.history.back()} style={{ marginLeft: '15px' }} variant="contained" >Back to Recommendations</Button>
            {loading ? <h2>Loading</h2> : error ? <h2>Professor not found</h2> : <TableContainer component={Paper} style={{ marginTop: '20px' }}>
                <div className="main-details-con">
                    <img src={professor.photo || Dummy} alt="" className="main-img" />
                        <div className='details-margin'>
                            Name: {professor.name}
                            <br />
                            Email: {professor.email}
                            <br />
                            Research Areas: 
                            <ol className="list-margin">
                            {isArray(professor) && professor.researchAreas.map((field, i) => (
                                <li>{field}</li>
                            ))}
                            </ol>
                            Introduction: 
                            <div className="intro">
                                {professor.introduction}
                            </div>
                        </div>
                </div>
            </TableContainer>}
        </div>
    )
}
export default ProfDetails;
