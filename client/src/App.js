import './App.css';
import { Layout } from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import PostsPage from './pages/PostsPage';
import PostPage from './pages/PostPage';
import AddPostPage from './pages/AddPostPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import EditPostPage from './pages/EditPostPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="posts" element={<PostsPage />} />
        <Route path=":id" element={<PostPage />} />
        <Route path="new" element={<AddPostPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path=":id/edit" element={<EditPostPage />} />
      </Routes>
    </Layout>
  );
}

export default App;