// app/api/auth/[...nextauth]/route.js
import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import mongoose from 'mongoose';
import connectDB from '@/Db/connectDb';
import User from '@/models/User';

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === 'github') {
        await connectDB();

        const existingUser = await User.findOne({ email: user.email });

        if (!existingUser) {
          const newUser = new User({
            email: user.email,
            username: user.email.split('@')[0],
          });

          await newUser.save();
        }

        return true;
      }

      return false;
    },

    async session({ session }) {
      await connectDB();

      const dbUser = await User.findOne({ email: session.user.email });

      if (dbUser) {
        session.user.name = dbUser.username;
      }

      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

// Required exports for App Router
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
