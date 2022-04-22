import { useLazyQuery } from "@apollo/client";
import { InputLabel, MenuItem, FormHelperText, FormControl, Select, TextField, Button, Chip, CircularProgress } from "@material-ui/core";
import { findLastKey, isArray, isEmpty } from "lodash";
import { useEffect, useState } from "react";
import BasicTable from "../component/listTable";
import { GET_RECOMMENDATION } from "../graphql/queries/professor";

const expertiseAreas = [
  'Algorithms & Theory',
  'Artificial Intelligence',
  'Computational Biology',
  'Computational Social Science',
  'Data Science & Business Analytics',
  'Database',
  'Digital Transformation, Platforms & Innovations',
  'Fintech',
  'Healthcare Informatics',
  'Intelligent Systems',
  'Media',
  'Programming Languages & Software Engineering',
  'Security',
  'Systems & Networking'
]

export default function Recommendation() {

  const [getProfessors, { data, loading }] = useLazyQuery(GET_RECOMMENDATION)
  const [professors, setProfessors] = useState([])
  const [showResults, setShowResults] = useState(findLastKey)
  const [state, setState] = useState({
    dept: '',
    researchAreas: [],
    keyword: ''
  })


  const [researchAreasList, setResearchAreasList] = useState([
    'All Areas',
    'Algorithms & Theory',
    'Artificial Intelligence',
    'Computational Biology',
    'Computational Social Science',
    'Data Science & Business Analytics',
    'Database',
    'Digital Transformation, Platforms & Innovations',
    'Fintech',
    'Healthcare Informatics',
    'Intelligent Systems',
    'Media',
    'Programming Languages & Software Engineering',
    'Security',
    'Systems & Networking'
  ])

  const { dept, researchAreas, keyword } = state;

  const handleChange = ({ target: { value, name } }) => {
    if (name === 'researchAreas') {
      if (value === 'All Areas') {
        setState({ ...state, [name]: ['All Areas'] });
        setResearchAreasList([...researchAreasList.filter((field) => field === value)])
      }
      else { setResearchAreasList([...researchAreasList.filter((field) => field !== value)]) }
      setState({ ...state, [name]: [...researchAreas, value] });
    } else {
      setState({ ...state, [name]: value });
    }
  }

  const handleSearch = (e) => {
    e.preventDefault()
    getProfessors(({ variables: { researchAreas, department: dept, keyword } }))
  }

  useEffect(() => {
    if (!isEmpty(data)) {
      const { recommendations } = data;
      setProfessors(recommendations)
      setShowResults(true)
    }
  }, [data])

  return (
    <div className="container">
      <div>
        <h1 className="rec-text">{showResults ? 'Top Recommendations' : 'Get Recommendations'}</h1>
        {showResults ? <BasicTable professors={professors} /> :
          <form onSubmit={handleSearch}>
            <FormControl>
              <InputLabel id="demo-simple-select-helper-label">Department</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={dept}
                label="dept"
                required
                name="dept"
                onChange={handleChange}
                style={{ width: '320px' }}
              >
                <MenuItem value="Computer Science">Computer Science</MenuItem>
                <MenuItem value="Information Systems and Analytics">Information Systems and Analytics</MenuItem>
                <MenuItem value="both">Both</MenuItem>
              </Select>
              <FormHelperText>Please choose related department</FormHelperText>
            </FormControl>
            <br />
            <div className="chip-con">
              {isArray(researchAreas) && researchAreas.map((area, i) => (
                <Chip
                  label={area}
                  key={i}
                  style={{ margin: '5px' }}
                  onDelete={(value) => {
                    setState({ ...state, researchAreas: [...researchAreas.filter((a) => a !== area)] })
                    area === 'All Areas' ? setResearchAreasList([area, ...expertiseAreas])
                      : setResearchAreasList([...researchAreasList, area])
                  }}
                />
              ))}
            </div>
            <FormControl>
              <InputLabel id="demo-simple-select-helper-label">Research Areas</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                label="Research Areas"
                name="researchAreas"
                required
                onChange={handleChange}
                style={{ width: '320px' }}
              >
                {researchAreasList.map((field, i) => (
                  <MenuItem value={field} key={i}>{field}</MenuItem>
                ))}
              </Select>
              <FormHelperText>Please choose one of your research areas</FormHelperText>
            </FormControl>
            <br />
            <TextField id="standard-basic" value={keyword} onChange={handleChange} name="keyword" style={{ width: '320px' }} placeholder="You can also enter keywords for better matching" label="Keyword" variant="standard" />
            <br />
            <br />
            <div className='container'>
              <Button classes={{ contained: 'main-btn' }} type="submit" variant="contained" >
                {loading ? <CircularProgress size={15} style={{ color: 'white' }} /> : 'Find SUPERVISORS'}</Button>
            </div>
          </form>}
      </div>
    </div>
  );
}