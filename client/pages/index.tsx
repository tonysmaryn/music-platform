import React from 'react';
import MainLayout from '../layouts/MainLayout';

const index = () => {
  return (
    <>
      <MainLayout>
        <div className="center">
          <h1>Добро пожаловать</h1>
          <h3>Здесь собраны лучшие треки</h3>
        </div>
      </MainLayout>
      <style jsx>{`
        .center {
          margin-top: 150px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  );
};

export default index;
