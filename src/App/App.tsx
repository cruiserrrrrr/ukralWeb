import React from 'react';
import { Route, Routes } from 'react-router';
import styles from './index.module.scss'
import NewsPage from '../Pages/NewsPage';
import LoginPage from '../Pages/LoginPage';
import Profile from '../Pages/Profile';

const App = () => {

    return (
        <div className={styles.app}>
            <div className={styles.app_container}>
                <Routes>
                    <Route path='/' element={<NewsPage />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/profile' element={<Profile />} />
                </Routes>
            </div>
        </div>
    )
}

export default App;
