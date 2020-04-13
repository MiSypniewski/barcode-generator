You can generate barcode in this page.

## How to use

In field "Device Name" write name device.
In field "Serial numbers" paste serial numbers from excel or google sheets.
We can copy and paste many columns from sheet

| column B   | column C      |
| ---------- | ------------- |
| 1234567890 | ABCDEFGIJKLNM |
| 1234567890 | ABCDEFGIJKLNM |
| 1234567890 | ABCDEFGIJKLNM |
| 1234567890 | ABCDEFGIJKLNM |

App recognizes characters "\t" and " ".
Characters "\t" is new column.
Characters " " is new row.

## Do not divide after (min 2 chars)

If in serial number we have space character " " we can inform the application about it in field "Do not divide after (min 2 chars)".
for example:

Name: Computer 3000
serial number: ABC`D 1`2345
serial number: ABC`D 5`6789

We get rows:

| column 1         | column 2 |
| ---------------- | -------- |
| 1. Computer 3000 | ABCD     |
| 2. Computer 3000 | 12345    |
| 3. Computer 3000 | ABCD     |
| 4. Computer 3000 | 56789    |

**to prevent such an event we have to enter in the field "Do not divide after (min 2 chars)" characters:**
**"D "**

We get:

| column 1         | column 2    |
| ---------------- | ----------- |
| 1. Computer 3000 | ABC`D1`2345 |
| 2. Computer 3000 | ABC`D56`789 |
