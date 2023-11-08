import { CardsList } from "@/components/cards/cards-list";
import { columns } from "@/components/data-table/columns";
import { DataTable } from "@/components/data-table/data-table";
import { tableData as data } from "@/data/table";

export default function ConsumersPage() {
  return (
    <div className="flex flex-col">
      <CardsList />
      <DataTable columns={columns} data={data} />
    </div>
  );
}
