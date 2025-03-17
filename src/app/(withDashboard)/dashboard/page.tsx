import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      {session?.user && (
        <div className="bg-white shadow-md rounded-lg p-6 md:p-10 w-full max-w-2xl text-center">
          {/* Profile Image */}
          <Image
            src={session?.user?.image}
            alt="User Profile Image"
            width={120}
            height={120}
            className="mx-auto rounded-full border-4 border-gray-300 shadow-md"
          />

          {/* User Details */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-700 mt-5">
            Welcome, {session?.user?.name}
          </h1>
          <p className="text-xs md:text-xl text-gray-500 mt-2">
            Email: {session?.user?.email}
          </p>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
