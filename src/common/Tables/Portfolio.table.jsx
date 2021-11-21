import * as React from "react"
import { DataGrid } from "@mui/x-data-grid"
import { PortfolioData } from "src/portfolio"

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "title", headerName: "Title", width: 280 },
  { field: "madeAt", headerName: "Made At", width: 150 },
  { field: "tech", headerName: "Built With", width: 500 },
  {
    field: "link",
    headerName: "Link",
    width: 300,
  },
]

export default function PortfolioTable() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={PortfolioData}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableColumnFilter
        disableSelectionOnClick
      />
    </div>
  )
}
