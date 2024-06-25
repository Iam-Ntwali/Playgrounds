def distance(x1, y1, x2, y2):
    dx = x2 - x1
    dy = y2 - y1
    print('dx is', dx)
    print('dy is', dy)
    return 0.0


distance(1, 2, 4, 6)


def calculate_area(length, width):
    """Calculates the area of a rectangle."""
    # Incorrect logic: area should be length * width
    area = length + width
    return area


# Calling the function with valid inputs
result = calculate_area(5, 3)
print(result)  # Output: 8 (incorrect, should be 15.)


def greet(name):
    """Greets the given person."""
    print(f"Hello, {name}!")


# Missing closing parenthesis
greet("Alice")  # This line will cause a syntax error


def divide(num, divisor):
    """Divides two numbers."""
    return num / divisor


# Attempting to divide by zero
result = divide(10, 0)
print(result)  # This line will cause a runtime error.


def area(l, w):
    temp = l * w
    return temp


l = 4.0
w = 3.25
x = area(l, w)
if (x):
    print(x)
