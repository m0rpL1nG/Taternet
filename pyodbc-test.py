"Proof connection at pyodbc level."
# Test pyodbc connection. Result is 42.
# Note parameters in connection string, <PARAMETER>.

import pyodbc


conn = pyodbc.connect('DRIVER=FreeTDS;SERVER=10.10.1.99;PORT=1433;DATABASE=FamousTate;UID=sa;PWD=7777777;TDS_Version=8.0;')
cursor = conn.cursor()
for row in cursor.execute('select 6 * 7 as [Result];'):
    print row.Result
