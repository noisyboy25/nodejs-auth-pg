import React, { useState } from 'react';

const SecuredTest = () => {
  const [securedData, setSecuredData]: any = useState({});
  const handleTest = async () => {
    setSecuredData({});
    const res = await fetch('/api/secured');
    const data = await res.json();
    setSecuredData(data);
  };
  return (
    <div>
      {securedData.message && <p>{securedData.message}</p>}
      <button onClick={handleTest}>test</button>
    </div>
  );
};

export default SecuredTest;
