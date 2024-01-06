// "use client";

// import { ReactNode } from "react";

// function Auth({ children }: { children: ReactNode }) {
//     const router = useRouter();
//     const { status } = useSession({
//         required: true,
//         onUnauthenticated: () => router.push(children.unauthorized),
//     });
//     if (status === "loading") return children.loading;
//     return children;
// }
