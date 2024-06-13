import React from "react";
import { Report } from "@/wrapper/server";
import {
    Divider,
    Group,
    GroupProps,
    Stack,
    Text,
    ThemeIcon,
} from "@mantine/core";
import { IconAlertCircle, IconArrowBadgeRight } from "@tabler/icons-react";
import reportCategoryToString from "@/components/report/util/reportCategoryToString";
import Link from "next/link";

interface Props extends GroupProps {
    item: Report;
}

const ModerationListItem = ({ item, ...groupProps }: Props) => {
    return (
        <Link href={`/moderation/${item.id}`} className={"w-full h-full"}>
            <Group className={"w-full ps-4 py-3"} {...groupProps}>
                <IconAlertCircle size={"3rem"} className={"text-brand-4"} />
                <Stack className={"w-6/12 gap-2"}>
                    <div>
                        <Text span className={"w-fit"}>
                            Category:{" "}
                        </Text>
                        <Text span>
                            {reportCategoryToString(item.category)}
                        </Text>
                    </div>

                    <Divider />
                    <div>
                        <Text span className={"w-fit"}>
                            Report ID:{" "}
                        </Text>
                        <Text span>{item.id}</Text>
                    </div>
                </Stack>
                <IconArrowBadgeRight className={"ms-auto"} size={"2rem"} />
            </Group>
        </Link>
    );
};

export default ModerationListItem;
