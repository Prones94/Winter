def is_sorted(items):
    """Return a boolean indicating whether given items are in sorted order.
    Running time: O(1)
    Memory usage: O(1)"""
    # if (all(items[i] < items[i+1] for i in range(len(items)-1))):
    #     return True
    # return False
    copy = items[:]
    copy.sort()
    return copy == items

def bubble_sort(items):
    """
    Sort given items by swapping adjacent items that are out of order, and
    repeating until all items are in sorted order.
    Running time: Best: O(n) Average: O(n^2) Worst: O(n^2) 
    Memory usage: O(1)
    """
    is_sorted = True
    counter = 0
    while(is_sorted):
        is_sorted = False
        for i in range(len(items) - counter - 1):
            if items[i] > items[i+1]:
                items[i], items[i+1] = items[i+1], items[i]
                is_sorted = True
        counter += 1

def selection_sort(items):
    """
    Sort given items by finding minimum item, swapping it with first
    unsorted item, and repeating until all items are in sorted order.
    Running time:  Best: O(n^2) Average: O(n^2) Worst: O(n^2)
    Memory usage: O(1)
    """
    items_length = range(0, len(items)-1)
    for i in items_length:
        min_value = i

        for j in range(i+1, len(items)):
            if items[j] < items[min_value]:
                min_value = j
        
        items[min_value], items[i] = items[i], items[min_value]
    return items


def insertion_sort(items):
    """
    Sort given items by taking first unsorted item, inserting it in sorted
    order in front of items, and repeating until all items are in order.
    Running time: Best: O(n) Average:O(n^2) Worst O(n^2)
    Memory usage: O(1)
    """
    item_length = range(1, len(items))
    for i in item_length:
        unsorted_value = items[i]

        while items[i-1] > unsorted_value and i > 0:
            items[i], items[i-1] = items[i-1], items[i]
            i -= 1
    return items

