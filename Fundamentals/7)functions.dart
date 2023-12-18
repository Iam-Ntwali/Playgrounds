/*
  Section 6️⃣: In this section, I learned how functions works in Dart.
*/
void main() {
  print(add(
      6)); // passing one argument won't  affect the function but position in which the parameter are passed in can't be altered
  print(calculateArea(
      height: 5,
      width:
          7)); // calling the fn without arguments won't affect the function and position in which the parameter are passed in can be altered
  print(multiply(x: 5, y: 5)); // calling the named required fn with arguments
}

// positional options
add(int x, [int y = 0]) => x + y; //any parameter in brackets will optional

// Named optional
calculateArea({double width = 0.0, double height = 0.0}) =>
    width * height; //any parameter in brackets will optional by name
multiply({required int x, required int y}) =>
    x *
    y;// if the want to make parameters required, the keyword required is used  before each parameter initialization but without explicitly specifying the value
