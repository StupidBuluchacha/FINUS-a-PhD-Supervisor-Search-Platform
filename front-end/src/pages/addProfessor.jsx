/* eslint-disable no-unused-expressions */
import { useLazyQuery, useMutation } from "@apollo/client";
import { InputLabel, MenuItem, FormHelperText, FormControl, Select, TextField, Button, Chip, CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import BasicTable from "../component/listTable";
import { blobToBase64 } from '../utils'
import { ADD_PROFESSOR, ADD_PROFESSORS, EDIT_PROFESSOR } from "../graphql/mutations/professor";
import { GET_PROFESSOR } from "../graphql/queries/professor";
import { isEmpty } from "lodash";
import readXlsxFile from 'read-excel-file'
import axios from 'axios'

export default function AddProfessor({ edit }) {
    const { flag } = useParams()
    const { push } = useHistory()
    const { id } = useParams()

    const [addProfessor, { data, loading, error }] = useMutation(ADD_PROFESSOR)
    const [addProfessors,resp] = useMutation(ADD_PROFESSORS)
    const [editProfessor, response] = useMutation(EDIT_PROFESSOR)

    const [researchAreasList, setResearchAreasList] = useState([
        'Algorithms & Theory',
        'Artificial Intelligence',
        'Computational Biology',
        'Computational Social Science',
        'Data Science & Business Analytics',
        'Database',
        'Digital Transformation, Platforms & Innovations',
        'Fintech',
        'Healthcare Informatics',
        'Healthcare Informatics',
        'Intelligent Systems',
        'Media',
        'Programming Languages & Software Engineering',
        'Security',
        'Systems & Networking'
    ])
    const [file, setFile] = useState(undefined);
    const [state, setState] = useState({
        name: '',
        email: '',
        dept: '',
        intro: '',
        researchAreas: [],
        photo: '',
    })

    const [getProfessor, res] = useLazyQuery(GET_PROFESSOR)

    useEffect(() => {
        edit && getProfessor(({ variables: { id } })) && console.log('fetching')
    }, [])

    useEffect(() => {
        if (!isEmpty(data)) {
            push('/profList')
        }
    }, [data])

    useEffect(() => {
        if (!isEmpty(response.data)) {
            push('/profList')
        }
    }, [response.data])

    const { dept, researchAreas, intro, name, email, photo } = state

    const handleChange = ({ target: { value, name } }) => {
        if (name === 'researchAreas') {
            setState({ ...state, [name]: [...researchAreas, value] });
            setResearchAreasList([...researchAreasList.filter((field) => field !== value)])
        } else {
            setState({ ...state, [name]: value });
        }
    };

    const handleUpload = async ({ target: { files } }) => {
        setFile(URL.createObjectURL(files[0]));
        const base64String = await blobToBase64(files[0]);
        setState({ ...state, photo: base64String });
    }


    const handleUploadExcel = async ({ target: { files } }) => {
        const schema = {
            'name': {
              // JSON object property name.
              prop: 'name',
              type: String
            },
            'email': {
              prop: 'email',
              type: String,
            },
            'photo': {
                // JSON object property photo.
                prop: 'photo',
                type: String
              },
              'department': {
                prop: 'department',
                type: String,
              },
              'research': {
                prop: 'researchAreas',
                type: String,
              },
              'context': {
                prop: 'introduction',
                type: String,
              },
          }
          
          readXlsxFile(files[0], { schema }).then(({ rows, errors }) => {
            axios.post('/addProfessors', {
                data: rows
              })
              .then((response) => {
                push('/profList')
              })
              .catch((error) => {
                alert('An error has been occured while uploading excel list')
              });     
          })
    } 

    const handleAdd = (e) => {
        e.preventDefault()
       try {
        if (edit) {
            editProfessor(({ variables: { id, name, email, department: dept, introduction: intro, photo, researchAreas } }))
        }
        else {
            addProfessor(({ variables: { name, email, department: dept, introduction: intro, photo, researchAreas } }))
        }
       } catch (error) {
           alert('Email is already in use')
       }
    }
    useEffect(() => {
        if (!isEmpty(res.data)) {
            const { professor } = res.data;
            setState({ ...state, ...professor, intro: professor.introduction || '', dept: professor.department })
            setFile(professor.photo)
            setResearchAreasList(researchAreasList.filter((el) => !professor.researchAreas.includes(el)))
        }
    }, [res.data])
    return (
        <div className="container">
            <div>
                <h1 className="rec-text">{edit ? "Edit Professor's Details" : "Add Professor's Details"}</h1>
                {flag === '1' ? <BasicTable /> : <form onSubmit={handleAdd}>
                    <TextField
                        id="standard-basic"
                        onChange={handleChange}
                        value={name}
                        name="name"
                        required
                        fullWidth label="Professor's Name"
                        variant="standard" />
                    <br />
                    <br />
                    <TextField
                        id="standard-basic"
                        type="email"
                        fullWidth
                        required
                        onChange={handleChange}
                        value={email}
                        name="email"
                        label="Professor's Email"
                        variant="standard" />
                    <br />
                    <br />
                    <TextField
                        id="standard-textarea"
                        label="Introduction"
                        placeholder="Write a brief intro of professor"
                        multiline
                        name="intro"
                        required
                        onChange={handleChange}
                        value={intro}
                        variant="standard"
                        fullWidth
                    />
                    <br />
                    <br />
                    <div className="chip-con">
                        {researchAreas.map((area, i) => (
                            <Chip
                                label={area}
                                key={i}
                                style={{ margin: '5px' }}
                                onDelete={(value) => {
                                    setState({ ...state, researchAreas: [...researchAreas.filter((a) => a !== area)] })
                                    setResearchAreasList([...researchAreasList, area])
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
                            required={!edit}
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
                    <FormControl>
                        <InputLabel id="demo-simple-select-helper-label">Department</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            required
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
                    <br />
                    {file !== undefined && <img src={file} style={{ height: '320px', width: '320px', objectFit: 'cover', borderRadius: '10px' }} alt="" />}
                    <br />
                    <br />
                    <div className="container">
                        <Button
                            variant="contained"
                            component="label"
                            classes={{ contained: 'main-btn' }}
                            style={{ marginBottom: '10px' }}
                        >
                            Upload Picture
                            <input
                                type="file"
                                hidden
                                onChange={handleUpload}
                            />
                        </Button>
                    </div>

                    <div className="container">
                        <Button
                            variant="contained"
                            component="label"
                            classes={{ contained: 'main-btn' }}
                            style={{ marginBottom: '10px' }}
                        >
                            Upload Excel file
                            <input
                                type="file"
                                hidden
                                onChange={handleUploadExcel}
                            />
                        </Button>
                    </div>
                    <div className='container'>
                        <Button classes={{ contained: 'main-btn' }} type="submit" variant="contained" >
                            {loading || response.loading ? <CircularProgress size={15} style={{ color: 'white' }} /> : 'SAVE'}
                        </Button>
                    </div></form>}
            </div>
        </div >
    );
}