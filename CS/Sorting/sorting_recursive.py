from heapq import merge
from sorting_iterative import insertion_sort
import math

# def merge(items1, items2):
#     """Merge given lists of items, each assumed to already be in sorted order,
#     and return a new list containing all items in sorted order.
#     TODO: Running time: O(n)
#     TODO: Memory usage: ??? Why and under what conditions?"""
#     length_1 = len(items1)
#     length_2 = len(items2)

#     result = []
#     left = right = 0
#     while left < length_1 and right < length_2:
#         if items1[left] < items2[right]:
#             result.append(items1[left])
#             left+= 1
#         else:
#             result.append(items_2[right])
#             right += 1
      #result.extend(items1[left:])
      #result.extend(items2[right:])
#     result = result + items[i:] + items2[j:]
#     return result




def split_sort_merge(items):
    """Sort given items by splitting list into two approximately equal halves,
    sorting each with an iterative sorting algorithm, and merging results into
    a list in sorted order.
    TODO: Running time: ??? Why and under what conditions?
    TODO: Memory usage: ??? Why and under what conditions?"""
    items_length = len(items)
    halfway = math.floor(items_length)/2
    # TODO: Split items list into approximately equal halves
    low = []
    high = []
    for  i in range(halfway):
        low.append(items[i])
        result_one = insertion_sort(low)
    for j in range(halfway+1, items_length-1):
        high.append(items[j])
        result_two = insertion_sort(high)
    return merge(result_one,result_two)


def merge_sort(items):
    """Sort given items by splitting list into two approximately equal halves,
    sorting each recursively, and merging results into a list in sorted order.
    TODO: Running time: O(n log(n))
    TODO: Memory usage: O(n) Why and under what conditions?"""
    if len(items) < 1:
        return items
    middle = int(len(items) / 2)

    left, right = merge_sort(items[:middle]), merge_sort(items[middle:])
    return merge(left, right)


def partition(items, low, high):
    """Return index `p` after in-place partitioning given items in range
    `[low...high]` by choosing a pivot (TODO: document your method here) from
    that range, moving pivot into index `p`, items less than pivot into range
    `[low...p-1]`, and items greater than pivot into range `[p+1...high]`.
    TODO: Running time: ??? Why and under what conditions?
    TODO: Memory usage: ??? Why and under what conditions?"""
    # TODO: Choose a pivot any way and document your method in docstring above
    i = low -1
    pivot = items[high]
    for j in range(low, high):
        if items[j] < pivot:
            i += 1
            items[i], items[j] = items[j],items[i]
    items[i+1], items[high] = items[high], items[i+1]
    return (i+1)

    # TODO: Loop through all items in range [low...high]
    # TODO: Move items less than pivot into front of range [low...p-1]
    # TODO: Move items greater than pivot into back of range [p+1...high]
    # TODO: Move pivot item into final position [p] and return index p


def quick_sort(items, low=None, high=None):
    """Sort given items in place by partitioning items in range `[low...high]`
    around a pivot item and recursively sorting each remaining sublist range.
    TODO: Best case running time: ??? Why and under what conditions?
    TODO: Worst case running time: ??? Why and under what conditions?
    TODO: Memory usage: ??? Why and under what conditions?"""
    # sequence_length = len(items)
    # if sequence_length <= 1:
    #     return items
    # else:
    #     pivot = items.pop()
    #     high = []
    #     low = []
    #     for item in items:
    #         if item > pivot:
    #             high.append(item)
    #         else:
    #             low.append(item)
    # return quick_sort(low) + [pivot] + quick_sort(high)
    if low < high:
        pivot = partition(items, low, high)
        quick_sort(items, low, pivot-1)
        quick_sort(items, pivot+1, high)