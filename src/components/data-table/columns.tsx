import { TableData } from "@/data/table";
import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export const columns: ColumnDef<TableData>[] = [
  {
    accessorKey: "consumerName",
    header: () => <div className="font-bold">Consumer Name</div>,
  },
  {
    accessorKey: "assets",
    header: () => <div className="font-bold">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("assets"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "INR",
      }).format(amount);

      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "revenue",
    header: () => <div className="font-bold">Revenue</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("revenue"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "INR",
      }).format(amount);

      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "kycStatus",
    header: () => <div className="font-bold">KYC Status</div>,
    cell: ({ row }) => {
      const status = row.getValue("kycStatus");

      if (status === "done") {
        return <Badge className="bg-[#d8e9d0] text-[#27a607]">Done</Badge>;
      } else if (status === "pending") {
        return <Badge className="bg-[#ffe9e9] text-[#ff4444]">Pending</Badge>;
      } else if (status === "in-progress") {
        return (
          <Badge className="bg-[#fff2d0] text-[#dba00a]">In Progress</Badge>
        );
      }
    },
  },
  {
    accessorKey: "facilitator",
    header: () => <div className="font-bold text-center">Facilitator</div>,
    cell: () => {
      const from = "Arun Jha";
      const to = "Ankita Singh";

      return (
        <div className="flex items-center justify-between text-xs">
          <div className="flex flex-col">
            <div className="text-zinc-500">B2B Field Executive</div>
            <div>{from}</div>
          </div>
          <ArrowRight size={18} className="text-blue-500" />
          <div className="flex flex-col">
            <div className="text-zinc-500">B2B Field Executive</div>
            <div>{to}</div>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "zone",
    header: () => <div className="font-bold">Zone</div>,
  },
  {
    accessorKey: "accountType",
    header: () => <div className="font-bold">Account Type</div>,
  },
  {
    accessorKey: "tpa",
    header: () => <div className="font-bold">TPA</div>,
  },
];
