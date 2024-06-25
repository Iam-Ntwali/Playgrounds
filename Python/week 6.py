Ford = ['SUV', 'Sedans', 'Trucks']
Toyota = ['SUV', 'Sedans', 'Trucks']
print(Ford == Toyota)  # Output: True

Ford = ['SUV', 'Sedans', 'Trucks']
Ford_CopyCat = Ford
Toyota = ['SUV', 'Sedans', 'Trucks']
print(Ford is Ford_CopyCat)  # Output: True
print(Ford is Toyota)  # Output: False


def addBonus(salary, bonus):

    for i in range(len(salary)):
        salary[i] *= bonus
    return salary


# Example usage
salaries = [100, 500, 300]
print(f"Initial salaries: {salaries}")  # Output: salaries before bonus

salaries_with_bonuses = addBonus(salaries, 2)

# Output: salary after bonus
print(f"Salaries after bonus: {salaries_with_bonuses}")


def print_n(s, n):
    if n > 0:
        print(s)
        print_n(s, n-1)
    return n


n = 3
while print_n("hi", n):
    print_n("there!", n)
    n = 0


def area(l, w):
    temp = l * w
    return temp


l = 4.0
w = 3.25
x = area(l, w)
if (x):
    print(x)

if "Ni!":
    print('We are the Knights who say, "Ni!"')
else:
    print("Stop it! No more of this!")

pi = float(3.14159)
print(pi)

isinstance(10.001, float)

s = "help"
for letter in s[1:]:
    last = letter
    break
print(last)
