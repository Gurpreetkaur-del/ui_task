import React from 'react'
import { HashRouter, Routes, Route } from "react-router-dom";
import Task from '../pages/task/Task';
import PrivateRoute from './PrivateRoute';

const AppRouter = () => {
  return (
    <div>
      <HashRouter>
        <Routes>
        <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<Task />} />
            </Route>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default AppRouter