"use client"
import { RecoilRoot } from "recoil";
import { SessionProvider } from "../../node_modules/next-auth/react";

export const Providers = ({children}: {children: React.ReactNode}) => {
    return <RecoilRoot>
        <SessionProvider>
            {children}
        </SessionProvider>
    </RecoilRoot>
}