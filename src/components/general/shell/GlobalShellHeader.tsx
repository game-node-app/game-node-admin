import { Container, Burger, Box, Button, AppShell, Group } from "@mantine/core";
import GameNodeLogo from "@/components/general/GameNodeLogo";
import Link from "next/link";
import useUserId from "@/components/auth/hooks/useUserId";
import { useDisclosure } from "@mantine/hooks";
import { IconSettings } from "@tabler/icons-react";
import GlobalShellTabs from "@/components/general/shell/GlobalShellTabs";
import React from "react";

export default function GlobalShellHeader() {
    const userId = useUserId();
    return (
        <div className="h-full flex flex-col w-full lg:items-start">
            <Container
                fluid
                className="flex flex-nowrap w-full items-center lg:justify-start mb-4 mt-4"
            >
                <a href={"/"}>
                    <GameNodeLogo className="ms-2 w-22 h-auto max-h-full" />
                </a>
                <Group className="ms-auto">
                    {!userId && (
                        <Link href={"/auth"}>
                            <Button variant="outline">Sign in</Button>
                        </Link>
                    )}
                </Group>
            </Container>
            <GlobalShellTabs />
        </div>
    );
}
