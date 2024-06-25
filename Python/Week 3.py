x = 4
if x % 2 == 1:
    print (x)
else:
    print (x, x%2)

x = 5
if x % 2 == 0:
    print (x)
else:
    print (x, x%2)

# def recurse(a):
#     if (a == 0):
#         print(a)
#     else:
#         recurse(a)

# recurse(1)

x=1
y=2
if x == y:
    print (x, "and", y, "are equal")
else:
    if x < y:
        print (x, "is less than", y)
    else:
        print (x, "is greater than", y)

percentage = ( 60 * 100) // 55
print (percentage)

print (2*3-1)

print (1,000,000)

def print_n(s, n):
    if n <= 0:
        print ('Happy New Year');
    else:
        print(s, n)
        print_n(s, n-1)

print_n('in', 3)

name = input('What is ur name:')

print('Okay', name, 'Welcome aboard!')

import datetime

def current_time():
    # Get the current date and time
    current_datetime = datetime.datetime.now()

    # Extract hours, minutes, seconds from the current time
    hours = current_datetime.hour
    minutes = current_datetime.minute
    seconds = current_datetime.second


    # Calculate the number of days since the epoch
    epoch = datetime.datetime(1970, 1, 1)
    days_since_epoch = (current_datetime - epoch).days

    return hours, minutes, seconds, days_since_epoch

# Get current time information
current_hours, current_minutes, current_seconds, days_since_epoch = current_time()

# Print the current time and days since the epoch
print("Current Time:")
print(f"{current_hours} hours, {current_minutes} minutes, {current_seconds} seconds")
print(f"Days since the epoch: {days_since_epoch}")

