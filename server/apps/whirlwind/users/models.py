from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Employees(models.Model):
    login_id = models.CharField(db_column='EMP ID', max_length=15)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    fullname = models.CharField(db_column='EMP Name', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    inactive = models.BooleanField(db_column='EMP Inactive YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_address_1 = models.CharField(db_column='EMP Address 1', max_length=30, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_address_2 = models.CharField(db_column='EMP Address 2', max_length=30, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_city = models.CharField(db_column='EMP City', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_state = models.CharField(db_column='EMP State', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_postal = models.CharField(db_column='EMP Postal', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_country = models.CharField(db_column='EMP Country', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_phone = models.CharField(db_column='EMP Phone', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_home_fax = models.CharField(db_column='EMP Home Fax', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_ss_number = models.CharField(db_column='EMP SS Number', max_length=15, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    hire_date = models.DateTimeField(db_column='EMP Hire Date', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_birthday = models.DateTimeField(db_column='EMP Birthday', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_percentage = models.FloatField(db_column='EMP Percentage', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_method = models.SmallIntegerField(db_column='EMP Method', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    salesperson = models.BooleanField(db_column='EMP Salesperson YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # etype = models.CharField(db_column='EMP Type', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    emp_notes = models.TextField(db_column='EMP Notes', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_mtd_gross = models.DecimalField(db_column='EMP MTD Gross', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_mtd_fica = models.DecimalField(db_column='EMP MTD FICA', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_mtd_federal = models.DecimalField(db_column='EMP MTD Federal', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_mtd_state = models.DecimalField(db_column='EMP MTD State', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_mtd_local = models.DecimalField(db_column='EMP MTD Local', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_mtd_other = models.DecimalField(db_column='EMP MTD Other', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_qtd_gross = models.DecimalField(db_column='EMP QTD Gross', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_qtd_fica = models.DecimalField(db_column='EMP QTD FICA', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_qtd_federal = models.DecimalField(db_column='EMP QTD Federal', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_qtd_state = models.DecimalField(db_column='EMP QTD State', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_qtd_local = models.DecimalField(db_column='EMP QTD Local', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_qtd_other = models.DecimalField(db_column='EMP QTD Other', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_ytd_gross = models.DecimalField(db_column='EMP YTD Gross', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_ytd_fica = models.DecimalField(db_column='EMP YTD FICA', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_ytd_federal = models.DecimalField(db_column='EMP YTD Federal', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_ytd_state = models.DecimalField(db_column='EMP YTD State', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_ytd_local = models.DecimalField(db_column='EMP YTD Local', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_ytd_other = models.DecimalField(db_column='EMP YTD Other', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_emergency_contact = models.CharField(db_column='EMP Emergency Contact', max_length=30, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_emergency_number = models.CharField(db_column='EMP Emergency Number', max_length=20, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_employee_saved = models.BooleanField(db_column='EMP Employee Saved')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    email = models.CharField(db_column='EMP E-Mail', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    manager = models.BooleanField(db_column='EMP Manager YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    warehouse = models.BooleanField(db_column='EMP Warehouse YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    date_added = models.DateTimeField(db_column='Date Added', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    password = models.CharField(db_column='EMP Password', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    location = models.CharField(db_column='EMP Location', max_length=10, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_state_tax_state = models.CharField(db_column='EMP State Tax State', max_length=2, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_desktop_picture_file = models.TextField(db_column='EMP Desktop Picture File', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_photo = models.BinaryField(db_column='EMP Photo', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_dl_image = models.BinaryField(db_column='EMP DL Image', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_desktop_picture = models.BinaryField(db_column='EMP Desktop Picture', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_po_open_color = models.IntegerField(db_column='EMP PO Open Color', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_po_received_color = models.IntegerField(db_column='EMP PO Received Color', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_po_cancelled_color = models.IntegerField(db_column='EMP PO Cancelled Color', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_po_not_setup_color = models.IntegerField(db_column='EMP PO NOT Setup Color', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_po_ready_to_post_color = models.IntegerField(db_column='EMP PO Ready To Post Color', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_full_time_yn = models.NullBooleanField(db_column='EMP Full Time YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_detailed_notes = models.TextField(db_column='EMP Detailed Notes', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_driver_license_number = models.CharField(db_column='EMP Driver License Number', max_length=30, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_driver_license_state = models.CharField(db_column='EMP Driver License State', max_length=10, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_driver_license_expire_date = models.CharField(db_column='EMP Driver License Expire Date', max_length=10, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_title = models.CharField(db_column='EMP Title', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_suffix = models.CharField(db_column='EMP Suffix', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_sex = models.CharField(db_column='EMP Sex', max_length=1, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    first_name = models.CharField(db_column='EMP First Name', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_middle_name = models.CharField(db_column='EMP Middle Name', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    last_name = models.CharField(db_column='EMP Last Name', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_dismissed_date = models.DateTimeField(db_column='EMP Dismissed Date', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_dismissed_comments = models.TextField(db_column='EMP Dismissed Comments', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_pay_type = models.CharField(db_column='EMP Pay Type', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    emp_department = models.CharField(db_column='EMP Department', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_last_gross = models.DecimalField(db_column='EMP LAST Gross', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_last_adjusted_gross = models.DecimalField(db_column='EMP LAST Adjusted Gross', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_last_fica = models.DecimalField(db_column='EMP LAST FICA', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_last_medicare = models.DecimalField(db_column='EMP LAST Medicare', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_last_federal = models.DecimalField(db_column='EMP LAST Federal', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_last_state = models.DecimalField(db_column='EMP LAST State', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_last_local = models.DecimalField(db_column='EMP LAST Local', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_last_other = models.DecimalField(db_column='EMP LAST Other', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_mtd_adjusted_gross = models.DecimalField(db_column='EMP MTD Adjusted Gross', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_mtd_medicare = models.DecimalField(db_column='EMP MTD Medicare', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_qtd_adjusted_gross = models.DecimalField(db_column='EMP QTD Adjusted Gross', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_qtd_medicare = models.DecimalField(db_column='EMP QTD Medicare', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_ytd_adjusted_gross = models.DecimalField(db_column='EMP YTD Adjusted Gross', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_ytd_medicare = models.DecimalField(db_column='EMP YTD Medicare', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_last_regular_hours = models.FloatField(db_column='EMP LAST Regular Hours', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_last_ot_hours = models.FloatField(db_column='EMP LAST OT Hours', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_last_holiday_hours = models.FloatField(db_column='EMP LAST Holiday Hours', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_last_sick_hours = models.FloatField(db_column='EMP LAST Sick Hours', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_last_vacation_hours = models.FloatField(db_column='EMP LAST Vacation Hours', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_last_other_hours = models.FloatField(db_column='EMP LAST Other Hours', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_mtd_regular_hours = models.FloatField(db_column='EMP MTD Regular Hours', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_mtd_ot_hours = models.FloatField(db_column='EMP MTD OT Hours', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_mtd_holiday_hours = models.FloatField(db_column='EMP MTD Holiday Hours', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_mtd_sick_hours = models.FloatField(db_column='EMP MTD Sick Hours', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_mtd_vacation_hours = models.FloatField(db_column='EMP MTD Vacation Hours', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_mtd_other_hours = models.FloatField(db_column='EMP MTD Other Hours', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_qtd_regular_hours = models.FloatField(db_column='EMP QTD Regular Hours', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_qtd_ot_hours = models.FloatField(db_column='EMP QTD OT Hours', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_qtd_holiday_hours = models.FloatField(db_column='EMP QTD Holiday Hours', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_qtd_sick_hours = models.FloatField(db_column='EMP QTD Sick Hours', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_qtd_vacation_hours = models.FloatField(db_column='EMP QTD Vacation Hours', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_qtd_other_hours = models.FloatField(db_column='EMP QTD Other Hours', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_ytd_regular_hours = models.FloatField(db_column='EMP YTD Regular Hours', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_ytd_ot_hours = models.FloatField(db_column='EMP YTD OT Hours', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_ytd_holiday_hours = models.FloatField(db_column='EMP YTD Holiday Hours', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_ytd_sick_hours = models.FloatField(db_column='EMP YTD Sick Hours', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_ytd_vacation_hours = models.FloatField(db_column='EMP YTD Vacation Hours', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_ytd_other_hours = models.FloatField(db_column='EMP YTD Other Hours', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_pay_frequency = models.CharField(db_column='EMP Pay Frequency', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_salary = models.DecimalField(db_column='EMP Salary', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_hourly_rate = models.DecimalField(db_column='EMP Hourly Rate', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_ot_rate = models.DecimalField(db_column='EMP OT Rate', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_holiday_rate = models.DecimalField(db_column='EMP Holiday Rate', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_sick_rate = models.DecimalField(db_column='EMP Sick Rate', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_vacation_rate = models.DecimalField(db_column='EMP Vacation Rate', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_other_rate = models.DecimalField(db_column='EMP Other Rate', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_fica_yn = models.NullBooleanField(db_column='EMP FICA YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_medicare_yn = models.NullBooleanField(db_column='EMP Medicare YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_filing_status = models.CharField(db_column='EMP Filing Status', max_length=10, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_allowances = models.IntegerField(db_column='EMP Allowances', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_amount = models.DecimalField(db_column='EMP Amount', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_netcheck = models.DecimalField(db_column='EMP NetCheck', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_additions = models.DecimalField(db_column='EMP Additions', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_deductions = models.DecimalField(db_column='EMP Deductions', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_pretaxded = models.DecimalField(db_column='EMP Pretaxded', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_additional_fed_withholding = models.DecimalField(db_column='EMP Additional Fed Withholding', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_additional_state_withholding = models.DecimalField(db_column='EMP Additional State Withholding', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_additional_local_withholding = models.DecimalField(db_column='EMP Additional Local Withholding', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_pay = models.NullBooleanField(db_column='EMP Pay')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_last_date = models.DateTimeField(db_column='EMP LAST Date', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_last_net = models.DecimalField(db_column='EMP LAST Net', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_last_commission = models.DecimalField(db_column='EMP LAST Commission', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_last_draw = models.DecimalField(db_column='EMP Last Draw', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_last_total_hours = models.FloatField(db_column='EMP Last Total Hours', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_commission = models.DecimalField(db_column='EMP Commission', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_comm_rate = models.DecimalField(db_column='EMP Comm Rate', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_comm_percent = models.FloatField(db_column='EMP Comm Percent', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_blank_check_hourly_rate = models.DecimalField(db_column='EMP Blank Check Hourly Rate', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_blank_check_ot_rate = models.DecimalField(db_column='EMP Blank Check OT Rate', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_fit_yn = models.NullBooleanField(db_column='EMP FIT YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_fed_allow = models.IntegerField(db_column='EMP Fed Allow', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_state_allow = models.IntegerField(db_column='EMP State Allow', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_local_allow = models.IntegerField(db_column='EMP Local Allow', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_fed_withhold_amt = models.DecimalField(db_column='EMP Fed Withhold Amt', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_state_withhold_amt = models.DecimalField(db_column='EMP State Withhold Amt', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_local_withhold_amt = models.DecimalField(db_column='EMP Local Withhold Amt', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_fed_filing_status = models.CharField(db_column='EMP Fed Filing Status', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_state_filing_status = models.CharField(db_column='EMP State Filing Status', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_local_filing_status = models.CharField(db_column='EMP Local Filing Status', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_allow_adv_comm = models.NullBooleanField(db_column='EMP Allow Adv Comm')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_adv_comm_amt = models.DecimalField(db_column='EMP Adv Comm Amt', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_adv_comm_selected = models.NullBooleanField(db_column='EMP Adv Comm Selected')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_ar_statement_payment_color = models.IntegerField(db_column='EMP AR Statement Payment Color', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_ar_statement_purchase_color = models.IntegerField(db_column='EMP AR Statement Purchase Color', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_ar_statement_finance_charge_color = models.IntegerField(db_column='EMP AR Statement Finance Charge Color', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_ar_statement_past_due_color = models.IntegerField(db_column='EMP AR Statement Past Due Color', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    supervisor_id = models.CharField(db_column='EMP Supervisor ID', max_length=25, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_next_commission = models.DecimalField(db_column='EMP NEXT Commission', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_alt_gl_posting_date_yn = models.NullBooleanField(db_column='EMP Alt GL Posting Date YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_alt_gl_posting_date = models.DateTimeField(db_column='EMP Alt Gl Posting Date', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_oe_wizard_1 = models.NullBooleanField(db_column='EMP OE Wizard 1')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_oe_wizard_2 = models.NullBooleanField(db_column='EMP OE Wizard 2')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_service_tech_yn = models.NullBooleanField(db_column='EMP Service Tech YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_state_yn = models.NullBooleanField(db_column='EMP State YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_draw_active_yn = models.NullBooleanField(db_column='EMP Draw Active YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_allow_draw = models.NullBooleanField(db_column='EMP Allow Draw')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_draw_amount = models.DecimalField(db_column='EMP Draw Amount', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_draw_selected = models.NullBooleanField(db_column='EMP Draw Selected')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_commission_to_pay = models.DecimalField(db_column='EMP Commission To Pay', max_digits=19, decimal_places=4, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_commission_selected = models.NullBooleanField(db_column='EMP Commission Selected')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_post_oe_print_yn = models.NullBooleanField(db_column='EMP POST OE Print YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_post_oe_scan_yn = models.NullBooleanField(db_column='EMP POST OE Scan YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_post_oe_invoice_next_order_yn = models.NullBooleanField(db_column='EMP POST OE Invoice Next Order YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_view_graphical_menu_yn = models.NullBooleanField(db_column='EMP View Graphical Menu YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    id = models.IntegerField(db_column='ID', primary_key=True)  # Field name made lowercase.
    # emp_w2_date = models.DateTimeField(db_column='EMP W2 Date', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_health_insurance_coverage_type = models.CharField(db_column='EMP Health Insurance Coverage Type', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_health_insurance_coverage_program = models.CharField(db_column='EMP Health Insurance Coverage Program', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_default_area_code = models.CharField(db_column='EMP Default Area Code', max_length=3, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_show_inventory_on_add_edit_model_yn = models.NullBooleanField(db_column='EMP Show Inventory on Add Edit Model YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_show_desktop_picture_yn = models.NullBooleanField(db_column='EMP Show Desktop Picture YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_view_history_document_count = models.IntegerField(db_column='EMP View History Document Count', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_id_for_checkmark = models.CharField(db_column='EMP ID For CheckMark', max_length=75, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_id_ar_account = models.CharField(db_column='EMP ID AR Account', max_length=15, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_checkmark_location = models.CharField(db_column='EMP CheckMark Location', max_length=5, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_default_printer_name = models.CharField(db_column='EMP Default Printer Name', max_length=75, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_import_main_path = models.CharField(db_column='EMP Import Main Path', max_length=500, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_import_inventory_path = models.CharField(db_column='EMP Import Inventory Path', max_length=500, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_service_tech_google_color = models.BigIntegerField(db_column='EMP Service Tech Google Color', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_import_unique_id_path = models.CharField(db_column='EMP Import Unique ID Path', max_length=100, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_service_tech_google_include_yn = models.NullBooleanField(db_column='EMP Service Tech Google Include YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_temp_file_path = models.CharField(db_column='EMP Temp File Path', max_length=200, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_import_unique_id_scan_organizer_path = models.CharField(db_column='EMP Import Unique ID Scan Organizer Path', max_length=500, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_import_unique_id_inventory_path = models.CharField(db_column='EMP Import Unique ID Inventory Path', max_length=500, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_import_inventory_by_qty_path = models.CharField(db_column='EMP Import Inventory by Qty Path', max_length=500, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_ptp_data_files = models.CharField(db_column='EMP PTP Data Files', max_length=300, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_servicebench_tech_id = models.CharField(db_column='EMP ServiceBench Tech ID', max_length=35, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_post_oe_invoice_do_nothing_yn = models.NullBooleanField(db_column='EMP POST OE Invoice Do Nothing YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_pdf_file_path = models.CharField(db_column='EMP PDF File Path', max_length=200, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_default_email_account = models.BigIntegerField(db_column='EMP Default EMail Account', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_mobile_phone_number = models.CharField(db_column='EMP Mobile Phone Number', max_length=10, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_mobile_phone_carrier = models.CharField(db_column='EMP Mobile Phone Carrier', max_length=50, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_scan_organizer_serial_number_color = models.BigIntegerField(db_column='EMP Scan Organizer Serial Number Color', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_scan_organizer_non_serial_number_color = models.BigIntegerField(db_column='EMP Scan Organizer NON Serial Number Color', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_scan_organizer_non_serial_allocatable_color = models.BigIntegerField(db_column='EMP Scan Organizer NON Serial Allocatable Color', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_scan_organizer_create_serial_color = models.BigIntegerField(db_column='EMP Scan Organizer Create Serial Color', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_scan_organizer_non_inventory_ie_service_color = models.BigIntegerField(db_column='EMP Scan Organizer Non Inventory ie Service Color', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_scan_organizer_service_part_color = models.BigIntegerField(db_column='EMP Scan Organizer Service Part Color', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    imail_email_address = models.CharField(db_column='EMP IMail EMail Address', max_length=75, blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_imail_email_yn = models.NullBooleanField(db_column='EMP IMail EMail YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_no_text_change_qry_yn = models.NullBooleanField(db_column='EMP No Text Change Qry YN')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # emp_scan_organizer_quantity_only_color = models.BigIntegerField(db_column='EMP Scan Organizer Quantity Only Color', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    # empcustomerpickupemailyn = models.NullBooleanField()
    history_notes = models.TextField(db_column='EMP History Notes', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.

    class Meta:
        managed = False
        db_table = 'EMP Employees'
        app_label = 'whirlwind'