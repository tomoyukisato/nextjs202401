import NextAuth from "next-auth/next";
import GithubProvier from "next-auth/providers/github";

export const authOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        GithubProvier({
            clientId: process.env.GITHUB_CLIENT_ID ?? "",
            clientSecret: process.env.GITHUB_CLEINT_SECRET ?? "",
        }),
    ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
