import React, { useMemo } from "react";
import { Stack } from "@mantine/core";
import { useReports } from "@/components/report/hooks/useReports";
import ModerationListItem from "@/components/moderation/list/ModerationListItem";

const ModerationList = () => {
    const reportsQuery = useReports();
    const items = useMemo(() => {
        if (reportsQuery.data == undefined) {
            return undefined;
        }
        return reportsQuery.data.data.map((report, index) => {
            const evenIndexItem = index % 2 === 0;
            return (
                <ModerationListItem
                    styles={{
                        root: {
                            backgroundColor: evenIndexItem
                                ? "#161616"
                                : "#181818",
                        },
                    }}
                    key={report.id}
                    item={report}
                />
            );
        });
    }, [reportsQuery.data]);
    return <Stack className={"w-full h-full gap-0.5"}>{items}</Stack>;
};

export default ModerationList;
