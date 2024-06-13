import { ExtendedUseQueryResult } from "@/util/types/ExtendedUseQueryResult";
import { PaginatedReportResponseDto, ReportService } from "@/wrapper/server";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export function useReports(): ExtendedUseQueryResult<PaginatedReportResponseDto> {
    const queryClient = useQueryClient();
    const queryKey = ["reports", "all"];
    const invalidate = () => {
        queryClient.invalidateQueries({
            queryKey,
        });
    };
    return {
        ...useQuery({
            queryKey,
            queryFn: async () => {
                return ReportService.reportControllerFindAllByLatest();
            },
        }),
        queryKey,
        invalidate,
    };
}
