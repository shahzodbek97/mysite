import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {Link} from "react-router-dom";

function Gb() {
    return (
        <div>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Link to="/"><Button>Home</Button></Link>
                <Link to="/about"><Button>About</Button></Link>
                <Link to="/contact"><Button>Contact</Button></Link>
            </ButtonGroup>
        </div>
    );
}

export default Gb;