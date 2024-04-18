import { Navbar } from "./_components/navbar";

const BrowseFolderLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>

      {/* <Footer /> */}
    </div>
  );
};

export default BrowseFolderLayout;
