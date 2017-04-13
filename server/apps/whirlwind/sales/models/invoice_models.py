from __future__ import unicode_literals

from django.db import models
import order_models

class Invoice(models.Model):
    id = models.AutoField(db_column='AR SALE Document #', primary_key=True)  # Field name made lowercase. Field renamed to remove unsuitable characters. Field renamed because it ended with '_'.
    invoice_number = models.CharField(db_column='AR SALE Ext Document #', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters. Field renamed because it ended with '_'.
    document_type = models.CharField(db_column='AR SALE Document Type', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    saved_yn = models.BooleanField(db_column='AR SALE Saved YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    posted_yn = models.BooleanField(db_column='AR SALE Posted YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    service_yn = models.SmallIntegerField(db_column='AR SALE Service YN', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    date = models.DateTimeField(db_column='AR SALE Date', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    due_date = models.DateTimeField(db_column='AR SALE Due Date', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    po_id = models.CharField(db_column='AR SALE PO ID', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    tax_exempt_id = models.CharField(db_column='AR SALE Tax Exempt ID', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    tax_group = models.CharField(db_column='AR SALE Tax Group', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    customer_id = models.CharField(db_column='AR SALE Customer ID', max_length=12, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    bill_to = models.CharField(db_column='AR SALE Bill To', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    billing_customer = models.CharField(db_column='AR SALE Billing Customer', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    billing_address_1 = models.CharField(db_column='AR SALE Billing Address 1', max_length=30, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    billing_address_2 = models.CharField(db_column='AR SALE Billing Address 2', max_length=30, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    billing_city = models.CharField(db_column='AR SALE Billing City', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    billing_state = models.CharField(db_column='AR SALE Billing State', max_length=5, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    billing_postal = models.CharField(db_column='AR SALE Billing Postal', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    billing_country = models.CharField(db_column='AR SALE Billing Country', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    ship_date = models.DateTimeField(db_column='AR SALE Ship Date', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    shipping_id = models.CharField(db_column='AR SALE Shipping ID', max_length=8, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    ship_to = models.CharField(db_column='AR SALE Ship To', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    shipping_customer = models.CharField(db_column='AR SALE Shipping Customer', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    shipping_address_1 = models.CharField(db_column='AR SALE Shipping Address 1', max_length=30, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    shipping_address_2 = models.CharField(db_column='AR SALE Shipping Address 2', max_length=30, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    shipping_city = models.CharField(db_column='AR SALE Shipping City', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    shipping_state = models.CharField(db_column='AR SALE Shipping State', max_length=5, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    shipping_postal = models.CharField(db_column='AR SALE Shipping Postal', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    misc_info = models.CharField(db_column='AR SALE Misc Info', max_length=30, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    shipping_country = models.CharField(db_column='AR SALE Shipping Country', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    shipping_method = models.CharField(db_column='AR SALE Shipping Method', max_length=30, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    salesperson = models.CharField(db_column='AR SALE Salesperson', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    payment_terms = models.CharField(db_column='AR SALE Payment Terms', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    payment_method = models.CharField(db_column='AR SALE Payment Method', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    subtotal = models.DecimalField(db_column='AR SALE Subtotal', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    discount_percent = models.FloatField(db_column='AR SALE Discount Percent', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    discount_amount = models.DecimalField(db_column='AR SALE Discount Amount', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    tax_percent = models.FloatField(db_column='AR SALE Tax Percent', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    sales_tax = models.DecimalField(db_column='AR SALE Sales Tax', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    freight = models.DecimalField(db_column='AR SALE Freight', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    total = models.DecimalField(db_column='AR SALE Total', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    amount_paid = models.DecimalField(db_column='AR SALE Amount Paid', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    balance_due = models.DecimalField(db_column='AR SALE Balance Due', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    undistributed_amt = models.DecimalField(db_column='AR SALE Undistributed Amt', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    commission = models.DecimalField(db_column='AR SALE Commission', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    commissionable_sales = models.DecimalField(db_column='AR SALE Commissionable Sales', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    commissionable_cost = models.DecimalField(db_column='AR SALE Commissionable Cost', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    description = models.CharField(db_column='AR SALE Description', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    message = models.CharField(db_column='AR SALE Message', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    apply_to_number = models.CharField(db_column='AR SALE Apply to Number', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    check_number = models.CharField(db_column='AR SALE Check Number', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    check_acct_id = models.CharField(db_column='AR SALE Check Acct ID', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    check_date = models.DateTimeField(db_column='AR SALE Check Date', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    quote_document_field = models.IntegerField(db_column='AR SALE Quote Document #', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters. Field renamed because it ended with '_'.
    notes = models.TextField(db_column='AR SALE Notes', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    department = models.CharField(db_column='AR SALE Department', max_length=5, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    taxable_subtotal = models.DecimalField(db_column='AR SALE Taxable Subtotal', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    tax_freight = models.BooleanField(db_column='AR SALE Tax Freight')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    recurring_yn = models.BooleanField(db_column='AR SALE Recurring YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    cleared = models.BooleanField(db_column='AR SALE Cleared')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    reconcile_id = models.BigIntegerField(db_column='AR SALE Reconcile Id', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    recur_type = models.CharField(db_column='AR SALE Recur Type', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    next_recur = models.DateTimeField(db_column='AR SALE Next Recur', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    commission_paid = models.BooleanField(db_column='AR SALE Commission Paid')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    select_to_pay = models.BooleanField(db_column='AR SALE Select To Pay')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    location = models.CharField(db_column='AR SALE Location', max_length=30, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    comment_one = models.CharField(db_column='AR SALE Comment One', max_length=150, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    comment_two = models.CharField(db_column='AR SALE Comment Two', max_length=150, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    billing_phone = models.CharField(db_column='AR SALE Billing Phone', max_length=15, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    billing_day_phone = models.CharField(db_column='AR SALE Billing Day Phone', max_length=15, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    billing_fax = models.CharField(db_column='AR SALE Billing Fax', max_length=15, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    shipping_phone = models.CharField(db_column='AR SALE Shipping Phone', max_length=15, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    shipping_day_phone = models.CharField(db_column='AR SALE Shipping Day Phone', max_length=15, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    shipping_fax = models.CharField(db_column='AR SALE Shipping Fax', max_length=15, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    total_items = models.IntegerField(db_column='AR SALE Total Items', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    house = models.BooleanField(db_column='AR SALE House')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    void_yn = models.BooleanField(db_column='AR SALE Void YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    non_taxable_discount_amount = models.DecimalField(db_column='AR SALE NON Taxable Discount Amount', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    spiff_yn = models.NullBooleanField(db_column='AR SALE Spiff YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    order_id = models.ForeignKey('Order', db_column='AR SALE Order Document #', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters. Field renamed because it ended with '_'.
    debit_memo_gl_account = models.CharField(db_column='AR SALE Debit Memo GL Account', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    debit_memo_offset_gl_account = models.CharField(db_column='AR SALE Debit Memo OffSet GL Account', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    payments_yn = models.NullBooleanField(db_column='AR SALE Payments YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    sent_to_commission_yn = models.NullBooleanField(db_column='AR SALE Sent to Commission YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    sent_to_commission_dated = models.DateTimeField(db_column='AR SALE Sent to Commission Dated', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    sent_to_commission_on_date = models.DateTimeField(db_column='AR SALE Sent to Commission on Date', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    sent_to_commission_record_id = models.BigIntegerField(db_column='AR SALE Sent to Commission Record ID', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    ser_orderd_id = models.BigIntegerField(db_column='AR SALE SER ORDERD ID', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    qb_exported_yn = models.NullBooleanField(db_column='AR SALE QB Exported YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    qb_exported_notes = models.TextField(db_column='AR SALE QB Exported Notes', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    real_property_tax_amount = models.DecimalField(db_column='AR SALE Real Property Tax Amount', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    real_property_gross_sales_amount = models.DecimalField(db_column='AR SALE Real Property Gross Sales Amount', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    to_customer_comments = models.TextField(db_column='AR SALE To Customer Comments', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    post_gl_yn = models.NullBooleanField(db_column='AR SALE Post GL YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    salesperson_two = models.CharField(db_column='AR SALE Salesperson Two', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    salesperson_three = models.CharField(db_column='AR SALE Salesperson Three', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    salesperson_four = models.CharField(db_column='AR SALE Salesperson Four', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    salesperson_one_percent = models.IntegerField(db_column='AR SALE Salesperson One Percent', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    salesperson_two_percent = models.IntegerField(db_column='AR SALE Salesperson Two Percent', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    salesperson_three_percent = models.IntegerField(db_column='AR SALE Salesperson Three Percent', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    salesperson_four_percent = models.IntegerField(db_column='AR SALE Salesperson Four Percent', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    imported_yn = models.NullBooleanField(db_column='AR SALE Imported YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    created_date = models.DateTimeField(db_column='AR SALE Created Date', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    created_time = models.DateTimeField(db_column='AR SALE Created Time', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    return_to_location = models.CharField(db_column='AR SALE Return to Location', max_length=5, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    extended_warranty_yn = models.NullBooleanField(db_column='AR SALE Extended Warranty YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    extended_warranty_reason = models.CharField(db_column='AR SALE Extended Warranty Reason', max_length=150, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    category_type = models.CharField(db_column='AR SALE Category Type', max_length=30, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    outside_salesperson = models.CharField(db_column='AR SALE Outside Salesperson', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    employee_invoiced = models.CharField(db_column='AR SALE Employee Invoiced', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    invoiced_date = models.DateTimeField(db_column='AR SALE Invoiced Date', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    invoiced_computer_id = models.CharField(db_column='AR SALE Invoiced Computer ID', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    corporate_received_paper_work_yn = models.NullBooleanField(db_column='AR SALE Corporate Received Paper Work YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    tech_to_take_credit = models.CharField(db_column='AR SALE Tech to Take Credit', max_length=25, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    billing_phone_comments = models.CharField(db_column='AR SALE Billing Phone Comments', max_length=30, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    billing_day_phone_comments = models.CharField(db_column='AR SALE Billing Day Phone Comments', max_length=30, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    billing_fax_comments = models.CharField(db_column='AR SALE Billing Fax Comments', max_length=30, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    shipping_phone_comments = models.CharField(db_column='AR SALE Shipping Phone Comments', max_length=30, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    shipping_day_phone_comments = models.CharField(db_column='AR SALE Shipping Day Phone Comments', max_length=30, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    shipping_fax_comments = models.CharField(db_column='AR SALE Shipping Fax Comments', max_length=30, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    referral_id = models.BigIntegerField(db_column='AR SALE Referral ID', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    target_date = models.DateTimeField(db_column='AR SALE Target Date', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    notice_6 = models.NullBooleanField(db_column='AR SALE Notice 6')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    notice_4 = models.NullBooleanField(db_column='AR SALE Notice 4')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    notice_2 = models.NullBooleanField(db_column='AR SALE Notice 2')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    notice_1 = models.NullBooleanField(db_column='AR SALE Notice 1')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    notice_0 = models.NullBooleanField(db_column='AR SALE Notice 0')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    service_commission_id = models.BigIntegerField(db_column='AR SALE Service Commission ID', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    avalara_return_tax_date = models.DateTimeField(db_column='AR SALE Avalara Return Tax Date', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.

    class Meta:
        managed = False
        db_table = 'AR Sales'
        app_label = 'whirlwind'


class InvoiceDetail(models.Model):
    id = models.AutoField(db_column='AR SALED ID', primary_key=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    invoice_id = models.ForeignKey('Invoice', db_column='AR SALED Document #', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters. Field renamed because it ended with '_'.
    qty = models.FloatField(db_column='AR SALED Qty', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    qty_shipped = models.FloatField(db_column='AR SALED Qty Shipped', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    qty_backordered = models.FloatField(db_column='AR SALED Qty BackOrdered', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    date = models.DateTimeField(db_column='AR SALED Date', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    model_number = models.CharField(db_column='AR SALED Item Id', max_length=30, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    units = models.CharField(db_column='AR SALED Units', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    discount_field = models.FloatField(db_column='AR SALED Discount %', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters. Field renamed because it ended with '_'.
    tax = models.BooleanField(db_column='AR SALED Tax')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    tax_rate = models.FloatField(db_column='AR SALED Tax Rate', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    description = models.CharField(db_column='AR SALED Description', max_length=255, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    row_type = models.CharField(db_column='AR SALED Row Type', max_length=1, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    item_cost = models.DecimalField(db_column='AR SALED Item Cost', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    unit_price = models.DecimalField(db_column='AR SALED Unit Price', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    item_total = models.DecimalField(db_column='AR SALED Item Total', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    posting_account = models.CharField(db_column='AR SALED Posting Account', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    department = models.CharField(db_column='AR SALED Department', max_length=5, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    project = models.CharField(db_column='AR SALED Project', max_length=8, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    account_type = models.CharField(db_column='AR SALED Account Type', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    item_location = models.CharField(db_column='AR SALED Item Location', max_length=5, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    notes = models.CharField(db_column='AR SALED Notes', max_length=150, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    sequence_no = models.IntegerField(db_column='AR SALED Sequence No', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    cost_discount = models.DecimalField(db_column='AR SALED Cost Discount', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    real_property_yn = models.NullBooleanField(db_column='AR SALED Real Property YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    manual_cost = models.DecimalField(db_column='AR SALED Manual Cost', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    created_date = models.DateTimeField(db_column='AR SALED Created Date', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    created_time = models.DateTimeField(db_column='AR SALED Created Time', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    written_landed_cost = models.DecimalField(db_column='AR SALED Written Landed Cost', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    commission_code = models.CharField(db_column='AR SALED Commission Code', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    charge_customer_yn = models.NullBooleanField(db_column='AR SALED Charge Customer YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    product_type = models.CharField(db_column='AR SALED Product Type', max_length=2, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    color_style_id = models.CharField(db_column='AR SALED Color Style ID', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    color_style_name = models.CharField(db_column='AR SALED Color Style Name', max_length=75, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    color_style_brand = models.CharField(db_column='AR SALED Color Style Brand', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    color_style_price_code = models.CharField(db_column='AR SALED Color Style Price Code', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    income_gl = models.CharField(db_column='AR SALED Income GL', max_length=15, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    cogs_gl = models.CharField(db_column='AR SALED COGS GL', max_length=15, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    inventory_gl = models.CharField(db_column='AR SALED Inventory GL', max_length=15, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    tax_group = models.CharField(db_column='AR SALED Tax Group', max_length=25, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    tax_amount = models.DecimalField(db_column='AR SALED Tax Amount', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.

    class Meta:
        managed = False
        db_table = 'AR Sales Detail'
        app_label = 'whirlwind'