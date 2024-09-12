import Header from './Header';
// import Loader from './Loader';
// import CartOverview from '../features/cart/CartOverview';
import { Outlet } from 'react-router-dom';

function AppLayout() {
  // const navigation = useNavigation();
  // const isLoading = navigation.state === 'loading';

  return (
    <>
      <Header />
      <main className='container px-5 pt-[140px] mx-auto'>
        <Outlet/>
      </main>
    </>
  );
}

export default AppLayout;
