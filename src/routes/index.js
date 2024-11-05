import React, {  memo, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from '../routes/RouteFile'
import { useState } from 'react';


const RoutesList = memo(() => {
  return (
    <Router>
      <ConditionalRoute />
    </Router>
  );
});

export const ConditionalRoute = () => {
  const [RoutesFile, setRoutesFile] = useState([]);


  useEffect(() => {
        setRoutesFile(routes);
  }, []);

  return (
          <Suspense>
            <Routes>
              {RoutesFile.map((itm, key) =>
                  <Route
                    key={key}
                    exact={itm.exact}
                    path={itm.path}
                    name={itm.name}
                    Component={itm.component}
                  />
              )}
              {/* <Route exact path="/" element={<Navigate to="/login" />}></Route> */}
            </Routes>
          </Suspense>
  );
};


export default RoutesList;
