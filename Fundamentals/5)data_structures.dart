/*
  Section 4️⃣ In this section, I learned Data Structures in Dart.
*/
void main() {
  // Lists
  List<int> data = [2, 4, 6, 8, 10, 12, 12];

  // isEmpty to check if the list is empty
  print(data.isNotEmpty);
  print(data.isEmpty); // isEmpty and isNotEmpty are get methods

  print(data[4]); // retrieve an individual value using the index position

  data.add(14); // add a new value at the end of the list collection
  print(data);

  data.remove(14); // remove a value at the end of the list collection
  print(data);

  data.insert(2,
      6); // insert a new value at the specified index position of the list collection
  print(data);

  print(data.contains(2)); // check if the value exists in the list collection

  //Maps: key-value pairs
  Map<String, dynamic> user = {'name': 'John Doe', 'age': 23, 'city': 'London'};

  print(user);
  print(user['name']); //get a specific key value using bracket notation
  print(user.keys); // get keys in the Map
  print(user.values); //get all values in the Map

  //Set are the same Map or Lists but the cannot contain duplicate value
  // Set<int> numbers = {1, 2, 3, 4, 5, 6, 7, 8, 9, 9};

  // print(numbers); //⚠️ if a duplicate value exist, it will be not printed

  // Set.of() can be used to eliminate duplicate values in a List
  final removeDuplicatesInList = Set.of(data);
  print(removeDuplicatesInList);

  final duplicatesRemoved =
      List.from(removeDuplicatesInList); // method to convert a Set to a List
  print(duplicatesRemoved);
}
