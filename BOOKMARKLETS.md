# Bookmarklets to activate various features

## Activate survey prompt
```
javascript:(function(){ localStorage.setItem('surveyShown_1', false); localStorage.setItem('alreadySeen', JSON.stringify(["1","2","3","4","5","6","7","8","9","10","11","1","2","3","4","5","6","7","8","9","10","11","1","2","3","4","5","6","7","8","9","10","11"])); window.location.reload(); })();
```

## Toggle refresh button
```
javascript:(function(){ localStorage.setItem('activate_RefreshAction', !(localStorage.getItem('activate_RefreshAction') === 'true')); window.location.reload(); })();
```
