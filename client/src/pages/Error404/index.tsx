import React from 'react';
import Header from '../../ui/molecules/Header';
import request from '../../util/request';

interface Error404Props {
    
}

const Error404: React.FC<Error404Props> = () => {

    async function handleclick(){
        request.post("/api/v1/logout")
    }

    return (
        <div>
            <Header />
            <button onClick={handleclick}>logout</button>
        </div>
    );
}

export default Error404