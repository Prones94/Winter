def raise_power(base, exponent):
    '''
        Break down problem
        assume exponent cannot be negative
        assume that result cannot be a fraction or a decimal
        when exponent  is 0, return 1
        so we multiply the base case and the exponent subracted by 1 until we hit base case
        base * exponent - 1 => base * fn(base, exponent - 1)
    '''
    if (exponent == 0):
        return 1
    else:
        return base * raise_power(base, exponent - 1)

print(raise_power(4,2))
print(raise_power(4,3))