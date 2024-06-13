import React from "react";
import { useReport } from "@/components/report/hooks/useReport";
import ModerationItemDetails from "@/components/moderation/details/ModerationItemDetails";

const Page = ({ params }: { params: { id: string } }) => {
    const idAsNumber = parseInt(params.id, 10);
    return <ModerationItemDetails reportId={idAsNumber} />;
};

export default Page;
