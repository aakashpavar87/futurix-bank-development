import { Link, Outlet } from "react-router-dom";

const ProfileLayout = () => {
  return (
    <div>
      <h1 className="font-poppins text-3xl font-thin">
        This is constant line that will show in profile.
      </h1>
      <div className="flex gap-4">
        <Link to="post">Post</Link>
        <Link to="post/2">Second Post</Link>
        <Link to="/profile">Profile</Link>
      </div>
      <main className="mt-6">
        <Outlet />
      </main>
    </div>
  );
};

export default ProfileLayout;
