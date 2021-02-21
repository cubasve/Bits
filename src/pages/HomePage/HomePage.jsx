import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
// import HabitInfo from '../../components/HabitInfo/HabitInfo';

export default function HomePage() {
    return (
        <>
            <h1>HomePage</h1>
            <Card>
                <CardContent>
                    <Typography>
                        1. Cue
                    </Typography>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <Typography>
                        2. Craving
                    </Typography>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <Typography>
                        3. Response
                    </Typography>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <Typography>
                        4. Reward
                    </Typography>
                </CardContent>
            </Card>
            {/* <HabitInfo /> */}
        </>
    )
}