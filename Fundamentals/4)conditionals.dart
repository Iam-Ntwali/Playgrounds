/*
  Section 3️⃣: In this section, I learned conditional expression used in Dart to make
  decision within our codes.
*/
void main() {
  // We can decide a message to display based on the current temperature
  final temp = 60;

  /*
    If temperature is 10 and 18 ===> cold,
    If temperature is 19 and 24 ===> normal,
    If temperature is 25 and 30 ===> hot,
  */

  if (temp < 10) {
    print('Very Cold');
  } else if (temp >= 10 && temp <= 18) {
    print('Cold');
  } else if (temp >= 19 && temp <= 24) {
    print('Normal');
  } else if (temp >= 25 && temp <= 30) {
    print('Hot');
  } else {
    print('Very Hot');
  }

  /*
    As in the above example many if else statements can be a little bit messy,
    So this is where the Switch Statement comes to the rescue 🌝
  */
  switch (temp) {
    case < 10:
      print('Very Cold 🥶');
      break;
    case >= 10 && <= 18:
      print('Cold 🌂');
      break;
    case >= 19 && <= 24:
      print('Normal 🙂');
      break;
    case >= 25 && <= 30:
      print('Hot ♨️');
      break;
    default:
      print('Very Hot 🥵');
      break;
  }

  // From Dart 3.3 we have also Switch Expression which is more concise
  final status = switch (temp) {
    < 10 => 'Very Cold',
    >= 10 && <= 18 => 'Cold 🌂',
    >= 19 && <= 24 => 'Normal 🙂',
    >= 25 && <= 30 => 'Hot ♨️',
    _ => 'Very Hot 🥵'
  };

  print(status);
}
