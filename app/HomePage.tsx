'use client';

import {Box} from "@mui/material";
import QueryInput from "./QueryInput";

export default function HomePage() {
    return (
        <div>
            <Box component="form"
            >
                <QueryInput/>
            </Box>
        </div>
    )
}
