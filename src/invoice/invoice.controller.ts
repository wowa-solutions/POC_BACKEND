import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  Delete,
  Patch,
} from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { ApiOperation, ApiQuery, ApiBody, ApiParam } from '@nestjs/swagger';
import { Invoice } from './invoice.dto';

@Controller('invoices')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @ApiOperation({ summary: 'Erstelle eine neue Rechnung' })
  @ApiBody({ type: Invoice, description: 'Die Daten der neuen Rechnung' })
  @Post()
  async createInvoice(@Body() invoice: Invoice): Promise<Invoice> {
    console.log('Create new Invoice...');
    return this.invoiceService.createInvoice(invoice);
  }

  @ApiOperation({ summary: 'Finde alle Rechnungen' })
  @Get()
  async getAllInvoices(): Promise<Invoice[]> {
    console.log('Try to get Invoices...');
    return this.invoiceService.getAllInvoices();
  }

  @ApiOperation({ summary: 'Finde eine bestimmte Rechnung anhand der ID' })
  @ApiQuery({
    name: 'id',
    required: true,
    type: String,
    description: 'Die ID der Rechnung, die abgerufen werden soll',
  })
  @Get('single')
  async getInvoiceById(@Query('id') id: string): Promise<Invoice> {
    console.log('Try to get Invoice by id:', id);
    return this.invoiceService.getInvoiceById(id);
  }

  @ApiOperation({ summary: 'Lösche eine Rechnung' })
  @ApiQuery({
    name: 'id',
    required: true,
    type: String,
    description: 'Die ID der Rechnung, die gelöscht werden soll',
  })
  @Delete()
  async deleteInvoice(@Query('id') id: string): Promise<Invoice> {
    console.log('Try to delete Invoice by id:', id);
    return this.invoiceService.deleteInvoice(id);
  }

  @ApiOperation({ summary: 'Aktualisiere eine Rechnung' })
  @ApiQuery({
    name: 'id',
    required: true,
    type: String,
    description: 'Die ID der Rechnung, die aktualisiert werden soll',
  })
  @ApiBody({
    type: Invoice,
    description: 'Die Daten, die aktualisiert werden sollen. Felder, die nicht angegeben sind, bleiben unverändert.',
  })
  @Patch()
  async updateInvoice(
    @Query('id') id: string,
    @Body() updateData: Partial<Invoice>,
  ): Promise<Invoice> {
    console.log('Try to update Invoice by id:', id, 'with data:', updateData);
    return this.invoiceService.updateInvoice(id, updateData);
  }
}
