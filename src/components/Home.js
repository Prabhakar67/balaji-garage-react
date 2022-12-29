import React from 'react';
import Form from '../subcomponents/Form';
import Headings from '../subcomponents/Headings';
import SubmitButton from '../subcomponents/SubmitButton';

function Home() {
    return (
        <div className='homeContainer'>
            <Headings />
            <Form />
            <SubmitButton />
        </div>
    );
}

export default Home;