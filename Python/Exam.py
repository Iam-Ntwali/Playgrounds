mylist = [[2, 2, 1], [1, 2, 3], [1, 1, 1]]
total = 0
for sublist in mylist:
    total += sum(sublist)
print(total)

print(not (True or False))

n = 1000
count = 0
while n:
    count = count + 1
    n = n // 10
print(count)


def recurse(a):
    if (a == 0):
        print(a)
    else:
        recurse(a)


recurse(0)

pi = float(3.14159)
print(pi)

my_list = [3, 2, 1]
print(my_list)


def area(l, w):
    temp = l * w
    return temp


l = 4.0
w = 3.25
x = area(l, w)
if (x):
    print(x)

print("%s %d %f" % (5, 5, 5))

index = "Ability is a poor man's wealth".find("w")
print(index)

x = 5
if x % 2 == 1:
    print(x)
else:
    print(x, x % 2)
