import React from 'react';
import { 
  GridComponent, 
  ColumnsDirective, 
  ColumnDirective, 
  Resize, Sort, 
  ContextMenu,
  Page, 
  ExcelExport, 
  PdfExport, 
  Edit, 
  Inject
} from '@syncfusion/ej2-react-grids';

import { ordersData, ordersGrid } from '../data/dummy';
import { Header } from '../components';

const Orders = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header 
      category="Pagina"
      title="Ordens" 
      />
      <GridComponent
      id="gridcomp"
      dataSource={ordersData}
      allowPaging
      allowSorting
      >
        <ColumnsDirective>
        {ordersGrid.map((item, index) => (
          <ColumnDirective key={index} {...item} />
        ))}
        </ColumnsDirective>
        <Inject 
        services={[Resize, Sort, ContextMenu, Page, ExcelExport, Edit, PdfExport]} 
        />
      </GridComponent>
    </div>
  )
}

export default Orders