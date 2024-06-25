def get_price(item1_qty, item2_qty, item3_qty):
    item1_price = 10
    item2_price = 15
    item3_price = 20

    total_items = item1_qty + item2_qty + item3_qty

    if total_items == 1:
        # No discounts for single item
        if item1_qty == 1:
            return item1_price
        elif item2_qty == 1:
            return item2_price
        else:
            return item3_price

    elif total_items == 2:
        # 10% discount for 2 unique items
        if item1_qty > 0 and item2_qty > 0:
            return (item1_price * item1_qty + item2_price * item2_qty) * 0.9
        elif item1_qty > 0 and item3_qty > 0:
            return (item1_price * item1_qty + item3_price * item3_qty) * 0.9
        else:
            return (item2_price * item2_qty + item3_price * item3_qty) * 0.9

    else:
        # 25% discount for gift pack
        return (item1_price * item1_qty + item2_price * item2_qty + item3_price * item3_qty) * 0.75

print(get_price(1, 0, 0))
print(get_price(1, 1, 0))
print(get_price(1, 1, 1))