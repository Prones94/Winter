from sorting_iterative import insertion_sort

def counting_sort(numbers):
    """Sort given numbers (integers) by counting occurrences of each number,
    then looping over counts and copying that many numbers into output list.
    TODO: Running time: O(n) only works when the range of potential items in the input is known ahead of time
    TODO: Memory usage: O(n) If the rnage of potential values is big, then counting sort requires a lot of space"""
    # TODO: Find range of given numbers (minimum and maximum integer values)
    max_value = int(max(numbers))
    min_value = int(min(numbers))
    # TODO: Create list of counts with a slot for each number in input range
    count_list = [0 for _ in range(max_value-min_value+ 1)]
    output_list = [0 for _ in range(len(numbers))]
    # TODO: Loop over given numbers and increment each number's count
    for i in range(0, len(numbers)):
        count_list[numbers[i]- min_value] += 1
    # TODO: Loop over counts and append that many numbers into output list
    for i in range(len(numbers)-1, -1, -1):
        output_list[count_list[numbers[i] - min_value] - 1] = numbers
        count_list[numbers[i] - min_value] -= 1
    for i in range(0, len(numbers)):
        numbers[i] = output_list[i]

    return numbers
    # FIXME: Improve this to mutate input instead of creating new output list


def bucket_sort(numbers, num_buckets=10):
    """Sort given numbers by distributing into buckets representing subranges,
    then sorting each bucket and concatenating all buckets in sorted order.
    TODO: Running time: ??? Why and under what conditions?
    TODO: Memory usage: ??? Why and under what conditions?"""
    # TODO: Find range of given numbers (minimum and maximum values)
    arr =  []
    for i in range(num_buckets):
        arr.append([])

    for j in numbers:
        index_b = int(num_buckets * j)
        arr[index_b].append(j)

    for i in range(num_buckets):
        arr[i] = insertion_sort(arr[i])

    k = 0
    for i in range(num_buckets):
        for j in range(len(arr[i])):
            numbers[k] = arr[i][j]
            k += 1
    return numbers
    # TODO: Create list of buckets to store numbers in subranges of input range
    # TODO: Loop over given numbers and place each item in appropriate bucket
    # TODO: Sort each bucket using any sorting algorithm (recursive or another)
    # TODO: Loop over buckets and append each bucket's numbers into output list
    # FIXME: Improve this to mutate input instead of creating new output list
