import React from 'react';
import Form from '../subcomponents/Form';
import Headings from '../subcomponents/Headings';
import Logos from '../subcomponents/Logos';
import Moryalogo from '../subcomponents/Moryalogo';
import SubmitButton from '../subcomponents/SubmitButton';

function Home() {
    return (
        <div className='homeContainer'>
            <Headings />
            <Form />
            <SubmitButton />
            <Logos/>
        </div>
    );
}

export default Home;