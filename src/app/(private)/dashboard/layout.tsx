import DashboardSidebar from "./sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  console.log("Dashboard Layout");
  return (
    <div className="border border-green-500">
      <DashboardSidebar />
      {children}
    </div>
  );
};

export default DashboardLayout;
