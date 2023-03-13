import { GetServerSideProps, type NextPage } from "next";
import { getServerAuthSession } from "~/server/auth";

const TodoListPage: NextPage = () => {
  return <div>TodoListPage</div>;
};

export default TodoListPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getServerAuthSession(ctx);

  if (session === null) {
    return {
      redirect: {
        destination: "/",
        permanent: true,
      },
    };
  }

  return {
    props: { session },
  };
};
