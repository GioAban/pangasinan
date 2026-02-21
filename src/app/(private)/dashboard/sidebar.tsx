import ClientLink from "@/app/clientlink";

const DashboardSidebar = () => {
  console.log("Dashboard sidebar");
  return (
    <nav>
      <ul>
        <li>
          <ClientLink href="profile">Profile</ClientLink>
        </li>
        <li>
          <ClientLink href="blogs">Blogs</ClientLink>
        </li>
      </ul>
    </nav>
  );
};
export default DashboardSidebar;
