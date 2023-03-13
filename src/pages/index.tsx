import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";

const Home: NextPage = () => {
  const { data: sessionData, status: sessionStatus } = useSession();

  return (
    <div className="grid min-h-screen place-items-center bg-zinc-800 text-zinc-200">
      <div className="flex flex-col gap-4">
        <h1 className="font-cal-sans text-5xl font-bold tracking-tight text-white">
          TODO List
        </h1>
        <div className="flex flex-col items-center">
          <small>Built with</small>
          <ul className="flex flex-col items-center text-2xl text-white">
            <li>NextJS</li>
            <li className="text-purple-400">NextAuth</li>
            <li className="text-sky-400">TRPC</li>
            <li className="text-cyan-400">TailwindCSS</li>
            <li className="text-indigo-600">Prisma</li>
            <li className="text-emerald-500">Supabase</li>
          </ul>
        </div>
        {sessionStatus === "loading" ? (
          <div>Checking Authentication...</div>
        ) : (
          <div className="flex flex-col gap-4">
            {sessionData ? (
              <>
                <button className="rounded bg-zinc-200 py-2 font-cal-sans font-bold tracking-tight text-zinc-800 shadow">
                  {`Continue as ${sessionData.user.name}`}
                </button>
                <button
                  className="rounded bg-zinc-200 py-2 font-cal-sans font-bold tracking-tight text-zinc-800 shadow"
                  onClick={() => void signOut()}
                >
                  Sign Out
                </button>
              </>
            ) : (
              <button
                className="rounded bg-zinc-200 py-2 font-cal-sans font-bold tracking-tight text-zinc-800 shadow"
                onClick={() => void signIn()}
              >
                Login
              </button>
            )}
          </div>
        )}
        <small className="text-center text-zinc-400">
          Deployed on <span className="text-white">Vercel</span>
        </small>
      </div>
    </div>
  );
};

export default Home;
