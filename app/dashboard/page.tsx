import Logout from "@/components/Logout";
import { getSession } from "../api/auth/[...nextauth]/options";

const Dashboard = async () => {
  const session = await getSession();

  return (
    <div>
      <img src={session.user.image} alt="image" />
      <p>hi, {session.user.name}</p>
      <Logout />
    </div>
  );
};

export default Dashboard;
