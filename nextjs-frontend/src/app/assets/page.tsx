import AssetShow from "@/components/AssetShow";
import { Asset } from "@/types";
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

export async function getAssets (): Promise<Asset[]> {
  const response = await fetch(`http://localhost:3000/assets`)
  return response.json()
}

export default async function page() {
  const assets = await getAssets()

  return (
    <div className="lex flex-col space-y-5">
      <article className="format">
        <h1>Assets</h1>
      </article>
      <div className="overflow-x-auto w-full flex-row">
        <Table className="w-full max-w-full table-fixed">
          <TableHead>
            <TableHeadCell>Ativo</TableHeadCell>
            <TableHeadCell>Cotação</TableHeadCell>
            <TableHeadCell>Comprar/Vender</TableHeadCell>
          </TableHead>
          <TableBody>
            {assets.map((asset, key) => (
              <TableRow key={key}>
                <TableCell>
                  <AssetShow asset={asset} />
                </TableCell>
                <TableCell>R$ {asset.price}</TableCell>
                <TableCell>
                  <div className="inline-flex rounded-md shadow-xs" role="group">
                    <button className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                      Comprar
                    </button>
                    <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-r border-t border-b border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                      Vender
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}

          </TableBody>
        </Table>
      </div>
    </div>
  );
}
