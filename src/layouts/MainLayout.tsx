import { Outlet } from 'react-router-dom';
import { CartDrawer } from '../components/CartDrawer';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

export function MainLayout() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
