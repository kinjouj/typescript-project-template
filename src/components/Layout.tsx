import { Outlet } from 'react-router-dom';

const Layout = (): React.JSX.Element => {
  const data = { message: 'Hello World' };

  return (
    <main style={{ color: 'red' }}>
      <Outlet context={{ data }} />
    </main>
  );
};

export default Layout;
