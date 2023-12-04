import React from 'react';
import styles from './index.module.scss'
import NewsPage from '../Pages/NewsPage';
import LoginPage from '../Pages/LoginPage';
import { Route, Routes } from 'react-router';

const App = () => {


    return (
        <div className={styles.app}>
            <div className={styles.app_container}>
                <Routes>
                    <Route path='/login' element={<LoginPage />}/>
                    <Route path='/' element={<NewsPage />}/>
                </Routes>
            </div>
        </div>
    )
}

export default App;
