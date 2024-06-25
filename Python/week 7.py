# Dictionaries
eng2sp = dict()
print(eng2sp)

eng2sp['one'] = 'uno'
print(eng2sp)

eng2sp = {'one': 'uno', 'two': 'dos', 'three': 'tres'}
print(eng2sp)

company = ["Microsoft", "Apple",  "Amazon", "Google", "Facebook"]
start_date = [1975, 1976, 1994, 1998, 2004]
founder = ["Bill Gates", "Steve Jobs", "Jeff Bezos",
           "Larry Page and Sergey Brin", "Mark Zuckerberg"]

# Zipping the lists into a list of tuples
history = list(zip(company, start_date, founder))

for descr in history:
    company, start_date, founder = descr
    print(f"{company} was founded by {founder} in {start_date}.")


teams = ["Arsenal", "Liverpool", "Man City",
         "Aston Villa", "Totthenam", "Man Utd"]

# Enumerating the list to get index-value pairs
indexed_team_table = list(enumerate(teams))

print("Top 6 teams in the Premier League ⚽:")
for index, team in indexed_team_table:
    print(f"{index + 1}: {team}")

company_history = {
    "company": "Google Inc",
    "start_year": 1998,
    "founder": "Larry Page and Sergey Brin"
}

# Iterating over the dictionary using the items() method
for key, value in company_history.items():
    print(f"{key}: {value}")
