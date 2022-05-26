import math
def to_roman(num):
    romans_dict = {'M': 1000, 'CM': 900,'D': 500,'CD':400,'C': 100,'XC': 90,'L': 50,'XL': 40,'X': 10,'IX': 9,'V': 5,'IV': 4,'I': 1}
    answer= []
    for roman in romans_dict:
        arab= math.floor(num/int(romans_dict[roman]))
        num-= arab * romans_dict[roman]
        answer.append(roman*arab)
    return "".join(answer)