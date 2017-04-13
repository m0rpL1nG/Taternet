from __future__ import unicode_literals

from django.db import models

class InvItems(models.Model):
    id = models.CharField(db_column='INV ITEM Id', max_length=30, blank=True, null=True, primary_key=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    inactive_yn = models.SmallIntegerField(db_column='INV ITEM Inactive YN', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    item_type = models.CharField(db_column='INV ITEM Type', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    description = models.CharField(db_column='INV ITEM Description', max_length=255, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    category = models.CharField(db_column='INV ITEM Category', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    sub_category = models.CharField(db_column='INV ITEM Sub Category', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    color = models.CharField(db_column='INV ITEM Color', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    sales_account = models.CharField(db_column='INV ITEM Sales Account', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    inventory_account = models.CharField(db_column='INV ITEM Inventory Account', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    cost_of_sales_account = models.CharField(db_column='INV ITEM Cost of Sales Account', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    unit = models.CharField(db_column='INV ITEM Unit', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    price = models.DecimalField(db_column='INV ITEM Price', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    taxable_yn = models.BooleanField(db_column='INV ITEM Taxable YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    commissionable_yn = models.BooleanField(db_column='INV ITEM Commissionable YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    pricing_method = models.SmallIntegerField(db_column='INV ITEM Pricing Method', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    costing_method = models.SmallIntegerField(db_column='INV ITEM Costing Method', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    vendor_id = models.CharField(db_column='INV ITEM Vendor ID', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    vendors_number = models.CharField(db_column='INV ITEM Vendors Number', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    reorder_level = models.IntegerField(db_column='INV ITEM Reorder Level', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    reorder_qty = models.IntegerField(db_column='INV ITEM Reorder Qty', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    qty_on_hand = models.IntegerField(db_column='INV ITEM Qty On Hand', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    qty_on_order = models.IntegerField(db_column='INV ITEM Qty On Order', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    average_cost = models.DecimalField(db_column='INV ITEM Average Cost', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    last_cost = models.DecimalField(db_column='INV ITEM Last Cost', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    standard_cost = models.DecimalField(db_column='INV ITEM Standard Cost', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    new_price = models.DecimalField(db_column='INV ITEM New Price', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    commission_cost = models.DecimalField(db_column='INV ITEM Commission Cost', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    commission_type = models.CharField(db_column='INV ITEM Commission Type', max_length=15, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    commission_percent = models.FloatField(db_column='INV ITEM Commission Percent', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    saved = models.BooleanField(db_column='INV ITEM Saved')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    notes = models.TextField(db_column='INV ITEM Notes', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    custom_1 = models.CharField(db_column='INV ITEM Custom 1', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    custom_2 = models.CharField(db_column='INV ITEM Custom 2', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    custom_3 = models.CharField(db_column='INV ITEM Custom 3', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    custom_4 = models.CharField(db_column='INV ITEM Custom 4', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    custom_5 = models.CharField(db_column='INV ITEM Custom 5', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    custom_6 = models.CharField(db_column='INV ITEM Custom 6', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    custom_7 = models.CharField(db_column='INV ITEM Custom 7', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    custom_8 = models.CharField(db_column='INV ITEM Custom 8', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    custom_9 = models.CharField(db_column='INV ITEM Custom 9', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    custom_10 = models.CharField(db_column='INV ITEM Custom 10', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    replaced = models.CharField(db_column='INV ITEM Replaced', max_length=30, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    sku = models.CharField(db_column='INV ITEM SKU', max_length=30, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    substitute = models.CharField(db_column='INV ITEM Substitute', max_length=30, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    date_added = models.DateTimeField(db_column='Date Added', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    track_serials = models.BooleanField(db_column='INV ITEM Track Serials')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    manufacturer = models.CharField(db_column='INV ITEM Manufacturer', max_length=75, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    record_id = models.AutoField(db_column='INV ITEM Record ID')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    lowest_price = models.FloatField(db_column='INV ITEM Lowest Price', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    standard_price = models.FloatField(db_column='INV ITEM Standard Price', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    delivery_points = models.FloatField(db_column='INV ITEM Delivery Points', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    maximum_qty = models.SmallIntegerField(db_column='INV ITEM Maximum Qty', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    allow_allocate = models.BooleanField(db_column='INV ITEM Allow Allocate')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    auto_serial = models.IntegerField(db_column='INV ITEM Auto Serial', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    transfer_account = models.CharField(db_column='INV ITEM Transfer Account', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    offset_account = models.CharField(db_column='INV ITEM Offset Account', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    sales_return_account = models.CharField(db_column='INV ITEM Sales Return Account', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    sales_discount_account = models.CharField(db_column='INV ITEM Sales Discount Account', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    shrinkage_account = models.CharField(db_column='INV ITEM Shrinkage Account', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    commission_amount = models.CharField(db_column='INV ITEM Commission Amount', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    discount_account = models.CharField(db_column='INV ITEM Discount Account', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    place_note_on_document = models.NullBooleanField(db_column='INV ITEM Place Note on Document')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    non_serial = models.NullBooleanField(db_column='INV ITEM Non Serial')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    non_serial_create_serial = models.NullBooleanField(db_column='INV ITEM Non Serial Create Serial')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    qty_on_ar_orders = models.FloatField(db_column='INV ITEM Qty on AR Orders', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    manual_cost_yn = models.NullBooleanField(db_column='INV ITEM Manual Cost YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    inventory_type = models.IntegerField(db_column='INV ITEM Inventory Type', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    create_prefix = models.CharField(db_column='INV ITEM Create Prefix', max_length=25, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    create_increment = models.CharField(db_column='INV ITEM Create Increment', max_length=25, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    create_suffix = models.CharField(db_column='INV ITEM Create Suffix', max_length=25, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    suggested_retail_price = models.DecimalField(db_column='INV ITEM Suggested Retail Price', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    average_discount_amount = models.DecimalField(db_column='INV ITEM Average Discount Amount', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    average_discount_qty = models.IntegerField(db_column='INV ITEM Average Discount Qty', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    average_discount_last = models.DecimalField(db_column='INV ITEM Average Discount Last', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    watch_item = models.NullBooleanField(db_column='INV ITEM Watch Item')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    cash_register_yn = models.NullBooleanField(db_column='INV ITEM Cash Register YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    long_description = models.TextField(db_column='INV ITEM Long Description', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    freight_cost = models.DecimalField(db_column='INV ITEM Freight Cost', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    parts_bin_number = models.CharField(db_column='INV ITEM Parts Bin Number', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    warranty_sales_account = models.CharField(db_column='INV ITEM Warranty Sales Account', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    warranty_cogs_account = models.CharField(db_column='INV ITEM Warranty COGS Account', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    non_warranty_sales_account = models.CharField(db_column='INV ITEM Non Warranty Sales Account', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    non_warranty_cogs_account = models.CharField(db_column='INV ITEM Non Warranty COGS Account', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    parts_inventory_account = models.CharField(db_column='INV ITEM Parts Inventory Account', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    allow_requested_yn = models.NullBooleanField(db_column='INV ITEM Allow Requested YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    warranty_item_yn = models.NullBooleanField(db_column='INV ITEM Warranty Item YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    warranty_days = models.IntegerField(db_column='INV ITEM Warranty Days', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    imail_after_sold_number_of_days = models.IntegerField(db_column='INV ITEM IMail After Sold Number of Days', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    auto_invoice_yn = models.NullBooleanField(db_column='INV ITEM Auto Invoice YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    purchase_program_name = models.CharField(db_column='INV ITEM Purchase Program Name', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    hide_on_lookup_lists_yn = models.NullBooleanField(db_column='INV ITEM Hide on LookUp Lists YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    special_order_yn = models.NullBooleanField(db_column='INV ITEM Special Order YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    group = models.CharField(db_column='INV ITEM Group', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    sub_category_1 = models.CharField(db_column='INV ITEM Sub Category 1', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    sub_category_2 = models.CharField(db_column='INV ITEM Sub Category 2', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    sub_category_3 = models.CharField(db_column='INV ITEM Sub Category 3', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    sub_category_4 = models.CharField(db_column='INV ITEM Sub Category 4', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    minor = models.IntegerField(db_column='INV ITEM Minor', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    tate_sku = models.CharField(db_column='INV ITEM Tate Sku', max_length=10, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    minor_id = models.CharField(db_column='INV ITEM Minor ID', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    commission_code = models.CharField(db_column='INV ITEM Commission Code', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    freight_factor = models.CharField(db_column='INV ITEM Freight Factor', max_length=5, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    freight_percent = models.FloatField(db_column='INV ITEM Freight Percent', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    service_item_in_parts_on_service_to_labor_code = models.IntegerField(db_column='INV ITEM Service Item in Parts on Service to Labor Code', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    order_only_yn = models.NullBooleanField(db_column='INV ITEM Order ONLY YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    parts_order_sales_account = models.CharField(db_column='INV ITEM Parts Order Sales Account', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    parts_order_cogs_account = models.CharField(db_column='INV ITEM Parts Order COGS Account', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    register_sales_account = models.CharField(db_column='INV ITEM Register Sales Account', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    register_cogs_account = models.CharField(db_column='INV ITEM Register COGS Account', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    return_sales_account = models.CharField(db_column='INV ITEM Return Sales Account', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    return_cogs_account = models.CharField(db_column='INV ITEM Return COGS Account', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    other_warranty_sales_account = models.CharField(db_column='INV ITEM Other Warranty Sales Account', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    other_warranty_cogs_account = models.CharField(db_column='INV ITEM Other Warranty COGS Account', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    cost_by_percent = models.CharField(db_column='INV ITEM Cost by Percent', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    changes = models.TextField(db_column='INV ITEM Changes', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    width = models.FloatField(db_column='INV ITEM Width', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    height = models.FloatField(db_column='INV ITEM Height', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    depth = models.FloatField(db_column='INV ITEM Depth', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    flushmount_yn = models.NullBooleanField(db_column='INV ITEM FlushMount YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    energy = models.CharField(db_column='INV ITEM Energy', max_length=1, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    kit_yn = models.NullBooleanField(db_column='INV ITEM Kit YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    commission_cost_date = models.DateTimeField(db_column='INV ITEM Commission Cost Date', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    commission_amount_date = models.DateTimeField(db_column='INV ITEM Commission Amount Date', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    primary_color = models.CharField(db_column='INV ITEM Primary Color', max_length=25, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    base_model_number = models.CharField(db_column='INV ITEM Base Model Number', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    retired = models.NullBooleanField(db_column='INV ITEM Retired')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    picture_url = models.CharField(db_column='INV ITEM Picture URL', max_length=250, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    watch_item_compare_box_store_yn = models.NullBooleanField(db_column='INV ITEM Watch Item Compare Box Store YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    product_url = models.CharField(db_column='INV ITEM Product URL', max_length=1000, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    ptp_type = models.IntegerField(db_column='INV ITEM PTP Type', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    ptp_category = models.CharField(db_column='INV ITEM PTP Category', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    ptp_sub_category = models.CharField(db_column='INV ITEM PTP Sub Category', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    reoccurring_yn = models.NullBooleanField(db_column='INV ITEM ReOccurring YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    avalara_tax_code = models.BigIntegerField(db_column='INV ITEM Avalara Tax Code', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    track_close_out_price = models.DecimalField(db_column='INV ITEM Track Close Out Price', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    price_by_percent_id = models.IntegerField(db_column='INV ITEM Price by Percent ID', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    landed_cost = models.DecimalField(db_column='inv item landed cost', max_digits=19, decimal_places=4, blank=True, null=True)  # Field renamed to remove unsuitable characters.
    invitemtemp = models.CharField(max_length=4000, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'INV Items'
        app_label = 'whirlwind'