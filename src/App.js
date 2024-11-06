import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import BlogList from './pages/BlogList';
import BlogCreate from './pages/BlogCreate';
import BlogDetail from './pages/BlogDetail';
import BlogEdit from './pages/BlogEdit';
import SearchResult from './pages/SearchResult'; // Import trang kết quả tìm kiếm
import Navbar from './components/Navbar';
import './App.css'

// HOC for Private Routes
const PrivateRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  return user ? children : <Navigate to="/login" />;
};

const Layout = ({ children }) => {
  const location = useLocation();
  const isAuthRoute = location.pathname === '/login' || location.pathname === '/register';

  return (
      <>
        {!isAuthRoute && <Navbar />}
        {children}
      </>
  );
};

function App() {
  return (
      <Router>
        <Layout>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<BlogList />} />
            <Route path="/blogs" element={<BlogList />} />
            <Route path="/blogs/create" element={<BlogCreate />} />
            <Route path="/blogs/:id" element={<BlogDetail />} />
            <Route path="/blogs/edit/:id" element={<BlogEdit />} />
            <Route path="/blogs/search" element={<SearchResult />} /> {/* Route cho kết quả tìm kiếm */}
          </Routes>
        </Layout>
      </Router>
  );
}

export default App;