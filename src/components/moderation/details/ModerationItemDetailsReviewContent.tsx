import React, { useMemo } from "react";
import { Review } from "@/wrapper/server";
import { EditorContent, useEditor } from "@tiptap/react";
import { Box, Paper, Text } from "@mantine/core";
import { useReview } from "@/components/review/hooks/useReview";
import CenteredLoading from "@/components/general/CenteredLoading";
import { StarterKit } from "@tiptap/starter-kit";

interface Props {
    reviewId: string;
}

const ModerationItemDetailsReviewContent = ({ reviewId }: Props) => {
    const reviewQuery = useReview(reviewId);

    const content = useMemo(() => {
        if (reviewQuery.data != undefined && reviewQuery.data.content) {
            return reviewQuery.data.content.slice(0, 240);
        }

        return "";
    }, [reviewQuery.data]);

    const nonEditableEditor = useEditor(
        {
            editable: false,
            extensions: [StarterKit],
            content: content,
        },
        [content],
    );

    if (reviewQuery.isLoading) {
        return <CenteredLoading />;
    } else if (
        reviewQuery.data == undefined ||
        nonEditableEditor == undefined ||
        content == undefined
    ) {
        return null;
    }

    console.log(reviewQuery.data.content);

    return (
        <Paper
            withBorder
            radius={"sm"}
            className={"w-full !bg-[#181818] h-full relative"}
        >
            <Box className={"absolute ms-2 mt-2"}>
                <Text className={"text-sm text-dimmed"}>Reported content</Text>
            </Box>
            <EditorContent
                editor={nonEditableEditor}
                className={"w-full mt-6 p-6"}
            />
        </Paper>
    );
};

export default ModerationItemDetailsReviewContent;
