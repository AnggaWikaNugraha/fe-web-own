import Navbar from '../../navbar';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className='mt-7'>{children}</div>
    </>
  );
};

export default MainLayout;