/*
  Section 2️⃣: In this section, I learned basic operators used in Dart.
*/
void main() {
  int x = 25;
  int y = 45;

  // --- ARITHMETIC OPERATORS ---
  final sum = x + y; //addition
  final remainder = x - y; //subtractions
  final product = x * y; //multiplication
  final quotient = x ~/ y; //division

  print(sum);
  print(remainder);
  print(product);
  print(
      quotient); // ⚠️ to round up in dart to get a full number ~ is used with division.

  // --- COMPARISON OPERATORS ---
  print(x < y); // less than
  print(x > y); // greater than
  print(x <= y); // less than or equal to
  print(x >= y); // greater than or equal to
  print(x == y); // equal to
  print(x != y); // not equal to

  // --- LOGIC OPERATORS ---
  print(x < y && y > x); // AND operator
  print(x < y || y > x); // OR operator
}
