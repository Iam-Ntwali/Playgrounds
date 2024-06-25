import math


def hypotenuse(a, b):
    if a < 0 or b < 0:
        return "sides cannot be negative"

    c = math.sqrt(a**2 + b**2)
    return c


print(round(hypotenuse(6, 14), 2))
print(round(hypotenuse(7, 17), 2))
print(round(hypotenuse(5, 9), 2))


def sum_of_squares(num_list):
    squared_nums = []
    for num in num_list:
        squared_nums.append(num**2)
    return sum(squared_nums)  # built-in sum() method


num_list = [2, 3, 4]

print(sum_of_squares(num_list))
