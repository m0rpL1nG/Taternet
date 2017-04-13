from __future__ import unicode_literals

from django.db import models

class Inventory(models.Model):
    id = models.AutoField(db_column='INV SER Record ID', primary_key=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    model_number = models.CharField(db_column='INV SER Model Number', max_length=30, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    serial_number = models.CharField(db_column='INV SER Serial Number', max_length=30, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # purchase_order_id = models.IntegerField(db_column='INV SER Purchase Order ID', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # received_date = models.DateTimeField(db_column='INV SER Received Date', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    location = models.CharField(db_column='INV SER Item Location', max_length=15, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # cost = models.DecimalField(db_column='INV SER Cost', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # notes = models.TextField(db_column='INV SER Notes', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # gl_trans = models.IntegerField(db_column='INV SER GL Trans', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # allocated_yn = models.BooleanField(db_column='INV SER Allocated YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # allocated_desc = models.CharField(db_column='INV SER Allocated Desc', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # allocated_reference = models.IntegerField(db_column='INV SER Allocated Reference', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # invoice = models.CharField(db_column='INV SER Invoice', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # sold_yn = models.BooleanField(db_column='INV SER Sold YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # sold_date = models.DateTimeField(db_column='INV SER Sold Date', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # payfor_yn = models.NullBooleanField(db_column='INV SER PayFor YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # payfor_id = models.IntegerField(db_column='INV SER PayFor ID', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # invoiced_yn = models.BooleanField(db_column='INV SER Invoiced YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # allocated_salesperson = models.CharField(db_column='INV SER Allocated Salesperson', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # allocated_customer_name = models.CharField(db_column='INV SER Allocated Customer Name', max_length=30, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # allocated_order_number = models.CharField(db_column='INV SER Allocated Order Number', max_length=15, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # allocated_date = models.DateTimeField(db_column='INV SER Allocated Date', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    active = models.NullBooleanField(db_column='INV SER Active YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # comments = models.TextField(db_column='INV SER Comments', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # print_new_tag_yn = models.NullBooleanField(db_column='INV SER Print New Tag YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # invoiced_date = models.DateTimeField(db_column='INV SER Invoiced Date', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # inventory_matched = models.TextField(db_column='INV SER Inventory Matched', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # matched_id = models.IntegerField(db_column='INV SER Matched ID', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # discount_amount = models.DecimalField(db_column='INV SER Discount Amount', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # paid_yn = models.NullBooleanField(db_column='INV SER Paid YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # finalized_yn = models.NullBooleanField(db_column='INV SER Finalized YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # finalized_date = models.DateTimeField(db_column='INV SER Finalized Date', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # temp_price_at = models.DecimalField(db_column='INV SER Temp Price At', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # spiff_amount = models.DecimalField(db_column='INV SER Spiff Amount', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # delivery_date = models.DateTimeField(db_column='INV SER Delivery Date', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # target_date = models.DateTimeField(db_column='INV SER Target Date', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # row_location = models.CharField(db_column='INV SER Row Location', max_length=6, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # inactive_date = models.DateTimeField(db_column='INV SER InActive Date', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # physical_inventory_notes = models.CharField(db_column='INV SER Physical Inventory Notes', max_length=150, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # manual_paid_yn = models.NullBooleanField(db_column='INV SER Manual Paid YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # manual_paid_date = models.DateTimeField(db_column='INV SER Manual Paid Date', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # manual_paid_chk_field = models.CharField(db_column='INV SER Manual Paid Chk#', max_length=25, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters. Field renamed because it ended with '_'.
    # commission_cost = models.DecimalField(db_column='INV SER Commission Cost', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # closeout_price = models.DecimalField(db_column='INV SER CloseOut Price', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # bay_location = models.CharField(db_column='INV SER Bay Location', max_length=10, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    unique_id = models.CharField(db_column='INV SER Unique ID', max_length=15, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # last_inventory_date = models.DateTimeField(db_column='INV SER Last Inventory Date', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # last_inventory_time = models.DateTimeField(db_column='INV SER Last Inventory Time', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # original_cost = models.DecimalField(db_column='INV SER Original Cost', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # original_discount_amount = models.DecimalField(db_column='INV SER Original Discount Amount', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # permanent_depot_yn = models.NullBooleanField(db_column='INV SER Permanent Depot YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # product_type = models.CharField(db_column='INV SER Product Type', max_length=2, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # color_style_id = models.CharField(db_column='INV SER Color Style ID', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # color_style_name = models.CharField(db_column='INV SER Color Style Name', max_length=75, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # color_style_brand = models.CharField(db_column='INV SER Color Style Brand', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # color_style_price_code = models.CharField(db_column='INV SER Color Style Price Code', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # last_price_tag_date = models.DateTimeField(db_column='INV SER Last Price Tag Date', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # production_number = models.CharField(db_column='INV SER Production Number', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.

    class Meta:
        managed = False
        db_table = 'INV Model Serial'
        app_label = 'whirlwind'
