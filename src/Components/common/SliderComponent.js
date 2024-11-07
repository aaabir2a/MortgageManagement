import { Slider, Stack, Typography } from '@mui/material';
import React from 'react';

const SliderComponent = ({ DefaultValue, max, min, amount, label, unit }) => {
    return (
        <Stack my={1.4}>
            <Stack gap={1}>
                <Typography variant='subtitle2'>{label}</Typography>
                <Typography varient='h5'>{amount} {unit}</Typography>
            </Stack>

            <div>
                <Slider min={min} max={max} defaultValue={DefaultValue} aria-label="Default" valueLabelDisplay="auto" />
                <Stack direction='row' justifyContent='space-between'>
                <Typography color='text.secondary'>{unit} {min}</Typography>
                <Typography color='text.secondary'>{unit} {max}</Typography>
            </Stack>

            </div>


        </Stack>
    );
};

export default SliderComponent;