"use client";
import React, { useState } from "react";
import { AppShell, useMantineTheme } from "@mantine/core";
import GlobalShellHeader from "@/components/general/shell/GlobalShellHeader";
import { useDisclosure, useHeadroom } from "@mantine/hooks";
import GlobalShellFooter from "@/components/general/shell/GlobalShellFooter";
import GlobalShellTabs from "@/components/general/shell/GlobalShellTabs";

/**
 * https://mantine.dev/core/app-shell/
 * @param children - The main content of the page
 * @constructor
 */
const GlobalAppShell = ({ children }: { children: React.ReactNode }) => {
    return (
        <AppShell
            padding="xs"
            header={{
                height: { base: 160, md: 160 },
            }}
            footer={{ height: 60, offset: false }}
            classNames={{
                main: "bg-mobile lg:bg-desktop bg-cover bg-center bg-fixed px-0",
            }}
        >
            <AppShell.Header>
                <GlobalShellHeader />
            </AppShell.Header>

            <AppShell.Main pos={"relative"}>{children}</AppShell.Main>
            <AppShell.Footer pos={"static"}>
                <GlobalShellFooter />
            </AppShell.Footer>
        </AppShell>
    );
};

export default GlobalAppShell;
