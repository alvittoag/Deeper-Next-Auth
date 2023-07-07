// ** Import Next
import type { NextAuthOptions } from "next-auth";
import { getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
};

type User = {
  user: {
    name: string;
    email: string;
    image: string;
  };
};

export const getSession = async () => {
  const res = (await getServerSession(options)) as User;

  return res;
};
