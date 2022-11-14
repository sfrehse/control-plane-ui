import {Box, Button, CircularProgress, Stack, TextField} from "@mui/material";
import React, {useState} from "react";
import {green} from "@mui/material/colors";

export default function QueryInput() {
    const [value, setValue] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const timer = React.useRef<number>();


    function onChange(value: string) {
        setValue(value);
    }

    function handleGenerateClick() {
        if (!loading){
            setLoading(true);
            timer.current = window.setTimeout(() => { setLoading(false)}, 2000);
        }
    }



    function clearText() {
        setValue("");
    }

    return <div>
        <TextField id="query" onChange={(event) => onChange(event.target.value)} value={value} variant="outlined"
                   multiline rows={10}
                   fullWidth/>
        <Stack
            direction="row"
            alignItems="right"
            justifyContent="space-between"
            sx={{px: 2, py: 1, bgcolor: 'background.default'}}
        >

            <Box sx={{m: 1, position: 'relative'}}>
                <Button variant="outlined" onClick={clearText}>Clear</Button>
            </Box>
            <Box sx={{m: 1, position: 'relative'}}>
            <Button variant="contained" onClick={handleGenerateClick} disabled={value.length === 0 || loading}>
                Generate</Button>
            {loading && (<CircularProgress size={24}
                                           sx={{
                                               color: green[500],
                                               position: 'absolute',
                                               top: '50%',
                                               left: '50%',
                                               marginTop: '-12px',
                                               marginLeft: '-12px'
            }}/>)}
            </Box>
        </Stack>
    </div>
}
