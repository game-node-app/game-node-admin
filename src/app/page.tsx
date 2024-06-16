import CenteredLoading from "@/components/general/CenteredLoading";
import { redirect } from "next/navigation";

export default function Home() {
    redirect("/moderation");
    return <CenteredLoading className={"mt-12"} />;
}
