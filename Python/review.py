n = 10000
count = 0
while n:
    count += 1
    n = n // 10

print(count)

while True:

    while 1 > 0:

        break

    print("Got it!")

    break

print('%d %s' % (5, 'dollars'))

n = 10
while n != 1:
    print(n, end=' ')
    if n % 2 == 0:        # n is even
        n = n // 2
    else:                # n is odd
        n = n * 3 + 1

mylist = ["now", "four", "is", "score", "the",
          "and seven", "time", "years", "for"]
print(" ".join(mylist[1::2]))

print("%s %d %f" % (5, 5, 5))

mylist = [[2, 4, 1], [1, 2, 3], [2, 3, 5]]
total = 0
for sublist in mylist:
    total += sum(sublist)
print(total)

x = 5
if x % 2 == 0:
    print(x)
else:
    print(x, x % 2)


def test_function(length, width, height):
    print("the volume of the box is ", length*width*height)
    return length*width*height


l = 12.5
w = 5
h = 2
test_function(l, w, h)

mylist = ["now", "four", "is", "score", "the",
          "and seven", "time", "years", "for"]
a = 0
while a < 7:
    print(mylist[a],)
    a += 2

x = 1
y = 2
if x == y:
    print(x, "and", y, "are equal")
else:
    if x < y:
        print(x, "is less than", y)
    else:
        print(x, "is greater than", y)

my_list = [3, 2, 1]
print(my_list.sort())

pi = int(3.14159)
print(pi)

my_list = [3, 2, 1]
print(my_list)
