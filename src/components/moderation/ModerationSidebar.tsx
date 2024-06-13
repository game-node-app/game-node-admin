"use client";
import React from "react";
import { Paper, Stack, Text } from "@mantine/core";
import useOnMobile from "@/components/general/hooks/useOnMobile";
import ModerationList from "@/components/moderation/list/ModerationList";

interface Props {
    onReportSelected: (reportId: number) => void;
}

const ModerationSidebar = () => {
    return (
        <Stack className={"w-full gap-0"}>
            <Paper
                className={
                    "w-full flex justify-center items-center border-0 rounded-[0] h-[64px]"
                }
                styles={{
                    root: {
                        backgroundColor: "#202020",
                    },
                }}
            >
                <Text className={"text-center"}>Reports</Text>
            </Paper>
            <ModerationList />
        </Stack>
    );
};

export default ModerationSidebar;
