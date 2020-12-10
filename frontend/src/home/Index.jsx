import React from 'react';

import { accountService } from '@/_services';

function Home() {
    const user = accountService.userValue;
    
    return (
        <div className="p-4">
            <div className="container">
            <h1>Labas {user.firstName} {user.lastName}!</h1>
            <p>Esi prisijungęs kaip: {user.role} </p> 
            </div>
        </div>
    );
}

export { Home };