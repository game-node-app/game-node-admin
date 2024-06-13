import React, { PropsWithChildren } from "react";
import { Box, Group } from "@mantine/core";
import ModerationSidebar from "@/components/moderation/ModerationSidebar";

const Layout = ({ children }: PropsWithChildren) => {
    return (
        <Group className={"w-full h-full flex-wrap lg:flex-nowrap items-start"}>
            <Box className={"w-full lg:w-3/12"}>
                <ModerationSidebar />
            </Box>
            <Box className={"w-full lg:w-9/12"}>{children}</Box>
        </Group>
    );
};

export default Layout;
