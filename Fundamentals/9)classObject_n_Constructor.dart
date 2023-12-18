//Class Object and Constructors in Dart
void main() {
  Person Person_One = Person('Paul', 21, 'Male');
  Person Person_Two = Person('Peter', 21, 'Male');
  Person Person_Three = Person('John', 21, 'Non-Binary');

  Person_Three = Person.contact(email: 'John@yahoo.com', phone: '078432784');

  print(Person_One.name);
  print(Person_Two.age);
  print(Person_Three.email);
}

class Person {
  String? name;
  int? age;
  String? description;
  String? email;
  String? phone;

  Person(
      this.name, this.age, this.description); //Constructor Positional arguments

  Person.contact({this.email, this.phone}); // Named constructor
}

//
