"use client";
import React from "react";
import { Box, Divider, Group, Paper, Stack, Text } from "@mantine/core";
import { useReport } from "@/components/report/hooks/useReport";
import { UserAvatarGroup } from "@/components/general/input/UserAvatarGroup";
import CenteredLoading from "@/components/general/CenteredLoading";
import reportCategoryToString from "@/components/report/util/reportCategoryToString";

interface Props {
    reportId: number;
}

const ModerationItemDetails = ({ reportId }: Props) => {
    const reportQuery = useReport(reportId);

    if (reportQuery.isLoading) {
        return <CenteredLoading />;
    } else if (reportQuery.data == undefined) {
        return null;
    }

    return (
        <Stack
            className={
                "w-full h-full bg-[#161616] items-center justify-center mb-4"
            }
        >
            <Group className={"w-full lg:px-12 justify-around mt-6"}>
                <Paper
                    withBorder
                    radius={"sm"}
                    className={"w-full lg:w-5/12 !bg-[#181818]"}
                >
                    <Group className={"w-full h-full flex-nowrap py-4 px-4"}>
                        <Box className={"w-5/12"}>
                            <UserAvatarGroup
                                userId={reportQuery.data.profileUserId}
                            />
                        </Box>

                        <Divider orientation={"vertical"} />
                        <Stack className={"w-6/12 gap-2"}>
                            <div>
                                <Text span className={"w-fit"}>
                                    Category:{" "}
                                </Text>
                                <Text span>
                                    {reportCategoryToString(
                                        reportQuery.data.category,
                                    )}
                                </Text>
                            </div>

                            <Divider />
                            <div>
                                <Text span className={"w-fit"}>
                                    Report ID:{" "}
                                </Text>
                                <Text span>{reportQuery.data.id}</Text>
                            </div>
                        </Stack>
                    </Group>
                </Paper>
                <Paper
                    withBorder
                    radius={"sm"}
                    className={"w-full lg:w-5/12 !bg-[#181818]"}
                >
                    <Group className={"w-full h-full"}>
                        <UserAvatarGroup
                            userId={reportQuery.data!.profileUserId}
                        />
                        <Divider orientation={"vertical"} />
                    </Group>
                </Paper>
            </Group>
        </Stack>
    );
};

export default ModerationItemDetails;
