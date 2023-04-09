def fibonacci(n):
    if n == 1:
        print ("Base Case 1")
        return 1
    if n == 2:
        return 1
    return fibonacci(n-1) + fibonacci(n-2)
fibonacci(7)