import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';

import { accountService, alertService } from '@/_services';

function VerifyEmail({ history }) {
    const EmailStatus = {
        Verifying: 'Verifying',
        Failed: 'Failed'
    }

    const [emailStatus, setEmailStatus] = useState(EmailStatus.Verifying);

    useEffect(() => {
        const { token } = queryString.parse(location.search);

        // remove token from url to prevent http referer leakage
        history.replace(location.pathname);

        accountService.verifyEmail(token)
            .then(() => {
                alertService.success('Verifikacija sėkminga, galite prisijungti', { keepAfterRouteChange: true });
                history.push('login');
            })
            .catch(() => {
                setEmailStatus(EmailStatus.Failed);
            });
    }, []);

    function getBody() {
        switch (emailStatus) {
            case EmailStatus.Verifying:
                return <div>Verifikuojama...</div>;
            case EmailStatus.Failed:
                return <div>Verifikacija nepavyko, galite verifikuoti savo paskyrą ir per ši puslapį <Link to="forgot-password">pamiršau slaptažodį</Link></div>;
        }
    }

    return (
        <div>
            <h3 className="card-header">Verifikuoti El.Paštą</h3>
            <div className="card-body">{getBody()}</div>
        </div>
    )
}

export { VerifyEmail }; 