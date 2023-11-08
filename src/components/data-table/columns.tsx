import { TableData } from "@/data/table";
import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const columns: ColumnDef<TableData>[] = [
  {
    accessorKey: "consumerName",
    header: ({ column }) => {
      return (
        <Button
          variant={"ghost"}
          className="text-sm font-semibold"
          onClick={() => {
            column.toggleSorting(column.getIsSorted() === "asc");
          }}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "assets",
    header: ({ column }) => {
      return (
        <Button
          variant={"ghost"}
          className="text-sm font-semibold"
          onClick={() => {
            column.toggleSorting(column.getIsSorted() === "asc");
          }}
        >
          Assets
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
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
    header: ({ column }) => {
      return (
        <Button
          variant={"ghost"}
          className="text-sm font-semibold"
          onClick={() => {
            column.toggleSorting(column.getIsSorted() === "asc");
          }}
        >
          Revenue
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
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
        return (
          <Badge className="bg-[#d8e9d0] text-[#27a607] text-[10px]">
            Done
          </Badge>
        );
      } else if (status === "pending") {
        return (
          <Badge className="bg-[#ffe9e9] text-[#ff4444] text-[10px]">
            Pending
          </Badge>
        );
      } else if (status === "in-progress") {
        return (
          <Badge className="bg-[#fff2d0] text-[#dba00a] text-[10px]">
            In Progress
          </Badge>
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
