import { InputLabel, MenuItem, FormHelperText, FormControl, Select, TextField, Button } from "@material-ui/core";
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import BasicTable from "../component/listTable";

export default function Recommendation() {
  const {flag} = useParams()
  const {push} = useHistory()
  const [state, setState] = useState({
    dept: '',
    area1: '',
    area2: '',
    area3: '',
    keyword: ''
  })

  const { dept, area1, area2, area3, keyword } = state

  const handleChange = ({ target: { value, name } }) => {
    setState({ ...state, [name]: value })
  }

  return (
    <div className="container">
      <div>
        <h1 className="rec-text">{flag === '1' ? 'Top Recommendations' : 'Get Recommendations'}</h1>
        {flag === '1' ? <BasicTable /> : <>
          <FormControl>
            <InputLabel id="demo-simple-select-helper-label">Department</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"

              value={dept}
              label="dept"
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
          <FormControl>
            <InputLabel id="demo-simple-select-helper-label">Research Area 1</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"

              value={area1}
              label="area 1"
              name="area1"
              onChange={handleChange}
              style={{ width: '320px' }}
            >
              <MenuItem value="All Areas">All Areas</MenuItem>
              <MenuItem value="Algorithms & Theory">Algorithms & Theory</MenuItem>
              <MenuItem value="Artificial Intelligence">Artificial Intelligence</MenuItem>
              <MenuItem value="Computational Biology">Computational Biology</MenuItem>
              <MenuItem value="Computational Social Science">Computational Social Science</MenuItem>
              <MenuItem value="Data Science & Business Analytics">Data Science & Business Analytics</MenuItem>
              <MenuItem value="Database">Database</MenuItem>
              <MenuItem value="Digital Transformation, Platforms & Innovations">Digital Transformation, Platforms & Innovations</MenuItem>
              <MenuItem value="Fintech">Fintech</MenuItem>
              <MenuItem value="Healthcare Informatics">Healthcare Informatics</MenuItem>
              <MenuItem value="Intelligent Systems">Intelligent Systems</MenuItem>
              <MenuItem value="Media">Media</MenuItem>
              <MenuItem value="Programming Languages & Software Engineering">Programming Languages & Software Engineering</MenuItem>
              <MenuItem value="Security">Security</MenuItem>
              <MenuItem value="Systems & Networking">Systems & Networking</MenuItem>
            </Select>
            <FormHelperText>With label + helper text</FormHelperText>
          </FormControl>
          <br />
          <FormControl>
            <InputLabel id="demo-simple-select-helper-label">Research Area 2</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"

              value={area2}
              label="area 2"
              name="area2"
              onChange={handleChange}
              style={{ width: '320px' }}
            >
              <MenuItem value="All Areas">All Areas</MenuItem>
              <MenuItem value="Algorithms & Theory">Algorithms & Theory</MenuItem>
              <MenuItem value="Artificial Intelligence">Artificial Intelligence</MenuItem>
              <MenuItem value="Computational Biology">Computational Biology</MenuItem>
              <MenuItem value="Computational Social Science">Computational Social Science</MenuItem>
              <MenuItem value="Data Science & Business Analytics">Data Science & Business Analytics</MenuItem>
              <MenuItem value="Database">Database</MenuItem>
              <MenuItem value="Digital Transformation, Platforms & Innovations">Digital Transformation, Platforms & Innovations</MenuItem>
              <MenuItem value="Fintech">Fintech</MenuItem>
              <MenuItem value="Healthcare Informatics">Healthcare Informatics</MenuItem>
              <MenuItem value="Intelligent Systems">Intelligent Systems</MenuItem>
              <MenuItem value="Media">Media</MenuItem>
              <MenuItem value="Programming Languages & Software Engineering">Programming Languages & Software Engineering</MenuItem>
              <MenuItem value="Security">Security</MenuItem>
              <MenuItem value="Systems & Networking">Systems & Networking</MenuItem>
            </Select>
            <FormHelperText>With label + helper text</FormHelperText>
          </FormControl>
          <br />
          <FormControl>
            <InputLabel id="demo-simple-select-helper-label">Research Area 3</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"

              value={area3}
              label="area 3"
              name="area3"
              onChange={handleChange}
              style={{ width: '320px' }}
            >
              <MenuItem value="All Areas">All Areas</MenuItem>
              <MenuItem value="Algorithms & Theory">Algorithms & Theory</MenuItem>
              <MenuItem value="Artificial Intelligence">Artificial Intelligence</MenuItem>
              <MenuItem value="Computational Biology">Computational Biology</MenuItem>
              <MenuItem value="Computational Social Science">Computational Social Science</MenuItem>
              <MenuItem value="Data Science & Business Analytics">Data Science & Business Analytics</MenuItem>
              <MenuItem value="Database">Database</MenuItem>
              <MenuItem value="Digital Transformation, Platforms & Innovations">Digital Transformation, Platforms & Innovations</MenuItem>
              <MenuItem value="Fintech">Fintech</MenuItem>
              <MenuItem value="Healthcare Informatics">Healthcare Informatics</MenuItem>
              <MenuItem value="Intelligent Systems">Intelligent Systems</MenuItem>
              <MenuItem value="Media">Media</MenuItem>
              <MenuItem value="Programming Languages & Software Engineering">Programming Languages & Software Engineering</MenuItem>
              <MenuItem value="Security">Security</MenuItem>
              <MenuItem value="Systems & Networking">Systems & Networking</MenuItem>
            </Select>
            <FormHelperText>With label + helper text</FormHelperText>
          </FormControl>
          <br />
          <TextField id="standard-basic" value={keyword} onChange={handleChange} name="keyword" style={{ width: '320px' }} label="Keyword" variant="standard" />
          <br />
          <br />
          <div className='container'>
            <Button classes={{ contained: 'main-btn' }} onClick={() => push('/recommendation/1')} variant="contained" >Find SUPERVISORS</Button>
          </div></>}
      </div>
    </div>
  );
}