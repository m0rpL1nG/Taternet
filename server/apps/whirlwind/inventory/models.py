from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Inventory(models.Model):
    id = models.AutoField(db_column='INV SER Record ID', primary_key=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    model_number = models.CharField(db_column='INV SER Model Number', max_length=30, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    serial_number = models.CharField(db_column='INV SER Serial Number', max_length=30, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    unique_id = models.CharField(db_column='INV SER Unique ID', max_length=15, blank=True, null=True)
    location = models.CharField(db_column='INV SER Item Location', max_length=15, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    active = models.NullBooleanField(db_column='INV SER Active YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.

    class Meta:
        managed = False
        db_table = 'INV Model Serial'
        app_label = 'whirlwind'

class InvModelSerial(models.Model):
    inv_ser_record_id = models.AutoField(db_column='INV SER Record ID', primary_key=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    inv_ser_model_number = models.CharField(db_column='INV SER Model Number', max_length=30, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    inv_ser_serial_number = models.CharField(db_column='INV SER Serial Number', max_length=30, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # inv_ser_purchase_order_id = models.IntegerField(db_column='INV SER Purchase Order ID', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # inv_ser_received_date = models.DateTimeField(db_column='INV SER Received Date', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    inv_ser_item_location = models.CharField(db_column='INV SER Item Location', max_length=15, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # inv_ser_cost = models.DecimalField(db_column='INV SER Cost', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # inv_ser_notes = models.TextField(db_column='INV SER Notes', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # inv_ser_gl_trans = models.IntegerField(db_column='INV SER GL Trans', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # inv_ser_allocated_yn = models.BooleanField(db_column='INV SER Allocated YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # inv_ser_allocated_desc = models.CharField(db_column='INV SER Allocated Desc', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # inv_ser_allocated_reference = models.IntegerField(db_column='INV SER Allocated Reference', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # inv_ser_invoice = models.CharField(db_column='INV SER Invoice', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # inv_ser_sold_yn = models.BooleanField(db_column='INV SER Sold YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # inv_ser_sold_date = models.DateTimeField(db_column='INV SER Sold Date', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # inv_ser_payfor_yn = models.NullBooleanField(db_column='INV SER PayFor YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # inv_ser_payfor_id = models.IntegerField(db_column='INV SER PayFor ID', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # inv_ser_invoiced_yn = models.BooleanField(db_column='INV SER Invoiced YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # inv_ser_allocated_salesperson = models.CharField(db_column='INV SER Allocated Salesperson', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # inv_ser_allocated_customer_name = models.CharField(db_column='INV SER Allocated Customer Name', max_length=30, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # inv_ser_allocated_order_number = models.CharField(db_column='INV SER Allocated Order Number', max_length=15, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # inv_ser_allocated_date = models.DateTimeField(db_column='INV SER Allocated Date', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    inv_ser_active_yn = models.NullBooleanField(db_column='INV SER Active YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # inv_ser_comments = models.TextField(db_column='INV SER Comments', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # inv_ser_print_new_tag_yn = models.NullBooleanField(db_column='INV SER Print New Tag YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # inv_ser_invoiced_date = models.DateTimeField(db_column='INV SER Invoiced Date', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # inv_ser_inventory_matched = models.TextField(db_column='INV SER Inventory Matched', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # inv_ser_matched_id = models.IntegerField(db_column='INV SER Matched ID', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # inv_ser_discount_amount = models.DecimalField(db_column='INV SER Discount Amount', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # inv_ser_paid_yn = models.NullBooleanField(db_column='INV SER Paid YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # inv_ser_finalized_yn = models.NullBooleanField(db_column='INV SER Finalized YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # inv_ser_finalized_date = models.DateTimeField(db_column='INV SER Finalized Date', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # inv_ser_temp_price_at = models.DecimalField(db_column='INV SER Temp Price At', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # inv_ser_spiff_amount = models.DecimalField(db_column='INV SER Spiff Amount', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # inv_ser_delivery_date = models.DateTimeField(db_column='INV SER Delivery Date', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # inv_ser_target_date = models.DateTimeField(db_column='INV SER Target Date', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # inv_ser_row_location = models.CharField(db_column='INV SER Row Location', max_length=6, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # inv_ser_inactive_date = models.DateTimeField(db_column='INV SER InActive Date', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # inv_ser_physical_inventory_notes = models.CharField(db_column='INV SER Physical Inventory Notes', max_length=150, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # inv_ser_manual_paid_yn = models.NullBooleanField(db_column='INV SER Manual Paid YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # inv_ser_manual_paid_date = models.DateTimeField(db_column='INV SER Manual Paid Date', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # inv_ser_manual_paid_chk_field = models.CharField(db_column='INV SER Manual Paid Chk#', max_length=25, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters. Field renamed because it ended with '_'.
    # inv_ser_commission_cost = models.DecimalField(db_column='INV SER Commission Cost', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # inv_ser_closeout_price = models.DecimalField(db_column='INV SER CloseOut Price', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # inv_ser_bay_location = models.CharField(db_column='INV SER Bay Location', max_length=10, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    inv_ser_unique_id = models.CharField(db_column='INV SER Unique ID', max_length=15, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # inv_ser_last_inventory_date = models.DateTimeField(db_column='INV SER Last Inventory Date', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # inv_ser_last_inventory_time = models.DateTimeField(db_column='INV SER Last Inventory Time', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # inv_ser_original_cost = models.DecimalField(db_column='INV SER Original Cost', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # inv_ser_original_discount_amount = models.DecimalField(db_column='INV SER Original Discount Amount', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # inv_ser_permanent_depot_yn = models.NullBooleanField(db_column='INV SER Permanent Depot YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # inv_ser_product_type = models.CharField(db_column='INV SER Product Type', max_length=2, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # inv_ser_color_style_id = models.CharField(db_column='INV SER Color Style ID', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # inv_ser_color_style_name = models.CharField(db_column='INV SER Color Style Name', max_length=75, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # inv_ser_color_style_brand = models.CharField(db_column='INV SER Color Style Brand', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # inv_ser_color_style_price_code = models.CharField(db_column='INV SER Color Style Price Code', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # inv_ser_last_price_tag_date = models.DateTimeField(db_column='INV SER Last Price Tag Date', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # inv_ser_production_number = models.CharField(db_column='INV SER Production Number', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.

    class Meta:
        managed = False
        db_table = 'INV Model Serial'
        app_label = 'whirlwind'

class TransferRequest(models.Model):
    id = models.AutoField(primary_key=True, db_column='INV TRANSFER ID')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    ar_detail_ext = models.IntegerField(db_column='INV TRANSFER AR Detail Ext', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    inventory_id = models.OneToOneField(Inventory, db_column='INV TRANSFER Mdl Ser ID', blank=True, null=True, related_name="inventory_item")  # Field name made lowercase. Field renamed to remove unsuitable characters.
    #part_id = models.IntegerField(db_column='INV TRANSFER Part ID', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    #ser_parts_id = models.IntegerField(db_column='INV TRANSFER SER PARTS ID', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    notes = models.TextField(db_column='INV TRANSFER Notes', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    #setup_date = models.DateTimeField(db_column='INV TRANSFER Setup Date', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    #complete_date = models.DateTimeField(db_column='INV TRANSFER Complete Date', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    #setup_by = models.CharField(db_column='INV TRANSFER Setup By', max_length=25, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    #completed_yn = models.NullBooleanField(db_column='INV TRANSFER Completed YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    to_location = models.CharField(db_column='INV TRANSFER To Location', max_length=12, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    #print_count = models.IntegerField(db_column='INV TRANSFER Print Count', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    comments = models.TextField(db_column='INV TRANSFER Comments', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    #last_print_date = models.DateTimeField(db_column='INV TRANSFER Last Print Date', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    warehouse_notes = models.TextField(db_column='INV TRANSFER Warehouse Notes', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    #sent_it_yn = models.NullBooleanField(db_column='INV TRANSFER Sent It YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    #sent_it_date = models.DateTimeField(db_column='INV TRANSFER Sent It Date', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.

    class Meta:
        managed = False
        db_table = 'INV Transfer Request'
        app_label = 'whirlwind'