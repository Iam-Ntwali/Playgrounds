/*
  Section 5️⃣: In this section, I learned Loops in Dart.
*/
void main() {
  List<int> data = [2, 4, 6, 8, 10, 12];
  // Map<String, dynamic> user = {'name': 'John Doe', 'age': 23, 'city': 'London'};

  // for loop
  // for (int i = 0; i < data.length; i++) {
  //   print(data[i]);
  // }

  // for in
  // for (int num in data) {
  //   print(num);
  // }

  int i = 0;
  //while loop
  // while (i < data.length) {
  //   print(data[i]);
  //   i++;
  // }

  // do while loop
  do {
    print(data[i]);
    i++;
  } while (i < data.length);
}
