"use client";
import React, { PropsWithChildren, useState } from "react";
import { MantineProvider } from "@mantine/core";
import SuperTokensProvider from "@/components/auth/SuperTokensProvider";
import { theme } from "@/components/utils/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GlobalAppShell from "@/components/general/shell/GlobalAppShell";
import { OpenAPI as ServerOpenAPI } from "@/wrapper/server";
import { OpenAPI as SearchOpenAPI } from "@/wrapper/search";
import SessionAuthWithRoles from "@/components/auth/SessionAuthWithRoles";
import { EUserRoles } from "@/components/auth/roles";

/**
 * Basic configuration for wrapper services
 */
ServerOpenAPI.BASE = process.env.NEXT_PUBLIC_SERVER_URL!;
ServerOpenAPI.WITH_CREDENTIALS = true;
SearchOpenAPI.BASE = process.env.NEXT_PUBLIC_SEARCH_URL!;

const Providers = ({ children }: PropsWithChildren) => {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        refetchOnWindowFocus: false,
                        refetchInterval: false,
                        refetchOnMount: false,
                        refetchIntervalInBackground: false,
                        refetchOnReconnect: false,
                        staleTime: Infinity,
                        retry: 2,
                    },
                },
            }),
    );
    return (
        <MantineProvider theme={theme} forceColorScheme={"dark"}>
            <QueryClientProvider client={queryClient}>
                <SuperTokensProvider>
                    <SessionAuthWithRoles
                        roles={[EUserRoles.MOD, EUserRoles.ADMIN]}
                    >
                        <GlobalAppShell>{children}</GlobalAppShell>
                    </SessionAuthWithRoles>
                </SuperTokensProvider>
            </QueryClientProvider>
        </MantineProvider>
    );
};

export default Providers;
