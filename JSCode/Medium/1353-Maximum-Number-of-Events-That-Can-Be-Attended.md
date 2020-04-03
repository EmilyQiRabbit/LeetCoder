# 1353. Maximum Number of Events That Can Be Attended (Medium)

## Topic

Given an array of events where events[i] = [startDayi, endDayi]. Every event i starts at startDayi and ends at endDayi.

You can attend an event i at any day d where startTimei <= d <= endTimei. Notice that you can only attend one event at any time d.

Return the maximum number of events you can attend.

### Example

```
Input: events = [[1,2],[2,3],[3,4]]
Output: 3
Explanation: You can attend all the three events.
One way to attend them all is as shown.
Attend the first event on day 1.
Attend the second event on day 2.
Attend the third event on day 3.

Input: events= [[1,2],[2,3],[3,4],[1,2]]
Output: 4

Input: events = [[1,4],[4,4],[2,2],[3,4],[1,1]]
Output: 4

Input: events = [[1,100000]]
Output: 1

Input: events = [[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7]]
Output: 7
```

### Related Topic

Greedy Sort SegmentTree

### Solution

```js
/**
 * @param {number[][]} events
 * @return {number}
 */
var maxEvents = function(events) {
    events.sort(sortEvents);
    const eventMap = {};
    let count = 0;
    events.forEach((event) => {
        for (let i = event[0]; i <= event[1]; i++) {
            if (!eventMap[i]) {
                eventMap[i] = true;
                count += 1;
                break;
            }
        }
    })
    return count;
};

function sortEvents(x, y) {
    return x[1] - y[1];
}

```

最关键的部分在于 `sortEvents` 的方式。
