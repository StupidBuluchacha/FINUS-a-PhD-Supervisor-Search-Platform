import { TableContainer, Paper, Button } from "@material-ui/core";
import Dummy from '../assets/avatar.png'

function ProfDetails() {
    return (
        <div style={{ padding: '20px' }}>
            <h1 className="rec-text">Professor's Details</h1>
            <Button classes={{ contained: 'main-btn' }} onClick={() => window.history.back()} style={{ marginLeft: '15px' }} variant="contained" >Back to Recommendations</Button>
            <TableContainer component={Paper} style={{ marginTop: '20px' }}>
                <div className="main-details-con">
                    <img src={Dummy} alt="" className="main-img" />
                        <div className='details-margin'>
                            Name: abc
                            <br />
                            Email: abc@abc.com
                            <br />
                            Research Areas: 
                            <ol className="list-margin">
                                <li>abc</li>
                                <li>def</li>
                                <li>ghi</li>
                                <li>jkl</li>
                            </ol>
                            Introduction: 
                            <div className="intro">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </div>
                        </div>
                </div>
            </TableContainer>
        </div>
    )
}
export default ProfDetails;
