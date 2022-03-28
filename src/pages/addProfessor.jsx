import { InputLabel, MenuItem, FormHelperText, FormControl, Select, TextField, Button } from "@material-ui/core";
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import BasicTable from "../component/listTable";

export default function AddProfessor({ edit }) {
    const { flag } = useParams()
    const { push } = useHistory()
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
                <h1 className="rec-text">{edit ? "Edit Professor's Details" : "Add Professor's Details"}</h1>
                {flag === '1' ? <BasicTable /> : <>
                    <TextField id="standard-basic" fullWidth label="Professor's Name" variant="standard" />
                    <br />
                    <br />
                    <TextField id="standard-basic" type="email" fullWidth label="Professor's Email" variant="standard" />
                    <br />
                    <br />
                    <TextField
                        id="standard-textarea"
                        label="Introduction"
                        placeholder="Write a brief intro of professor"
                        multiline
                        variant="standard"
                        fullWidth
                    />
                    <br />
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
                    <br />
                    <div className="container">
                        <Button
                            variant="contained"
                            component="label"
                            classes={{ contained: 'main-btn' }}
                            style={{marginBottom: '10px'}}
                        >
                            Upload Picture
                            <input
                                type="file"
                                hidden
                            />
                        </Button>
                    </div>
                    <div className='container'>
                        <Button classes={{ contained: 'main-btn' }} onClick={() => push('/profList')} variant="contained" >SAVE</Button>
                    </div></>}
            </div>
        </div >
    );
}