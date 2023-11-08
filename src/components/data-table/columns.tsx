import { TableData } from "@/data/table";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<TableData>[] = [
  {
    accessorKey: "consumerName",
    header: "Consumer Name",
  },
  {
    accessorKey: "assets",
    header: "Assets",
  },
  {
    accessorKey: "revenue",
    header: "Revenue",
  },
  {
    accessorKey: "kycStatus",
    header: "KYC Status",
  },
  {
    accessorKey: "facilitator",
    header: "Facilitator",
  },
  {
    accessorKey: "zone",
    header: "Zone",
  },
  {
    accessorKey: "accountType",
    header: "Account Type",
  },
  {
    accessorKey: "tpa",
    header: "TPA",
  },
];
