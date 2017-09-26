# Testing
- Key behaviors of end to end testing
    - Our end to end testing focused on the filtering.
    - We tested all four of the filters that we had by seeing what the first thing they returned was
    - We also tested that it could find the title "Todo List" on the page
- Why and where did we test those behaviors
    - We tested these behaviors in `todo-list.e2e-spec.ts`
    - `todo-list.po.ts` had the functions that were used in `todo-list.e2e-spec.ts`
    - We tested these behaviors to see if the user could navigate and effectively use our filtering
    - We tested to find the title as a basic end to end test before we started the more difficult filtering testing. 
