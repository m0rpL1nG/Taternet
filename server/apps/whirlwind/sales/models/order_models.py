from __future__ import unicode_literals

from django.db import models
from ...vendors.models import Vendor
from ...inventory.models.inv_items import InvItems
from invoice_models import InvoiceDetail

class OrderItemsManager(models.Manager):
    use_for_related_fields = True


class Order(models.Model):
    id = models.AutoField(db_column='AR ORDER Document #', primary_key=True)  # Field name made lowercase. Field renamed to remove unsuitable characters. Field renamed because it ended with '_'.
    order_number = models.CharField(db_column='AR ORDER Ext Document #', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters. Field renamed because it ended with '_'.
    document_type = models.CharField(db_column='AR ORDER Document Type', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    saved_yn = models.BooleanField(db_column='AR ORDER Saved YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    posted_yn = models.BooleanField(db_column='AR ORDER Posted YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    service_yn = models.SmallIntegerField(db_column='AR ORDER Service YN', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    date = models.DateTimeField(db_column='AR ORDER Date', blank=True, null=True, db_index=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    due_date = models.DateTimeField(db_column='AR ORDER Due Date', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    po_id = models.CharField(db_column='AR ORDER PO ID', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    tax_exempt_id = models.CharField(db_column='AR ORDER Tax Exempt ID', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    tax_group = models.CharField(db_column='AR ORDER Tax Group', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    customer_id = models.CharField(db_column='AR ORDER Customer ID', max_length=12, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    bill_to = models.CharField(db_column='AR ORDER Bill To', max_length=30, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    billing_customer = models.CharField(db_column='AR ORDER Billing Customer', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    billing_address_1 = models.CharField(db_column='AR ORDER Billing Address 1', max_length=30, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    billing_address_2 = models.CharField(db_column='AR ORDER Billing Address 2', max_length=30, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    billing_city = models.CharField(db_column='AR ORDER Billing City', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    billing_state = models.CharField(db_column='AR ORDER Billing State', max_length=5, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    billing_postal = models.CharField(db_column='AR ORDER Billing Postal', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    billing_country = models.CharField(db_column='AR ORDER Billing Country', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    ship_date = models.DateTimeField(db_column='AR ORDER Ship Date', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    shipping_id = models.CharField(db_column='AR ORDER Shipping ID', max_length=8, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    ship_to = models.CharField(db_column='AR ORDER Ship To', max_length=30, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    shipping_customer = models.CharField(db_column='AR ORDER Shipping Customer', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    shipping_address_1 = models.CharField(db_column='AR ORDER Shipping Address 1', max_length=30, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    shipping_address_2 = models.CharField(db_column='AR ORDER Shipping Address 2', max_length=30, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    shipping_city = models.CharField(db_column='AR ORDER Shipping City', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    shipping_state = models.CharField(db_column='AR ORDER Shipping State', max_length=5, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    shipping_postal = models.CharField(db_column='AR ORDER Shipping Postal', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    misc_info = models.CharField(db_column='AR ORDER Misc Info', max_length=30, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    shipping_country = models.CharField(db_column='AR ORDER Shipping Country', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    shipping_method = models.CharField(db_column='AR ORDER Shipping Method', max_length=30, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    salesperson = models.CharField(db_column='AR ORDER Salesperson', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    payment_terms = models.CharField(db_column='AR ORDER Payment Terms', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    payment_method = models.CharField(db_column='AR ORDER Payment Method', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    subtotal = models.DecimalField(db_column='AR ORDER Subtotal', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    discount_percent = models.FloatField(db_column='AR ORDER Discount Percent', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    discount_amount = models.DecimalField(db_column='AR ORDER Discount Amount', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    tax_percent = models.FloatField(db_column='AR ORDER Tax Percent', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    sales_tax = models.DecimalField(db_column='AR ORDER Sales Tax', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    freight = models.DecimalField(db_column='AR ORDER Freight', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    total = models.DecimalField(db_column='AR ORDER Total', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    amount_paid = models.DecimalField(db_column='AR ORDER Amount Paid', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    balance_due = models.DecimalField(db_column='AR ORDER Balance Due', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    undistributed_amt = models.DecimalField(db_column='AR ORDER Undistributed Amt', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    commission = models.DecimalField(db_column='AR ORDER Commission', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    commissionable_sales = models.DecimalField(db_column='AR ORDER Commissionable Sales', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    commissionable_cost = models.DecimalField(db_column='AR ORDER Commissionable Cost', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    description = models.CharField(db_column='AR ORDER Description', max_length=150, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    message = models.CharField(db_column='AR ORDER Message', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    apply_to_number = models.CharField(db_column='AR ORDER Apply to Number', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    check_number = models.CharField(db_column='AR ORDER Check Number', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    check_acct_id = models.CharField(db_column='AR ORDER Check Acct ID', max_length=8, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    check_date = models.DateTimeField(db_column='AR ORDER Check Date', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    quote_document_field = models.IntegerField(db_column='AR ORDER Quote Document #', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters. Field renamed because it ended with '_'.
    notes = models.TextField(db_column='AR ORDER Notes', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    department = models.CharField(db_column='AR ORDER Department', max_length=5, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    taxable_subtotal = models.DecimalField(db_column='AR ORDER Taxable Subtotal', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    tax_freight = models.BooleanField(db_column='AR ORDER Tax Freight')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    recurring_yn = models.BooleanField(db_column='AR ORDER Recurring YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    cleared = models.BooleanField(db_column='AR ORDER Cleared')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    recur_type = models.CharField(db_column='AR ORDER Recur Type', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    next_recur = models.DateTimeField(db_column='AR ORDER Next Recur', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    invoiced = models.BooleanField(db_column='AR ORDER Invoiced')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    location = models.CharField(db_column='AR ORDER Location', max_length=30, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    target_date = models.DateTimeField(db_column='AR ORDER Target Date', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    notice_6 = models.BooleanField(db_column='AR ORDER Notice 6')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    notice_4 = models.BooleanField(db_column='AR ORDER Notice 4')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    notice_2 = models.BooleanField(db_column='AR ORDER Notice 2')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    notice_1 = models.BooleanField(db_column='AR ORDER Notice 1')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    house = models.BooleanField(db_column='AR ORDER House')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    total_items = models.IntegerField(db_column='AR ORDER Total Items', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    open_yn = models.BooleanField(db_column='AR ORDER Open YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    billing_phone = models.CharField(db_column='AR ORDER Billing Phone', max_length=15, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    billing_day_phone = models.CharField(db_column='AR ORDER Billing Day Phone', max_length=15, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    billing_fax = models.CharField(db_column='AR ORDER Billing Fax', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    shipping_phone = models.CharField(db_column='AR ORDER Shipping Phone', max_length=15, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    shipping_day_phone = models.CharField(db_column='AR ORDER Shipping Day Phone', max_length=15, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    shipping_fax = models.CharField(db_column='AR ORDER Shipping Fax', max_length=15, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    comment_one = models.CharField(db_column='AR ORDER Comment One', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    comment_two = models.CharField(db_column='AR ORDER Comment Two', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    last_note = models.DateTimeField(db_column='AR ORDER Last Note', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    use_target_date = models.NullBooleanField(db_column='AR ORDER Use Target Date')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    non_taxable_discount_amount = models.DecimalField(db_column='AR ORDER NON Taxable Discount Amount', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    grand_subtotal = models.DecimalField(db_column='AR ORDER Grand SubTotal', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    shipping_notes = models.TextField(db_column='AR ORDER Shipping Notes', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    layaway_percent = models.FloatField(db_column='AR ORDER LayAWay Percent', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    layaway_payment_amount = models.DecimalField(db_column='AR ORDER LayAWay Payment Amount', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    printed_times = models.IntegerField(db_column='AR ORDER Printed Times', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    to_customer_comments = models.TextField(db_column='AR ORDER To Customer Comments', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    salesperson_two = models.CharField(db_column='AR ORDER Salesperson Two', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    salesperson_three = models.CharField(db_column='AR ORDER Salesperson Three', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    salesperson_four = models.CharField(db_column='AR ORDER Salesperson Four', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    salesperson_one_percent = models.IntegerField(db_column='AR ORDER Salesperson One Percent', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    salesperson_two_percent = models.IntegerField(db_column='AR ORDER Salesperson Two Percent', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    salesperson_three_percent = models.IntegerField(db_column='AR ORDER Salesperson Three Percent', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    salesperson_four_percent = models.IntegerField(db_column='AR ORDER Salesperson Four Percent', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    created_date = models.DateTimeField(db_column='AR ORDER Created Date', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    created_time = models.DateTimeField(db_column='AR ORDER Created Time', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    return_to_location = models.CharField(db_column='AR ORDER Return to Location', max_length=5, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    latitude = models.FloatField(db_column='AR ORDER Latitude', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    longitude = models.FloatField(db_column='AR ORDER Longitude', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    zone = models.CharField(db_column='AR ORDER Zone', max_length=25, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    address_accuracy = models.CharField(db_column='AR ORDER Address Accuracy', max_length=25, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    imported_yn = models.NullBooleanField(db_column='AR ORDER Imported YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    category_type = models.CharField(db_column='AR ORDER Category Type', max_length=30, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    view_all_product_here_yn = models.NullBooleanField(db_column='AR ORDER View All Product Here YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    outside_salesperson = models.CharField(db_column='AR ORDER Outside Salesperson', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    tech_to_take_credit = models.CharField(db_column='AR ORDER Tech to Take Credit', max_length=30, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    deleted_date = models.DateTimeField(db_column='AR ORDER Deleted Date', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    cordinate_1 = models.CharField(db_column='AR ORDER Cordinate 1', max_length=15, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    cordinate_2 = models.CharField(db_column='AR ORDER Cordinate 2', max_length=15, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    billing_phone_comments = models.CharField(db_column='AR ORDER Billing Phone Comments', max_length=30, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    billing_day_phone_comments = models.CharField(db_column='AR ORDER Billing Day Phone Comments', max_length=30, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    billing_fax_comments = models.CharField(db_column='AR ORDER Billing Fax Comments', max_length=30, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    shipping_phone_comments = models.CharField(db_column='AR ORDER Shipping Phone Comments', max_length=30, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    shipping_day_phone_comments = models.CharField(db_column='AR ORDER Shipping Day Phone Comments', max_length=30, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    shipping_fax_comments = models.CharField(db_column='AR ORDER Shipping Fax Comments', max_length=30, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    referral_id = models.BigIntegerField(db_column='AR ORDER Referral ID', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    notice_0 = models.NullBooleanField(db_column='AR ORDER Notice 0')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    target_date_change_count = models.IntegerField(db_column='AR ORDER Target Date Change Count', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    avalara_error_message = models.CharField(db_column='AR ORDER Avalara Error Message', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    avalara_tax_amount = models.DecimalField(db_column='AR ORDER Avalara Tax Amount', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    avalara_freight = models.DecimalField(db_column='AR ORDER Avalara Freight', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    avalara_hits = models.IntegerField(db_column='AR ORDER Avalara Hits', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    avalara_new_yn = models.NullBooleanField(db_column='AR ORDER Avalara New YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    avalara_address_1 = models.CharField(db_column='AR ORDER Avalara Address 1', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    avalara_address_2 = models.CharField(db_column='AR ORDER Avalara Address 2', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    avalara_city = models.CharField(db_column='AR ORDER Avalara City', max_length=25, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    avalara_state = models.CharField(db_column='AR ORDER Avalara State', max_length=5, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    avalara_postal = models.CharField(db_column='AR ORDER Avalara Postal', max_length=25, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    avalara_taxable_total = models.DecimalField(db_column='AR ORDER Avalara Taxable Total', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    avalara_last_time = models.DateTimeField(db_column='AR ORDER Avalara Last Time', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    avalara_return_tax_date = models.DateTimeField(db_column='AR ORDER Avalara Return Tax Date', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    manager_superintendent = models.BigIntegerField(db_column='AR ORDER Manager Superintendent', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    amount_owing = models.DecimalField(db_column='AR ORDER Amount Owing', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    pending_finance = models.DecimalField(db_column='AR ORDER Pending Finance', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    arordercategory = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'AR Order'
        app_label = 'whirlwind'



class OrderDetail(models.Model):
    id = models.AutoField(db_column='AR ORDERD ID', primary_key=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    order_id = models.ForeignKey('Order', db_column='AR ORDERD Document #', blank=True, null=True, related_name='order_items', related_query_name='order_items')  # Field name made lowercase. Field renamed to remove unsuitable characters. Field renamed because it ended with '_'.
    qty = models.FloatField(db_column='AR ORDERD Qty', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # qty_to_invoice = models.FloatField(db_column='AR ORDERD Qty To Invoice', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # qty_backordered = models.FloatField(db_column='AR ORDERD Qty Backordered', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # backordered = models.BooleanField(db_column='AR ORDERD BackOrdered')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    date = models.DateTimeField(db_column='AR ORDERD Date', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    model_number = models.ForeignKey('InvItems', db_column='AR ORDERD Item Id', max_length=30, blank=True, null=True, related_name="inv_item_details")  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # units = models.CharField(db_column='AR ORDERD Units', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # discount_field = models.FloatField(db_column='AR ORDERD Discount %', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters. Field renamed because it ended with '_'.
    # tax = models.BooleanField(db_column='AR ORDERD Tax')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # tax_rate = models.FloatField(db_column='AR ORDERD Tax Rate', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # description = models.CharField(db_column='AR ORDERD Description', max_length=150, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # row_type = models.CharField(db_column='AR ORDERD Row Type', max_length=1, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # item_cost = models.DecimalField(db_column='AR ORDERD Item Cost', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # unit_price = models.DecimalField(db_column='AR ORDERD Unit Price', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # item_total = models.DecimalField(db_column='AR ORDERD Item Total', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # posting_account = models.CharField(db_column='AR ORDERD Posting Account', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # department = models.CharField(db_column='AR ORDERD Department', max_length=5, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # project = models.CharField(db_column='AR ORDERD Project', max_length=8, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # account_type = models.CharField(db_column='AR ORDERD Account Type', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # notes = models.TextField(db_column='AR ORDERD Notes', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # item_location = models.CharField(db_column='AR ORDERD Item Location', max_length=5, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # qty_shipped = models.FloatField(db_column='AR ORDERD Qty Shipped', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    vendor_id = models.CharField(db_column='AR ORDERD Vendor', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # sequence_no = models.IntegerField(db_column='AR ORDERD Sequence No', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # profit = models.DecimalField(db_column='AR ORDERD Profit', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # margin = models.FloatField(db_column='AR ORDERD Margin', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # qty_current_request = models.FloatField(db_column='AR ORDERD Qty Current Request', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # cost_discount = models.DecimalField(db_column='AR ORDERD Cost Discount', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # need_manager_approval_yn = models.NullBooleanField(db_column='AR ORDERD Need Manager Approval YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # real_property_yn = models.NullBooleanField(db_column='AR ORDERD Real Property YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # manual_cost = models.DecimalField(db_column='AR ORDERD Manual Cost', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # created_date = models.DateTimeField(db_column='AR ORDERD Created Date', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # created_time = models.DateTimeField(db_column='AR ORDERD Created Time', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # kit_item_yn = models.NullBooleanField(db_column='AR ORDERD Kit Item YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # kit_id = models.IntegerField(db_column='AR ORDERD Kit ID', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # written_landed_cost = models.DecimalField(db_column='AR ORDERD Written Landed Cost', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # commission_code = models.CharField(db_column='AR ORDERD Commission Code', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # charge_customer_yn = models.NullBooleanField(db_column='AR ORDERD Charge Customer YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # kit_yn = models.NullBooleanField(db_column='AR ORDERD Kit YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # product_type = models.CharField(db_column='AR ORDERD Product Type', max_length=2, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # color_style_id = models.CharField(db_column='AR ORDERD Color Style ID', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # color_style_name = models.CharField(db_column='AR ORDERD Color Style Name', max_length=75, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # color_style_brand = models.CharField(db_column='AR ORDERD Color Style Brand', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # color_style_price_code = models.CharField(db_column='AR ORDERD Color Style Price Code', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # tax_group = models.CharField(db_column='AR ORDERD Tax Group', max_length=25, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # tax_amount = models.DecimalField(db_column='AR ORDERD Tax Amount', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # arordergroupitemyn = models.NullBooleanField()
    # arordergroupitemid = models.BigIntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'AR Order Detail'
        app_label = 'whirlwind'

class OrderDetailExt(models.Model):
    id = models.AutoField(db_column='AR ORDERDE Record ID', primary_key=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    order_detail_id = models.ForeignKey('OrderDetail', db_column='AR ORDERDE Line Item ID', blank=True, null=True, related_name='order_item_details')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    serial_number = models.CharField(db_column='AR ORDERDE Serial Number', max_length=30, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    posted_yn = models.BooleanField(db_column='AR ORDERDE Posted YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    invoice_number = models.ForeignKey('Invoice',db_column='AR ORDERDE Invoice', to_field="invoice_number", max_length=15, blank=True, null=True)  # NULL if not invoiced
    invoiced_yn = models.BooleanField(db_column='AR ORDERDE Invoiced YN')  # 1 = invoiced, 0 = not invoiced.   
    requested_yn = models.BooleanField(db_column='AR ORDERDE Requested YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    requested_date = models.DateTimeField(db_column='AR ORDERDE Requested Date', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    requested_qty = models.SmallIntegerField(db_column='AR ORDERDE Requested Qty', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    salesperson_comments = models.CharField(db_column='AR ORDERDE SalesPerson Comments', max_length=255, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    orderdesk_action = models.CharField(db_column='AR ORDERDE OrderDesk Action', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    requested_model_number = models.CharField(db_column='AR ORDERDE Requested Model Number', max_length=25, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    requested_serial_number = models.CharField(db_column='AR ORDERDE Requested Serial Number', max_length=25, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    requested_notes = models.TextField(db_column='AR ORDERDE Requested Notes', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    purchase_order_id = models.IntegerField(db_column='AR ORDERDE PO Line Item ID', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    invoice_detail_id = models.ForeignKey(InvoiceDetail, db_column='AR ORDERDE Invoice Line Item ID', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    order_service_notes = models.TextField(db_column='AR ORDERDE Order Service Notes', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    model_serial_id = models.IntegerField(db_column='AR ORDERDE Model Serial ID', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    model_nonserial_id = models.IntegerField(db_column='AR ORDERDE Model NONSerial ID', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    part_id = models.IntegerField(db_column='AR ORDERDE Part ID', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    return_authorization_number = models.IntegerField(db_column='AR ORDERDE Return Authorization Number', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    return_authorization_name = models.CharField(db_column='AR ORDERDE Return Authorization Name', max_length=25, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    return_authorization_reason = models.TextField(db_column='AR ORDERDE Return Authorization Reason', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    return_authorization_date = models.DateTimeField(db_column='AR ORDERDE Return Authorization Date', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    e_mail_sales_when_received = models.NullBooleanField(db_column='AR ORDERDE E-Mail Sales When Received')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    picking_ticket_printed = models.DateTimeField(db_column='AR ORDERDE Picking Ticket Printed', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    order_date = models.DateTimeField(db_column='AR ORDERDE Order Date', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    warranty_record_id = models.BigIntegerField(db_column='AR ORDERDE Warranty AR ORDERDE Record ID', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    warranty_expire_date = models.DateTimeField(db_column='AR ORDERDE Warranty Expire Date', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    warranty_numbers = models.CharField(db_column='AR ORDERDE Warranty Numbers', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    auto_invoice_sold_inventory_date = models.DateTimeField(db_column='AR ORDERDE Auto Invoice Sold Inventory Date', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    inv_serd_record_id = models.BigIntegerField(db_column='AR ORDERDE INV SERD Record ID', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    print_customer_pickup_yn = models.NullBooleanField(db_column='AR ORDERDE Print Customer Pickup YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    assign_to_credit_tech_yn = models.NullBooleanField(db_column='AR ORDERDE Assign to Credit Tech YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    category_user_input = models.CharField(db_column='AR ORDERDE Category User Input', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    hide_from_product_list_yn = models.NullBooleanField(db_column='AR ORDERDE Hide From Product List YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    transfer_location_id = models.CharField(db_column='AR ORDERDE Transfer Location ID', max_length=10, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    transfer_complete_yn = models.NullBooleanField(db_column='AR ORDERDE Transfer Complete YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    location_at_invoicing = models.CharField(db_column='AR ORDERDE Location at Invoicing', max_length=5, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    adc_cost_plus = models.CharField(db_column='AR ORDERDE ADC Cost Plus', max_length=15, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    adc_net2 = models.CharField(db_column='AR ORDERDE ADC Net2', max_length=15, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    arorderdeappartment = models.CharField(max_length=50, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'AR Order Detail Ext'
        app_label = 'whirlwind'

    
    # class OrderDetailManager(models.Manager):
    #     def get_queryset(self):
    #         return super(OrderDetailManager, self).get_queryset().select_related('inv_item_id')
