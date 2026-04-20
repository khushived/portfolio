import Navbar from '../components/Navbar';

export default function Layout({ children }) {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
