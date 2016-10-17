# Credit card number validator

Start with a simple card number validator. Add the method: `bool IsValid(string number)`

This method will take a string input and return true if the string contains a structurally correct credit card
number, otherwise it will return false.

Implement support for each of the statements below in order and don’t read ahead. Remember to refactor
between tests if necessary.

1. An empty card number is invalid.
2. Card numbers contain only digits.
3. A card number cannot contain more than 16 digits.
4. A card number cannot contain less than 13 digits.The last digit of the card number is a check digit.
The check digit is determined by using all the digits in the card number including the check digit to
calculate a sum. This calculated value is the checksum.
5. When the card number is prefixed with zeros to be exactly 16 digits long the checksum includes the
sum of all digits that have an odd index (0-based).For example, given the card number
0101010101010101 the checksum would be the sum of the 1′s (i.e. 1*8 = 8 ) because these digits
are all at odd-numbered indexes into the card number.
6. When the card number is prefixed with zeros to be exactly 16 digits long the checksum also
includes the sum of the substitution digits for all card number digits that have an even index (0-
based). Use the card number digit as an index into “0246813579″ to get the substitution digit to
add to the checksum.For example, given the card number 4060101010101010 the checksum would
include the sum of the substitution digits for 4 and 6 and the 1′s because these digits are all at
even-numbered indexes into the card number. The substitution values added to the checksum in
this case would be 8 (substitution digit at index 4 is 8 ) and 3 (substitution digit at index 6 is 3)
and six 2′s (substitution digit at index 1 is 2) – i.e. 8 + 3 + 6*2 = 23.
7. The last digit of the checksum for a valid card number must be zero.For example, a checksum of 8
+ 23 = 31 is invalid. This means the card number 4161111111111111 is structurally invalid. Card
number 4566111111111111 has a checksum of 5+6+6*1+23 = 17+23 = 40. The last digit of this
checksum is zero so this card number is structurally valid.
