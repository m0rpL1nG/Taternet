from __future__ import unicode_literals

from django.db import models
from .inventory import Inventory

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