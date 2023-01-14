import React from 'react'
import { Autocomplete, Loader } from '@mantine/core';
import { Text, Progress, Card } from '@mantine/core';


export default function Home() {
    return (
        <div>

            <Autocomplete
                label="Async Autocomplete data"
                placeholder="Your email" data={[]}
            />

        </div>
    )
}