```javascript
//Correct usage of $inc operator
db.collection('myCollection').updateOne({"_id":ObjectId("6556546546546")},{$inc:{field1:1,field2:1}});
```