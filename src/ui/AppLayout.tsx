import { memo } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
// import Loader from './Loader';
// import CartOverview from '../features/cart/CartOverview';

const AppLayout = memo(() => {
  // const navigation = useNavigation();
  // const isLoading = navigation.state === 'loading';

  return (
    <>
      <Header />
      <main className='pt-[117px]'>
        <Outlet/>
      </main>
    </>
  );
})

export default AppLayout;
