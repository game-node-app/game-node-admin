"use client";
import React, { useMemo } from "react";
import { Box, Divider, Group, Paper, Stack, Text } from "@mantine/core";
import { useReport } from "@/components/report/hooks/useReport";
import { UserAvatarGroup } from "@/components/general/input/UserAvatarGroup";
import CenteredLoading from "@/components/general/CenteredLoading";
import reportCategoryToString from "@/components/report/util/reportCategoryToString";
import Link from "next/link";
import TextLink from "@/components/general/TextLink";
import { useReview } from "@/components/review/hooks/useReview";
import useUserProfile from "@/components/profile/hooks/useUserProfile";
import ModerationItemDetailsReviewContent from "@/components/moderation/details/ModerationItemDetailsReviewContent";

interface Props {
    reportId: number;
}

const ModerationItemDetails = ({ reportId }: Props) => {
    const reportQuery = useReport(reportId);
    const targetProfileQuery = useUserProfile(
        reportQuery.data?.targetProfileUserId,
    );

    if (reportQuery.isLoading || targetProfileQuery.isLoading) {
        return <CenteredLoading />;
    } else if (reportQuery.data == undefined) {
        return null;
    }

    const report = reportQuery.data;

    return (
        <Stack
            className={
                "w-full h-full bg-[#161616] items-center justify-center p-1 lg:p-0 pb-4 lg:pb-12"
            }
        >
            <Group className={"w-full lg:px-12 justify-around mt-6"}>
                <Paper
                    withBorder
                    radius={"sm"}
                    className={"w-full lg:w-5/12 !bg-[#181818] h-[86px]"}
                >
                    <Group className={"w-full h-full flex-nowrap py-4 px-4"}>
                        <Box className={"w-6/12"}>
                            <UserAvatarGroup
                                avatarProps={{
                                    size: "lg",
                                }}
                                groupProps={{
                                    wrap: "nowrap",
                                }}
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
                    className={"w-full lg:w-5/12 !bg-[#181818] h-[86px]"}
                >
                    <Group
                        className={
                            "w-full h-full justify-between items-center px-4"
                        }
                    >
                        <Link href={""}>
                            <Text>Send alert</Text>
                        </Link>
                        <Link href={""}>
                            <Text>Suspend user</Text>
                        </Link>
                        <Link href={""}>
                            <Text>Ban user</Text>
                        </Link>
                    </Group>
                </Paper>
            </Group>
            {report.reason != undefined && (
                <Paper
                    withBorder
                    radius={"sm"}
                    className={
                        "w-full lg:w-9/12 !bg-[#181818] h-[180px] mt-4 mb-4 relative"
                    }
                >
                    <Box className={"absolute ms-2 mt-2"}>
                        <Text className={"text-sm text-dimmed"}>
                            Report reason
                        </Text>
                    </Box>
                    <Stack
                        className={
                            "w-full h-full text-center justify-center items-center"
                        }
                    >
                        <Text>{report.reason}</Text>
                    </Stack>
                </Paper>
            )}
            <Group className={"w-full lg:w-9/12 flex-nowrap"}>
                <Paper
                    withBorder
                    radius={"sm"}
                    className={
                        "w-full lg:w-5/12 !bg-[#181818] h-[280px] lg:h-[240px] relative"
                    }
                >
                    <Box className={"absolute ms-2 mt-2"}>
                        <Text className={"text-sm text-dimmed"}>
                            Report target
                        </Text>
                    </Box>
                    <Stack
                        className={
                            "w-full h-full items-center mt-10 px-3 lg:px-0"
                        }
                    >
                        <Box className={"w-40"}>
                            <UserAvatarGroup
                                avatarProps={{
                                    size: "lg",
                                }}
                                userId={report.targetProfileUserId}
                            />
                        </Box>
                        {targetProfileQuery.data && (
                            <div>
                                <Text span className={"w-fit font-bold"}>
                                    Member since:{" "}
                                </Text>
                                <Text span className={"text-dimmed"}>
                                    {new Date(
                                        targetProfileQuery.data?.createdAt,
                                    ).toLocaleDateString("en-us")}
                                </Text>
                            </div>
                        )}
                    </Stack>
                </Paper>
                {report.targetReviewId && (
                    <Box className={"lg:w-8/12 h-[280px] lg:h-[240px]"}>
                        <ModerationItemDetailsReviewContent
                            reviewId={report.targetReviewId}
                        />
                    </Box>
                )}
            </Group>
        </Stack>
    );
};

export default ModerationItemDetails;
