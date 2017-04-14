from __future__ import unicode_literals

from django.db import models
from django.conf import settings
from ..users.models import Employees

User = settings.AUTH_USER_MODEL

# Create your models here.
class Vendor(models.Model):
    # ar_cust_saved = models.SmallIntegerField(db_column='AR CUST Saved', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    id = models.CharField(db_column='AP VEN ID', primary_key=True, max_length=20)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    name = models.CharField(db_column='AP VEN Name', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    inactive_yn = models.SmallIntegerField(db_column='AP VEN Inactive YN', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    address_1 = models.CharField(db_column='AP VEN Address 1', max_length=30, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    address_2 = models.CharField(db_column='AP VEN Address 2', max_length=30, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    city = models.CharField(db_column='AP VEN City', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    state = models.CharField(db_column='AP VEN State', max_length=5, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    postal = models.CharField(db_column='AP VEN Postal', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    country = models.CharField(db_column='AP VEN Country', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    phone = models.CharField(db_column='AP VEN Phone', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    phone_ext = models.CharField(db_column='AP VEN Phone Ext', max_length=10, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    fax = models.CharField(db_column='AP VEN Fax', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    contact = models.CharField(db_column='AP VEN Contact', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    notes = models.TextField(db_column='AP VEN Notes', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # ap_ven_remit_name = models.CharField(db_column='AP VEN Remit Name', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # ap_ven_remit_address_1 = models.CharField(db_column='AP VEN Remit Address 1', max_length=30, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # ap_ven_remit_address_2 = models.CharField(db_column='AP VEN Remit Address 2', max_length=30, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # # ap_ven_remit_city = models.CharField(db_column='AP VEN Remit City', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # ap_ven_remit_state = models.CharField(db_column='AP VEN Remit State', max_length=5, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # ap_ven_remit_postal = models.CharField(db_column='AP VEN Remit Postal', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # ap_ven_remit_country = models.CharField(db_column='AP VEN Remit Country', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # ap_ven_remit_phone = models.CharField(db_column='AP VEN Remit Phone', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # ap_ven_remit_phone_ext = models.CharField(db_column='AP VEN Remit Phone Ext', max_length=10, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # ap_ven_remit_fax = models.CharField(db_column='AP VEN Remit Fax', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # ap_ven_remit_contact = models.CharField(db_column='AP VEN Remit Contact', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    default_terms = models.CharField(db_column='AP VEN Default Terms', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    vendor_type = models.CharField(db_column='AP VEN Type', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # ap_ven_1099 = models.BooleanField(db_column='AP VEN 1099')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # ap_ven_tax_id = models.CharField(db_column='AP VEN Tax ID', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # ap_ven_default_gl = models.CharField(db_column='AP VEN Default GL', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # ap_ven_default_department = models.CharField(db_column='AP VEN Default Department', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # ap_ven_financial_period_1 = models.FloatField(db_column='AP VEN Financial Period 1', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # ap_ven_financial_period_2 = models.FloatField(db_column='AP VEN Financial Period 2', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # ap_ven_financial_period_3 = models.FloatField(db_column='AP VEN Financial Period 3', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # ap_ven_financial_period_4 = models.FloatField(db_column='AP VEN Financial Period 4', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # ap_ven_financial_total = models.FloatField(db_column='AP VEN Financial Total', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # ap_ven_purchase_ytd = models.FloatField(db_column='AP VEN Purchase YTD', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # ap_ven_purchase_last_year = models.FloatField(db_column='AP VEN Purchase Last Year', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # ap_ven_purchase_lifetime = models.FloatField(db_column='AP VEN Purchase Lifetime', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # ap_ven_payments_ytd = models.FloatField(db_column='AP VEN Payments YTD', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # ap_ven_payments_last_year = models.FloatField(db_column='AP VEN Payments Last Year', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # ap_ven_payments_lifetime = models.FloatField(db_column='AP VEN Payments Lifetime', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # ap_ven_1099_payments_ytd = models.FloatField(db_column='AP VEN 1099 Payments YTD', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # ap_ven_1099_payments_last_year = models.FloatField(db_column='AP VEN 1099 Payments Last Year', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # ap_ven_1099_payments_lifetime = models.FloatField(db_column='AP VEN 1099 Payments Lifetime', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # ap_ven_purchase_number_ytd = models.BigIntegerField(db_column='AP VEN Purchase Number YTD', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # ap_ven_purchase_number_last_year = models.BigIntegerField(db_column='AP VEN Purchase Number Last Year', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # ap_ven_purchase_number_lifetime = models.BigIntegerField(db_column='AP VEN Purchase Number Lifetime', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # ap_ven_payment_number_ytd = models.BigIntegerField(db_column='AP VEN Payment Number YTD', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # ap_ven_payment_number_last_year = models.BigIntegerField(db_column='AP VEN Payment Number Last Year', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # ap_ven_payment_number_lifetime = models.BigIntegerField(db_column='AP VEN Payment Number Lifetime', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # ap_ven_payment_hold = models.BooleanField(db_column='AP VEN Payment Hold')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # ap_ven_department = models.CharField(db_column='AP VEN Department', max_length=5, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # ap_ven_custom_1 = models.CharField(db_column='AP VEN Custom 1', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # ap_ven_custom_2 = models.CharField(db_column='AP VEN Custom 2', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # ap_ven_custom_3 = models.CharField(db_column='AP VEN Custom 3', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # ap_ven_custom_4 = models.CharField(db_column='AP VEN Custom 4', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # ap_ven_custom_5 = models.CharField(db_column='AP VEN Custom 5', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # ap_ven_custom_6 = models.CharField(db_column='AP VEN Custom 6', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # ap_ven_custom_7 = models.CharField(db_column='AP VEN Custom 7', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # ap_ven_custom_8 = models.CharField(db_column='AP VEN Custom 8', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # ap_ven_custom_9 = models.CharField(db_column='AP VEN Custom 9', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # ap_ven_custom_10 = models.CharField(db_column='AP VEN Custom 10', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # ap_ven_order_phone = models.CharField(db_column='AP VEN Order Phone', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # ap_ven_our_acct_field = models.CharField(db_column='AP VEN Our Acct #', max_length=30, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters. Field renamed because it ended with '_'.
    rep_name = models.CharField(db_column='AP VEN Rep Name', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    rep_phone = models.CharField(db_column='AP VEN Rep Phone', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    rep_mobile = models.CharField(db_column='AP VEN Rep Mobile', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    rep_e_mail = models.CharField(db_column='AP VEN Rep E-Mail', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # ap_ven_home_page = models.CharField(db_column='AP VEN Home Page', max_length=150, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # ap_ven_rep_fax = models.CharField(db_column='AP VEN Rep Fax', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # ap_ven_financing_vendor = models.NullBooleanField(db_column='AP VEN Financing Vendor')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # ap_ven_ordering_notes = models.TextField(db_column='AP VEN Ordering Notes', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # ap_ven_order_contact = models.CharField(db_column='AP VEN Order Contact', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # ap_ven_remit_contact_phone = models.CharField(db_column='AP VEN Remit Contact Phone', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # ap_ven_financed_by = models.CharField(db_column='AP VEN Financed By', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # ap_ven_parts_vendor_id = models.CharField(db_column='AP VEN Parts Vendor ID', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # ap_ven_qb_exported_yn = models.NullBooleanField(db_column='AP VEN QB Exported YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # ap_ven_qb_exported_notes = models.TextField(db_column='AP VEN QB Exported Notes', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # ap_ven_exp_inv_ap_acct = models.CharField(db_column='AP VEN Exp Inv AP Acct', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # ap_ven_history_notes = models.TextField(db_column='AP VEN History Notes', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # ap_ven_ssn_ein = models.CharField(db_column='AP VEN SSN EIN', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # ap_ven_asked_for_default_gl_times = models.IntegerField(db_column='AP VEN Asked For Default GL Times', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # ap_ven_ar_account_for_service = models.CharField(db_column='AP VEN AR Account for Service', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # ap_ven_require_po_yn = models.NullBooleanField(db_column='AP VEN Require PO YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.

    class Meta:
        managed = False
        db_table = 'AP Vendor'
        app_label = 'whirlwind'
    
class VendorInvoice(models.Model):
    vendor_id = models.ForeignKey(Vendor)
    approved = models.BooleanField(default=False)
    approved_by = models.ForeignKey(Employees, to_field="id")
    notes = models.CharField(max_length=50, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        managed =  True
        db_table = 'AP Vendor Invoice'
        app_label = 'whirlwind'        