import Navbar from '../components/dashboard/navbar/navbar.jsx';
import Sidebar from '../components/dashboard/sidebar/sidebar.jsx';
import Footer from '../components/dashboard/footer/footer.jsx';
import styles from '../components/dashboard/dashboard.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        { children }
        <Footer />
      </div>
    </div>
  )
}

export default Layout;
