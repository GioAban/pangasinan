const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  console.log("Profile Layout");
  return (
    <div className="border border-blue-500">
      <article>Profile Sidebar</article>
      {children}
    </div>
  );
};

export default ProfileLayout;
