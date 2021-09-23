import { Header } from '../../components'
import { TextField } from '@mui/material';
import './css/style.css'
function Hireme() {

    return (
        <div>
            <Header />
            <div className="hiremeDiv">
                <h1>
                    Hiring Form
                </h1>

                <div className='emailInput'>
                    <TextField className="input1" id="outlined-basic" label="Enter Email" variant="outlined" />

                </div>

                <div className='messageInput'>
                    
                        
                            <TextField
                                className='input2'
                                id="outlined-multiline-static"
                                label="Enter Message"
                                multiline
                                rows={4}
                                                        />
                                    </div>
            <button className='hirebtn'><span className="btntext">Hire me</span></button> 






            </div>

        </div>
    )
}

export default Hireme;