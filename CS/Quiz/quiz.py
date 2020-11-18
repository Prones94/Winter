def raise_power(base, exponent):
    # 4 to the second power is 16
    # 5 to the 0 is 1
    if (exponent == 0):
        return 1
    else:
        return base * raise_power(base, exponent-1)

print(raise_power(4,2))
print(raise_power(5,0))
# print(raise_power(4,-2))
