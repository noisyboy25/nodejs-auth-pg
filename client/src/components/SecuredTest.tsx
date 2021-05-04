import React, { useEffect, useState } from 'react';

const SecuredTest = () => {
  const [securedData, setSecuredData]: any = useState({});

  useEffect(() => {
    const fetchData = async () => {
      setSecuredData({});
      const res = await fetch('/api/secured');
      const data = await res.json();
      setSecuredData(data);
    };

    fetchData();
  }, []);

  return <div>{securedData.message && <p>{securedData.message}</p>}</div>;
};

export default SecuredTest;
