# 문제 설명
'''
    두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
    예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.
'''

# 제한 조건
'''
    - a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
    - a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
    - a와 b의 대소관계는 정해져있지 않습니다.
'''


# 나의 풀이
# 단순히 문제를 해결 하기 위한 코드를 작성하는 것이 아닌 효과적으로 문제를 해결 하기 위한 코드를 작성 해야함
def solution1(a, b):
    answer = 0
    if a == b:
        return a
    if a < b:
        for num in range(a, b + 1):
            answer += num
    elif a > b:
        for num in range(b, a + 1):
            answer += num

    return answer


# 다른 사람 풀이 1
def solution2(a, b):
    if a > b:
        a, b = b, a

    return sum(range(a, b + 1))


# 다른 사람 풀이 2
def solution3(a, b):
    return (abs(a - b) + 1) * (a + b) // 2


# 다른 사람 풀이 3
def solution4(a, b):
    return sum(range(min(a, b)), max(a, b) + 1)
