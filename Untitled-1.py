"""Outlook == microsoft
    Google == youtube
	Firefox,Yahoo"""
x = "youtube"
lists=[]
code=0
codelist=('!','@','#','$','%','^','&','*',)
for letter in x:
    lists.append(ord(letter))
    code = code + ord(letter)

for i in range(len(lists)):
    if i%3 == 0:
        lists[i]=(lists[i]%26)+97
        lists[i]=chr(lists[i])
    if i%3 == 1:
       lists[i] = (lists[i] % 24) + 65
       lists[i]=chr(lists[i])
    if i % 3 == 2:
        lists[i] = (lists[i] % 25) + 97
        lists[i] = chr(lists[i])
lists.insert(2,code%9)
lists.insert(5,codelist[code%7])
lists.insert(-1,code%2)
for t in lists:
    print(t, end = '')