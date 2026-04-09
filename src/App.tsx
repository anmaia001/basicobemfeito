import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import { ROUTE_PATHS } from '@/lib/index';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Router>
        <Layout>
          <Routes>
            <Route path={ROUTE_PATHS.HOME} element={<Home />} />
          </Routes>
        </Layout>
      </Router>
    </MotionConfig>
  );
}
