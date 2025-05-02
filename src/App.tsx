import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes.tsx';
import { Layout } from './components/Layout';
import './custom.css';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Routes>
          {AppRoutes.map((route, index) => {
            const { element, path, ...rest } = route;
            return <Route key={index} path={path} {...rest} element={element} />;
          })}
        </Routes>
      </Layout>
    );
  }
}
